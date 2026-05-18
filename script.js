let uker = [
    { id: 1,
      navn: "Uke 1",
      dager: [
        { dag: "Mandag",
        lunsj: "Salat med kikerter og fetaost",
        søndagPrep: "Kok kikerter, kutt paprika og agurk.",
        kveldPrep: "Lag dressing av olivenolje, sitronsaft og krydder.",
        morgenPrep: "Kutt tomat og rødløk.",
        ferdig: false },
        { dag: "Tirsdag",
        lunsj: "Salat med kikerter og fetaost",
        søndagPrep: "Kok kikerter, kutt paprika og agurk.",
        kveldPrep: "Lag dressing av olivenolje, sitronsaft og krydder.",
        morgenPrep: "Kutt tomat og rødløk.",
        ferdig: false },
        { dag: "Onsdag",
        lunsj: "Wrap med kylling og hummus",
        søndagPrep: "Stek kylling.",
        kveldPrep: "Kutt rødløk og paprika.",
        morgenPrep: "Smør hummus på wrapen, kutt tomater og agurk.",
        ferdig: false },
        { dag: "Torsdag",
        lunsj: "Wrap med kylling og hummus",
        søndagPrep: "Stek kylling.",
        kveldPrep: "Kutt rødløk og paprika.",
        morgenPrep: "Smør hummus på wrapen, kutt tomater og agurk.",
        ferdig: false },
        { dag: "Fredag",
        lunsj: "Caprese-salat",
        søndagPrep: "--",
        kveldPrep: "Kutt tomater og mozzarella.",
        morgenPrep: "Sett sammen salaten med basilikum og balsamico.",
        ferdig: false },
        ]
    },
    { id: 2,
      navn: "Uke 2",
      dager: [
        { dag: "Mandag",
        lunsj: "Nudelsalat med peanøttsaus og edamamebønner",
        søndagPrep: "Kok nudler, lag peanøttsaus. Kutt paprika og agurk.",
        kveldPrep: "Ta edamamebønner ut av frysen.",
        morgenPrep: "Bland nudler, saus og grønnsaker.",
        ferdig: false },
        { dag: "Tirsdag",
        lunsj: "Nudelsalat med peanøttsaus og edamamebønner",
        søndagPrep: "Kok nudler, lag peanøttsaus. Kutt paprika og agurk.",
        kveldPrep: "Ta edamamebønner ut av frysen.",
        morgenPrep: "Bland nudler, saus og grønnsaker.",
        ferdig: false },
        { dag: "Onsdag",
        lunsj: "Wrap med teriyakikylling og agurk.",
        søndagPrep: "Stek teriyakikylling.",
        kveldPrep: "Kutt agurk og rødløk.",
        morgenPrep: "Sett sammen wrap.",
        ferdig: false },
        { dag: "Torsdag",
        lunsj: "Wrap med teriyakikylling og agurk.",
        søndagPrep: "Stek teriyakikylling.",
        kveldPrep: "Kutt agurk og rødløk.",
        morgenPrep: "Sett sammen wrap.",
        ferdig: false },
        { dag: "Fredag",
        lunsj: "Rester fra uken",
        søndagPrep: "--",
        kveldPrep: "--",
        morgenPrep: "Spis opp rester fra uken.",
        ferdig: false },
        ]
    }
];

function visUke(uke) {
    const container = document.getElementById("ukeplan");

    container.innerHTML = `<h2>${uke.navn}</h2>`;

    for (let dag of uke.dager) {
        container.innerHTML += `
            <div class="dag">
                <h3>${dag.dag}</h3>

                <p class="lunsj-info"><strong>Lunsj:</strong> ${dag.lunsj}</p>

                <div class="prep-detaljer">
                    <p><strong>Søndag prep:</strong> ${dag.søndagPrep}</p>
                    <p><strong>Kveld prep:</strong> ${dag.kveldPrep}</p>
                    <p><strong>Morgen prep:</strong> ${dag.morgenPrep}</p>
                    <p><strong>Ferdig:</strong> ${dag.ferdig ? "Ja" : "Nei"}</p>
                </div>
            </div>
        `;
    }
}

function leggTilKlikkLyttere() {
    const dager = document.querySelectorAll('.dag');
    
    dager.forEach(dagElement => {
        dagElement.addEventListener('click', function() {
            this.classList.toggle('åpen');
        });
    });
}

visUke(uker[0]);
leggTilKlikkLyttere();
