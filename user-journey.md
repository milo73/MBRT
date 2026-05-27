# User journey — MBRT in Balans

Visualisatie van het pad dat een medewerker doorloopt in het prototype: onboarding → dashboard hub → dagelijkse acties → week-5 evaluatie. Rendert direct in GitHub via de Mermaid-codeblock hieronder.

**FigJam-versie:** [openen in Figma](https://www.figma.com/board/qvx3ZVG1OR26E0YCMSlxFs)

## Diagram

```mermaid
flowchart LR
    startApp(["Start app"])
    onboard["Onboarding 3 slides"]
    login[/"Kies medewerker"/]
    dashboard["Dashboard"]

    subgraph daily ["Dagelijkse acties"]
        vital["Vitaliteit 1-5 invullen"]
        microPause["Micro-pauze 30s-3min"]
        herstel["Herstelmoment 1-5 min"]
        steps["Stappen registreren"]
        meal["Lunchidee bekijken"]
        teamView["Teamvoortgang bekijken"]
    end

    badge(("Badge verdiend"))
    nudge["Nudge of motivatie"]
    eval[/"Evaluatieformulier week 5"/]
    fini(["Afronding pilot"])

    startApp --> onboard --> login --> dashboard
    dashboard --> vital
    dashboard --> microPause
    dashboard --> herstel
    dashboard --> steps
    dashboard --> meal
    dashboard --> teamView
    dashboard -.->|"Pop-up"| nudge
    steps --> badge
    dashboard ==>|"Na week 5"| eval --> fini

    style daily fill:#FFE0C2,stroke:#FF9E42
    style dashboard fill:#C2E5FF,stroke:#3DADFF
    style badge fill:#FFECBD,stroke:#FFC943
    style eval fill:#CDF4D3,stroke:#66D575
    style fini fill:#CDF4D3,stroke:#66D575
```

## Leeswijzer

- **Blauw (dashboard)**: centrale hub waar elke werkdag begint.
- **Oranje (subgroep "Dagelijkse acties")**: zes acties die vanaf het dashboard direct bereikbaar zijn — vitaliteitsscore, micro-pauze, herstelmoment, stappen registreren, lunchidee, teamvoortgang.
- **Geel (badge)**: positieve beloning na een geregistreerd beweegmoment.
- **Groen (evaluatie + afronding)**: eindpunt van de 5-weekse pilot.
- **Stippellijn (nudge)**: niet door de gebruiker geïnitieerd — een korte motivatiepop-up.
- **Dikke pijl (na week 5)**: belangrijke transitie van dagelijks gebruik naar afronding.
