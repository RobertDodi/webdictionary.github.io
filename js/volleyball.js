let currentLang = 'en';

const volleyballTerms = [
  {
    term: "Serve",
    albanian: "Servis",
    category: "Technique",
    icon: "🏐",
    definition: "The act of putting the ball into play by hitting it over the net from behind the back line.",
    definition_albanian: "Veprimi i vendosjes së topit në lojë duke e goditur mbi rrjetë nga pas vijës së pasme.",
    example: "Her jump serve was nearly impossible to receive.",
    example_albanian: "Servisi i saj me kërcim ishte pothuajse i pamundur për t'u pranuar."
  },
  {
    term: "Spike",
    albanian: "Goditje sulmuese",
    category: "Attack",
    icon: "💥",
    definition: "A powerful attack shot where a player jumps and hits the ball sharply downward into the opponent's court.",
    definition_albanian: "Një goditje sulmuese e fuqishme ku lojtari kërcehet dhe godet topin me forcë poshtë në fushën e kundërshtarit.",
    example: "The outside hitter delivered a thunderous spike for the winning point.",
    example_albanian: "Goditësi i jashtëm dha një goditje sulmuese të fortë për pikën fituese."
  },
  {
    term: "Block",
    albanian: "Bllokadë",
    category: "Defense",
    icon: "🧱",
    definition: "A defensive move at the net where one or more players jump to intercept the opponent's attack.",
    definition_albanian: "Një lëvizje mbrojtëse te rrjeta ku një ose më shumë lojtarë kërcejnë për të bllokuar sulmin e kundërshtarit.",
    example: "The middle blocker jumped and stuffed the spike.",
    example_albanian: "Blokerja e mesit u hodh dhe bllokoi goditjen sulmuese."
  },
  {
    term: "Dig",
    albanian: "Pranim i topit nga poshtë",
    category: "Defense",
    icon: "⬇️",
    definition: "A defensive pass using the forearms to receive a hard-driven ball close to the floor.",
    definition_albanian: "Një pasim mbrojtës duke përdorur parakrahët për të pranuar një top të goditur fort pranë dyshemesë.",
    example: "The libero made an incredible dig to keep the rally alive.",
    example_albanian: "Libero bëri një pranim të pabesueshëm për të mbajtur gjallë ndërrimin e goditjeve."
  },
  {
    term: "Set",
    albanian: "Set",
    category: "Technique",
    icon: "🤲",
    definition: "An overhead pass using fingertips to position the ball for a teammate to attack.",
    definition_albanian: "Një pasim mbi kokë duke përdorur majat e gishtave për të pozicionuar topin që shoku i ekipit ta sulmojë.",
    example: "The setter delivered a perfect set to the outside hitter.",
    example_albanian: "Setuesi dërgoi një set të përkryer te goditësi i jashtëm."
  },
  {
    term: "Libero",
    albanian: "Libero",
    category: "Position",
    icon: "🛡️",
    definition: "A defensive specialist who wears a different colored jersey and is not allowed to attack above the net.",
    definition_albanian: "Një specialist mbrojtës që vesh fanellë me ngjyrë të ndryshme dhe nuk lejohet të sulmojë mbi rrjetë.",
    example: "The libero replaced the middle blocker to strengthen back-row defense.",
    example_albanian: "Libero zëvendësoi blokerën e mesit për të forcuar mbrojtjen e rreshtit të pasëm."
  },
  {
    term: "Rotation",
    albanian: "Rrotacion",
    category: "Rules",
    icon: "🔄",
    definition: "The clockwise movement of players after winning a rally while the opposing team served.",
    definition_albanian: "Lëvizja në drejtim të akrepave të orës e lojtarëve pasi fitojnë një ralli ndërsa ekipi kundërshtar servoi.",
    example: "After winning the serve, all six players rotated one position.",
    example_albanian: "Pas fitimit të servisit, të gjashtë lojtarët u rrotacuan një pozicion."
  },
  {
    term: "Rally",
    albanian: "Ralli",
    category: "Play",
    icon: "⚡",
    definition: "The exchange of play from the serve until the ball is out of play.",
    definition_albanian: "Shkëmbimi i lojës nga servisi deri sa topi të dalë jashtë loje.",
    example: "The longest rally of the match lasted 32 shots.",
    example_albanian: "Ralli më i gjatë i ndeshjes zgjati 32 goditje."
  },
  {
    term: "Ace",
    albanian: "Ace",
    category: "Serve",
    icon: "🎯",
    definition: "A serve that lands directly in the opponent's court untouched, winning the point.",
    definition_albanian: "Një servis që bie direkt në fushën e kundërshtarit pa u prekur, duke fituar pikën.",
    example: "She scored four aces in the opening set.",
    example_albanian: "Ajo shënoi katër ace në setin e parë."
  },
  {
    term: "Setter",
    albanian: "Setues",
    category: "Position",
    icon: "🎮",
    definition: "The player who directs the offense and delivers the second touch to set up attackers.",
    definition_albanian: "Lojtari që drejton sulmin dhe jep prekjen e dytë për të përgatitur sulmuesit.",
    example: "The setter read the block and delivered a back-set to the right side.",
    example_albanian: "Setuesi lexoi bllokadën dhe dërgoi një set prapa te ana e djathtë."
  },
  {
    term: "Antenna",
    albanian: "Antenë",
    category: "Equipment",
    icon: "📡",
    definition: "The vertical rods attached to each side of the net that mark the boundary for legal ball crossing.",
    definition_albanian: "Shufrat vertikale të bashkangjitura në çdo anë të rrjetës që shënojnë kufirin për kalimin legal të topit.",
    example: "The ball hit the antenna and the point went to the other team.",
    example_albanian: "Topi preku antenën dhe pika i shkoi ekipit tjetër."
  },
  {
    term: "Free Ball",
    albanian: "Top i lirë",
    category: "Play",
    icon: "🎈",
    definition: "An easy ball returned over the net by the opponent, typically with a forearm pass instead of a spike.",
    definition_albanian: "Një top i lehtë i kthyer mbi rrjetë nga kundërshtari, zakonisht me pasim me parakrah në vend të goditjes sulmuese.",
    example: "The team called 'free ball' and transitioned into their offensive system.",
    example_albanian: "Ekipi thirri 'top i lirë' dhe kaloi në sistemin e tyre sulmues."
  },
  {
    term: "Floater Serve",
    albanian: "Servis lundruese",
    category: "Serve",
    icon: "🌊",
    definition: "A serve hit with minimal spin that moves unpredictably through the air.",
    definition_albanian: "Një servis i goditur me rrotullim minimal që lëviz në mënyrë të paparashikueshme nëpër ajër.",
    example: "His floater serve was difficult to pass because of its unpredictable movement.",
    example_albanian: "Servisi i tij lundruese ishte i vështirë për t'u kaluar për shkak të lëvizjes së tij të paparashikueshme."
  },
  {
    term: "Side Out",
    albanian: "Fitim servisi",
    category: "Scoring",
    icon: "🔀",
    definition: "Winning a rally when the opposing team is serving, thus earning the right to serve.",
    definition_albanian: "Fitimi i rallit kur ekipi kundërshtar servis, duke fituar kështu të drejtën për të servuar.",
    example: "They needed a side out to get back into the game.",
    example_albanian: "Ata kishin nevojë për fitimin e servisit për t'u rikthyer në lojë."
  }
];

function renderTerms(filter = "") {
  const container = document.getElementById('terms');
  container.innerHTML = "";

  const filtered = volleyballTerms.filter(t =>
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
  title.textContent = currentLang === 'en' ? 'Volleyball Terms' : 'Termat e Volejbollit';

  const search = document.getElementById('search');
  search.placeholder = currentLang === 'en' ? 'Search for a term...' : 'Kërko një term...';

  renderTerms(search.value);
});

renderTerms();
