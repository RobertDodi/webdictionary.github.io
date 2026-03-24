let currentLang = 'en';

const taekwondoTerms = [
  {
    term: "Taekwon-Do",
    albanian: "Taekwondo",
    category: "General",
    icon: "🥋",
    definition: "A Korean martial art characterized by its emphasis on head-height kicks, jumping and spinning kicks, and fast kicking techniques.",
    definition_albanian: "Një art luftarak korean i karakterizuar nga theksi në goditjet me lartësinë e kokës, goditjet e kërcimit dhe rrotullimit, dhe teknika të shpejta goditjesh.",
    example: "ITF Taekwon-Do was founded by General Choi Hong Hi in 1955.",
    example_albanian: "ITF Taekwondo u themelua nga Gjeneral Choi Hong Hi në vitin 1955."
  },
  {
    term: "Dojang",
    albanian: "Dojang",
    category: "General",
    icon: "🏛️",
    definition: "The training hall or school where Taekwondo is practiced.",
    definition_albanian: "Salla e stërvitjes ose shkolla ku praktikohet Taekwondo.",
    example: "Students bow when entering and leaving the dojang.",
    example_albanian: "Studentët përulen kur hyjnë dhe dalin nga dojang-u."
  },
  {
    term: "Dobok",
    albanian: "Dobok",
    category: "Equipment",
    icon: "👘",
    definition: "The traditional uniform worn during Taekwondo training and competitions.",
    definition_albanian: "Uniforma tradicionale e veshur gjatë stërvitjes dhe gareve të Taekwondo-s.",
    example: "A white dobok is worn by color belt students.",
    example_albanian: "Një dobok i bardhë vishet nga studentët me rrip ngjyrash."
  },
  {
    term: "Patterns (Tul)",
    albanian: "Modele (Tul)",
    category: "Technique",
    icon: "🔄",
    definition: "Pre-arranged sequences of movements that simulate combat against multiple imaginary opponents.",
    definition_albanian: "Sekuenca të paracaktuara lëvizjesh që simulojnë luftim kundër kundërshtarëve të shumtë imagjinarë.",
    example: "Chon-Ji is the first pattern students learn in ITF Taekwondo.",
    example_albanian: "Chon-Ji është modeli i parë që studentët mësojnë në ITF Taekwondo."
  },
  {
    term: "Ap Chagi",
    albanian: "Goditje e përparme",
    category: "Kick",
    icon: "👟",
    definition: "Front snap kick - a quick, snapping kick executed with the ball of the foot to the front.",
    definition_albanian: "Goditje e shpejtë përpara - një goditje e shpejtë që ekzekutohet me topin e këmbës përpara.",
    example: "The ap chagi is one of the first kicks taught to beginners.",
    example_albanian: "Ap chagi është një nga goditjet e para të mësuara fillestare."
  },
  {
    term: "Dollyo Chagi",
    albanian: "Goditje rrethore",
    category: "Kick",
    icon: "🔄",
    definition: "Turning kick or roundhouse kick - a kick executed in a circular motion targeting the opponent's midsection or head.",
    definition_albanian: "Goditje rrotulluese - një goditje e ekzekutuar në një lëvizje rrethore që synon pjesën e mesme ose kokën e kundërshtarit.",
    example: "A powerful dollyo chagi to the head can score in sparring.",
    example_albanian: "Një dollyo chagi e fuqishme në kokë mund të shënojë në luftim."
  },
  {
    term: "Yop Chagi",
    albanian: "Goditje anësore",
    category: "Kick",
    icon: "➡️",
    definition: "Side piercing kick - a powerful kick executed by thrusting the foot sideways.",
    definition_albanian: "Goditje anësore shpuese - një goditje e fuqishme e ekzekutuar duke shtyrë këmbën anash.",
    example: "The yop chagi uses the edge of the foot to strike.",
    example_albanian: "Yop chagi përdor skajin e këmbës për të goditur."
  },
  {
    term: "Bandae Dollyo Chagi",
    albanian: "Goditje rrethore e kundërt",
    category: "Kick",
    icon: "🌀",
    definition: "Reverse turning kick - a spinning kick executed by turning 360 degrees before striking.",
    definition_albanian: "Goditje rrotulluese e kundërt - një goditje rrotulluese e ekzekutuar duke u kthyer 360 gradë para se të goditet.",
    example: "The bandae dollyo chagi requires excellent balance and timing.",
    example_albanian: "Bandae dollyo chagi kërkon ekuilibër dhe kohëzim të shkëlqyer."
  },
  {
    term: "Twimyo Nopi Chagi",
    albanian: "Goditje me kërcim të lartë",
    category: "Kick",
    icon: "⬆️",
    definition: "Jumping high kick - a kick performed while jumping to reach higher targets.",
    definition_albanian: "Goditje me kërcim të lartë - një goditje e kryer ndërsa kërcehet për të arritur objektiva më të larta.",
    example: "Breaking boards with twimyo nopi chagi demonstrates power and accuracy.",
    example_albanian: "Thyerja e dërrasave me twimyo nopi chagi demonstron fuqi dhe saktësi."
  },
  {
    term: "Makgi",
    albanian: "Bllokimi",
    category: "Defense",
    icon: "🛡️",
    definition: "Blocking techniques used to deflect or stop an opponent's attack.",
    definition_albanian: "Teknika bllokuese të përdorura për të devijuar ose ndaluar sulmin e kundërshtarit.",
    example: "A proper makgi redirects the opponent's force.",
    example_albanian: "Një makgi e duhur ridrejton forcën e kundërshtarit."
  },
  {
    term: "Jirugi",
    albanian: "Goditje me grusht",
    category: "Punch",
    icon: "👊",
    definition: "Punching techniques using the fist to strike.",
    definition_albanian: "Teknika goditjesh duke përdorur grusht për të goditur.",
    example: "The reverse punch (bandae jirugi) is a powerful offensive technique.",
    example_albanian: "Goditja e kundërt me grusht (bandae jirugi) është një teknikë sulmuese e fuqishme."
  },
  {
    term: "Kyorugi",
    albanian: "Luftim",
    category: "Sparring",
    icon: "🥊",
    definition: "Sparring or free fighting practice between two opponents.",
    definition_albanian: "Stërvitje luftimi ose luftim i lirë ndërmjet dy kundërshtarëve.",
    example: "In kyorugi, practitioners apply techniques learned in patterns.",
    example_albanian: "Në kyorugi, praktikuesit aplikojnë teknikat e mësuara në modele."
  },
  {
    term: "Kyok Pa",
    albanian: "Thyerje",
    category: "Technique",
    icon: "💥",
    definition: "Breaking techniques used to demonstrate power and focus by breaking boards or other materials.",
    definition_albanian: "Teknika thyerjeje të përdorura për të demonstruar fuqi dhe përqendrim duke thyer dërrasa ose materiale të tjera.",
    example: "Kyok pa tests a student's technique, power, and mental focus.",
    example_albanian: "Kyok pa teston teknikën, fuqinë dhe përqendrimin mendor të studentit."
  },
  {
    term: "Dan",
    albanian: "Dan",
    category: "Rank",
    icon: "🥇",
    definition: "Black belt rank levels in Taekwondo, from 1st Dan to 9th Dan.",
    definition_albanian: "Nivelet e rripit të zi në Taekwondo, nga Dan i 1-rë deri në Dan të 9-të.",
    example: "Achieving 1st Dan black belt requires years of dedicated training.",
    example_albanian: "Arritja e rripit të zi Dan i 1-rë kërkon vite stërvitje të dedikuar."
  },
  {
    term: "Gup",
    albanian: "Gup",
    category: "Rank",
    icon: "🎨",
    definition: "Color belt rank levels before black belt, typically from 10th gup (white) to 1st gup (red/black).",
    definition_albanian: "Nivelet e rripit me ngjyra para rripit të zi, zakonisht nga gup i 10-të (i bardhë) në gup të 1-rë (kuq/i zi).",
    example: "Students progress through gup ranks by learning new techniques and patterns.",
    example_albanian: "Studentët përparojnë nëpër radhët gup duke mësuar teknika dhe modele të reja."
  },
  {
    term: "Sabum",
    albanian: "Instruktor",
    category: "Instructor",
    icon: "👨‍🏫",
    definition: "Instructor or master teacher, typically holding 4th Dan or higher.",
    definition_albanian: "Instruktor ose mësues mjeshtër, zakonisht me gradën Dan të 4-të ose më të lartë.",
    example: "A sabum guides students in their Taekwondo journey.",
    example_albanian: "Një sabum udhëheq studentët në udhëtimin e tyre të Taekwondo-s."
  },
  {
    term: "Tenets of Taekwon-Do",
    albanian: "Parimet e Taekwondo-s",
    category: "Philosophy",
    icon: "📜",
    definition: "The five fundamental principles: Courtesy (Ye Ui), Integrity (Yom Chi), Perseverance (In Nae), Self-Control (Guk Gi), and Indomitable Spirit (Baekjul Boolgool).",
    definition_albanian: "Pesë parimet themelore: Mirësjellja (Ye Ui), Integriteti (Yom Chi), Qëndrueshmëria (In Nae), Vetëkontrolli (Guk Gi), dhe Shpirti i Pathyeshëm (Baekjul Boolgool).",
    example: "The tenets of Taekwon-Do guide both training and daily life.",
    example_albanian: "Parimet e Taekwondo-s udhëheqin si stërvitjen ashtu edhe jetën e përditshme."
  },
  {
    term: "Charyot",
    albanian: "Qëndrimi i vëmendjes",
    category: "Command",
    icon: "🧍",
    definition: "Attention stance - command to stand at attention with feet together.",
    definition_albanian: "Qëndrimi i vëmendjes - urdhër për të qëndruar në vëmendje me këmbët së bashku.",
    example: "Classes begin and end with the command 'Charyot!'",
    example_albanian: "Mësimet fillojnë dhe mbarojnë me urdhrin 'Charyot!'"
  },
  {
    term: "Kyong Ye",
    albanian: "Përkulje",
    category: "Command",
    icon: "🙇",
    definition: "Bow - command to bow as a sign of respect.",
    definition_albanian: "Përkulje - urdhër për t'u përkulur si shenjë respekti.",
    example: "Students perform kyong ye when greeting their instructor.",
    example_albanian: "Studentët kryejnë kyong ye kur përshëndesin instruktorin e tyre."
  },
  {
    term: "Joon Bi",
    albanian: "Përgatitu",
    category: "Command",
    icon: "⚡",
    definition: "Ready stance - command to assume a ready position before beginning an exercise.",
    definition_albanian: "Qëndrimi gati - urdhër për të marrë një pozicion gati para fillimit të një ushtrimi.",
    example: "After 'Joon Bi', students prepare to execute the pattern.",
    example_albanian: "Pas 'Joon Bi', studentët përgatiten për të ekzekutuar modelin."
  }
];

function renderTerms(filter = "") {
  const container = document.getElementById('terms');
  container.innerHTML = "";
  
  const filtered = taekwondoTerms.filter(t => 
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
  title.textContent = currentLang === 'en' ? 'ITF Taekwondo Terms' : 'Termat e ITF Taekwondo-s';
  
  // Update search placeholder
  const search = document.getElementById('search');
  search.placeholder = currentLang === 'en' ? 'Search for a term...' : 'Kërko një term...';
  
  // Re-render terms
  renderTerms(document.getElementById('search').value);
});

// Initial render
renderTerms();
