let currentLang = 'en';

const boxingTerms = [
  {
    term: "Jab",
    albanian: "Goditje e drejtë me dorën e parme",
    category: "Punch",
    icon: "👊",
    definition: "A quick, straight punch thrown with the lead hand, used to gauge distance or set up combinations.",
    definition_albanian: "Një goditje e shpejtë dhe e drejtë me dorën kryesore, përdoret për të matur distancën ose për të vendosur kombinime.",
    example: "He used a jab to keep his opponent at bay.",
    example_albanian: "Ai përdori një jab për të mbajtur kundërshtarin larg."
  },
  {
    term: "Cross",
    albanian: "Goditje e drejtë me dorën e pasme",
    category: "Punch",
    icon: "💥",
    definition: "A powerful straight punch thrown with the rear hand, often following a jab.",
    definition_albanian: "Një goditje e fuqishme e drejtë me dorën e pasme, shpesh pas një jab-i.",
    example: "The boxer landed a cross that stunned his opponent.",
    example_albanian: "Boksieri dha një cross që e tronditi kundërshtarin."
  },
  {
    term: "Hook",
    albanian: "Goditje harkore",
    category: "Punch",
    icon: "🪝",
    definition: "A punch thrown in a semicircular motion aimed at the side of the opponent's head or body.",
    definition_albanian: "Një goditje e hedhur në një lëvizje gjysmë rrethore që synon anën e kokës ose trupit të kundërshtarit.",
    example: "He delivered a hook to the ribs during the third round.",
    example_albanian: "Ai dha një hook në brinjë gjatë raundit të tretë."
  },
  {
    term: "Uppercut",
    albanian: "Goditje nga poshtë lart",
    category: "Punch",
    icon: "⬆️",
    definition: "A vertical punch thrown upward, targeting the opponent's chin or body.",
    definition_albanian: "Një goditje vertikale e hedhur lart, që synon nofullën ose trupin e kundërshtarit.",
    example: "A devastating uppercut ended the fight in the fifth round.",
    example_albanian: "Një uppercut shkatërrues e mbaroi ndeshjen në raundin e pestë."
  },
  {
    term: "Weave",
    albanian: "Ulje",
    category: "Defense",
    icon: "🔽",
    definition: "A 'U' shaped movement where a fighter lowers their head to avoid a punch from their opponent.",
    definition_albanian: "Një shmangje në formë 'U' ku boksieri ulet për të shmangur goditje nga kundërshtari i tij.",
    example: "Amazing weave from Alvarez to dodge the hook.",
    example_albanian: "Ulje e bukur nga Alvarezi për të shmangur hook-un."
  },
  {
    term: "Slip",
    albanian: "Anashkalim",
    category: "Defense",
    icon: "↔️",
    definition: "A defensive move where the boxer rotates their body slightly to make an opponent's punch miss.",
    definition_albanian: "Një lëvizje mbrojtëse ku boksieri rrotullon trupin lehtë për të bërë që goditja e kundërshtarit të gabojë.",
    example: "He slipped the jab and countered with a cross.",
    example_albanian: "Ai anashkaloi jab-in dhe kundërshtoi me një cross."
  },
  {
    term: "Bob",
    albanian: "Lëvizje vertikale",
    category: "Defense",
    icon: "⬇️",
    definition: "A vertical head movement used to avoid punches by moving up and down.",
    definition_albanian: "Një lëvizje vertikale e kokës e përdorur për të shmangur goditjet duke u lëvizur lart e poshtë.",
    example: "The fighter used bobbing to avoid the opponent's combinations.",
    example_albanian: "Luftëtari përdori lëvizjen vertikale për të shmangur kombinacionet e kundërshtarit."
  },
  {
    term: "Guard",
    albanian: "Mbrojtje",
    category: "Defense",
    icon: "🛡️",
    definition: "The defensive position where a boxer keeps their hands up to protect their face and body.",
    definition_albanian: "Pozicioni mbrojtës ku boksieri mban duart lart për të mbrojtur fytyrën dhe trupin.",
    example: "Keep your guard up at all times during the match.",
    example_albanian: "Mbaje mbrojtjen lart gjatë gjithë kohës së ndeshjes."
  },
  {
    term: "Knockout",
    albanian: "Nokaut",
    category: "Result",
    icon: "💫",
    definition: "A victory achieved when an opponent is unable to rise after being knocked down within a ten-second count.",
    definition_albanian: "Një fitore e arritur kur kundërshtari nuk mund të ngrihet pas rrëzimit brenda një numërimi dhjetë-sekondësh.",
    example: "The champion won by knockout in the third round.",
    example_albanian: "Kampioni fitoi me nokaut në raundin e tretë."
  },
  {
    term: "Round",
    albanian: "Raund",
    category: "Structure",
    icon: "🔄",
    definition: "A timed period of boxing, typically lasting three minutes in professional matches.",
    definition_albanian: "Një periudhë e kohëzuar e boksit, zakonisht që zgjat tre minuta në ndeshjet profesionale.",
    example: "The fight is scheduled for twelve rounds.",
    example_albanian: "Ndeshja është planifikuar për dymbëdhjetë raunde."
  },
  {
    term: "Southpaw",
    albanian: "Majtas",
    category: "Stance",
    icon: "👈",
    definition: "A boxer who leads with their right hand and right foot forward, opposite of orthodox stance.",
    definition_albanian: "Një boksier që udhëheq me dorën e djathtë dhe këmbën e djathtë përpara, e kundërta e qëndrimit ortodoks.",
    example: "Fighting a southpaw requires different strategies.",
    example_albanian: "Luftimi me një majtas kërkon strategji të ndryshme."
  },
  {
    term: "Clinch",
    albanian: "Kap",
    category: "Technique",
    icon: "🤝",
    definition: "A hold where boxers grab each other to rest or prevent punches, broken up by the referee.",
    definition_albanian: "Një kapmë ku boksieret kapën njëri-tjetrin për të pushuar ose parandaluar goditjet, ndërhyn gjyqtari.",
    example: "The referee broke up the clinch and reset the fighters.",
    example_albanian: "Gjyqtari ndërpreu kapjen dhe rivendosi luftëtarët."
  }
];

function renderTerms(filter = "") {
  const container = document.getElementById('terms');
  container.innerHTML = "";
  
  const filtered = boxingTerms.filter(t => 
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
  title.textContent = currentLang === 'en' ? 'Boxing Terms' : 'Termat e Boksit';
  
  // Update search placeholder
  const search = document.getElementById('search');
  search.placeholder = currentLang === 'en' ? 'Search for a term...' : 'Kërko një term...';
  
  // Re-render terms
  renderTerms(document.getElementById('search').value);
});

// Initial render
renderTerms();
