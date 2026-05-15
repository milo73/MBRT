// MBRT in Balans — applicatielogica (vanilla JS)
(() => {
  const D = window.MBRT_DATA;
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const LS_KEY = "mbrt_balans_state_v1";

  const defaultState = () => ({
    userId: null,
    vital: { energy: 0, stress: 0, recovery: 0 },
    microPauzes: [],
    herstel: [],
    steps: 0,
    teamSteps: 142000,
    favorites: [],
    healthyChoices: 0,
    badgesUnlocked: ["b1"],
    nudges: { enabled: true, window: "work", snoozedUntil: 0 },
    reflections: [],
    evaluation: {},
    onboardingDone: false,
    onboardingIndex: 0,
    currentWeek: 3,
  });

  let state = load();
  function load() {
    try { return Object.assign(defaultState(), JSON.parse(localStorage.getItem(LS_KEY) || "{}")); }
    catch { return defaultState(); }
  }
  function save() { localStorage.setItem(LS_KEY, JSON.stringify(state)); }

  /* ============================================================ */
  /* TOAST                                                         */
  /* ============================================================ */
  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => (t.hidden = true), 2400);
  }

  /* ============================================================ */
  /* ROUTING                                                       */
  /* ============================================================ */
  function show(screenId) {
    $$(".screen").forEach(s => { s.hidden = s.id !== screenId; s.classList.toggle("active", s.id === screenId); });
    $$(".nav-item").forEach(n => n.classList.toggle("active", n.dataset.target === screenId));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function navigate(screenId) {
    if (screenId === "screen-login") return;
    show(screenId);
  }

  /* ============================================================ */
  /* LOGIN + ONBOARDING                                            */
  /* ============================================================ */
  function fillUserSelect() {
    const sel = $("#login-user");
    sel.innerHTML = D.EMPLOYEES.map(e =>
      `<option value="${e.id}">${e.name}${e.isAdmin ? " (projectgroep)" : ""}</option>`
    ).join("");
  }
  function onboardingStep(i) {
    state.onboardingIndex = i;
    $$(".ob-slide").forEach((s, idx) => (s.hidden = idx !== i));
    $$(".ob-dots .dot").forEach((d, idx) => d.classList.toggle("active", idx === i));
    $("#onboarding-next").textContent = i === 2 ? "Klaar" : "Volgende";
  }
  function login() {
    const uid = $("#login-user").value;
    state.userId = uid;
    state.onboardingDone = true;
    save();
    $("#screen-login").hidden = true;
    $("#screen-login").classList.remove("active");
    $("#app").hidden = false;
    mountApp();
  }

  /* ============================================================ */
  /* DASHBOARD                                                     */
  /* ============================================================ */
  function renderDashboard() {
    const user = D.EMPLOYEES.find(e => e.id === state.userId);
    const firstName = user ? user.name.split(" ")[0] : "";
    $("#welcome-title").textContent = `Welkom, ${firstName}`;
    $("#welcome-sub").textContent   = "Hoe is je werkdag tot nu toe?";
    $("#user-name-side").textContent = user ? user.name : "";
    $("#current-week").textContent  = state.currentWeek;

    $("#stat-steps").textContent   = state.steps.toLocaleString("nl-NL");
    $("#stat-micro").textContent   = state.microPauzes.length;
    $("#stat-herstel").textContent = state.herstel.length;

    // Tip van de dag — kies bewust deterministisch op datum
    const day = new Date().getDate();
    const tip = D.TIPS[day % D.TIPS.length];
    $("#tip-of-day").textContent = tip.text;

    // Vitaliteits-schalen
    $$('.scale[data-vital]').forEach(scaleEl => {
      const key = scaleEl.dataset.vital;
      scaleEl.innerHTML = "";
      for (let i = 1; i <= 5; i++) {
        const pip = document.createElement("button");
        pip.className = "pip" + (state.vital[key] === i ? " selected" : "");
        pip.textContent = i;
        pip.setAttribute("role", "radio");
        pip.setAttribute("aria-checked", state.vital[key] === i ? "true" : "false");
        pip.addEventListener("click", () => {
          state.vital[key] = i;
          save();
          renderDashboard();
        });
        scaleEl.appendChild(pip);
      }
    });

    const v = state.vital;
    if (v.energy || v.stress || v.recovery) {
      $("#vitality-feedback").textContent = "Bedankt — opgeslagen. Je score wordt alleen voor jou bewaard.";
    } else {
      $("#vitality-feedback").textContent = "";
    }

    // Toon admin-nav alleen voor projectgroep
    const isAdmin = user && user.isAdmin;
    $$(".admin-only").forEach(el => (el.hidden = !isAdmin));
  }

  function dashboardActions() {
    $$('[data-action]').forEach(btn => {
      btn.addEventListener("click", () => {
        switch (btn.dataset.action) {
          case "start-micro":
            navigate("screen-micropauze");
            // automatisch eerste pauze van 60 sec voorstellen
            openTimer(D.MICRO_PAUZES.find(m => m.duration === 60));
            break;
          case "start-herstel-2":
            navigate("screen-herstel");
            openTimer({ ...D.HERSTEL_MOMENTEN[0], category: "herstel" }, true);
            break;
          case "log-beweeg":
            navigate("screen-challenge");
            break;
          case "show-lunch":
            navigate("screen-voeding");
            break;
        }
      });
    });
  }

  /* ============================================================ */
  /* MICRO-PAUZE                                                   */
  /* ============================================================ */
  let activeCategory = "alle";

  function renderMicroPauze() {
    const goal = 3;
    const done = state.microPauzes.length;
    $("#micro-count").textContent = `${done} / ${goal}`;
    const ring = $("#micro-progress");
    ring.style.setProperty("--p", Math.min(100, (done / goal) * 100));

    // Categorieën
    const cats = ["alle", ...new Set(D.MICRO_PAUZES.map(m => m.category))];
    $("#micro-categories").innerHTML = cats.map(c =>
      `<button class="chip${c === activeCategory ? " active" : ""}" data-cat="${c}">${c[0].toUpperCase() + c.slice(1)}</button>`
    ).join("");
    $$("#micro-categories .chip").forEach(c => c.addEventListener("click", () => {
      activeCategory = c.dataset.cat;
      renderMicroPauze();
    }));

    // Lijst
    const list = D.MICRO_PAUZES.filter(m => activeCategory === "alle" || m.category === activeCategory);
    $("#micro-list").innerHTML = list.map(m => {
      const done = state.microPauzes.some(x => x.id === m.id);
      return `<article class="card exercise ${done ? "done" : ""}" data-id="${m.id}">
        <span class="ex-icon">${m.icon}</span>
        <div style="flex:1">
          <h4>${m.title}</h4>
          <small>${m.text}</small>
        </div>
        <span class="duration">${formatDuration(m.duration)}</span>
      </article>`;
    }).join("");
    $$("#micro-list .exercise").forEach(card => {
      card.addEventListener("click", () => {
        const item = D.MICRO_PAUZES.find(m => m.id === card.dataset.id);
        openTimer(item);
      });
    });
  }

  function formatDuration(sec) {
    if (sec < 60) return `${sec} sec`;
    return `${Math.round(sec / 60)} min`;
  }

  /* ----- Timer overlay ----- */
  let timer = null;
  let timerRemaining = 0;
  let timerItem = null;
  let timerIsHerstel = false;

  function openTimer(item, isHerstel = false) {
    timerItem = item;
    timerIsHerstel = isHerstel;
    timerRemaining = item.duration;
    $("#timer-cat").textContent = isHerstel ? "Herstel" : (item.category || "Pauze");
    $("#timer-title").textContent = item.title;
    $("#timer-text").textContent = item.text;
    $("#timer-feedback").textContent = "";
    updateTimerDisplay();
    $("#timer-toggle").textContent = "Start";
    $("#timer-overlay").hidden = false;
  }
  function closeTimer() {
    $("#timer-overlay").hidden = true;
    if (timer) { clearInterval(timer); timer = null; }
  }
  function updateTimerDisplay() {
    const m = String(Math.floor(timerRemaining / 60)).padStart(2, "0");
    const s = String(timerRemaining % 60).padStart(2, "0");
    $("#timer-display").textContent = `${m}:${s}`;
  }
  function toggleTimer() {
    if (timer) {
      clearInterval(timer); timer = null;
      $("#timer-toggle").textContent = "Verder";
      return;
    }
    $("#timer-toggle").textContent = "Pauzeer";
    timer = setInterval(() => {
      timerRemaining--;
      if (timerRemaining <= 0) {
        clearInterval(timer); timer = null;
        timerRemaining = 0;
        updateTimerDisplay();
        completeTimer();
        return;
      }
      updateTimerDisplay();
    }, 1000);
  }
  function completeTimer() {
    $("#timer-toggle").textContent = "Klaar";
    $("#timer-feedback").textContent = "Goed bezig — je hebt je zitpatroon doorbroken.";
    markTimerDone();
  }
  function markTimerDone() {
    if (!timerItem) return;
    if (timerIsHerstel) {
      state.herstel.push({ id: timerItem.id, at: Date.now() });
      toast("Herstelmoment voltooid 🌿");
    } else {
      state.microPauzes.push({ id: timerItem.id, at: Date.now(), duration: timerItem.duration, category: timerItem.category });
      toast("Micro-pauze afgevinkt ⏱️");
      maybeUnlockBadges();
    }
    save();
    renderDashboard();
    renderMicroPauze();
    renderHerstel();
    renderBadges();
  }

  /* ============================================================ */
  /* CHALLENGE                                                     */
  /* ============================================================ */
  function renderChallenge() {
    const goal = D.APP.teamStepGoal;
    const current = state.teamSteps + state.steps;
    $("#challenge-goal").textContent = goal.toLocaleString("nl-NL");
    $("#challenge-current").textContent = current.toLocaleString("nl-NL");
    const pct = Math.min(100, (current / goal) * 100);
    $("#challenge-fill").style.width = `${pct}%`;
    $("#challenge-status").textContent = `Samen al ${pct.toFixed(1)}% onderweg. Jouw bijdrage vandaag: ${state.steps.toLocaleString("nl-NL")} stappen.`;
  }
  function addSteps(n) {
    state.steps += n;
    state.teamSteps += n;
    save();
    toast(`+${n.toLocaleString("nl-NL")} stappen geregistreerd`);
    renderDashboard();
    renderChallenge();
    maybeUnlockBadges();
    renderBadges();
  }

  function renderBadges() {
    $("#badge-grid").innerHTML = D.BADGES.map(b => {
      const unlocked = state.badgesUnlocked.includes(b.id);
      return `<div class="badge ${unlocked ? "" : "locked"}">
        <span class="badge-icon">${b.icon}</span>
        <strong>${b.title}</strong>
        <small>${b.criterion}</small>
      </div>`;
    }).join("");
  }
  function maybeUnlockBadges() {
    const u = state.badgesUnlocked;
    if (state.microPauzes.length >= 15 && !u.includes("b3")) u.push("b3");
    const screen = state.microPauzes.filter(m => m.id === "mp03").length;
    if (screen >= 5 && !u.includes("b4")) u.push("b4");
    if (state.healthyChoices >= 5 && !u.includes("b5")) u.push("b5");
    save();
  }

  /* ============================================================ */
  /* HERSTEL                                                       */
  /* ============================================================ */
  function renderHerstel() {
    $("#herstel-list").innerHTML = D.HERSTEL_MOMENTEN.map(h =>
      `<article class="card exercise" data-id="${h.id}">
        <span class="ex-icon">${h.icon}</span>
        <div style="flex:1">
          <h4>${h.title}</h4>
          <small>${h.text}</small>
        </div>
        <span class="duration">${formatDuration(h.duration)}</span>
      </article>`
    ).join("");
    $$("#herstel-list .exercise").forEach(card => {
      card.addEventListener("click", () => {
        const item = D.HERSTEL_MOMENTEN.find(h => h.id === card.dataset.id);
        openTimer(item, true);
      });
    });
  }
  function saveReflection() {
    const v = $("#reflect-input").value.trim();
    if (!v) return;
    state.reflections.push({ at: Date.now(), text: v });
    save();
    $("#reflect-input").value = "";
    $("#reflect-feedback").textContent = "Opgeslagen — alleen voor jou zichtbaar.";
  }

  /* ============================================================ */
  /* VOEDING                                                       */
  /* ============================================================ */
  let mealFilter = "alle";
  const FILTER_OPTIONS = ["alle","vega","snel","goedkoop","mee te nemen","warm","koud"];

  function renderVoeding() {
    // Maaltijd van de dag (deterministisch)
    const day = new Date().getDate();
    const lunches = D.MAALTIJDEN.filter(m => m.type === "lunch");
    const mod = lunches[day % lunches.length];
    $("#mod-title").textContent = mod.title;
    $("#mod-ings").textContent = mod.ingredients.join(", ");
    $("#meal-of-day").dataset.id = mod.id;

    // Filters
    $("#meal-filters").innerHTML = FILTER_OPTIONS.map(f =>
      `<button class="chip${f === mealFilter ? " active" : ""}" data-filter="${f}">${f}</button>`
    ).join("");
    $$("#meal-filters .chip").forEach(c => c.addEventListener("click", () => {
      mealFilter = c.dataset.filter;
      renderVoeding();
    }));

    // Lijst
    const list = D.MAALTIJDEN.filter(m => mealFilter === "alle" || m.tags.includes(mealFilter));
    $("#meal-list").innerHTML = list.map(m => {
      const isFav = state.favorites.includes(m.id);
      return `<article class="card meal ${isFav ? "is-fav" : ""}" data-id="${m.id}">
        <div class="row gap"><h4>${m.title}</h4><span class="fav-star">★</span></div>
        <small class="muted">${m.ingredients.slice(0,4).join(", ")}${m.ingredients.length > 4 ? "…" : ""}</small>
        <div class="tags">${m.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      </article>`;
    }).join("");
    $$("#meal-list .meal").forEach(card => {
      card.addEventListener("click", () => {
        toggleFavorite(card.dataset.id);
      });
    });

    // Quiz
    renderQuiz();
  }
  function toggleFavorite(id) {
    const i = state.favorites.indexOf(id);
    if (i === -1) { state.favorites.push(id); toast("Toegevoegd aan favorieten ★"); }
    else { state.favorites.splice(i, 1); toast("Uit favorieten gehaald"); }
    save();
    renderVoeding();
  }
  function markHealthy() {
    state.healthyChoices += 1;
    save();
    $("#mod-feedback").textContent = "Mooi — bewust gekozen. Telt mee voor je badge.";
    maybeUnlockBadges();
    renderBadges();
  }
  function favCurrent() {
    const id = $("#meal-of-day").dataset.id;
    toggleFavorite(id);
  }

  const QUIZ = {
    q: "Welke combinatie geeft de langste energie?",
    options: [
      { text: "Witte boterham met jam", correct: false },
      { text: "Volkoren brood met ei en avocado", correct: true },
      { text: "Energiedrank en koek", correct: false },
    ],
  };
  function renderQuiz() {
    $("#quiz-options").innerHTML = QUIZ.options.map((o, i) =>
      `<button data-i="${i}">${o.text}</button>`).join("");
    $$("#quiz-options button").forEach(b => b.addEventListener("click", () => {
      const opt = QUIZ.options[+b.dataset.i];
      $$("#quiz-options button").forEach(x => x.classList.remove("correct","wrong"));
      b.classList.add(opt.correct ? "correct" : "wrong");
      $("#quiz-feedback").textContent = opt.correct
        ? "Klopt — koolhydraten + eiwit + gezond vet geven langdurig energie."
        : "Bijna — kies bij voorkeur volkoren + eiwit voor langer aanhoudende energie.";
    }));
  }

  /* ============================================================ */
  /* NUDGES                                                        */
  /* ============================================================ */
  function renderNudges() {
    const items = D.NUDGES.slice(0, 8);
    $("#nudges-list").innerHTML = items.map(n =>
      `<article class="card nudge-card">
        <span class="eyebrow">Nudge</span>
        <p>${n}</p>
      </article>`).join("");
    $("#nudges-enabled").checked = state.nudges.enabled;
    $("#nudges-window").value = state.nudges.window;
  }
  function snooze(min) {
    state.nudges.snoozedUntil = Date.now() + min * 60 * 1000;
    save();
    $("#snooze-feedback").textContent = `Snooze actief tot ${new Date(state.nudges.snoozedUntil).toLocaleString("nl-NL")}.`;
  }

  /* ============================================================ */
  /* TEAM (geaggregeerde data)                                     */
  /* ============================================================ */
  function renderTeam() {
    const w = D.TEAM_WEEKLY[state.currentWeek - 1];
    if (!w || w.activeParticipants < 5) {
      $("#team-active").textContent = "—";
      return;
    }
    $("#team-active").textContent  = w.activeParticipants;
    $("#team-rate").textContent    = `${Math.round(w.participationRate * 100)}%`;
    $("#team-micro").textContent   = w.microPauzes;
    $("#team-herstel").textContent = w.herstelMomenten;
    $("#team-beweeg").textContent  = w.beweegMomenten;
    $("#team-voeding").textContent = w.gezondeKeuzes;

    // Trend chart
    $("#trend-chart").innerHTML = D.TEAM_WEEKLY.map(ww => {
      const h = v => Math.max(8, (v / 5) * 90);
      return `<div class="trend-col">
        <div class="bars">
          <div class="bar energy"   style="height:${h(ww.energieGemiddeld)}px"   title="Energie ${ww.energieGemiddeld}"></div>
          <div class="bar stress"   style="height:${h(ww.stressGemiddeld)}px"    title="Stress ${ww.stressGemiddeld}"></div>
          <div class="bar recovery" style="height:${h(ww.herstelGemiddeld)}px"   title="Herstel ${ww.herstelGemiddeld}"></div>
        </div>
        <small>Week ${ww.week}</small>
      </div>`;
    }).join("");

    $("#top-micro").innerHTML = D.TOP_MICRO.map(m => `<li>${m.title} <b>${m.count}×</b></li>`).join("");
    $("#top-meals").innerHTML = D.TOP_MEALS.map(m => `<li>${m.title} <b>${m.count}×</b></li>`).join("");
  }

  /* ============================================================ */
  /* EVALUATIE                                                     */
  /* ============================================================ */
  function renderEvaluatie() {
    const c = $("#evaluatie-questions");
    c.innerHTML = D.EVALUATION_QUESTIONS.map(q => {
      const v = state.evaluation[q.id];
      if (q.type === "yesno") {
        return `<fieldset class="eval-q">
          <legend>${q.text}</legend>
          <div class="opts" data-q="${q.id}">
            <button type="button" class="opt${v==="ja"?" selected":""}"  data-v="ja">Ja</button>
            <button type="button" class="opt${v==="nee"?" selected":""}" data-v="nee">Nee</button>
          </div>
        </fieldset>`;
      }
      if (q.type === "scale") {
        return `<fieldset class="eval-q">
          <legend>${q.text}</legend>
          <div class="opts" data-q="${q.id}">
            ${[1,2,3,4,5].map(n => `<button type="button" class="opt${v===String(n)?" selected":""}" data-v="${n}">${n}</button>`).join("")}
          </div>
        </fieldset>`;
      }
      return `<fieldset class="eval-q">
        <legend>${q.text}</legend>
        <textarea data-q="${q.id}" placeholder="Korte reactie">${v || ""}</textarea>
      </fieldset>`;
    }).join("");

    $$(".eval-q .opt").forEach(b => b.addEventListener("click", () => {
      const wrap = b.parentElement;
      $$(".opt", wrap).forEach(o => o.classList.remove("selected"));
      b.classList.add("selected");
      state.evaluation[wrap.dataset.q] = b.dataset.v;
      save();
    }));
    $$(".eval-q textarea").forEach(t => t.addEventListener("input", () => {
      state.evaluation[t.dataset.q] = t.value;
      save();
    }));
  }

  /* ============================================================ */
  /* ADMIN                                                         */
  /* ============================================================ */
  function renderAdmin() {
    $("#admin-goal").value = D.APP.teamStepGoal;
    $("#admin-micro").innerHTML = D.MICRO_PAUZES.map(m =>
      `<li>${m.icon} ${m.title} <small>(${m.category}, ${formatDuration(m.duration)})</small></li>`).join("");
    $("#admin-meals").innerHTML = D.MAALTIJDEN.map(m =>
      `<li>${m.title} <small>(${m.type} · ${m.tags.join(", ")})</small></li>`).join("");
  }
  function exportCsv() {
    const headers = ["question_id","question","answer"];
    const rows = D.EVALUATION_QUESTIONS.map(q => [q.id, q.text, state.evaluation[q.id] || ""]);
    const csv = [headers, ...rows].map(r => r.map(c => `"${String(c).replace(/"/g,'""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "mbrt_evaluatie.csv";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    $("#admin-export-feedback").textContent = "CSV gedownload (test).";
  }

  /* ============================================================ */
  /* MOUNT                                                         */
  /* ============================================================ */
  function mountApp() {
    renderDashboard();
    renderMicroPauze();
    renderChallenge();
    renderHerstel();
    renderVoeding();
    renderNudges();
    renderTeam();
    renderEvaluatie();
    renderBadges();
    renderAdmin();
    show("screen-dashboard");
  }

  function bindEvents() {
    // Navigatie (sidebar + bottom)
    $$(".nav-item").forEach(n => n.addEventListener("click", () => navigate(n.dataset.target)));

    // Login + onboarding
    $("#login-submit").addEventListener("click", login);
    $("#onboarding-next").addEventListener("click", () => {
      const next = (state.onboardingIndex + 1) % 3;
      onboardingStep(next);
    });

    // Dashboard
    dashboardActions();

    // Timer
    $("#timer-toggle").addEventListener("click", toggleTimer);
    $("#timer-done").addEventListener("click", () => { closeTimer(); markTimerDone(); });
    $("#timer-close").addEventListener("click", closeTimer);

    // Challenge
    $$(".quick-steps button").forEach(b => b.addEventListener("click", () => addSteps(+b.dataset.steps)));
    $("#add-custom-steps").addEventListener("click", () => {
      const v = parseInt($("#custom-steps").value, 10);
      if (v > 0) { addSteps(v); $("#custom-steps").value = ""; }
    });

    // Herstel
    $("#reflect-save").addEventListener("click", saveReflection);

    // Voeding
    $("#mod-fav").addEventListener("click", favCurrent);
    $("#mod-mark").addEventListener("click", markHealthy);

    // Nudges
    $("#nudges-enabled").addEventListener("change", e => { state.nudges.enabled = e.target.checked; save(); });
    $("#nudges-window").addEventListener("change", e => { state.nudges.window = e.target.value; save(); });
    $$('[data-snooze]').forEach(b => b.addEventListener("click", () => snooze(+b.dataset.snooze)));

    // Evaluatie submit
    $("#evaluatie-form").addEventListener("submit", e => {
      e.preventDefault();
      $("#evaluatie-feedback").textContent = "Bedankt voor je antwoorden. Anoniem verwerkt.";
    });

    // Admin
    $("#admin-save-challenge").addEventListener("click", () => toast("Challenge-instellingen opgeslagen (test)"));
    $("#admin-add-nudge").addEventListener("click", () => {
      const t = $("#admin-nudge-text").value.trim();
      if (t) { D.NUDGES.push(t); $("#admin-nudge-text").value = ""; toast("Nudge toegevoegd"); renderNudges(); }
    });
    $("#admin-export").addEventListener("click", exportCsv);

    // Reset / logout
    $("#reset-demo").addEventListener("click", () => {
      if (confirm("Alle demo-data wissen?")) {
        localStorage.removeItem(LS_KEY);
        state = defaultState();
        save();
        mountApp();
        toast("Demo-data gewist");
      }
    });
    $("#logout").addEventListener("click", () => {
      state.userId = null; save();
      location.reload();
    });
  }

  /* ============================================================ */
  /* INIT                                                          */
  /* ============================================================ */
  function init() {
    fillUserSelect();
    onboardingStep(state.onboardingIndex || 0);
    bindEvents();
    if (state.userId) {
      $("#screen-login").hidden = true;
      $("#screen-login").classList.remove("active");
      $("#app").hidden = false;
      mountApp();
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
