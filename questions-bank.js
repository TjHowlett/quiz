/*
  STARTER QUESTION BANK for the Daily Morning Quiz.

  HOW TO ADD A QUESTION BY HAND
  Copy any block below, give it a NEW unique id (for example "s31"), fill it in, and save.
  The page adds new ids to the bank automatically the next time it opens.
  - options: exactly four. "correct" must be the exact text of one option.
  - topic: "Broad topic > sub-topic". The broad topic must be one of the 21 topics in the brief.
  - sources: at least 2, each a real page you have opened and read. Free to read only.
  - tags: at least 3 (a year, place, person, number or keyword). Reuse tags other questions have
    so themed sessions can form. Never bend a fact to fit a tag.
  - fingerprint: a short phrase naming the topic plus the one key fact being tested.
  Never put an API key or anything private in this file. It is public on GitHub.
*/
window.QUIZ_STARTER_BANK = [
  {
    id: "s01",
    topic: "History > Australian",
    question: "Australia's wild rabbit plague is traced to a release on which Victorian property?",
    options: ["Rippon Lea", "Barwon Park", "Werribee Park", "Como House"],
    correct: "Barwon Park",
    explanation: "Thomas Austin released rabbits for hunting at Barwon Park, near Winchelsea, in October 1859. A 2022 genetic study traced Australia's feral rabbits back to one batch of English rabbits.",
    extra_fact: "Accounts differ on the number released: Wikipedia says at least 13, while other accounts say 24 arrived in Melbourne on Christmas Day 1859.",
    sources: [
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rabbits_in_Australia" },
      { site: "ScienceDaily", url: "https://www.sciencedaily.com/releases/2022/08/220822174922.htm" }
    ],
    fingerprint: "Australian history: rabbit plague began at Barwon Park in 1859",
    tags: ["1859", "Victoria", "rabbits"]
  },
  {
    id: "s02",
    topic: "Space, physics and chemistry > Solar physics",
    question: "A huge solar storm in the mid-1800s disrupted telegraphs across Europe and North America. It is named after which English astronomer?",
    options: ["Edmond Halley", "Richard Carrington", "William Herschel", "Norman Lockyer"],
    correct: "Richard Carrington",
    explanation: "Richard Carrington recorded a very bright solar flare on 1 September 1859. A giant geomagnetic storm followed, and telegraph systems in Europe and North America failed, sometimes giving operators electric shocks.",
    extra_fact: "Some telegraph operators kept sending messages for a while with their batteries disconnected, powered only by the storm's currents.",
    sources: [
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Carrington_Event" },
      { site: "NASA", url: "https://scicolloq.gsfc.nasa.gov/Acton.html" }
    ],
    fingerprint: "Space physics: 1859 solar storm is the Carrington Event",
    tags: ["1859", "solar storm", "Richard Carrington"]
  },
  {
    id: "s03",
    topic: "Travel and cultures > London landmarks",
    question: "Strictly speaking, what is \"Big Ben\" in London?",
    options: ["The clock face", "The tower", "The Great Bell", "The Palace of Westminster"],
    correct: "The Great Bell",
    explanation: "\"Big Ben\" was originally the nickname of the Great Bell alone. People later began using it for the clock and the tower as well.",
    extra_fact: "The clock began keeping time on 31 May 1859, and the Great Bell first chimed on 11 July 1859.",
    sources: [
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Big_Ben" },
      { site: "History.com", url: "https://www.history.com/this-day-in-history/may-31/big-ben-goes-into-operation-in-london" }
    ],
    fingerprint: "London landmarks: Big Ben is the name of the bell",
    tags: ["1859", "London", "Big Ben"]
  },
  {
    id: "s04",
    topic: "Inventions and how things work > Engineering",
    question: "In which year did the Suez Canal officially open?",
    options: ["1862", "1869", "1875", "1882"],
    correct: "1869",
    explanation: "Digging began at Port Said on 25 April 1859, and the canal officially opened on 17 November 1869. French diplomat Ferdinand de Lesseps formed the company that built it.",
    extra_fact: "That is ten years from the first dig to opening day.",
    sources: [
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Suez_Canal" },
      { site: "Britannica", url: "https://www.britannica.com/topic/Suez-Canal" }
    ],
    fingerprint: "Engineering: Suez Canal opened 1869 after starting 1859",
    tags: ["1859", "Egypt", "Suez Canal"]
  },
  {
    id: "s05",
    topic: "Music > Harmony",
    question: "Wagner's opera Tristan und Isolde is famous for the \"Tristan chord\". Which notes make it up?",
    options: ["F, B, D♯ and G♯", "C, E, G and B♭", "D, F♯, A and C", "F, A, C and E♭"],
    correct: "F, B, D♯ and G♯",
    explanation: "The Tristan chord is built from the notes F, B, D♯ and G♯. It is heard at the start of Wagner's opera Tristan und Isolde.",
    extra_fact: "Wagner completed the score in August 1859, but the opera was not staged until 10 June 1865, in Munich.",
    sources: [
      { site: "Wikipedia (Tristan chord)", url: "https://en.wikipedia.org/wiki/Tristan_chord" },
      { site: "Wikipedia (Tristan und Isolde)", url: "https://en.wikipedia.org/wiki/Tristan_und_Isolde" }
    ],
    fingerprint: "Music harmony: Tristan chord is F B D-sharp G-sharp",
    tags: ["1859", "Wagner", "opera"]
  },
  {
    id: "s06",
    topic: "Politics, law and government > Australian colonies",
    question: "Letters Patent signed by Queen Victoria on 6 June created the colony of Queensland. Which colony was it separated from?",
    options: ["South Australia", "Western Australia", "New South Wales", "Van Diemen's Land"],
    correct: "New South Wales",
    explanation: "Queen Victoria signed the Letters Patent at Osborne House on 6 June 1859, creating Queensland and separating it from New South Wales.",
    extra_fact: "Queensland Day is celebrated every year on 6 June, the anniversary of that signing.",
    sources: [
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Separation_of_Queensland" },
      { site: "Queensland State Archives", url: "https://blogs.archives.qld.gov.au/2020/06/05/why-do-we-celebrate-queensland-day-on-6-june/" }
    ],
    fingerprint: "Australian colonies: Queensland separated from New South Wales by Letters Patent 1859",
    tags: ["1859", "Queensland", "Queen Victoria"]
  },
  {
    id: "s07",
    topic: "Space, physics and chemistry > Space exploration",
    question: "For most of the Apollo 11 moonwalk broadcast, NASA used TV pictures received by which Australian radio telescope?",
    options: ["Mount Stromlo", "Molonglo", "Parkes", "Narrabri"],
    correct: "Parkes",
    explanation: "Honeysuckle Creek near Canberra picked up the first pictures. A little under nine minutes in, NASA switched to the better Parkes signal and stayed with it for the rest of the 2½-hour broadcast.",
    extra_fact: "About 600 million people watched Neil Armstrong's first steps.",
    sources: [
      { site: "CSIRO Parkes Observatory", url: "https://www.parkes.atnf.csiro.au/news_events/apollo11/introduction.html" },
      { site: "CSIRO", url: "https://www.csiro.au/en/about/facilities-collections/atnf/parkes-radio-telescope-murriyang/apollo-11-moon-landing" },
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Parkes_Observatory" }
    ],
    fingerprint: "Space exploration: Parkes telescope supplied most Apollo 11 TV pictures",
    tags: ["1969", "Apollo 11", "CSIRO"]
  },
  {
    id: "s08",
    topic: "Internet and pop culture > Internet history",
    question: "The first message sent over ARPANET, an ancestor of the internet, crashed while someone was typing \"login\". Which two letters arrived?",
    options: ["HI", "OK", "GO", "LO"],
    correct: "LO",
    explanation: "On 29 October 1969 a UCLA student, Charley Kline, tried to log in to a computer at Stanford Research Institute. The system crashed after two letters, so the first message was \"lo\".",
    extra_fact: "About an hour later the login worked. A professor involved said the accidental \"lo\" turned out to be prophetic, as in \"lo and behold\".",
    sources: [
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/ARPANET" },
      { site: "UPI", url: "https://www.upi.com/Top_News/US/2019/10/29/First-Internet-connection-made-over-military-ARPANET-50-years-ago/9531572312859/" }
    ],
    fingerprint: "Internet history: first ARPANET message was lo",
    tags: ["1969", "ARPANET", "internet"]
  },
  {
    id: "s09",
    topic: "Music > Festivals",
    question: "The famous Woodstock music festival was not held in the town of Woodstock. Where was it held?",
    options: ["Saugerties, New York", "Altamont, California", "Bethel, New York", "Monterey, California"],
    correct: "Bethel, New York",
    explanation: "Woodstock ran from 15 to 18 August 1969 on Max Yasgur's dairy farm in Bethel, New York.",
    extra_fact: "That is about 95 kilometres (60 miles) south-west of the town of Woodstock.",
    sources: [
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Woodstock" },
      { site: "Britannica", url: "https://www.britannica.com/print/article/647675" }
    ],
    fingerprint: "Music festivals: Woodstock 1969 was held in Bethel not Woodstock",
    tags: ["1969", "Woodstock", "New York"]
  },
  {
    id: "s10",
    topic: "Inventions and how things work > Aviation",
    question: "Concorde's very first flight, by the French-built prototype 001, took off from which city?",
    options: ["Bristol", "Paris", "Farnborough", "Toulouse"],
    correct: "Toulouse",
    explanation: "The French-built prototype, 001, made its first flight from Toulouse, piloted by André Turcat.",
    extra_fact: "The British-built prototype, 002, followed on 9 April 1969, flying from Filton in Bristol to RAF Fairford.",
    sources: [
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Concorde" },
      { site: "This Day in Aviation", url: "https://www.thisdayinaviation.com/?p=406" }
    ],
    fingerprint: "Aviation: Concorde first flight 1969 from Toulouse",
    tags: ["1969", "Concorde", "France"]
  },
  {
    id: "s11",
    topic: "Books, words and language > Children's books",
    question: "Eric Carle's The Very Hungry Caterpillar began as a story about a different creature. What was it?",
    options: ["A snail called Sid", "A bookworm called Willi", "A hungry spider", "A greedy goat"],
    correct: "A bookworm called Willi",
    explanation: "Carle first wrote \"A Week with Willi the Worm\", inspired by punching holes in paper. His editor, Ann Beneduce, thought a worm was not very appealing and suggested a caterpillar.",
    extra_fact: "The book was first published on 3 June 1969, and printed in Japan because its die-cut holes were too costly to print in the United States.",
    sources: [
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/The_Very_Hungry_Caterpillar" },
      { site: "Penguin", url: "https://www.penguin.co.uk/articles/2021/05/making-eric-carle-very-hungry-caterpillar-story-behind" }
    ],
    fingerprint: "Children's books: Hungry Caterpillar started as Willi the Worm",
    tags: ["1969", "Eric Carle", "children's books"]
  },
  {
    id: "s12",
    topic: "Food and drink > Australian food",
    question: "Vegemite was developed in Melbourne in 1922. It is made mostly from the leftovers of which industry?",
    options: ["Cheese-making", "Winemaking", "Baking bread", "Brewing beer"],
    correct: "Brewing beer",
    explanation: "Chemist Cyril Callister made it from brewer's yeast, a by-product of beer production, working for the Fred Walker company.",
    extra_fact: "The yeast waste came from the Carlton & United brewery, and Vegemite first went on sale on 25 October 1923.",
    sources: [
      { site: "Britannica", url: "https://www.britannica.com/topic/Vegemite" },
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Vegemite" }
    ],
    fingerprint: "Australian food: Vegemite made from brewer's yeast waste",
    tags: ["Victoria", "Melbourne", "Vegemite"]
  },
  {
    id: "s13",
    topic: "Art, design and architecture > Architecture",
    question: "In 2004 which Melbourne building became the first built heritage site in Australia to be added to the UNESCO World Heritage List?",
    options: ["Flinders Street Station", "Melbourne Town Hall", "State Library Victoria", "Royal Exhibition Building"],
    correct: "Royal Exhibition Building",
    explanation: "The Royal Exhibition Building and Carlton Gardens were listed on 1 July 2004. They were designed for the great international exhibitions of 1880 and 1888.",
    extra_fact: "The building opened on 1 October 1880 for the Melbourne International Exhibition.",
    sources: [
      { site: "Museums Victoria", url: "https://museumsvictoria.com.au/reb/world-heritage/" },
      { site: "UNESCO", url: "https://whc.unesco.org/en/list/1131" },
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Royal_Exhibition_Building" }
    ],
    fingerprint: "Architecture: Royal Exhibition Building first Australian World Heritage building 2004",
    tags: ["Victoria", "Melbourne", "UNESCO"]
  },
  {
    id: "s14",
    topic: "Sport > Horse racing",
    question: "How long is the Melbourne Cup horse race?",
    options: ["2,000 metres", "2,400 metres", "3,200 metres", "4,000 metres"],
    correct: "3,200 metres",
    explanation: "The Melbourne Cup is run over 3,200 metres on the first Tuesday of November, a public holiday in Melbourne.",
    extra_fact: "The distance was shortened slightly from the traditional two miles in 1972, when Australia adopted the metric system.",
    sources: [
      { site: "Britannica", url: "https://www.britannica.com/sports/Melbourne-Cup" },
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Melbourne_Cup" }
    ],
    fingerprint: "Horse racing: Melbourne Cup distance is 3200 metres",
    tags: ["Victoria", "Melbourne", "Melbourne Cup"]
  },
  {
    id: "s15",
    topic: "Politics, law and government > Elections",
    question: "In 1856 several Australian colonies introduced a voting reform that later spread around the world as the \"Australian ballot\". What was it?",
    options: ["Compulsory voting", "Votes for women", "Preferential voting", "The secret ballot"],
    correct: "The secret ballot",
    explanation: "In 1856 Tasmania, Victoria and South Australia brought in secret voting. South Australia's version, with an X beside your chosen candidate, became the model adopted in Britain in 1872 and the US after 1884.",
    extra_fact: "Sources differ on who was first: Wikipedia credits Tasmania (7 February 1856), while the Museum of Australian Democracy says Victoria.",
    sources: [
      { site: "Museum of Australian Democracy", url: "https://www.moadoph.gov.au/explore/democracy/what-is-the-secret-ballot" },
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Secret_ballot" }
    ],
    fingerprint: "Elections: Australian ballot is the secret ballot from 1856",
    tags: ["1856", "Victoria", "Tasmania", "South Australia"]
  },
  {
    id: "s16",
    topic: "Nature and animals > Australian wildlife",
    question: "Where in a wombat's body do its cube-shaped droppings take shape?",
    options: ["The stomach", "The intestines", "The rectum", "The bladder"],
    correct: "The intestines",
    explanation: "A Georgia Tech study, with help from the University of Tasmania, found the cube shape forms in the intestines, because the intestine wall stretches unevenly. It was long assumed to happen in the rectum.",
    extra_fact: "The sharp corners appear in the final 50 centimetres of the intestine, about 8% of its length.",
    sources: [
      { site: "Australian Geographic", url: "http://www.australiangeographic.com.au/news/2018/11/mystery-solved-this-is-how-wombats-do-cubic-shaped-poo/" },
      { site: "Physics World", url: "https://physicsworld.com/a/biophysicists-strain-to-reveal-why-wombats-have-cube-shaped-poo/" }
    ],
    fingerprint: "Australian wildlife: wombat cube droppings form in the intestines",
    tags: ["wombats", "Tasmania", "Georgia Tech"]
  },
  {
    id: "s17",
    topic: "History > Military and social history",
    question: "In 1932 soldiers were sent to Western Australia's wheatbelt to cull emus, in the so-called \"Emu War\". What weapons did they carry?",
    options: ["Cannons", "Lewis machine guns", "Flamethrowers", "Nets and traps"],
    correct: "Lewis machine guns",
    explanation: "Major G. P. W. Meredith led a small team with two Lewis guns and 10,000 rounds of ammunition. The emus kept scattering, and one gun jammed.",
    extra_fact: "About 20,000 emus had moved into farmland around Chandler and Walgoolan, damaging crops and structures.",
    sources: [
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Emu_War" },
      { site: "The Collector", url: "https://www.thecollector.com/great-emu-war" }
    ],
    fingerprint: "Military history: Emu War 1932 used Lewis guns",
    tags: ["1932", "Western Australia", "emus"]
  },
  {
    id: "s18",
    topic: "The human body and health > Anatomy",
    question: "Which bone in the neck is unusual because it does not join directly to any other bone?",
    options: ["The clavicle", "The sternum", "The mandible", "The hyoid"],
    correct: "The hyoid",
    explanation: "The hyoid is the only bone in the body that does not articulate with another bone. It is held in place by muscles and ligaments instead.",
    extra_fact: "Those muscles and ligaments anchor it to the jaw, the base of the skull, the breastbone and the thyroid cartilage.",
    sources: [
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hyoid_bone" },
      { site: "Kenhub", url: "https://www.kenhub.com/en/library/anatomy/hyoid-bone" }
    ],
    fingerprint: "Anatomy: hyoid is the bone that connects to no other bone",
    tags: ["hyoid", "neck", "bones"]
  },
  {
    id: "s19",
    topic: "Maths, logic and puzzles > Probability",
    question: "How many people must be in a room for it to be more likely than not that two of them share a birthday?",
    options: ["57", "23", "91", "183"],
    correct: "23",
    explanation: "With 23 people there are 253 possible pairs, and the chance that at least one pair shares a birthday is about 50.7%.",
    extra_fact: "With 57 people the chance of a match is above 99 per cent.",
    sources: [
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Birthday_problem" },
      { site: "Harvey Mudd College", url: "https://math.hmc.edu/funfacts/birthday-problem/" }
    ],
    fingerprint: "Probability: birthday problem needs 23 people for 50 percent",
    tags: ["probability", "birthdays", "23"]
  },
  {
    id: "s20",
    topic: "Books, words and language > Word origins",
    question: "The word \"quarantine\" comes from an Italian phrase meaning a period of how many days?",
    options: ["14", "21", "30", "40"],
    correct: "40",
    explanation: "It comes from the Italian \"quaranta giorni\", meaning 40 days. The CDC says ships arriving from infected ports in 14th-century Venice had to wait that long before landing.",
    extra_fact: "One account says the Venetian Senate set the waiting period at 40 days in 1448.",
    sources: [
      { site: "CDC", url: "https://www.cdc.gov/quarantine/historyquarantine.html" },
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Quarantine" }
    ],
    fingerprint: "Word origins: quarantine means forty days from Venice",
    tags: ["Venice", "quarantine", "40"]
  },
  {
    id: "s21",
    topic: "Film and TV > Australian film",
    question: "Which Australian film, premiered in Melbourne on Boxing Day 1906, is recognised as the world's first full-length narrative feature film?",
    options: ["Robbery Under Arms", "For the Term of His Natural Life", "The Squatter's Daughter", "The Story of the Kelly Gang"],
    correct: "The Story of the Kelly Gang",
    explanation: "It ran for more than an hour and was filmed in and around Melbourne. UNESCO listed it on its Memory of the World Register in 2007 as the world's first full-length narrative feature film.",
    extra_fact: "Because it showed the Kelly gang sympathetically, the Victorian Government tried to censor it.",
    sources: [
      { site: "National Museum of Australia", url: "https://www.nma.gov.au/defining-moments/resources/world-first-film" },
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/The_Story_of_the_Kelly_Gang" }
    ],
    fingerprint: "Australian film: Story of the Kelly Gang 1906 first feature film",
    tags: ["1906", "Victoria", "Ned Kelly", "Melbourne"]
  },
  {
    id: "s22",
    topic: "Technology and computing > Computing history",
    question: "Australia's CSIRAC, running by 1949, is credited as one of the first computers in the world to do what?",
    options: ["Forecast the weather", "Play music", "Run a bank's accounts", "Control traffic lights"],
    correct: "Play music",
    explanation: "Programmer Geoff Hill, who came from a musical family, wrote programs that made CSIRAC play popular tunes in 1950 or 1951.",
    extra_fact: "CSIRAC ran its first test program in November 1949 and is now on display at Scienceworks in Melbourne.",
    sources: [
      { site: "Pearcey Foundation", url: "https://www.pearcey.org.au/heritage/csirac/how-australia-played-the-worlds-first-music-on-a-computer/" },
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/CSIRAC" }
    ],
    fingerprint: "Computing history: CSIRAC played music on a computer",
    tags: ["CSIRAC", "CSIRO", "1949", "music"]
  },
  {
    id: "s23",
    topic: "Geography and places > Australian landscapes",
    question: "The Trans-Australian Railway across the Nullarbor Plain holds what world record?",
    options: ["The highest railway line", "The longest straight stretch of railway track", "The steepest railway climb", "The longest railway tunnel"],
    correct: "The longest straight stretch of railway track",
    explanation: "About 478 kilometres (297 miles) of the line run dead straight across the almost uninhabited Nullarbor Plain.",
    extra_fact: "\"Nullarbor\" comes from Latin words meaning \"no tree\".",
    sources: [
      { site: "Wikipedia (Trans-Australian Railway)", url: "https://en.wikipedia.org/wiki/Trans-Australian_Railway" },
      { site: "Railway Magazine", url: "https://www.railwaymagazine.co.uk/5089/trans-australian-railway-celebrates-centenary/" },
      { site: "Wikipedia (Nullarbor Plain)", url: "https://en.wikipedia.org/wiki/Nullarbor_Plain" }
    ],
    fingerprint: "Australian landscapes: Nullarbor railway has longest straight track 478 km",
    tags: ["Nullarbor", "railways", "478"]
  },
  {
    id: "s24",
    topic: "Philosophy, religion and ideas > Ancient philosophy",
    question: "The Stoics took their name from a \"painted porch\" where Zeno of Citium and his followers met. In which city?",
    options: ["Rome", "Alexandria", "Athens", "Sparta"],
    correct: "Athens",
    explanation: "The Stoa Poikile (\"painted porch\") was a colonnade beside the Agora in Athens. Zeno and his followers gathered there, and Stoicism took its name from it.",
    extra_fact: "The colonnade was decorated with scenes of mythic and historical battles, and Zeno taught there near the end of the 4th century BCE.",
    sources: [
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stoicism" },
      { site: "Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/stoicism/" }
    ],
    fingerprint: "Ancient philosophy: Stoics named after painted porch in Athens",
    tags: ["Greece", "Athens", "Zeno"]
  },
  {
    id: "s25",
    topic: "Myths, legends and folklore > Greek myth",
    question: "In Hesiod's story, what kind of container did Pandora open? (It is wrongly called a \"box\".)",
    options: ["A wooden chest", "A large storage jar", "A leather bag", "A woven basket"],
    correct: "A large storage jar",
    explanation: "Hesiod's word \"pithos\" means a large jar. In his Adagia (1508) the humanist Erasmus changed it to the Latin \"pyxis\", meaning box.",
    extra_fact: "Erasmus's mistranslation is why we say \"Pandora's box\" and not \"Pandora's jar\".",
    sources: [
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pandora%27s_box" },
      { site: "New World Encyclopedia", url: "https://www.newworldencyclopedia.org/entry/Pandora%27s_Box" }
    ],
    fingerprint: "Greek myth: Pandora's box was originally a jar pithos",
    tags: ["Greece", "Hesiod", "Erasmus"]
  },
  {
    id: "s26",
    topic: "Inventions and how things work > Ancient technology",
    question: "The Antikythera mechanism was recovered from a shipwreck off a Greek island in 1901. What could this ancient device be used for?",
    options: ["Grinding grain", "Pumping water out of ships", "Predicting astronomical positions and eclipses", "Measuring the depth of the sea"],
    correct: "Predicting astronomical positions and eclipses",
    explanation: "The geared device could predict astronomical positions and eclipses decades in advance. It came from a wreck near the island of Antikythera.",
    extra_fact: "It was built in the late 2nd or early 1st century BC, and the ship carrying it sank around 70 to 60 BC.",
    sources: [
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Antikythera_mechanism" },
      { site: "Computing History Museum", url: "https://www.computinghistory.org.uk/det/17298/C-100-BC-Ancient-Greeks-build-the-Antikythera-mechanism/" }
    ],
    fingerprint: "Ancient technology: Antikythera mechanism predicted eclipses",
    tags: ["Greece", "Antikythera", "1901"]
  },
  {
    id: "s27",
    topic: "Money, business and economics > Currency",
    question: "Australia introduced the world's first polymer (plastic) banknote in 1988. Which Australian science agency helped the Reserve Bank develop it?",
    options: ["ANSTO", "CSIRO", "Geoscience Australia", "Bureau of Meteorology"],
    correct: "CSIRO",
    explanation: "The Reserve Bank and CSIRO ran a 20-year \"bank project\" that ended with the 1988 $10 bicentennial commemorative note.",
    extra_fact: "Wikipedia says the University of Melbourne was involved too, and that Australia switched fully to polymer notes by 1996.",
    sources: [
      { site: "University of Melbourne", url: "https://findanexpert.unimelb.edu.au/news/4242-proceeds-of-crime--how-polymer-banknotes-were-invented" },
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Polymer_banknote" }
    ],
    fingerprint: "Currency: polymer banknote developed by CSIRO and Reserve Bank 1988",
    tags: ["CSIRO", "banknotes", "1988"]
  },
  {
    id: "s28",
    topic: "Famous people and biography > Inventors",
    question: "Film star Hedy Lamarr and composer George Antheil patented a secret communication system based on which idea, later echoed in Bluetooth and early Wi-Fi?",
    options: ["Noise cancelling", "Signal amplification", "Radar pulse timing", "Frequency hopping"],
    correct: "Frequency hopping",
    explanation: "Their patent used frequency hopping for secure radio communication. Spread-spectrum methods descended from the idea are used in Bluetooth and early versions of Wi-Fi.",
    extra_fact: "Similar technology was not used in operational systems until 1962, after their patent had expired.",
    sources: [
      { site: "Smithsonian Magazine", url: "https://www.smithsonianmag.com/travel/hedy-lamarr-brainy-bombshell-hollywood-actress-world-war-II-frequency-hopping-patent-cultural-travel-smithsonian-journeys-travel-quarterly-180958901/" },
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hedy_Lamarr" }
    ],
    fingerprint: "Inventors: Hedy Lamarr patented frequency hopping",
    tags: ["Hedy Lamarr", "frequency hopping", "Wi-Fi"]
  },
  {
    id: "s29",
    topic: "Travel and cultures > World curiosities",
    question: "Which country has the most time zones in the world, once its overseas territories are counted?",
    options: ["Russia", "France", "United States", "China"],
    correct: "France",
    explanation: "France has 12 time zones across its overseas territories, or 13 if its Antarctic claim is counted. Metropolitan France itself uses just one.",
    extra_fact: "When Saint-Pierre and Miquelon is on daylight saving time, a 13th local time is added.",
    sources: [
      { site: "Time and Date", url: "https://www.timeanddate.com/time/country-with-the-most-time-zones.html" },
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/List_of_countries_by_number_of_time_zones" }
    ],
    fingerprint: "World curiosities: France has the most time zones",
    tags: ["France", "time zones", "12"]
  },
  {
    id: "s30",
    topic: "Internet and pop culture > Online firsts",
    question: "Which animals appear in \"Me at the zoo\", the first video uploaded to YouTube in April 2005?",
    options: ["Giraffes", "Penguins", "Elephants", "Pandas"],
    correct: "Elephants",
    explanation: "YouTube co-founder Jawed Karim stands in front of two elephants at the San Diego Zoo and comments on the length of their trunks. The 19-second clip was uploaded on 23 April 2005.",
    extra_fact: "It was recorded by his high school friend Yakov Lapitsky.",
    sources: [
      { site: "Wikipedia", url: "https://en.wikipedia.org/wiki/Me_at_the_zoo" },
      { site: "NBC 7 San Diego", url: "https://www.nbcsandiego.com/news/local/18-years-ago-an-18-second-video-recorded-at-the-san-diego-zoo-launched-youtube/3212664/" }
    ],
    fingerprint: "Online firsts: first YouTube video Me at the zoo shows elephants",
    tags: ["YouTube", "2005", "San Diego"]
  }
];
