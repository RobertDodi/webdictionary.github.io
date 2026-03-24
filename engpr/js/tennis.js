let currentLang = 'en';

const tennisTerms = [
  {
    term: "Ace",
    albanian: "Ace",
    category: "Serve",
    icon: "🎾",
    definition: "A serve that the receiver fails to touch, winning the point outright.",
    definition_albanian: "Një servis që pranuesi nuk arrin ta prekë, duke fituar pikën direkt.",
    example: "She hit three aces in a row to hold her serve.",
    example_albanian: "Ajo goditi tre ace radhazi për të mbajtur servimin e saj."
  },
  {
    term: "Fault",
    albanian: "Gabim",
    category: "Serve",
    icon: "❌",
    definition: "A serve that fails to land in the correct service box.",
    definition_albanian: "Një servis që nuk arrin të bjerë në kutinë e duhur të servisit.",
    example: "Two consecutive faults result in a double fault and loss of point.",
    example_albanian: "Dy gabime radhazi rezultojnë në gabim të dyfishtë dhe humbje pike."
  },
  {
    term: "Double Fault",
    albanian: "Gabim i dyfishtë",
    category: "Serve",
    icon: "⚠️",
    definition: "Two consecutive faults on a single point, resulting in the server losing the point.",
    definition_albanian: "Dy gabime radhazi në një pikë të vetme, duke rezultuar në humbjen e pikës nga servuesi.",
    example: "The double fault at match point cost him the set.",
    example_albanian: "Gabimi i dyfishtë në pikën e ndeshjes i kushtoi setin."
  },
  {
    term: "Deuce",
    albanian: "Barazim",
    category: "Scoring",
    icon: "⚖️",
    definition: "A tied score of 40-40, where a player must win two consecutive points to win the game.",
    definition_albanian: "Rezultat i barabartë 40-40, ku lojtari duhet të fitojë dy pikë radhazi për të fituar lojën.",
    example: "They played five deuces before she finally won the game.",
    example_albanian: "Ata luajtën pesë barazime para se ajo të fitonte lojën."
  },
  {
    term: "Advantage",
    albanian: "Avantazh",
    category: "Scoring",
    icon: "⬆️",
    definition: "The point scored after deuce; if the same player wins the next point, they win the game.",
    definition_albanian: "Pika e shënuar pas barazimit; nëse i njëjti lojtar fiton pikën tjetër, ai fiton lojën.",
    example: "She had advantage but lost the next rally to return to deuce.",
    example_albanian: "Ajo kishte avantazh por humbi rallin tjetër dhe u kthye në barazim."
  },
  {
    term: "Rally",
    albanian: "Ndërrimi i goditjeve",
    category: "Play",
    icon: "🔄",
    definition: "A sequence of shots exchanged between players before a point is decided.",
    definition_albanian: "Një sekuencë goditjesh të shkëmbyera ndërmjet lojtarëve para se të vendoset një pikë.",
    example: "The crowd cheered after the 30-shot rally.",
    example_albanian: "Publiku brohori pas rallit me 30 goditje."
  },
  {
    term: "Volley",
    albanian: "Volej",
    category: "Technique",
    icon: "✋",
    definition: "Hitting the ball before it bounces on the ground, typically near the net.",
    definition_albanian: "Goditja e topit para se të kërcejë në tokë, zakonisht pranë rrjetës.",
    example: "He approached the net and finished with a crisp volley.",
    example_albanian: "Ai u afrua te rrjeta dhe mbaroi me një volej të pastër."
  },
  {
    term: "Backhand",
    albanian: "Goditje me shpinë të dorës",
    category: "Technique",
    icon: "🤚",
    definition: "A stroke played with the back of the hand facing the direction of the shot.",
    definition_albanian: "Një goditje e luajtur me shpinën e dorës duke shikuar drejtimin e goditjes.",
    example: "His two-handed backhand is one of the best in the game.",
    example_albanian: "Goditja e tij me dy duar me shpinë është një nga më të mirat në lojë."
  },
  {
    term: "Forehand",
    albanian: "Goditje me shuplakë",
    category: "Technique",
    icon: "🖐️",
    definition: "A stroke played with the palm of the hand facing the direction of the shot.",
    definition_albanian: "Një goditje e luajtur me shuplakën e dorës duke shikuar drejtimin e goditjes.",
    example: "She unleashed a powerful forehand winner down the line.",
    example_albanian: "Ajo lëshoi një forehand të fuqishëm fitues poshtë vijës."
  },
  {
    term: "Lob",
    albanian: "Goditje e lartë",
    category: "Technique",
    icon: "🌈",
    definition: "A high, arcing shot hit over the opponent's head, typically used when they are at the net.",
    definition_albanian: "Një goditje e lartë harkore mbi kokën e kundërshtarit, zakonisht e përdorur kur ata janë te rrjeta.",
    example: "She lobbed the ball perfectly over the net rusher.",
    example_albanian: "Ajo goditëi topin lart për mbi lojtarin që kishte vrapuar te rrjeta."
  },
  {
    term: "Break Point",
    albanian: "Pikë thyerjeje",
    category: "Scoring",
    icon: "💥",
    definition: "A point that would allow the receiving player to win the game and break the server's serve.",
    definition_albanian: "Një pikë që do t'i lejonte lojtarit pranues të fitojë lojën dhe të thyejë servimin e servuesit.",
    example: "He converted the break point to take a 5-4 lead.",
    example_albanian: "Ai shfrytëzoi pikën e thyerjes për të marrë avantazhin 5-4."
  },
  {
    term: "Tiebreak",
    albanian: "Tiebreak",
    category: "Scoring",
    icon: "🏁",
    definition: "A special game played to decide a set when the score reaches 6-6, first to 7 points wins.",
    definition_albanian: "Një lojë e veçantë e luajtur për të vendosur setin kur rezultati arrin 6-6, i pari me 7 pikë fiton.",
    example: "She won the tiebreak 7-5 to take the first set.",
    example_albanian: "Ajo fitoi tiebreakun 7-5 për të marrë setin e parë."
  },
  {
    term: "Drop Shot",
    albanian: "Goditje e shkurtër",
    category: "Technique",
    icon: "⬇️",
    definition: "A softly hit shot designed to barely clear the net and land close to it on the opponent's side.",
    definition_albanian: "Një goditje e butë e projektuar për të kaluar rrjetën dhe për të rënë pranë saj në anën e kundërshtarit.",
    example: "The drop shot wrong-footed his opponent completely.",
    example_albanian: "Goditja e shkurtër e zuri kundërshtarin plotësisht të papërgatitur."
  },
  {
    term: "Baseline",
    albanian: "Vija e pasme",
    category: "Court",
    icon: "📏",
    definition: "The line marking the back boundary of the court, from which serves are made.",
    definition_albanian: "Vija që shënon kufirin e pasëm të fushës, nga ku bëhen serviset.",
    example: "Most of his game is played from the baseline.",
    example_albanian: "Pjesa më e madhe e lojës së tij luhet nga vija e pasme."
  }
];

function renderTerms(filter = "") {
  const container = document.getElementById('terms');
  container.innerHTML = "";

  const filtered = tennisTerms.filter(t =>
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
  title.textContent = currentLang === 'en' ? 'Tennis Terms' : 'Termat e Tenisit';

  const search = document.getElementById('search');
  search.placeholder = currentLang === 'en' ? 'Search for a term...' : 'Kërko një term...';

  renderTerms(search.value);
});

renderTerms();
