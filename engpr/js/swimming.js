let currentLang = 'en';

const swimmingTerms = [
  {
    term: "Freestyle",
    albanian: "Stil i lirë",
    category: "Stroke",
    icon: "🏊",
    definition: "The fastest and most common swimming stroke, swum on the front with alternating arm pulls and a flutter kick.",
    definition_albanian: "Stili më i shpejtë dhe më i zakonshëm i notit, notuar përpara me tërheqje alternative të krahëve dhe goditje të shpejta të këmbëve.",
    example: "She broke the world record in the 100m freestyle.",
    example_albanian: "Ajo theu rekordin botëror në 100m stil të lirë."
  },
  {
    term: "Backstroke",
    albanian: "Stil shpine",
    category: "Stroke",
    icon: "🔄",
    definition: "A swimming stroke performed on the back with alternating overhead arm movements and a flutter kick.",
    definition_albanian: "Një stil noti i kryer në shpinë me lëvizje alternative të krahëve mbi kokë dhe goditje të shpejta këmbësh.",
    example: "Backstroke is the only Olympic stroke swum on the back.",
    example_albanian: "Stili i shpinës është i vetmi stil olimpik i notit notuar në shpinë."
  },
  {
    term: "Breaststroke",
    albanian: "Stil brezi",
    category: "Stroke",
    icon: "🐸",
    definition: "A stroke where both arms move simultaneously in a circular motion and legs perform a frog kick.",
    definition_albanian: "Një stil ku të dy krahët lëvizin njëkohësisht në një lëvizje rrethore dhe këmbët kryejnë goditjen e bretkosës.",
    example: "Breaststroke is the slowest of the four competitive strokes.",
    example_albanian: "Stili i brezit është më i ngadaltë nga katër stilet konkurruese."
  },
  {
    term: "Butterfly",
    albanian: "Stil flutur",
    category: "Stroke",
    icon: "🦋",
    definition: "A demanding stroke where both arms sweep forward simultaneously over the water with a dolphin kick.",
    definition_albanian: "Një stil kërkues ku të dy krahët rrëmbehen njëkohësisht përpara mbi ujë me goditjen e delfinit.",
    example: "He specializes in the 200m butterfly.",
    example_albanian: "Ai është i specializuar në 200m stil flutur."
  },
  {
    term: "Individual Medley (IM)",
    albanian: "Medley individual",
    category: "Event",
    icon: "🏅",
    definition: "A race where one swimmer swims all four strokes in order: butterfly, backstroke, breaststroke, freestyle.",
    definition_albanian: "Një garë ku një notues not të gjithë katër stilet në radhë: flutur, shpinë, brez, stil i lirë.",
    example: "She won gold in the 400m individual medley.",
    example_albanian: "Ajo fitoi arin në 400m medley individual."
  },
  {
    term: "Relay",
    albanian: "Stafetë",
    category: "Event",
    icon: "👥",
    definition: "A team race where four swimmers each swim one leg of the total distance.",
    definition_albanian: "Një garë ekipore ku katër notues secili not një pjesë të distancës totale.",
    example: "The relay team set a new national record.",
    example_albanian: "Ekipi i stafetës vendosi një rekord të ri kombëtar."
  },
  {
    term: "Lap",
    albanian: "Kthesë",
    category: "General",
    icon: "↩️",
    definition: "One length of the pool, from one end to the other.",
    definition_albanian: "Një gjatësi e pishinës, nga njëra anë në tjetrën.",
    example: "She completed 40 laps during training.",
    example_albanian: "Ajo përfundoi 40 kthesa gjatë stërvitjes."
  },
  {
    term: "Flip Turn",
    albanian: "Kthesë me rrotullim",
    category: "Technique",
    icon: "🔁",
    definition: "A somersault turn at the wall used in freestyle and backstroke to push off and continue swimming without stopping.",
    definition_albanian: "Një kthesë me rrotullim te muri e përdorur në stilin e lirë dhe shpinës për të shtytyrë dhe vazhduar notimin pa ndalur.",
    example: "A fast flip turn can shave seconds off your race time.",
    example_albanian: "Një kthesë e shpejtë me rrotullim mund të shkurtojë sekonda nga koha e garës."
  },
  {
    term: "Dolphin Kick",
    albanian: "Goditja e delfinit",
    category: "Technique",
    icon: "🐬",
    definition: "An undulating two-legged kick used in butterfly and underwater phases where both legs move together.",
    definition_albanian: "Një goditje me dy këmbë me valëzim e përdorur në stilin flutur dhe fazat nënujore ku të dyja këmbët lëvizin bashkë.",
    example: "He gained a huge advantage with his underwater dolphin kick off the wall.",
    example_albanian: "Ai fitoi një avantazh të madh me goditjen e tij nënujore të delfinit nga muri."
  },
  {
    term: "False Start",
    albanian: "Start i rremë",
    category: "Rules",
    icon: "🚨",
    definition: "When a swimmer leaves the starting block before the starting signal, resulting in disqualification.",
    definition_albanian: "Kur notuesi largohet nga blloku i startit para sinjalit të fillimit, duke rezultuar në diskualifikim.",
    example: "The false start was called immediately and the swimmer was disqualified.",
    example_albanian: "Starti i rremë u thirr menjëherë dhe notuesi u diskualifikua."
  },
  {
    term: "Lane",
    albanian: "Korsi",
    category: "General",
    icon: "📍",
    definition: "A designated section of the pool separated by lane ropes where each swimmer competes.",
    definition_albanian: "Një seksion i caktuar i pishinës i ndarë me litar korsieje ku secili notues garonë.",
    example: "The fastest seeds are placed in the center lanes.",
    example_albanian: "Notuesit më të shpejtë vendosen në korsite e mesit."
  },
  {
    term: "Personal Best (PB)",
    albanian: "Rekord personal",
    category: "General",
    icon: "🌟",
    definition: "A swimmer's fastest recorded time for a specific event.",
    definition_albanian: "Koha më e shpejtë e regjistruar e notuesit për një ngjarje të caktuar.",
    example: "He achieved a personal best of 48.2 seconds in the 100m freestyle.",
    example_albanian: "Ai arriti një rekord personal prej 48.2 sekondash në 100m stil të lirë."
  },
  {
    term: "Drag",
    albanian: "Rezistencë",
    category: "Physics",
    icon: "💨",
    definition: "The resistance force of water against a swimmer's body that slows them down.",
    definition_albanian: "Forca rezistuese e ujit kundër trupit të notuesit që e ngadalëson.",
    example: "Swimmers wear streamlined suits to reduce drag.",
    example_albanian: "Notuesit veshin kostume të rregulluara për të reduktuar rezistencën."
  },
  {
    term: "Tumble Turn",
    albanian: "Kthesë me rrëzim",
    category: "Technique",
    icon: "🌀",
    definition: "Another term for the flip turn, used to reverse direction at the pool wall efficiently.",
    definition_albanian: "Një term tjetër për kthesën me rrotullim, i përdorur për të ndërruar drejtimin te muri i pishinës me efikasitet.",
    example: "Practicing tumble turns is essential for competitive swimmers.",
    example_albanian: "Praktikimi i kthesave me rrëzim është thelbësor për notuesit konkurruese."
  }
];

function renderTerms(filter = "") {
  const container = document.getElementById('terms');
  container.innerHTML = "";

  const filtered = swimmingTerms.filter(t =>
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

document.getElementById('search').addEventListener('input', e => {
  renderTerms(e.target.value);
});

document.getElementById('toggleLang').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'al' : 'en';

  const title = document.querySelector('.sport-title');
  title.textContent = currentLang === 'en' ? 'Swimming Terms' : 'Termat e Notimit';

  const search = document.getElementById('search');
  search.placeholder = currentLang === 'en' ? 'Search for a term...' : 'Kërko një term...';

  renderTerms(search.value);
});

renderTerms();
