// beginner JS: short names, no fancy stuff

/* local images: Images/001.jpg ... Images/100.jpg (tries .jpg then .png) */
function pad3(n){ if(n<10) return "00"+n; if(n<100) return "0"+n; return ""+n; }
function jpg(i){ return "Images/"+pad3(i+1)+".jpg"; }
function png(i){ return "Images/"+pad3(i+1)+".png"; }

/* split label into when + title */
function splitLabel(s){
  var p = s.split("–");
  if(p.length < 2){ p = s.split("-"); p = [p[0], p.slice(1).join("-")]; }
  var when = p[0] ? p[0].trim() : "", title = p[1] ? p[1].trim() : s.trim();
  return { when: when, title: title };
}

/* ===== island data (short lines) ===== */
var items = [
  { label: "c. 3200 BCE – Writing in Sumer", what: "The earliest known writing—cuneiform—emerges in Mesopotamia for record-keeping.", who: "Sumerians • Mesopotamia", why: "Starts recorded history and complex administration." },
  { label: "c. 2560 BCE – Great Pyramid built", what: "The Great Pyramid of Khufu is constructed at Giza.", who: "Old Kingdom Egypt • Giza", why: "Engineering milestone; symbol of ancient Egypt." },
  { label: "c. 1754 BCE – Code of Hammurabi", what: "A large stone stele lists laws and punishments.", who: "Babylon • Hammurabi", why: "Early written legal code; ‘rule of law’ precedent." },
  { label: "753 BCE – Founding of Rome", what: "Traditional date for Rome’s founding by Romulus.", who: "Latium • Tiber River", why: "Begins the city that will dominate the Mediterranean." },
  { label: "551 BCE – Birth of Confucius", what: "Chinese philosopher whose ideas shaped ethics and governance.", who: "Lu (China) • Confucius", why: "Long-lasting impact on East Asian culture and states." },
  { label: "490 BCE – Battle of Marathon", what: "Athenians defeat a Persian invasion.", who: "Athens vs. Persia • Marathon", why: "Boosts Greek confidence; seen as defense of polis life." },
  { label: "336 BCE – Alexander becomes king", what: "Alexander III takes Macedon’s throne and starts conquests.", who: "Macedon • Alexander the Great", why: "Spreads Hellenistic culture across the Near East." },
  { label: "221 BCE – Qin unifies China", what: "China unified under Qin Shi Huang; weights, scripts standardized.", who: "Qin dynasty • Xi’an area", why: "First imperial China; centralization model." },
  { label: "44 BCE – Julius Caesar assassinated", what: "Caesar is killed by senators on the Ides of March.", who: "Rome • Senate conspirators", why: "Republic collapses; path to the Roman Empire." },
  { label: "27 BCE – Augustus, Roman Empire", what: "Octavian becomes Augustus and reorganizes Rome.", who: "Rome • Augustus", why: "Beginning of the Roman Empire (Principate)." },
  { label: "c. 30 CE – Crucifixion of Jesus", what: "Jesus of Nazareth is executed by crucifixion.", who: "Judea • Roman rule", why: "Foundational event for Christianity." },
  { label: "313 – Edict of Milan (toleration)", what: "Religious toleration for Christians in the empire.", who: "Roman Empire • Constantine", why: "Legal turning point for Christianity’s growth." },
  { label: "410 – Sack of Rome", what: "Visigoths under Alaric sack the city of Rome.", who: "Rome • Visigoths", why: "Shocks the empire; symbol of Western decline." },
  { label: "476 – Fall of Western Rome", what: "Last Western emperor deposed (Romulus Augustulus).", who: "Ravenna • Odoacer", why: "Conventional end of Western Roman Empire." },
  { label: "622 – Hijra of Muhammad", what: "Muhammad migrates from Mecca to Medina.", who: "Arabia • Muhammad", why: "Year 1 of Islamic calendar; community formation." },
  { label: "732 – Battle of Tours", what: "Franks defeat an Umayyad raiding force.", who: "Frankish realm • Charles Martel", why: "Limits further Muslim advance into Gaul." },
  { label: "800 – Charlemagne crowned", what: "Charlemagne crowned ‘Emperor of the Romans’.", who: "Rome • Charlemagne", why: "Revives imperial idea in Western Europe." },
  { label: "1054 – Great Schism", what: "Formal split between Catholic and Orthodox churches.", who: "Rome & Constantinople", why: "Long-lasting Christian divide." },
  { label: "1066 – Norman Conquest", what: "William defeats Harold at Hastings; rules England.", who: "England • Normans", why: "Transforms English language, law, and landholding." },
  { label: "1095 – First Crusade", what: "Pope calls for expedition to the Holy Land.", who: "Western Europe → Levant", why: "Launches centuries of crusading and contact." },
  { label: "1206 – Genghis Khan proclaimed", what: "Temüjin becomes ‘Genghis Khan’ of the Mongols.", who: "Mongol steppe • Temüjin", why: "Begins the world’s largest contiguous empire." },
  { label: "1215 – Magna Carta", what: "English barons force a charter limiting the king.", who: "England • King John", why: "Seed of constitutional limits and rights." },
  { label: "1271 – Marco Polo departs", what: "Venetian merchant travels the Silk Road to Asia.", who: "Venice → Yuan China", why: "Inspires European interest in the East." },
  { label: "1299 – Ottoman Empire founded", what: "Osman establishes a beylik that grows into an empire.", who: "Anatolia • Osman I", why: "Major power bridging Europe and Asia." },
  { label: "1347 – Black Death arrives Europe", what: "Plague pandemic devastates populations.", who: "Europe & Mediterranean", why: "Huge social, economic, and cultural impacts." },
  { label: "1439 – Gutenberg printing press", what: "Movable-type printing begins in Europe.", who: "Mainz • Johannes Gutenberg", why: "Mass literacy and spread of ideas." },
  { label: "1453 – Fall of Constantinople", what: "Ottomans capture Byzantine capital.", who: "Constantinople • Mehmed II", why: "Ends Byzantine Empire; boosts Ottoman power." },
  { label: "1492 – Columbus reaches Americas", what: "Transatlantic voyage lands in the Caribbean.", who: "Castile • Christopher Columbus", why: "Begins sustained contact between Old and New Worlds." },
  { label: "1498 – Vasco da Gama reaches India", what: "Sails around Africa to Calicut.", who: "Portugal • Indian Ocean", why: "Opens direct sea trade Europe–Asia." },
  { label: "1517 – Luther’s 95 Theses", what: "Critique of indulgences sparks Reformation.", who: "Wittenberg • Martin Luther", why: "Splits Western Christianity; new churches." },
  { label: "1521 – Fall of Tenochtitlan", what: "Aztec capital falls to Cortés and allies.", who: "Mexico • Aztecs & Spaniards", why: "Spanish rule expands in the Americas." },
  { label: "1522 – First circumnavigation", what: "Magellan’s expedition circles the globe.", who: "Spain • Pacific/Atlantic", why: "Proves global sea route; world is navigable." },
  { label: "1543 – Copernicus publishes", what: "Heliocentric model in ‘De revolutionibus’.", who: "Copernicus • Poland/Prussia", why: "Key step in the Scientific Revolution." },
  { label: "1588 – Spanish Armada defeated", what: "English fleet and weather thwart the Armada.", who: "English Channel", why: "Confirms England’s naval rise." },
  { label: "1603 – Tokugawa shogunate", what: "Stable military government begins in Japan.", who: "Tokugawa Ieyasu • Japan", why: "Brings peace; later isolation." },
  { label: "1607 – Jamestown founded", what: "First permanent English colony in North America.", who: "Virginia • England", why: "Start of English colonial America." },
  { label: "1618 – Thirty Years’ War begins", what: "Religious–political war devastates Central Europe.", who: "Holy Roman Empire & neighbors", why: "Ends with Westphalia; state sovereignty idea." },
  { label: "1642 – English Civil War begins", what: "Parliamentarians vs. Royalists; struggle over rule.", who: "England • Charles I", why: "Leads to constitutional changes." },
  { label: "1687 – Newton’s Principia", what: "Laws of motion and universal gravitation.", who: "England • Isaac Newton", why: "Foundation of classical physics." },
  { label: "1689 – English Bill of Rights", what: "Limits monarch; secures Parliament rights.", who: "England • William & Mary", why: "Cornerstone of constitutional monarchy." },
  { label: "1707 – Acts of Union (GB)", what: "England and Scotland unite as Great Britain.", who: "London & Edinburgh", why: "Creates a new political entity." },
  { label: "1757 – Battle of Plassey", what: "East India Company defeats Bengal nawab.", who: "Bengal • Clive", why: "Start of British dominion in India." },
  { label: "1769 – Watt steam patent", what: "Improved steam engine patented.", who: "Britain • James Watt", why: "Key driver of the Industrial Revolution." },
  { label: "1776 – US Declaration", what: "Thirteen colonies declare independence.", who: "Philadelphia • Continental Congress", why: "Birth of the United States." },
  { label: "1787 – US Constitution drafted", what: "Convention drafts federal constitution.", who: "Philadelphia • Delegates", why: "Design of US government structure." },
  { label: "1789 – French Revolution", what: "Radical political and social change in France begins.", who: "Paris & France", why: "Spreads ideas of citizenship and rights." },
  { label: "1799 – Rosetta Stone found", what: "Trilingual stone enables hieroglyph decipherment.", who: "Egypt • Napoleonic campaign", why: "Unlocks ancient Egyptian language." },
  { label: "1804 – Napoleon Emperor", what: "Napoleon crowns himself Emperor of the French.", who: "Paris • Napoleon", why: "Reshapes Europe through wars and reforms." },
  { label: "1804 – Haiti independence", what: "Slave revolt leads to first Black republic.", who: "Haiti • Toussaint legacy", why: "Blow to slavery; colonial order challenged." },
  { label: "1812 – War of 1812 begins", what: "US vs. Britain over trade and maritime rights.", who: "North America • US/UK", why: "National identity and border status quo." },
  { label: "1815 – Battle of Waterloo", what: "Allies defeat Napoleon, ending his rule.", who: "Belgium • Wellington/Blücher", why: "Ends Napoleonic Wars in Europe." },
  { label: "1821 – Greek War of Independence", what: "Greek revolt against Ottoman rule.", who: "Greece • Philhellenes", why: "Birth of modern Greek state." },
  { label: "1830 – Belgian independence", what: "Belgium separates from the Netherlands.", who: "Brussels • Belgium", why: "Creates a neutral European state." },
  { label: "1837 – Telegraph demonstrated", what: "Electric telegraph makes near-instant messages.", who: "US/UK • Morse and others", why: "Revolutionizes communication." },
  { label: "1848 – Revolutions of 1848", what: "Liberal/national uprisings across Europe.", who: "Europe", why: "Pushes reforms despite failures." },
  { label: "1853 – Crimean War begins", what: "Russia vs. Ottoman-allied powers.", who: "Crimea • Black Sea", why: "Modern tactics; balance of power." },
  { label: "1857 – Indian Rebellion", what: "Large revolt against Company rule.", who: "North India", why: "Leads to direct British Crown rule." },
  { label: "1861 – US Civil War begins", what: "Union vs. Confederacy over slavery and union.", who: "United States", why: "Ends slavery; preserves the Union." },
  { label: "1865 – Slavery abolished (US)", what: "13th Amendment outlaws slavery.", who: "United States", why: "Legal end to slavery nationwide." },
  { label: "1867 – Meiji Restoration", what: "Emperor restored; rapid modernization.", who: "Japan • Meiji", why: "Transforms Japan into an industrial power." },
  { label: "1871 – German unification", what: "Empire proclaimed at Versailles.", who: "Germany • Bismarck", why: "New great power in Europe." },
  { label: "1876 – Telephone patented", what: "Bell patents the telephone.", who: "US • Alexander Graham Bell", why: "Birth of modern telephony." },
  { label: "1885 – Berlin Conference ends", what: "Rules for European colonization in Africa.", who: "Berlin • European powers", why: "Scramble for Africa formalized." },
  { label: "1889 – Eiffel Tower opens", what: "Landmark built for Paris Exposition.", who: "Paris • Gustave Eiffel", why: "Icon of modern engineering." },
  { label: "1896 – First modern Olympics", what: "Revival of Olympic Games in Athens.", who: "Athens • IOC", why: "Launches global sports festival." },
  { label: "1903 – Wright brothers fly", what: "First powered, sustained flight.", who: "Kitty Hawk • Wrights", why: "Starts aviation era." },
  { label: "1905 – Special relativity", what: "Einstein’s papers redefine space and time.", who: "Bern • Albert Einstein", why: "Foundation of modern physics." },
  { label: "1911 – Xinhai Revolution (China)", what: "Qing dynasty falls; Republic proclaimed.", who: "China • Sun Yat-sen", why: "Ends imperial rule in China." },
  { label: "1914 – World War I begins", what: "Alliance system triggers world conflict.", who: "Europe & beyond", why: "Redraws borders; huge casualties." },
  { label: "1917 – Russian Revolution", what: "Tsar falls; Bolsheviks seize power.", who: "Petrograd/Moscow • Lenin", why: "Creates first communist state." },
  { label: "1918 – Spanish Flu pandemic", what: "Global influenza pandemic kills millions.", who: "Worldwide", why: "Public-health lessons and infrastructure." },
  { label: "1919 – Treaty of Versailles", what: "Peace terms on Germany; League formed.", who: "Paris • Allies", why: "Resentments help fuel WWII." },
  { label: "1920 – US women’s suffrage", what: "19th Amendment grants women the vote.", who: "United States", why: "Major expansion of democracy." },
  { label: "1922 – Tutankhamun tomb found", what: "Intact royal tomb discovered.", who: "Valley of the Kings • Carter", why: "Egyptology boom; cultural fascination." },
  { label: "1929 – Wall Street Crash", what: "Stock market collapse triggers depression.", who: "New York • Global finance", why: "Leads to major economic reforms." },
  { label: "1933 – Hitler Chancellor", what: "Hitler appointed; dictatorship follows.", who: "Germany • Adolf Hitler", why: "Leads to WWII and the Holocaust." },
  { label: "1936 – Spanish Civil War", what: "Nationalists vs. Republicans.", who: "Spain • Franco", why: "Prelude to WWII; long dictatorship." },
  { label: "1939 – World War II begins", what: "Germany invades Poland; allies respond.", who: "Europe & world", why: "Largest war in history." },
  { label: "1941 – Pearl Harbor", what: "Japan attacks US Pacific Fleet.", who: "Hawai‘i • US/Japan", why: "US enters WWII." },
  { label: "1944 – D-Day", what: "Allied landings in Normandy.", who: "France • Allies", why: "Liberation of Western Europe begins." },
  { label: "1945 – United Nations founded", what: "International body for peace and cooperation.", who: "San Francisco • UN", why: "Framework for global diplomacy." },
  { label: "1947 – India & Pakistan independent", what: "Partition ends British rule.", who: "South Asia • Nehru/Jinnah", why: "Creates two states; mass migrations." },
  { label: "1948 – State of Israel", what: "Israel declares independence.", who: "Palestine/Israel • Ben-Gurion", why: "New state; regional conflict persists." },
  { label: "1949 – People’s Republic of China", what: "Communists win civil war; PRC founded.", who: "Beijing • Mao Zedong", why: "Major shift in global politics." },
  { label: "1950 – Korean War begins", what: "North invades South; UN intervenes.", who: "Korean Peninsula", why: "Cold War hardens; armistice line." },
  { label: "1953 – DNA double helix", what: "Structure of DNA proposed.", who: "UK • Watson & Crick (w/ Franklin’s data)", why: "Birth of modern genetics." },
  { label: "1954 – Brown v. Board (US)", what: "Supreme Court ends school segregation.", who: "United States", why: "Civil Rights movement momentum." },
  { label: "1955 – Montgomery Bus Boycott", what: "Protest sparks wider activism.", who: "Montgomery, AL • Rosa Parks, MLK", why: "Model for non-violent protest." },
  { label: "1957 – Sputnik launched", what: "First artificial satellite in orbit.", who: "USSR • Sputnik-1", why: "Starts the Space Age." },
  { label: "1959 – Cuban Revolution", what: "Castro’s forces oust Batista.", who: "Cuba • Fidel Castro", why: "Cold War flashpoint in the Americas." },
  { label: "1961 – Berlin Wall built", what: "East Germany seals border in Berlin.", who: "Berlin • GDR", why: "Symbol of Cold War division." },
  { label: "1962 – Cuban Missile Crisis", what: "US–USSR standoff over missiles in Cuba.", who: "Cuba • Kennedy/Khrushchev", why: "Peak nuclear tensions; hotline & diplomacy." },
  { label: "1963 – “I Have a Dream”", what: "MLK’s speech at the March on Washington.", who: "Washington, DC • MLK Jr.", why: "Galvanizes US civil rights." },
  { label: "1964 – US Civil Rights Act", what: "Bans discrimination by race, color, sex, religion.", who: "United States", why: "Key legal step toward equality." },
  { label: "1967 – First heart transplant", what: "First human heart transplant performed.", who: "Cape Town • Christiaan Barnard", why: "Milestone in surgery/medicine." },
  { label: "1968 – Prague Spring", what: "Reform movement crushed by invasion.", who: "Czechoslovakia • Dubček", why: "Shows limits of Soviet bloc freedom." },
  { label: "1969 – Apollo 11 Moon landing", what: "Humans land on the Moon.", who: "Moon • NASA", why: "Iconic achievement of spaceflight." },
  { label: "1971 – Microprocessor", what: "First commercial microprocessor (Intel 4004).", who: "US • Intel", why: "Foundation of personal computing." },
  { label: "1973 – Oil crisis", what: "Arab oil embargo causes global shock.", who: "OPEC • World economy", why: "Energy policy and inflation surge." },
  { label: "1975 – Vietnam War ends", what: "Fall of Saigon; reunification.", who: "Vietnam", why: "US withdraws; war’s long aftermath." },
  { label: "1979 – Iranian Revolution", what: "Monarchy overthrown; Islamic Republic.", who: "Iran • Ayatollah Khomeini", why: "Shifts regional politics." },
  { label: "1980 – Smallpox eradicated", what: "WHO declares smallpox eradicated.", who: "Global • WHO", why: "Public health’s greatest success." },
  { label: "1986 – Chernobyl disaster", what: "Nuclear reactor explosion and fallout.", who: "Ukraine (then USSR)", why: "Reactor safety reforms worldwide." },
  { label: "1989 – Fall of Berlin Wall", what: "Borders open; wall comes down.", who: "Berlin • East & West Germans", why: "Symbolic end of the Cold War." },
  { label: "1991 – USSR dissolves", what: "Soviet Union breaks into independent states.", who: "Moscow • Former republics", why: "Redefines global order." },
  { label: "1994 – End of apartheid (SA)", what: "First multiracial elections; Mandela president.", who: "South Africa • ANC", why: "Transition to democracy." },
  { label: "1995 – WTO founded", what: "World Trade Organization begins.", who: "Geneva • Members", why: "Sets global trade rules." },
  { label: "1997 – Hong Kong handover", what: "UK returns Hong Kong to China.", who: "Hong Kong • UK/PRC", why: "‘One Country, Two Systems’ era starts." },
  { label: "1998 – Google founded", what: "Search engine company created.", who: "US • Page & Brin", why: "Transforms how information is found." },
  { label: "1999 – Euro introduced (non-cash)", what: "Euro becomes accounting currency.", who: "EU countries", why: "Step toward European monetary union." },
  { label: "2001 – 9/11 attacks", what: "Coordinated terrorist attacks in the US.", who: "NY/DC/PA • al-Qaeda", why: "Triggers US wars and security changes." },
  { label: "2003 – Human Genome Project", what: "International project completes human DNA draft.", who: "Global teams", why: "Accelerates modern biomedical research." }
];

/* elements */
var bg = document.getElementById("bg");
var wrap = document.getElementById("wrap");
var canvas = document.getElementById("canvas");
var line = document.getElementById("line");
var info = document.getElementById("info");
var sheetBackdrop = document.getElementById("sheetBackdrop");
var closeBtn = document.getElementById("closeBtn");
var titleEl = document.getElementById("title");
var whenEl = document.getElementById("when");
var whatEl = document.getElementById("what");
var whoEl = document.getElementById("who");
var whyEl = document.getElementById("why");
var searchInput = document.getElementById("searchInput");
var searchList  = document.getElementById("searchList");
var researchLinks = document.getElementById('researchLinks');
var summaryTextEl = document.getElementById('summaryText');

/* layout numbers */
var gap = 80;          // margin left + right
var step = 540;        // distance between dot centers
var dotW = 20;         // dot size

/* positions */
var firstX = gap;
var lastX = gap + (items.length - 1) * step;
canvas.style.width = (lastX + gap) + "px";

/* --- reopen lock: only wheel-open after a click --- */
var allowScrollOpen = false;

/* build dots */
for(var i=0;i<items.length;i++){
  var x = gap + i * step;
  var d = document.createElement("div");
  d.className = "dot";
  d.style.left = x + "px";
  var parts = splitLabel(items[i].label);
  d.setAttribute("data-name", parts.title);

  (function(idx, el){
    el.onclick = function(){
      showImg(idx);
      var p = splitLabel(items[idx].label);
      titleEl.textContent = p.title;
      whenEl.textContent  = p.when;
      whatEl.textContent  = items[idx].what;
      whoEl.textContent   = items[idx].who;
      whyEl.textContent   = items[idx].why;
      renderResearchLinks(p.title);
      renderSummary(p, items[idx]);
      openSheet();
      allowScrollOpen = true;
    };
  })(i, d);

  canvas.appendChild(d);
}

function centerOnIndex(i){
  var xCenter = gap + i * step + dotW/2;     // dot center
  var target = xCenter - wrap.clientWidth/2; // center in viewport
  var maxScroll = Math.max(0, canvas.clientWidth - wrap.clientWidth);
  goal = Math.min(maxScroll, Math.max(0, target)); // clamp
  startAnim();
}

/* ---------- Search ---------- */
var searchData = items.map(function(it, i){
  var parts = splitLabel(it.label);
  return {
    i: i,
    when: parts.when,
    title: parts.title,
    hay: (parts.when + " " + parts.title + " " + (it.what||"") + " " + (it.who||"")).toLowerCase()
  };
});

function renderResults(q){
  searchList.innerHTML = "";
  if(!q){ searchList.classList.remove("show"); return; }

  var qq = q.toLowerCase().trim();
  var hits = searchData.filter(function(r){ return r.hay.indexOf(qq) !== -1; }).slice(0, 12);

  if(hits.length === 0){ searchList.classList.remove("show"); return; }

  hits.forEach(function(r){
    var li = document.createElement("li");
    var when = document.createElement("span");
    when.className = "when";
    when.textContent = r.when || "-";
    var title = document.createElement("span");
    title.className = "title";
    title.textContent = r.title;

    li.appendChild(when);
    li.appendChild(title);
    li.onclick = function(){
      centerOnIndex(r.i);
      var p = splitLabel(items[r.i].label);
      titleEl.textContent = p.title;
      whenEl.textContent  = p.when;
      whatEl.textContent  = items[r.i].what;
      whoEl.textContent   = items[r.i].who;
      whyEl.textContent   = items[r.i].why;
      renderResearchLinks(p.title);
      renderSummary(p, items[r.i]);
      openSheet();
      allowScrollOpen = true;
      searchList.classList.remove('show');
    };
    searchList.appendChild(li);
  });
  searchList.classList.add("show");
}

searchInput.addEventListener("input", function(e){ renderResults(e.target.value); });
searchInput.addEventListener("keydown", function(e){
  if(e.key === "Escape"){ searchInput.value = ""; renderResults(""); }
  if(e.key === "Enter"){
    var first = searchList.querySelector("li");
    if(first){ first.click(); }
  }
});

/* close suggestions when clicking outside */
document.addEventListener("click", function(e){
  if(!searchList.contains(e.target) && e.target !== searchInput){
    searchList.classList.remove("show");
  }
});

/* line from center of first dot to center of last dot */
var lineLeft = firstX + dotW / 2;
var lineWidth = (lastX - firstX);
line.style.left = lineLeft + "px";
line.style.width = lineWidth + "px";

/* image loader (jpg -> png -> gradient) */
function showImg(i){
  var test = new Image(), a = jpg(i), b = png(i);
  test.onload = function(){
    bg.style.backgroundImage = "url('" + test.src + "')";
    if (bg.className.indexOf("show") === -1) bg.className += " show";
  };
  test.onerror = function(){
    if(test.src === a) test.src = b;
    else{
      bg.style.backgroundImage = "linear-gradient(#222,#111)";
      if (bg.className.indexOf("show") === -1) bg.className += " show";
    }
  };
  test.src = a;
}

/* ---------- YEAR TICKS: only every 200 years ---------- */
function parseYear(whenStr){
  var s = (whenStr || "").trim().toUpperCase().replace(/^C\.\s*/, "");
  var n = parseInt(s.replace(/[^\d-]/g, ""), 10);
  if (isNaN(n)) n = 0;
  return s.indexOf("BCE") !== -1 ? -Math.abs(n) : Math.abs(n);
}
function labelYear(y){
  if (y < 0) return (1 - (y + 1)) + " BCE"; // -1 -> 1 BCE, -2 -> 2 BCE
  if (y > 0) return y + " CE";
  return "1 BCE / 1 CE";
}
var yrs = [];
for (var k = 0; k < items.length; k++) yrs.push(parseYear(splitLabel(items[k].label).when));
var dotCenters = [];
for (var di = 0; di < items.length; di++) dotCenters.push(gap + di * step + dotW / 2);

function xFromYear(y){
  if (y <= yrs[0]) return firstX + dotW / 2;
  if (y >= yrs[yrs.length - 1]) return lastX + dotW / 2;
  for (var i2 = 0; i2 < yrs.length - 1; i2++){
    var y0 = yrs[i2], y1 = yrs[i2 + 1];
    if (y >= y0 && y <= y1){
      var t = (y1 === y0) ? 0 : ((y - y0) / (y1 - y0));
      var x0 = (gap + i2 * step) + dotW / 2;
      return x0 + t * step;
    }
  }
  return lastX + dotW / 2;
}
function addTickAt(x, txt, down){
  var t = document.createElement("div");
  t.className = "tick" + (down ? " down" : "");
  t.style.left = x + "px";
  canvas.appendChild(t);
  if (txt){
    var lab = document.createElement("div");
    lab.className = "tickLabel" + (down ? " down" : "");
    lab.style.left = x + "px";
    lab.textContent = txt;
    canvas.appendChild(lab);
  }
}

/* anti-overlap spacing */
var lastUp = -1e9, lastDown = -1e9;
var minGap = 240;   // px between labels on the same side
var nearDot = 38;   // px: if near a dot center, prefer hanging below
var minY = yrs[0], maxY = yrs[yrs.length - 1];

/* left cap */
(function(y){
  var x = xFromYear(y);
  addTickAt(x, labelYear(y), false);
  lastUp = x;
})(minY);

/* all 200-year ticks within range */
var startY = Math.ceil(minY / 200) * 200;
var endY = Math.floor(maxY / 200) * 200;

for (var y = startY; y <= endY; y += 200){
  if (y === minY || y === maxY) continue;
  var x = xFromYear(y);
  var hitDot = dotCenters.some(function(dc){ return Math.abs(dc - x) < nearDot; });

  var down = hitDot || (x - lastUp < minGap);
  if (down && (x - lastDown < minGap)) down = false;
  if (!down && (x - lastUp < minGap)) down = true;

  addTickAt(x, labelYear(y), down);
  if (down) lastDown = x; else lastUp = x;
}

/* right cap */
(function(y){
  var x = xFromYear(y);
  var down = (x - lastUp < minGap);
  if (down && (x - lastDown < minGap)) down = false;
  addTickAt(x, labelYear(y), down);
  if (down) lastDown = x; else lastUp = x;
})(maxY);

/* ---------- SHEET STATE HELPERS ---------- */
function isShown(){ return info.classList.contains('show'); }
function isFull(){ return info.classList.contains('full'); }

// 'hidden' | 'peek' | 'show' | 'full'
function setSheet(state){
  info.classList.remove('peek','full');
  if (state === 'hidden'){
    closeSheet();           // will also lock wheel-open
    return;
  }
  info.classList.add('show');
  if (state === 'peek') info.classList.add('peek');
  if (state === 'full') info.classList.add('full');
  if (sheetBackdrop) sheetBackdrop.classList.add('show');
}

/* open/close helpers */
function openSheet(){
  info.classList.add('show','full');
  info.classList.remove('peek');
  if (sheetBackdrop) sheetBackdrop.classList.add('show');
  document.body.classList.add('sheet-open');   // dim/hide search
  info.scrollTop = 0;
  setTimeout(function(){ if (titleEl && titleEl.focus) titleEl.focus(); }, 50);
}

function closeSheet(){
  info.classList.remove("show","full","peek");
  if (sheetBackdrop) sheetBackdrop.classList.remove('show');
  document.body.classList.remove('sheet-open');
  allowScrollOpen = false;
}

/* research links */
function renderResearchLinks(title){
  if(!researchLinks) return;
  var q = encodeURIComponent(title || "");
  var links = [
    {label:'Wikipedia',  url:'https://en.wikipedia.org/wiki/Special:Search?search='+q},
    {label:'Britannica', url:'https://www.britannica.com/search?query='+q},
    {label:'Google',     url:'https://www.google.com/search?q='+q},
    {label:'Images',     url:'https://www.google.com/search?tbm=isch&q='+q},
    {label:'JSTOR',      url:'https://www.jstor.org/action/doBasicSearch?Query='+q}
  ];
  researchLinks.innerHTML = links.map(function(l){
    return '<a target="_blank" rel="noopener" href="'+l.url+'">'+l.label+'</a>';
  }).join('');
}

/* summary (big paragraph) */
function buildSummary(parts, item){
  var bits = [];
  if (parts.title && parts.when){
    bits.push(parts.title + " (" + parts.when + ").");
  } else if (parts.title){
    bits.push(parts.title + ".");
  }

  if (item.what){
    var w = item.what.trim();
    if (!/[.!?]$/.test(w)) w += ".";
    bits.push(w);
  }

  if (item.who){
    var who = item.who.trim();
    if (!/[.!?]$/.test(who)) who += ".";
    bits.push("It involved " + who);
  }

  if (item.why){
    var why = item.why.trim();
    if (/^[A-Z]/.test(why) && /[.!?]$/.test(why)){
      bits.push(why);
    } else {
      if (!/[.!?]$/.test(why)) why += ".";
      bits.push("It mattered because " + why);
    }
  }

  if (item.more){
    var more = item.more.trim();
    if (!/[.!?]$/.test(more)) more += ".";
    bits.push(more);
  }

  return bits.join(" ");
}
function renderSummary(parts, item){
  if (!summaryTextEl) return;
  summaryTextEl.textContent = buildSummary(parts, item);
}

/* hide scroll hint after first scroll */
info.addEventListener('scroll', function(){
  var hint = info.querySelector('.scrollHint');
  if(!hint) return;
  if(info.scrollTop > 8) hint.classList.add('hide');
  else hint.classList.remove('hide');
});

/* Sheet wheel behavior: expand/ collapse / bubble when needed */
info.addEventListener('wheel', function(e){
  var atTop    = info.scrollTop <= 0;
  var atBottom = (info.scrollTop + info.clientHeight) >= (info.scrollHeight - 1);

  if (atTop && e.deltaY < 0){
    e.preventDefault();
    if (isFull()){
      setSheet('show');
    } else {
      setSheet('hidden');
    }
    return;
  }

  if (atTop && e.deltaY > 0 && !isFull()){
    e.preventDefault();
    setSheet('full');
    return;
  }

  if (atBottom && e.deltaY > 0){
    return; // bubble to #wrap
  }

  e.stopPropagation();
}, { passive: false });

/* close controls */
if(sheetBackdrop){ sheetBackdrop.onclick = closeSheet; }
closeBtn.onclick = function(){ closeSheet(); };
document.addEventListener("keydown", function(e){
  if (e.key === "Escape"){
    bg.style.backgroundImage = "";
    bg.className = bg.className.replace("show", "").trim();
    closeSheet();
  }
});
var handle = document.getElementById('sheetHandle');
if (handle) {
  handle.addEventListener('click', function(){
    if (!isShown()){ setSheet('show'); return; }
    if (!isFull()){ setSheet('full'); return; }
    info.classList.remove('full');
    info.classList.add('peek');
  });
}

/* smooth vertical-wheel → horizontal scrolling (timeline) */
var goal = 0, run = false;
function startAnim(){ if(run) return; run = true; tick(); }
function tick(){
  var cur = wrap.scrollLeft, diff = goal - cur;
  wrap.scrollLeft = cur + diff * 0.18;
  if (Math.abs(diff) < 0.5){ wrap.scrollLeft = goal; run = false; return; }
  requestAnimationFrame(tick);
}
window.addEventListener("load", function(){ goal = wrap.scrollLeft; });

/* Timeline wheel handler */
function wheelToHorizontal(e){
  if (Math.abs(e.deltaY) > Math.abs(e.deltaX)){

    if (isShown()){
      e.preventDefault();
      if (e.deltaY > 0){
        if (!isFull()) setSheet('full');
      } else {
        if (isFull()) setSheet('peek');
        else          setSheet('hidden');
      }
      return;
    }

    e.preventDefault();
    goal += e.deltaY;   // down->left, up->right
    startAnim();
  }
}
wrap.addEventListener("wheel", wheelToHorizontal, { passive: false });

document.addEventListener('wheel', function(e){
  if (!isShown()) return;
  if (info.contains(e.target)) return;

  var atTop    = info.scrollTop <= 0;
  var atBottom = (info.scrollTop + info.clientHeight) >= (info.scrollHeight - 1);

  var canScrollUp   = !atTop    && e.deltaY < 0;
  var canScrollDown = !atBottom && e.deltaY > 0;

  if (canScrollUp || canScrollDown){
    e.preventDefault();
    e.stopPropagation();
    info.scrollTop += e.deltaY;
    return;
  }

  if (atTop && e.deltaY < 0){
    e.preventDefault();
    if (isFull()) setSheet('show'); else setSheet('hidden');
    return;
  }
  if (atTop && e.deltaY > 0 && !isFull()){
    e.preventDefault();
    setSheet('full');
    return;
  }
}, { passive: false });

/* drag to pan */
var dragging = false, sx = 0, sl = 0;
wrap.addEventListener("mousedown", function(e){
  dragging = true; run = false;
  wrap.className = "drag";
  sx = e.pageX; sl = wrap.scrollLeft;
});
window.addEventListener("mouseup", function(){
  dragging = false; wrap.className = "";
  goal = wrap.scrollLeft;
});
window.addEventListener("mousemove", function(e){
  if (!dragging) return;
  wrap.scrollLeft = sl - (e.pageX - sx);
});

/* start a bit to the right */
window.addEventListener("load", function(){
  wrap.scrollLeft = 300;
  goal = wrap.scrollLeft;
});

/* (Optional) swipe-down-to-close if at top of sheet */
var ty0 = null, pulled = false;
info.addEventListener('touchstart', function(e){
  if(e.touches.length !== 1) return;
  ty0 = e.touches[0].clientY;
  pulled = false;
}, {passive:true});

info.addEventListener('touchmove', function(e){
  if(ty0 == null || e.touches.length !== 1) return;
  var dy = e.touches[0].clientY - ty0;
  if(info.scrollTop <= 0 && dy > 0){
    var y = Math.min(dy, 120);
    info.style.transform = 'translate(-50%, ' + (0 + y) + 'px)';
    pulled = dy > 60;
    e.preventDefault();
  }
}, {passive:false});

info.addEventListener('touchend', function(){
  info.style.transform = '';
  if(pulled){ closeSheet(); }
  ty0 = null; pulled = false;
});

/* ===== helpers for overview ===== */
