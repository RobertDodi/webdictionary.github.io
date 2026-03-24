let currentLang = 'en';

const basketballTerms = [
  {
    term: "Dribble",
    albanian: "Driblim",
    category: "Technique",
    icon: "🏀",
    definition: "The act of bouncing the ball on the floor continuously with one hand.",
    definition_albanian: "Veprimi i përplasjes së topit në dysheme vazhdimisht me një dorë.",
    example: "He used a crossover dribble to get past the defender.",
    example_albanian: "Ai përdori një driblim kryqëzor për të kaluar mbrojtësin."
  },
  {
    term: "Three-Pointer",
    albanian: "Tripikësh",
    category: "Scoring",
    icon: "🎯",
    definition: "A field goal made from beyond the three-point line.",
    definition_albanian: "Një kosh i shënuar nga përtej vijës së tre pikëve.",
    example: "The player hit a clutch three-pointer to tie the game.",
    example_albanian: "Lojtari shënoi një tripikësh vendimtar për të barazuar lojën."
  },
  {
    term: "Rebound",
    albanian: "Kërcim",
    category: "Defense/Offense",
    icon: "👐",
    definition: "Gaining possession of the ball after a missed shot.",
    definition_albanian: "Marrja e topit pas një gjuajtjeje të dështuar.",
    example: "The center grabbed ten rebounds in the first half.",
    example_albanian: "Qendra kapi dhjetë kërcime në pjesën e parë."
  },
  {
    term: "Slam Dunk",
    albanian: "Kosh me forcë",
    category: "Scoring",
    icon: "💥",
    definition: "A shot where a player jumps and forces the ball down through the hoop with one or both hands.",
    definition_albanian: "Një gjuajtje ku lojtari kërcehet dhe fut topin me forcë poshtë në kosh me një ose të dyja duart.",
    example: "He finished the fast break with a powerful slam dunk.",
    example_albanian: "Ai mbaroi kundërsulmin me një kosh të fuqishëm me forcë."
  },
  {
    term: "Free Throw",
    albanian: "Gjuajtje e lirë",
    category: "Scoring",
    icon: "🎳",
    definition: "An uncontested shot from the free-throw line, awarded after a foul.",
    definition_albanian: "Një gjuajtje e pakontestuar nga vija e gjuajtjes së lirë, dhënë pas një faull.",
    example: "She made both free throws to give her team the lead.",
    example_albanian: "Ajo shënoi të dyja gjuajtjet e lira për t'i dhënë ekipit të saj avantazhin."
  },
  {
    term: "Pick and Roll",
    albanian: "Bllokadë dhe lëvizje",
    category: "Technique",
    icon: "🔄",
    definition: "An offensive play where one player sets a screen for the ball handler, then moves toward the basket.",
    definition_albanian: "Një lëvizje sulmuese ku një lojtar vendos një bllokadë për mbajtësin e topit, pastaj lëviz drejt koshit.",
    example: "The pick and roll between the point guard and center was unstoppable.",
    example_albanian: "Bllokada dhe lëvizja ndërmjet gjashtëshit dhe qendrës ishte e pandalshme."
  },
  {
    term: "Assist",
    albanian: "Asistencë",
    category: "Offense",
    icon: "🤝",
    definition: "A pass to a teammate that directly leads to a successful field goal.",
    definition_albanian: "Një pasim te shoku i ekipit që çon drejtpërdrejt në një kosh të suksesshëm.",
    example: "The point guard recorded twelve assists in the game.",
    example_albanian: "Gjashëshi regjistroi dymbëdhjetë asistenca në lojë."
  },
  {
    term: "Turnover",
    albanian: "Humbje e topit",
    category: "Offense",
    icon: "❌",
    definition: "When the offensive team loses possession of the ball to the defense without attempting a shot.",
    definition_albanian: "Kur ekipi sulmues humbet zotërimin e topit ndaj mbrojtjes pa tentuar gjuajtje.",
    example: "Five turnovers in the fourth quarter cost them the game.",
    example_albanian: "Pesë humbje topi në çerekun e katërt i kushtoi atyre lojën."
  },
  {
    term: "Block",
    albanian: "Bllokadë",
    category: "Defense",
    icon: "🛡️",
    definition: "Deflecting or stopping an opponent's shot attempt with the hand or arm.",
    definition_albanian: "Devijimi ose ndalimi i tentativës së gjuajtjes së kundërshtarit me dorë ose krah.",
    example: "The center swatted away three shots in the first quarter.",
    example_albanian: "Qendra bllokoi tre gjuajtje në çerekun e parë."
  },
  {
    term: "Steal",
    albanian: "Vjedhje",
    category: "Defense",
    icon: "✋",
    definition: "Taking the ball away from an opposing player while they are dribbling or passing.",
    definition_albanian: "Marrja e topit nga një lojtar kundërshtar ndërsa ai dribleon ose paston.",
    example: "Her steal and fast break layup turned the momentum of the game.",
    example_albanian: "Vjedhja e saj dhe koshi i shpejtë ndryshuan rrjedhen e lojës."
  },
  {
    term: "Layup",
    albanian: "Kosh i afërt",
    category: "Scoring",
    icon: "🏃",
    definition: "A close-range shot where a player drives toward the basket and releases the ball off the backboard or directly into the hoop.",
    definition_albanian: "Një gjuajtje nga afër ku lojtari drejtohet drejt koshit dhe lëshon topin nga tabelaja ose direkt në kosh.",
    example: "He drove past the defender and finished with an easy layup.",
    example_albanian: "Ai kaloi mbrojtësin dhe mbaroi me një kosh të lehtë të afërt."
  },
  {
    term: "Foul",
    albanian: "Faull",
    category: "Rules",
    icon: "🚨",
    definition: "Illegal personal contact with an opponent, resulting in free throws or a change of possession.",
    definition_albanian: "Kontakt personal i paligjshëm me një kundërshtar, duke rezultuar në gjuajtje të lira ose ndryshim zotërimi.",
    example: "She was called for her fifth foul and had to sit out.",
    example_albanian: "Asaj iu thirr faulli i pestë dhe u detyrua të ulej."
  },
  {
    term: "Shot Clock",
    albanian: "Ora e gjuajtjes",
    category: "Rules",
    icon: "⏱️",
    definition: "A timer that limits how long a team can possess the ball before attempting a shot (24 seconds in the NBA).",
    definition_albanian: "Një kohëmatës që kufizon sa gjatë mund të mbajë topin ekipi para se të tentojë gjuajtje (24 sekonda në NBA).",
    example: "They got the shot off just before the shot clock expired.",
    example_albanian: "Ata gjuajtën topin pak para se të skadonte ora e gjuajtjes."
  },
  {
    term: "Point Guard",
    albanian: "Gjashësh",
    category: "Position",
    icon: "⭐",
    definition: "The player who directs the team's offense, typically the best ball handler and passer on the team.",
    definition_albanian: "Lojtari që drejton sulmin e ekipit, zakonisht mbajtësi më i mirë i topit dhe pasuesi në ekip.",
    example: "The point guard orchestrated every play with calm and precision.",
    example_albanian: "Gjashëshi drejtoi çdo lëvizje me qetësi dhe saktësi."
  }
];

function renderTerms(filter = "") {
  const container = document.getElementById('terms');
  container.innerHTML = '';
  const filtered = basketballTerms.filter(t =>
    t.term.toLowerCase().includes(filter.toLowerCase()) ||
    t.albanian.toLowerCase().includes(filter.toLowerCase()) ||
    t.category.toLowerCase().includes(filter.toLowerCase())
  );

  if (filtered.length === 0) {
    container.innerHTML = `<p class="no-results">${currentLang === 'en' ? 'No terms found.' : 'Nuk u gjetën terma.'}</p>`;
    return;
  }

  filtered.forEach(term => {
    const card = document.createElement('div');
    card.className = 'term-card';
    card.innerHTML = `
      <div class="term-icon">${term.icon}</div>
      <div class="term-content">
        <h3>${currentLang === 'en' ? term.term : term.albanian}</h3>
        <span class="category-badge">${term.category}</span>
        <p class="definition">${currentLang === 'en' ? term.definition : term.definition_albanian}</p>
        <p class="example"><em>${currentLang === 'en' ? term.example : term.example_albanian}</em></p>
      </div>
    `;
    container.appendChild(card);
  });
}

document.getElementById('search').addEventListener('input', e => renderTerms(e.target.value));

document.getElementById('toggleLang').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'al' : 'en';
  document.querySelector('.sport-title').textContent = currentLang === 'en' ? 'Basketball Terms' : 'Termat e Basketbollit';
  document.getElementById('search').placeholder = currentLang === 'en' ? 'Search for a term...' : 'Kërko një term...';
  renderTerms(document.getElementById('search').value);
});

renderTerms();