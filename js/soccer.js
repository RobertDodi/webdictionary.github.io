let currentLang = 'en';

const soccerTerms = [
  {
    term: "Goal",
    albanian: "Gol",
    category: "Scoring",
    icon: "⚽",
    definition: "A point scored when the ball completely crosses the goal line between the goalposts and under the crossbar.",
    definition_albanian: "Një pikë e shënuar kur topi kalon plotësisht vijën e portës midis shtyllave dhe nën traversën.",
    example: "She scored the winning goal in the final minute.",
    example_albanian: "Ajo shënoi golin e fitores në minutën e fundit."
  },
  {
    term: "Penalty",
    albanian: "Penallti",
    category: "Rule",
    icon: "🔴",
    definition: "A free kick awarded to a team when a foul is committed inside the penalty area.",
    definition_albanian: "Një goditje e lirë e dhënë një ekipi kur bëhet një faull brenda zonës së penalltisë.",
    example: "The referee awarded a penalty for the handball.",
    example_albanian: "Gjyqtari dha një penallti për prekjen me dorë."
  },
  {
    term: "Offside",
    albanian: "Jashtë loje",
    category: "Rule",
    icon: "🚫",
    definition: "A player is in an offside position if they are nearer to the opponent's goal line than both the ball and the second-last opponent.",
    definition_albanian: "Një lojtar është në pozicion jashtë loje nëse është më afër vijës së portës së kundërshtarit se sa topi dhe kundërshtari i dytë nga fundi.",
    example: "The goal was disallowed because the striker was offside.",
    example_albanian: "Goli u anulua sepse sulmëtari ishte jashtë loje."
  },
  {
    term: "Corner Kick",
    albanian: "Goditje këndi",
    category: "Set Piece",
    icon: "📐",
    definition: "A kick taken from the corner of the field when the ball goes over the goal line after touching a defending player.",
    definition_albanian: "Një goditje e bërë nga këndi i fushës kur topi kalon vijën e portës pasi prek një lojtar mbrojtës.",
    example: "The team scored from a corner kick in the second half.",
    example_albanian: "Ekipi shënoi nga një goditje këndi në pjesën e dytë."
  },
  {
    term: "Free Kick",
    albanian: "Goditje e lirë",
    category: "Set Piece",
    icon: "🦶",
    definition: "A kick awarded to a team after a foul is committed by the opposing team.",
    definition_albanian: "Një goditje e dhënë një ekipi pasi një faull bëhet nga ekipi kundërshtar.",
    example: "He curled the free kick into the top corner.",
    example_albanian: "Ai ktheu goditjen e lirë në këndin e sipërm."
  },
  {
    term: "Dribble",
    albanian: "Driblim",
    category: "Technique",
    icon: "🏃",
    definition: "Moving the ball forward by controlling it with short kicks while running.",
    definition_albanian: "Lëvizja e topit përpara duke e kontrolluar me goditje të shkurtra ndërsa vraponi.",
    example: "The winger dribbled past three defenders.",
    example_albanian: "Ekstremisti dribloi tre mbrojtës."
  },
  {
    term: "Pass",
    albanian: "Pasim",
    category: "Technique",
    icon: "➡️",
    definition: "Kicking the ball to a teammate.",
    definition_albanian: "Goditja e topit te një shok ekipi.",
    example: "She made a perfect pass to the striker.",
    example_albanian: "Ajo bëri një pasim të përkryer te sulmëtari."
  },
  {
    term: "Tackle",
    albanian: "Ndërhyrje",
    category: "Defense",
    icon: "🛡️",
    definition: "An attempt to take the ball away from an opponent.",
    definition_albanian: "Një përpjekje për të marrë topin nga një kundërshtar.",
    example: "The defender made a clean tackle to win the ball.",
    example_albanian: "Mbrojtësi bëri një ndërhyrje të pastër për të fituar topin."
  },
  {
    term: "Header",
    albanian: "Goditje me kokë",
    category: "Technique",
    icon: "🗣️",
    definition: "Using the head to pass or shoot the ball.",
    definition_albanian: "Përdorimi i kokës për të pasuar ose shënuar topin.",
    example: "He scored with a powerful header.",
    example_albanian: "Ai shënoi me një goditje të fuqishme me kokë."
  },
  {
    term: "Goalkeeper",
    albanian: "Portier",
    category: "Position",
    icon: "🧤",
    definition: "The player who defends the goal and is the only player allowed to use their hands in the penalty area.",
    definition_albanian: "Lojtari që mbron portën dhe është i vetmi lojtar që mund të përdorë duart në zonën e penalltisë.",
    example: "The goalkeeper made an incredible save.",
    example_albanian: "Portieri bëri një pritje të pabesueshme."
  },
  {
    term: "Striker",
    albanian: "Sulmëtari",
    category: "Position",
    icon: "🎯",
    definition: "An attacking player whose main role is to score goals.",
    definition_albanian: "Një lojtar sulmues roli kryesor i të cilit është të shënojë gola.",
    example: "The striker scored a hat-trick in the match.",
    example_albanian: "Sulmëtari shënoi një hat-trick në ndeshje."
  },
  {
    term: "Midfielder",
    albanian: "Mesfushor",
    category: "Position",
    icon: "⭐",
    definition: "A player who operates mainly in the middle of the field, linking defense and attack.",
    definition_albanian: "Një lojtar që vepron kryesisht në mes të fushës, duke lidhur mbrojtjen dhe sulmin.",
    example: "The midfielder controlled the tempo of the game.",
    example_albanian: "Mesfushori kontrolloi ritmin e lojës."
  }
];

function renderTerms(filter = "") {
  const container = document.getElementById('terms');
  container.innerHTML = "";
  
  const filtered = soccerTerms.filter(t => 
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

// Search functionality
document.getElementById('search').addEventListener('input', e => {
  renderTerms(e.target.value);
});

// Language toggle
document.getElementById('toggleLang').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'al' : 'en';
  
  // Update title
  const title = document.querySelector('.sport-title');
  title.textContent = currentLang === 'en' ? 'Soccer Terms' : 'Termat e Futbollit';
  
  // Update search placeholder
  const search = document.getElementById('search');
  search.placeholder = currentLang === 'en' ? 'Search for a term...' : 'Kërko një term...';
  
  // Re-render terms
  renderTerms(document.getElementById('search').value);
});

// Initial render
renderTerms();
