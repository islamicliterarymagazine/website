/* ILM at Yale — site script.
   Part 1: SETTINGS   Part 2: ISSUES   Part 3: SITE CODE (no need to edit)
   ============================================================= */

/* ===== PART 1 — SETTINGS ===================================== */
/* ─────────────────────────────────────────────────────────────
   SITE SETTINGS — edit these values; every page reads them.
   ───────────────────────────────────────────────────────────── */
window.ILM_CONFIG = {
  name: "Islamic Literary Magazine at Yale",
  arabicMark: "علم",                 // calligraphic mark in the header, footer and fallback covers

  // Calligraphy style for Arabic display type: "ruqaa" | "naskh" | "kufi" | "nastaliq"
  calligraphy: "ruqaa",
  heroCalligraphy: true,            // outlined Arabic title behind the current cover on the home page
  coverRatio: "1 / 1.414",          // shape of cover images (A4/A5 portrait). Others: "3 / 4", "2 / 3", "8.5 / 11"

  email: "islamicliterarymagazine@gmail.com",
  instagram: "https://www.instagram.com/ilmyale/",
  instagramHandle: "@ilmyale",

  // Applications. Leave a URL empty and the button opens an email to the magazine instead.
  boardFormUrl: "",                 // e.g. a Google Form for board interest
  leadershipFormUrl: "",            // e.g. a Google Form for leadership applications
  leadershipOpen: true,
  leadershipDeadline: "",           // e.g. "October 15, 2026"
  leadershipOpensNote: "Leadership applications open each fall. Check back in September."
};

/* ===== PART 2 — ISSUES ======================================= */
/* ─────────────────────────────────────────────────────────────
   ISSUES — newest first. To add an issue:
   1. Put the PDF and cover image in  assets/issues/<id>/  (e.g. assets/issues/legacy/issue.pdf)
   2. Copy the block below to the TOP of the list and fill it in.
   3. Move  current: true  to the new issue.
   Fields left empty are hidden. Without a cover image, a typographic
   cover is drawn from the title and Arabic title.

   contents: one entry per piece, in page order.
     page, title, author, genre   — shown in the table of contents
     text                         — the piece itself, shown below the contents
                                    (\n = line break, \n\n = new stanza / paragraph)
     form: "verse" | "prose"      — verse keeps line breaks; prose is justified
   Delete "text" to list a piece without printing it on the page.
   The text below was extracted from the PDF — proofread line breaks.
   ───────────────────────────────────────────────────────────── */
window.ILM_ISSUES = [
  {
    "id": "legacy",
    "current": true,
    "title": "Legacy",
    "arabic": "إرث",
    "volume": "I",
    "number": "1",
    "season": "Spring 2026",
    "cover": "assets/issues/legacy/cover.jpg",
    "coverCredit": "",
    "pdf": "assets/issues/legacy/issue.pdf",
    "printUrl": "",
    "tone": "ink",
    "note": "Legacy is more than inheritance. It is what we choose to remember, preserve, and build upon. In Islamic tradition, knowledge, ‘ilm, shows up 105 times in the Qur’an. It is passed from generation to generation, carried not only in books but in memory, practice, and story. Legacy lives through participation. It survives because it is renewed.",
    "contents": [
      {
        "page": "6",
        "title": "Letter from the Editors",
        "author": "The ILM Editorial Team",
        "genre": "",
        "form": "prose",
        "text": "Dear Reader,\n\nILM began as a question. It was my first year in college and I had just returned from the Ivy Muslim Conference. The brothers and sisters who performed were overflowing with talent—poets, writers, performers, thinkers—it was just inspirational. Yet, there was no dedicated Muslim publication on our campus. When I asked our group chat why that was, their response was a simple “Not sure. Why don’t you make one?”\n\nSo we did. What started as an idea between friends slowly became a team. Ramy, my soon-to-be roommate and now my best friend, was there from the beginning. None of us had ever run a magazine before. We learned as we went. With the help of my older brother (say hi to Briken!), we settled on a name: ILM—the Arabic word for “knowledge.” It felt right. It also gave us our unofficial backup name: I Love Muslims.\n\nAt a time when Muslim American identity is increasingly scrutinized and politicized, it feels especially urgent that Muslim authors ensure their voice is heard and claim space for their own narratives. Many of our neighbors may not fully understand us. From ignorance can come fear, and from fear, dehumanization. Literature has always been one of the most powerful tools against distortion. Through writing, reflection, and art, we assert something simple yet radical: we are here, we are thoughtful, and we are deeply committed to mercy, justice, and love—values at the heart of our faith.\n\nFor our inaugural issue, we chose the theme Legacy. Legacy asks what we inherit, what we preserve, and what we build. It asks how knowledge travels across generations and how identity endures through story. Our hope is that ILM, in some small but meaningful way, contributes to a legacy that celebrates the beauty and intellectual richness of Islamic literature and culture—and strengthens relationships between communities and all who choose to share this Earth as home.\n\nThank you for reading our first edition. We are honored to share it with you, and we hope these pages invite reflection, pride, and connection.\n\nPeace and Love,\n\nThe ILM Editorial Team"
      },
      {
        "page": "7",
        "title": "Who We Are",
        "author": "",
        "genre": "",
        "form": "prose",
        "text": "ILM at Yale is a creative literary magazine run by undergraduate students at Yale University. Grounded in the Arabic concept of ‘ilm—knowledge—our publication seeks to foster an inclusive platform for Muslim voices on campus while creating space for students passionate about Islamic literature and creative writing more broadly.\n\nFocusing on religious themes and the Muslim experience, we welcome submissions across all creative genres. Our collective is committed to respect, inclusivity, and supporting writers in maintaining a constructive and inspiring space for dialogue on campus—using the power of writing to illuminate the richness and diversity of Islamic traditions."
      },
      {
        "page": "8",
        "title": "Issue Theme: Legacy",
        "author": "",
        "genre": "",
        "form": "prose",
        "text": "Legacy is more than inheritance. It is what we choose to remember, preserve, and build upon. In Islamic tradition, knowledge, ‘ilm, shows up 105 times in the Qur’an. It is passed from generation to generation, carried not only in books but in memory, practice, and story. Legacy lives through participation. It survives because it is renewed.\n\nFor this inaugural issue, we invite reflection on what we have received and what we will leave behind. How does faith shape the stories we tell? How do culture, family, and scholarship shape who we become? What does it mean to carry something forward with care?\n\nThis year feels especially significant for our community as we enter a period of transition. Spring 2026 marks the final semester our beloved musalla will serve before the Chaplain’s Office relocates to Connecticut Hall, closing a chapter of more than two decades. As our community grows in new ways, we find ourselves reflecting on what we are leaving behind and what we are building next.\n\nThe pieces that follow explore legacy as memory, responsibility, creativity, and hope—honoring the past while imagining what is still to come."
      },
      {
        "page": "9",
        "title": "Special Thanks",
        "author": "",
        "genre": "",
        "form": "prose",
        "text": "With special appreciation, the ILM Editorial Team would like to extend a special thank you to everyone involved in making our community become what it is today. Starting in no particular order: We would like to thank every single one of our contributors for being kind enough to include each of their brilliant works, even the anonymous authors. Thank you Imam Bajwa, “AR” Abdul- Rehman, and Ustadh Elbousty for your steady and guiding mentorship. Thank you Yale University for allowing us the funding and logistical opportunity to operate this magazine. Thank you Hassaan for the generous supply of pieces, even as you were graduating. Thank you Danish as your advice was foundational in our early phase. Thank you Biriuni for your unwavering support of our instagram (which is @ilmyale btw). Thank you Yasmin for intending to come to our events, even when there were times you could not. Thank you Afnan for reviewing our title cover. Thank you Abdelrahman for reviewing our editorial layout. Thank you Sage for reviewing and hyping up our logo. Thank you Nabiha for being our phantom keynote speaker. Thank you Hasfa, who while serving as our FroCo, supported our idea from the very beginning. And to all the unnamed brothers and sisters who undoubtedly contributed to our final product, thank you too.\n\nAllahumma barik wa jazakAllahu khairan.\n\n<3"
      },
      {
        "page": "15",
        "title": "Musalla",
        "author": "Adiyah Obolu",
        "genre": "",
        "form": "verse",
        "text": "Within these 4 walls\nWe say salaams like breath work\nHold our hearts outside of our chest\nAnd beg The Almighty to help us keep breathing\nOccupy our brains with essays and exams\nBut press our minds into red carpet\nBecause this dunya is the only test that is worth it\n\nWithin these 4 walls\nI laugh so much I could cry\nAnd I cry so much I burrow my tears into the ground\nOnly rising to a statement of The Greatest\nAllahu Akbar\nWithin these 4 walls\nWe love when nobodies watching\nExcept the only One that matters\nWe are cracked archives of our ancestors wildest dreams\nMuslimat and Muslimeen\nAnd in sha Allah our lineage will be\nMuslim\nWithin my heart\nI carry you all with me\nBecause you remind me that Allah's mercy can come in the form of people\nPerhaps our ease is the light of our friends\nAnd the kindness of our teachers\nFrom the musalla to Jannah\nI love you for the sake of Allah"
      },
      {
        "page": "17",
        "title": "Lahm (Meat)",
        "author": "Mashnoov Chowdhury",
        "genre": "",
        "form": "verse",
        "text": "A piece of flesh\nFlutters\nLetting out a sound\nAn echo\nOf the ultimate legacy bestowed\nA piece of flesh\nPalpates\nLetting out a sound\nA sigh\nThe greatest peace ever known\nFor the words that emanate\nFrom this struggling flesh\nAre eternal\nAs they ensnare\nAnd tug\nAnd honor\nThe souls that will accept them\nBut they ensnare\nAnd tug\nAnd rip apart\nThe souls that disdain them\nSo let this honored flesh move\nSo that those souls can truly rest"
      },
      {
        "page": "18",
        "title": "Ahad",
        "author": "Hassaan Qadir",
        "genre": "",
        "form": "verse",
        "text": "They called him the son of a\nblack woman,\nFathered by an Arab slave,\nUnfree, unfair,\nThe tribe did not care,\nBilal, may Allah,\nbe pleased with his name,\nGrew up fast,\nin sorrow and pain,\nSaw things no child,\nshould ever see,\nTrapped in the shadows,\nlonging to be free.\nHe watched his mother,\nbeaten, oppressed,\nBy the \"noble\" master,\nthey all addressed,\nEach lash she endured,\neach tear she cried,\nWas blamed on her,\nno one by her side.\nThe master was noble,\nor so they believed,\nHe perfumed the idols,\nand chanted their screed,\nMilk from his herd,\nhe poured with pride,\nWhile his bloodstained hands,\nthe truth they denied.\nThe idolater’s milk,\nwashed blood away,\nFrom the beatings he dealt,\neach and every day,\nWhy did the people\nLove the slave master?\nCall him pure and clean,\nWhen his deeds were obscene?\nBilal would ask,\nAnd the people they answered,\nHis lineage, his wealth,\nThe name of his tribe,\nAncestor worship,\nhad blinded their eyes,\n\nAncestor worship,\nhad blinded their eyes,\nAll just excuses,\nAll were just lies,\nJahiliya,\nhad blinded their eyes,\nThe world was confusing,\nNothing made sense,\nUntil into this world,\nThe Quran was sent,\nA clear criterion,\nSent in verses and signs,\nDown to a Messenger,\nWhose heart truly shined,\nWhat Bilal heard,\nHe instantly loved,\nGod is the One,\nQul huw allahu ahad,\nA simple message,\nThat rebuked all their lies,\nLike the light of the sunrise,\nBanishing night,\nAhadun, ahad,\nSweet to recite,\nAhadun, ahad,\nBrought tears to the eyes,\nBilal saw the idols,\nStanding so tall,\nAhadun ahad,\nWill make you fall,\nHe went to the market,\nWhere he had been sold,\nAhadun ahad,\nis worth more than gold\nAnd he went to his master,\nWho hated his race,\nAhadun ahad,\nYou cannot debase,\nThe master grew angry,\nFire in his eyes,\n\"How dare you defy me?\nDo you wish to die?\"\nAhadun ahad,\nAhadun ahad,\n\nThey chained up Bilal,\nCollared him tight,\nAhadun ahad,\nAhadun ahad,\nDragged through the dirt,\nTill day turned to night.\nAhadun ahad,\nAhadun ahad,\nThey beat him with stones,\nTied him down with their whips,\nAhadun ahad,\nAhadun ahad,\nEach lash tore his clothes,\nTurned to ragged strips.\nAhadun ahad,\nAhadun ahad,\nThe master grew fearful,\nHis power was thin,\nAhadun ahad,\nAhadun ahad,\nHow could he control\nWhat was not his to win?\nAhadun ahad,\nAhadun ahad,\nBilal was no slave\nTo any mere man,\nAhadun ahad,\nAhadun ahad,\nHe served only Allah,\nIn His perfect plan.\nAhadun ahad,\nAhadun ahad,\nThey blindfolded Bilal,\nThrew him on the sand,\nAhadun ahad,\nAhadun ahad,\nPlaced boulders on chest,\nDemanded he bend.\nAhadun ahad,\nAhadun ahad,\n\nBut out in the heat,\nThe desert sunlight,\nAhadun ahad,\nAhadun ahad,\nHe stayed on the faith,\nHis heart burning bright.\nAhadun ahad,\nAhadun ahad,\nNo water to drink,\nAnd death closing in,\nAhadun ahad,\nAhadun ahad,\nBilal stayed strong,\nWith courage within.\nAhadun ahad,\nAhadun ahad,\nThe Muslims, his brothers,\nTried for his release,\nAhadun ahad,\nAhadun ahad,\nThey wanted to buy him,\nAnd free him in peace.\nAhadun ahad,\nAhadun ahad,\nAn outrageous price\nTen thousand in gold,\nAhadun ahad,\nAhadun ahad,\nAbu-Bakr paid,\nFor his heart was bold.\nAhadun ahad,\nAhadun ahad,\nThe cruel master laughed,\nThinking he'd won,\nAhadun ahad,\nAhadun ahad,\nBut Bilal was freed\nWith faith like the sun.\nAllahuakbar, allahuakbar\n\nThe more Bilal learned,\nThe brighter it shone,\nAllahuakbar, allahuakbar,\nGod judges not race,\nBut deeds of your own.\nashhadu an la ilaha illa llah\nHe forgives all your sins,\nLifts up the oppressed,\nashhadu an la ilaha illa llah\nGuides you in this life,\nGrants peace in the next.\nAshhadu anna Muhammadan\nrasulullah\nPray five times a day,\nPurify your wealth,\nAshhadu anna Muhammadan\nrasulullah\nBe kind to each other,\nBe strict with yourself,\nhayya ʿala s-salah\nThey honored Bilal,\nAnd fought side-by-side,\nhayya ʿala s-salah\nConquering all,\nWith faith as their guide,\nhayya ʿala l-fala\nOn top of the Kaaba,\nBilal gave athan,\nhayya ʿala l-fala\nA powerful sign,\nOf what they had won,\nAllahuakbar, allahuakbar\nPeace for the people,\nTo practice Islam,\nla ilaha illa llah\nBut after the Prophet,\nSalallahu-alayhi wa-sallam,\ndied,\n\nBilal cried, and cried, and cried,\nHe tried to make the athan,\nBut his voice only broke,\nReunion in the afterlife,\nWas his only hope\nThe years passed by,\nAnd Bilal grew old,\nAnd he became a teacher,\nFor those entering the fold,\nThey marveled at him,\nSo learned and wise,\nScars on his back,\nBut love in his eyes,\n“Tell us, Bilal,\nMaster of the Faith,\nHow do we find,\nThe path that is straight?”\n“Ahadun ahad,\nAnd you will succeed\nAhadun ahad,\nIs all that you need.”"
      },
      {
        "page": "24",
        "title": "(Un)resolved",
        "author": "Anonymous",
        "genre": "",
        "form": "verse",
        "text": "The ground shakes in fury\nbeneath her feet.\nThe ground is her witness.\nHer footprints imprinted in\nA moist mud and uprooted winter grass.\nShe steps towards a gate and the ground screams.\nThe ground suffers and stings.\nI didn’t know how the Earth spoke to her Lord before.\nOnce a children’s tale,\na creed I couldn’t comprehend.\nI now bear witness\nthat the ground has always borne witness.\nThe ground cries, my heart cries.\nMy essence plummets.\nMy legs are listless in oceans.\nMy love walks away from me.\n\nThe moon and clouds hang over me, testifying.\nCreations of a Lord with no need for them testifying.\nCreator of a perfect system of testifying.\nRevealer of the truth, Revealer of oppression.\nAl-Zahir.\nMy brokenness has been mended by Al-Jabbar.\nForgetfulness and time move these matters to dull aches\nApologies were arranged and\nher expansive heart welcomes me again.\nPeople can only hold their breath for so long.\nAnd yet, clay did not breathe before the Lord’s breath.\nThe ground underneath me does not exhale\nOnly the Most Merciful restrains her from swallowing me whole.\nShe erupts under my feet and stares her daggers into my every step.\nShe is resentful\nOf having to carry\nMe."
      },
      {
        "page": "26",
        "title": "The Highest Companionship",
        "author": "Hassaan Qadir",
        "genre": "",
        "form": "verse",
        "text": "For you I would sell my entire dunya,\nBut the akhirah is worth even more,\nThere's nothing I desire more than your smile,\nExcept the pleasure of Allah,\nWhen the blessed Prophet was in Aisha's lap,\nHe was given a choice,\nWorldly bliss with his favorite wife,\nOr companionship with the Most High,\nHe made his choice,\nAnd so have I."
      },
      {
        "page": "27",
        "title": "Woe",
        "author": "Anonymous",
        "genre": "",
        "form": "verse",
        "text": "Woe to those who worship man!\nHe shall die\nAnd so shall thy!\nSubmerged in Earth\nThat once was hallowed\nTo your eyes\nWas it not shown?\nWhat man had sowed?\nMountains of useless gold\nRivers of innocent blood\nNow look again at the heavens!\nLook again at the Earth!\nDid man construct\nStars?\nOceans?\nOr galaxies?\nOr did man construct\nSkyscrapers?\nWeapons?\nAnd falsehood?\nSo cherish the one who granted you sight\nAnd filled the world with color\nWould you ever exchange the chance to see\nFor a chance to be the richest man on Earth?\n27"
      },
      {
        "page": "28",
        "title": "Blessed Olive Tree",
        "author": "Hassaan Qadir",
        "genre": "",
        "form": "verse",
        "text": "The olive tree,\nScientific name,\nOlea europaea,\nElia in Greek,\nOlivae in Latin,\nZayith in Hebrew,\nZaytuna in Arabic.\nThe blessed olive tree,\nDoes it know,\nin what language,\nIts praise is sung?\nHow could it,\nWhen it speaks,\nNo human tongue?\nBut it can feel,\nThe hands,\nNimble touch,\nThe olive farmer knows,\nHe must not be rough,\nThe oil will grow thick,\nAnd make pouring tough.\nOlives were first cultivated for oil,\nThousands of years before we\nlearned to eat them,\nHomer’s heroes,\nAnd Roman emperors,\nWould anoint themselves,\nIn olive oil,\nAnd the early Jews,\nKept an olive oil flame,\nAlive within the Temple,\nIn the Holy Quran,\nGod describes His Light,\nLike that of a lamp,\nLit from the purest oil,\nOf a blessed olive tree\nNoor-un ala noor,\nLight upon light.\nThe blessed olive tree,\nDoes it know,\nupon whose face,\nIt casts its light?\nHow could it,\nWhen it has,\nNo human sight?\n\nBut it can feel,\nthe hands,\nCareful pruning,\nDead branches are removed,\nFor the health of the tree,\nAnd the wood is prized,\nAs a rare beauty.\nThe Romans spoke of an olive\ntree,\nProviding shade to the whole\ncity,\nAnd in the Old Testament,\nThe Prophet Noah received an\nolive branch from God,\nSignaling peace and friendship.\nThe blessed olive tree,\nDoes it know,\nWhat its branches symbolize?\nHow could it,\nWhen it has,\nNo human eyes?\nBut it can fell,\nThe hands,\nGentle pull.\nOnce we discovered olive\nfermentation,\nVarious Mediterranean cultures,\nPrized the olive as a food,\nAnd in an act of charity,\nWhen the harvest time came,\nFamilies would leave some\nolives on the tree,\nSo even the poor could eat,\nIn various cuisines,\nThe olive was found,\nFrom the Hellens to the Hebrews,\nThe Spaniards to the Semites,\nFor thousands of years,\nThe olive connected all,\nThe fruit was in every dish,\nThe oil lit every lamp,\nAnd all could sit under the shade\nof a blessed olive tree,\nFor thousands of years,\nBefore the Lawrence and the\nKaiser,\nBefore Balfour and the Beer\nHall,\nBefore the UN and the Nakba.\nThe blessed olive tree,\nDoes it know,\nThe history?\nIt was there.\n\nBilal Saleh was 40 years old,\nWhen he was killed,\nBut the trees he tended to,\nWere much older.\nThe average olive tree,\nIs 500 years old,\n500 years ago,\n1524,\nWould have been just a few\nyears,\nAfter the Ottoman Turks,\nTook the Holy Lands,\nFrom the Mamluk Egyptians,\nMuslims fighting Muslims,\nUnfortunately common.\nBut when they took control,\nThey set up systems of laws,\nMillets,\nRabbinic law for the Jews,\nCanon law for the Christians,\nShariah law for the Muslims,\nAnd the Sultan’s law,\nMaintaining justice,\nBetween the three.\nThe blessed olive tree\nDoes it know,\nUnder whose law it grows?\nBilal Saleh was 40 years old,\nWhen he was killed,\nBut the trees he tended to,\nWere much older.\nOlive groves are inherited,\nGeneration to generation,\nPassed down as villages evolve,\nAnd tribes migrate,\nFor thousands of years,\nMuslims,\nChristians,\nAnd Jews,\nLived side-by-side,\nIn the Holy Lands,\nNot in perfect harmony,\nBut a peaceful coexistence,\nAll worshiping the One God.\nIn the late 1800s,\nAs the Zionist movement,\nGained steam,\nEuropean settlers were shocked,\nTo find Jewish\nAnd Muslim families,\nLiving in the very same buildings,\nAs they had done,\nFor years and years,\nFor 500 years,\nUnder the shade,\nOf the blessed olive tree.\n\nBut 11 months ago,\nBilal Saleh was 40 years old,\nWhen he was killed,\nBy illegal settlers,\nShot dead in front of his\nchildren,\nIn the middle of the day,\nAs his family harvested olives,\nFrom their very own trees.\nBilal Saleh was 40 years old,\nWhen he was killed,\nBut the trees he loved,\nWere much older.\nAnd when the settler,\nBurns down a tree,\nTo send a message,\nTo the Palestinians,\nAnd when the IDF,\nClears a grove,\nTo a build a road,\nFor those settlers,\nBilal Saleh,\nMay have been 40 years old,\nThe Israeli occupation,\nMay be 75 years old,\nBut the olive trees they kill,\nAre much,\nMuch older,\nOlder than Haniyeh and\nNetanyahu,\nOlder than Arafat and Sharon,\nOlder than Lawrence and Faisal,\nOlder than Herzl and Balfour.\nThe blessed olive tree,\nDoes it know,\nThe hate it takes?\nHow could it,\nWhen it only gives love?\nBut it knows,\nThe hands which loved it,\nAnd which yet return,\nSneaking past barbed wire and bullets,\nTo gather Palestinian seeds.\nThe blessed olive tree,\nLike all blessings,\nIs slow to cultivate,\nQuick to quell,\nBut like the spirit,\nOf all God’s Noble Creation,\nThe olive tree,\nAlways grows back.\nBilal Saleh was 40 years old,\nWhen he was killed,\nBut the children he loved,\nAre still alive.\n\nAnd with the seeds they save,\nThe blessed olive tree lives on,\nThrough 400 years of coexistence,\n100 years of oppression,\nA childhood with their father,\nA lifetime without.\nThe IDF may bomb,\nThe settlers may burn,\nBut a handful of seeds,\nWill always survive.\nAnd 500 years from now,\nThe children of Bilal’s children,\nMay walk amongst the olive\ngroves,\nPlanted during this war,\nPlanted during the beautiful moments,\nof peace,\nMoments,\nscattered,\nLike seeds in the sand.\nThe blessed olive tree,\nDoes it know,\nWhat the future holds,\nFor it,\nOr the Palestinians?\nI think it does,\nFor it knows God,\nAnd He watches over,\nHis Dominions."
      },
      {
        "page": "33",
        "title": "The Rabbi and The Sound",
        "author": "Platon Rama",
        "genre": "",
        "form": "verse",
        "text": "The Rabbi carried a small pen in his hand.\nThe small pen scribbled on an old scroll.\nAnd because of that small pen, the Rabbi felt his fingers tire.\n“Governor of Palestine, I am Eliyahu son of Natan.\nI know today the Byzantines war, but I ask for relief.\nLast year’s earthquake took out our wells and a roof.”\nSurrounding the Rabbi was a Tower.\nAround the Tower were the books of his people.\nThe books stared across centuries, and he could feel their weight.\n“This is my seventieth summer here. I have witnessed many changes.\nBut still, some things stay all the same.\nThat is why I write.”\n\nIt was raining now.\nThe chickens stopped their pecking.\nThey hushed for the drops rattling the Tower.\n“Each year that passes the less return to the valley.\nThe young and married go to the cities.\nWe are an ancient community.”\nA strange sound!\nAt his chin, the Rabbi let the small pen down.\nAnd because he rested the small pen, the Rabbi got up from his injured table.\nThe Rabbi moved around the first floor to find the sound.\nWith each corner checked, legacy piled on his dusting fingers.\nBut when he found no sound, he returned to his table.\n“Your Excellency, our valley shrinks.\nThe tax collectors come twice before the harvest.\nWe cannot stay.”\n\nThe sound again!\nScratching his head, the Rabbi got up from where he stood.\nAnd because he stood, the Rabbi set a wooden ladder\nand climbed a second story.\nHere, he lit a candle.\nThe window was shaded by a curtain.\nThe Rabbi found old friends in the tales that surrounded him there.\nLooking past and to some boxes, the Rabbi learned only webs.\nStill no source did he find in that burning candle light.\nIt burned bright with a thousand year old hope.\nAn aging back, the Rabbi sighed.\nThere was nothing to find.\nAnd because there was nothing, he returned to the table.\n“This is not my first time asking for help.\nThe problems switch but our needs remain.\nI will keep asking.”\nA third time! At once the Rabbi rose.\nThe scroll in his hand, the Rabbi gathered a way up the Tower.\nHasty, he forgot his small pen.\nThe stairs creaked with each step.\nThe Rabbi paused to sigh, running his fingers through seventy years of\nliving.\nAt last he arrived at the top where there was no roof.\n\nThe skies had mostly cleared.\nAn orange view, it gave way to pink and red.\nThe man breathed. Clouds still clung to the eastern edges.\nHis eyes gazed toward Zion, to the horizon.\nThe black hills were alive with a tapping sound.\nThe Rabbi could make out the bobbing dots of men.\nIt was the marching noise of a thousand men or more.\nThey carried black banners, horses beside them.\nAt once jubilant, the Rabbi’s face reflected a smiling sigh.\nFrom the sunlight the Rabbi hurried.\nDown the tower, down the stairs, he retrieved his small pen.\nBack at the table, he started a new scroll.\n“Army of the Muslims, I am Eliyahu son of Natan.\nIndeed, God’s help does come through many hands.\nThe river is near. Jerusalem is near.\n“This is my seventieth summer. I have witnessed many changes.\nBut still, some things stay all the same.\nThat is why I write.”\nAnd so the Muslims would go on to win this war.\nPeople of the Book, they lived together near Jerusalem for 460 years until the Crusades.\nAnd after that, another 730 years.\nThe End. 36"
      },
      {
        "page": "37",
        "title": "I'm in the Old City When I See Her",
        "author": "Hassaan Qadir",
        "genre": "",
        "form": "verse",
        "text": "The midday sun bores down\nOn those old sandstone walls\nAnd the cats slink to the shade\nSleek with their fur\nAnd I’ve just finished my lunch\nAnd sit down with a sigh\nBut out the corner my eye\nI see her walk by\nA light-green abaya\nLike myrtle in desert\nWhat’s in her hands?\nNow I’m looking at her\nShe’s staring at me\nAnd I see her smile\nThose dark eyes meet mine\nAnd stay for a while\nHer flowing hijab\nshimmers like mirage\nAnd she speaks in the tongue\nThat all Muslims love\nBut I’m too in love\nTo make out a word\nShe gestures to follow\nAnd steps with a twirl\nI’m off my chair\nAs she rounds the corner\nThere’s heat in the air,\nToo much for a foreigner,\nI ask for her name,\nBest as I can say,\nShe laughs and continues,\nFurther down the way,\nRight into a souk,\nWith burning incenses,\nI close my eyes,\nAnd pause for the senses.\nLittle steps pattering down the\ncobblestone.\nA ball bouncing between the\nwalls.\nBounce, bounce, bounce.\nYa Ahmed! Hadha! Hadha!\nThe sound of children laughing.\nA big kick and thwap! The ball\nhits my head.\nI open my eyes,\nAll in a daze,\nThe kids have gone quiet,\nThey’re all afraid,\nI pick up the ball,\nAnd survey the scene,\n\nTweens and toddlers,\nand in-between,\nTheir cute faces watching,\nThe short ones might cry,\nThe ball in my hand,\nA glint in my eye,\nTuredu? Ta’al!\nI dribble the ball,\nAnd kick off the wall,\nThe kids start to cheer,\nThey’re laughing again,\nI pass to a boy,\nHe passes it back,\nThe sounds of our game,\nEcho through the halls,\nWith men coming back,\nTo open their stalls,\n“I should probably stop acting\nlike a kid,”\nI think to myself,\n“Attracting attention,\nMight bring me some trouble.”\n“Trouble comes either way,\nSo we should be kind,\nPlay with the kids,\nAnd give them your time”\nRight by my side,\nShe's somehow appeared,\nA smile so wide,\nMy worries are cleared.\n“So you speak English?\nIs this where you were taking\nme?”\nShe laughs with her eyes,\nAnd exits the souk,\nWalking through the gate,\nAnd I follow suit,\nShe glides up the stairs,\nThe laughter recedes,\nShe knocks on a door,\nAt the edge of the street,\nA man opens up,\nHugs her as his daughter,\nSees me with a frown,\nAsks her why I’m here,\n“We met in the market,”\n(Not entirely false),\n“He’s looking for heirlooms,”\n(And I’ll play along),\n“Salam ya uncle,\nThose guys tried to scam me,\nYour daughter saved me,\nShe’s from a good family,\n\nI’m looking for something,\nTo take to my home,\nInlaid with silver,\nOr plated with gold,”\n“Ah yes, I can tell,\nThat you have good taste,\nAnd now you have come,\nTo the perfect place.”\nHe draws me inside,\nTo his little store,\nShows me his wares,\nAnd says there is more,\nWe chat and relax,\nAs Arabs do,\nHis daughter returns,\nWith tea cups for two,\nHer glance is averted,\nSo shy and restrained,\nBut under the surface,\nHer smile hasn't waned,\nI sit with her father,\nWe discuss the news,\nThe prices of land,\nAnd life with the Jews,\nThe old father tells me,\nHe has just the thing,\nA token to buy,\nThat's fit for a king,\nHe pulls out a box,\nOf plain cedarwood,\nOpens it up,\nAnd pulls out a sword,\nBlade shining bright,\nThe hilt is inscribed,\nQuranic verses,\nCatching my eye,\nThe daughter now joins,\nWe all sit and talk,\nShake hands with the father,\nA bargain is struck,\nA beautiful day,\nIt&#39;s time for salat,\nBut before we can pray,\nThere's a heavy knock,\nA knock…\nand a knock…\n\nA shout and a crash,\nThe door off its hinge,\nA bang and a flash,\nThe smoke starts to singe,\n“Dit kufef!”\n“Subhanallah!”\nFoo foo foo!\nKrooh!\nAah!\nThe soldiers rush in,\ntearing up the room,\nThe father is shouting,\nThe daughter is gone,\nAll of a sudden, I’m grabbed,\nAnd thrown out the door,\n“Get up!” they shout,\nA gun in my face,\nThe world is still spinning,\nEars ringing, I’m dazed,\nI’m grabbed by my shirt,\nMy hands on the walls,\nCan’t speak a word,\nCan’t open my jaws,\nThe ring in my ears,\nWas deafening loud,\nIt’s quieting now,\nAll quiet around,\nAs he pats me down,\nI look at the ground,\nIt’s hotter than ever,\nBut there is no sound,\nFrom inside the store,\nWhat’s happening there?\nAs he lets me go,\nI can’t help but stare,\nThe building has changed,\nThere’s pain in the air,\nThe windows are barred,\nThe flowers are gone,\nThey’re cameras now,\nWith fencing around,\nTiles once vivid,\nNow dusty and gray,\nEchoes of laughter,\nHave all slipped away,\nThe door with its handle,\nThat she used to knock,\nIs now chained shut,\nWith thick iron lock,\nAgainst this backdrop,\nAn Israeli flag,\nPerched at the top,\nThe heat makes it sag,\n\nIn horror, I lurch,\nand stumble away,\nSeeking out answers,\nunsure what to say.\nAround the corner,\nan old man appears,\n\"Salam, ya uncle,\nWho lives over there?\"\n\"It used to be Arab,\nnow it's not theirs,\nZionists took it,\namid many prayers.\nIt happened of course,\nby Israel's hand,\nThey claimed the deed false,\nthe state took the land.\"\n\"When did this happen?\"\nI ask with a frown,\n\"A few years ago,\nthe family left town.\"\nA few years ago?\nI ponder, perplexed,\nWhat did I witness?\nMy mind feels so vexed.\nMy head is throbbing,\nMy eyes are so dry,\nI sit and close them,\nAnd breathe for a while,\nAnd as I sit down the street,\nfrom the Zionist occupation,\nThe familiar noise of the Old\nCity returns,\nThe sounds filter to my station,\nAnd the spices waft by,\nFloating up to the cameras,\nAnd the children play free,\nRunning right by the soldiers,\nAnd under the oppressive heat,\nThis city keeps breathing,\nAnd as I lift my head,\nI see her walk by,\nSadness in her eyes,\nBut still there’s a smile\n41"
      },
      {
        "page": "42",
        "title": "Self-Determination",
        "author": "Hassaan Qadir",
        "genre": "",
        "form": "verse",
        "text": "Hasaan Qadir\nMy grandma was ten years old when they took her,\nKicked in the door in the middle of the night,\nShe never saw her mother again,\nShe dressed like a boy and went with her father,\nThat’s the only reason she survived,\nShe used to tell me over shabbat,\nA roll of the dice between her and death,\nBut now we have our own state to keep us safe,\nAnd I always thought our state would keep us safe,\nBut just over a year ago,\nEverything changed,\nBecause really nothing had changed,\nAnd when I saw the pictures,\nAnd the videos from the south,\nWhen I saw the burnt cars,\nAnd women holding their kids,\nI was mad that the world let this happen again,\nHow could the state let this happen again?\nAshamed that I let this happen again,\nI couldn’t look grandma in the eye.\n\nSo me and my friends all enlisted,\nAnd I remember my first day inside the walls,\nWe’d called in a strike on a nest,\nAnd had to take care of the rest,\nMy eyes watered from the dust,\nMy tongue was dry from the heat,\nThe school was just rubble,\nConcrete and glass,\nTwisted rebar and burst pipes,\nDogs fighting over scraps of —,\nI saw an arm sticking out from the dirt,\nI pulled out a kid with a hole in his chest,\nHe opened his mouth as if to scream,\nAnd I wish he had made a sound,\nI wish he had made a sound,\nI wish he had screamed,\nBut blood spurted out,\nAnd it gushed and it gushed,\nAnd he bled and he bled till it emptied him out,\nAnd he couldn’t have been more than ten.\n43"
      },
      {
        "page": "44",
        "title": "What Happens to Innocence",
        "author": "Anonymous",
        "genre": "",
        "form": "verse",
        "text": "They say,\nour innocence dwells only in the womb—\nthat it lingers in the blush of stork bites,\nin lifeblood humming beneath paper skin,\nin the breath of angels—\nstill warm upon a mother,\ncrushed beneath the rubble,\nwho will not rise again.\nAnd they say,\nonce we breathe, we betray it—\nthat the first breath tastes of iron,\nour lips chapped, yet wet with a stain\nthey will not let us swallow.\nSo they press silence between them,\nsmother our cry before it’s born.\nBut I heard a voice—\nmy mother’s,\ndeparting the earth,\nclimbing the rubble:\n“There is no god but God.”\n\nHer breath became mine,\nand our voices sank together\nbeneath ceilings of stone,\nthen of one,\nuntil fire found us\nand carved our names into the smoke.\nI searched for innocence\nin the ruins—\nbetween walls hemmed with wires,\nin maternity wards turned to ash,\namong nurturing arms of the dead\nthat swaddle only absence.\nI searched for water\nin broken glass—\ncupped my hands\nand drank the salt of the sea,\nwhere children float in its froth\nwith no names\nand no graves.\nStill,\nthe sky tore open,\nbright wings breaking the dark.\nFeathers brushed her brow\nlike remembrance,\nand the earth loosened its hold.\nHer body slackened,\nand gravity itself forgot her name."
      },
      {
        "page": "47",
        "title": "Wandering Nights",
        "author": "Mashnoov Chowdhury & Platon Rama",
        "genre": ""
      },
      {
        "page": "49",
        "title": "Exegesis",
        "author": "Platon Rama",
        "genre": "",
        "form": "verse",
        "text": "Oh Saharan plague and acacia bark,\nDo your orange irises beguile me\nSharp, crimson, and pure\nAs pupils lined with kohl\nThe wind today tells me you are near\nYou’re always near, the stain of iron.\nOh Saharan plague and acacia bark,\nYesterday I sang to the moon\nI stood the dunes\nThat killed the martyr\nWithstanding plumes\nWith sand in my eyes\nHer phases, my most bitter enemy\nLast night she was a friend.\n\nOh Saharan plague and acacia bark,\nToday a Bedouin man smiled at me, I nodded\nFleshed clouds now rip the sky\nAnd the sun retreats in their midst\nThe warmth is gone\nThe jackals are out\nWe headed to civilization, never looking back\nThe camel understood better French.\nOh Saharan plague and acacia bark,\nI found an injured antelope\nHis mother's head lay by the well\nEach tear plucking the water surface\nRolling over stones\nRounding the edges\nI cried for the calf, for the mother,\nAnd the difference between them."
      },
      {
        "page": "52",
        "title": "Along the Avenue",
        "author": "Ramy Triki",
        "genre": "",
        "form": "prose",
        "text": "With a single tip of his glass, Habib Bourguiba shattered centuries of tradition. In the blistering heat of Ramadan, he stood in the city square as if on a stage, his presence commanding an ominous silence. Slowly, almost ceremonially, he raised the glass to his lips, letting the sunlight catch on its rim, casting tiny refracted spears of light across the crowd. Bourguiba’s gaze swept over them, steady and unflinching, daring anyone to challenge him. And then he drank—a quiet rebellion swallowed in one sip. In a single act, an unflinching declaration that he and his country would not be bound by the shackles of the past. Such was Habib Bourguiba, the man brave enough to challenge God himself.\n\nOver sixty years later, as I walked through the avenue in Tunisia that now bears his name, Bourghiba’s presence still lingered. Glass storefronts rose on either side, their pristine facades a studied echo of the Champs-Élysées. Tunisians in jeans and sleek Western attire filled the streets as neon signs pulsed overhead, casting the pavement in splintered light. The avenue felt like a mirror facing Paris, but the reflection was distorted, roughened at the edges. Palm trees swayed along the sidewalks, threading together modernist architecture with the enduring stone of Islamic tradition. I walked as if pulled by some quiet force, pulling together fragments of history that, like the avenue, twisted under the weight of time. Here and there, an old man leaned against the faded stone, watching, maybe remembering Bourguiba himself, the man, the myth, the vision that wouldn’t let go.\n\nFurther ahead, a large bronze figure loomed, casting an unmistakable silhouette: Bourguiba sitting on horseback, his hand raised in a gesture part way between command and blessing. The statue seemed out of place amid the avenue’s polish, yet it was this very outstretching of his hand that embodied the ambition that once blazed through these streets. His eyes looked ahead, fixed on a distant point somewhere past the horizon, a place only he could see. The statue seemed frozen in anticipation, as if Bourguiba himself was still urging the country forward. His horse reared, locked in mid-gallop, caught between stillness and the motion he so craved.\n\nBourguiba’s crisp black suit and polished leather shoes were the clothes of modernity, but it was his Chechia hat—small, round, and distinctly Tunisian—that tethered him to his roots, a reminder of the country he had promised to uplift. It was the same hat in which, as a young law student, he would often walk along this very avenue with his mentor, Tahar Haddad, discussing the inequalities and injustices of colonialism, burning with revolutionary fervor. It was the same hat he wore while imprisoned by the French for 11 years, slouched in a crowded jail cell, scrawling clandestine notes on paper napkins while World War II raged outside. The same hat he wore as he stood atop the podium at the city hall, celebrating his country’s long-awaited independence as its first president.\n\nStanding at the statue’s base, I could feel the energy Bourguiba once possessed as a leader, the will to mold a nation to his vision. As president, Bourguiba’s freedom went beyond the political; it was a departure from customs and symbols he deemed shackles. Even now, his bronze hand seemed to reject the grip of history, a hand that drank openly during Ramadan, a hand that tore through centuries-old expectations. Bourguiba saw himself as both liberator and reformer, a figure blazing a modern path through the thicket of tradition. To him, Islam was like the walls of a medina: beautiful, but confining. To let in progress, he had to open the gates. He fought the hijab, allowed women into schools and parliament seats, and outlawed polygamy, each act chipping against the granite of the past. But there is a line between a chisel and hammer, between the sculptor and the wrecking ball. Bourguiba never saw that line.\n\nMy aunts were among the first women in Tunisia to attend university (then an unheard-of opportunity in the Arab world). In old black-and-white photos, you can see them smiling, books held close to their chest, as they stood in the courtyard of a college that now finally belonged to them, too. It was Bourguiba’s hand that opened those doors, that allowed them to believe that maybe, just maybe, this was their freedom too.\n\nBut as I circled the statue, I began to notice small cracks along Bourguiba’s raised arm, tiny fractures that seemed to question his once unyielding grip on power. The metal strained against itself, a statue weighted by its own contradictions. Here, in the January 14th square—a space commemorating Tunisia’s independence and self-rule—the remnants of French culture still filled the air like lingering smoke. Conversations spilled from cafés, blending Arabic and French, mingling with the aroma of fresh croissants and carefully baked tartes. Renaults and Peugeots sputtered down the road, their exhaust curling in the sunlight, shading the avenue in a thin veil. Glass storefronts caught the light and reflected it back like fractured mirrors, each glint an echo of European elegance, a reminder of a legacy Bourguiba couldn’t completely erase, or maybe didn’t want to.\n\n\nEven his outstretched hand, once a symbol of liberation, now looked rusted, tainted by the slow, corrosive drip of time and power. What had once beckoned Tunisia toward freedom seemed now to claw at it, fingers curling inward, wrapped around the very chains he had once vowed to sever. For Bourguiba, it was never enough; it was freedom, but under his rules. In the name of progress, unions fell silent, their voices stifled by mandates from above; in the name of unity, political dissenters were swept away into shadowed cells. Bourguiba, the \"Supreme Combatant\" who once braved imprisonment for the nation's liberation, crowned himself \"President for Life.” I slowly stepped away from the statue and continued walking. The avenue stretched ahead, and as I came near its end, I could hear a murmur, the whisper of the past that refused to be silenced. From somewhere beyond the trees and tall buildings, the adhan swelled over the rooftops, rolling through the streets and drawing men in white robes toward the mosques. Closer to the border of the avenue, the smoke of hookah, thick and sweet, carried in, mingling near small restaurants with the aroma of couscous, lamb, and mloukhia, portals to a world old and rich, still humming beneath the layers Bourguiba tried to peel away. Even here, on this avenue mimicking Paris’s stone and glass, the city clung to its dust and sand, the soil it came from, the desert that lingered beneath every building, every boulevard.\n\nAt the edge of the avenue, on the corner of El Mourouj Street, the Café de Paris stood as it had for decades. Its rusted metal chairs sat neatly under bright blue umbrellas, shading patrons from the relentless sun. On warm afternoons, Bourguiba would walk down from his palace to sit here among the locals, waving off his bodyguards. With his Chechia tilted rakishly, he sipped cappuccinos for hours, his hands gesturing to match the pace of his words, as he debated the hot topics of the day. For all his flaws, Bourguiba carried an undeniable charm, a magnetism that could still mesmerize even as the edges of his image began to unravel.\n\nThe avenue quietly emptied into winding streets, eventually pulling me into the district of Sidi Bousaid. It was a historic district, dotted by the old white and blue houses of the Ottomans, overlooking a coastline flecked with turquoise waves and white sails. European families scattered along the beach, lounging in sun chairs under linen parasols, children sprinting barefoot toward the water. And high above, perched on the edge of the cliff like a sentinel, stood the President’s house, the palace Bourguiba claimed for his own—a pristine white villa, elegant but solid, timeless. Standing on that hill, looking back at the city, I wondered if Bourguiba saw his reign the same way. The palace, tucked between the Mediterranean waves and the dust of Tunisia, felt like a world apart from the city below. I could imagine Bourghiba sitting on the patio with his wife Mathilda, a president and his first lady, at the crossroads of her French heritage and his Tunisian roots, watching over the country.\n\n\nIt seems fitting that it was here, only streets away, that a fruit vendor lit himself aflame in 2011, sparking the Arab Spring, a fire of its own that roared through Tunisia, through Egypt, Syria, Libya, searing away old regimes. In a violent succession, the citizens of the Arab world gathered and revolted against their oppressors from within, casting off the shadows of Bourguiba and his successors.\n\nBourguiba himself had been forced to relinquish power long before, in 1987. After three long decades in power, age and autocracy had eroded his body and spirit, leaving only a fragile husk. A team of doctors, led by the general Zine Ben-Ali, deemed Bourguiba physically unfit to rule, and confined him to a quiet life in his hometown of Monastir. There, the streets he had once filled with his booming voice and fiery proclamations now passed him by in silence. The restless energy that had driven him to walk among crowds, captivating them with every gesture, was now stilled, his speeches replaced by the muted shuffle of an old man pacing an empty courtyard. After seizing power, Ben-Ali worked to erase Bourguiba’s presence from Tunisian streets, dismantling statues of his predecessor across the country as if to sand away the memory of his rule. But by 2016, only five years after Ben-Ali’s deposition, the city of Monastir resurrected its statue of Bourguiba, defying the effort to erase him. His bronze face emerged once again, defiant even in immobility, refusing to bow even to time. Some grumbled that Bourguiba belonged to a past best left buried, his legacy a thing too fractured and fraught to celebrate. But others looked up at his visage with something like reverence, recalling a time when Tunisia’s path seemed carved in stone, when it stood proud as a leader of the Arab world, before its dreams had soured.\n\nAs dusk seeped into the streets and lights began to flicker to life, I headed back through the avenue. In the fading light, Bourguiba’s face seemed to deepen in shadow, his jawline chiseled but softened, his gaze still fixed on that vision of the future. The streets around me pulsed with the movement of shoppers, but there, in that quiet corner of Tunis, his shadow lingered, the silent weight of choices cast in bronze, still daring his country forward, even now, to keep pace with him or fall away.\n\n55"
      },
      {
        "page": "56",
        "title": "The Oil Was Already Hot",
        "author": "Ramy Triki",
        "genre": "",
        "form": "verse",
        "text": "The oil was already hot\nwhen I arrived –\nthat kind of heat that hums\nbefore it burns.\nAt my grandmother’s house,\nthe table was always too small.\nA bowl of dough rested\nrising with a patience I didn't possess.\nShe fried because I loved them.\nThat was the recipe.\nI watched from the doorway,\nwaiting,\nas the dough surrendered:\nrose, blistered,\nturning the color of late afternoon.\nSugar afterward, always sugar.\nI learned sweetness before language.\n\nYears passed.\nThe house learned silence.\nThe oil cooled.\n*\nThis year, my roommate said,\nYou should make them.\nAs if memory were something\nyou could knead back into shape.\nBefore I knew it,\nflour was on the counter,\non my shirt,\non my mother’s hands.\nShe didn’t measure.\nShe never has.\nI stood beside her,\nfrying something\nfor the first time\nI could remember.\nThe oil spoke again.\n*\n\nMy brother hovered close.\nHis eyes widened\nat the same moment mine once had,\nIn awe\nof the miracle of dipping\nfried dough into pure sugar,\nthe way joy announces itself\nwithout asking permission.\nI saw myself there,\nwaiting.\n*\nLater, at someone else’s table,\na different grandmother worked.\nPalaçinka folded thin as breath.\nSheqerpare cracked open,\nsweet spilling out\nlike a secret that wanted telling.\nNo one explained anything.\nNo one had to.\n*\n\nWe eat what survives.\nWhat is passed hand to hand\nwhen words fail.\nWhat remembers us\nwhen we forget ourselves.\nThe oil keeps going.\nThe sugar waits.\nSomeone is always watching\nfrom the doorway.\n59"
      },
      {
        "page": "60",
        "title": "Vacation in Tirana",
        "author": "Platon Rama",
        "genre": "",
        "form": "prose",
        "text": "The bushes were burning? I only had a few seconds before we passed them, but I saw the shrubs on fire. By this point, my father had been driving in the Albanian summer heat for what felt like two hours. The sky was blue with a cheering bright hue that was starting to nudge me toward a tolerance of the rental car’s excessive tightness. And yet, there were patches of fire flanking the highway and I did not know why.\n\n“Do not worry. It’s not a big deal.” My dad tiredly assured me. For no fault of his own, I did not feel reassured.\n\nAfterall, it was 2023 and we had just escaped North America (which was still coughing under the saffron sky of Canada’s wildfires) and it was a hot season down here in Albania. I had heard of nearby fires in Greece getting out of control and felt selfishly worried about my accountability in the affair. What if the fire got out of hand? Would God blame me for not stopping it with a simple phone call? My brother delivered a hesitant glance at this point, his heavy eyebrows wrapped into a familiar position with the rest of his scrunched face. I was unsure this time whether he was still judging the trip’s necessity or if his expression was directed at me.\n\nTurns out it was just the farmers. Eventually, my suburban dwelling self put it together that controlled fires were normal and that God, I hope, was not going to judge me for failing to call Albania’s version of 9-1-1.\n\nIt was quiet now on the road. Almost peaceful—particularly when compared to the arguments our little rental car had witnessed only a few days earlier. On this trip, I was resigned to being the black sheep of the family. I made us targets of supposed backbiting and unwanted attention my dad often begged, in the way I strapped my beard, adjusted my clothing, and approached others—all in accordance with Islam. In these conversations he would levy the input of my similarly minded brother, and I hated that.\n\n\nBeing Muslim back in New York was easy enough, but apparently returning to a place where you are no longer the minority was somehow more shameful. We disputed whether I should be returning as an Albanian rooted in his heritage. The road continued with surrounding infrastructure developing into view. The mood in our car cooled (in contrast with the heat outdoors). Leaving a tight block had unsheathed our car from the squeezing folds of the tall buildings. Squinting—with light pouring through my window—I tipped my head toward my dad, and asked: “Are we there yet?”\n\n“One second—the turns here are a mess.” My father controlled the car. Accompanying his voice was the sound of a city jogging around us. It was an active day in Tirana, beeping with lights and pedestrians alike, far from the calmness of the beaches we’d been driving away from since this morning. “You know, your uncle actually studied here for a bit,” my dad said. “Oh? I didn’t know about that. That’s surprising.” My voice returned. “Yes, he traveled up and down these streets often.”\n\nI was genuinely surprised. I hadn’t been aware that the politics of the 1990s would have afforded my uncle a chance to study in Albania’s capital. Though he was Albanian himself, I knew his documents saddled him with a Macedonian residency—a place rooted in tension with Albania. I was also surprised because college students don’t usually end up as construction workers. Our little rental car zoomed forward, up the winding paths and cobblestone streets, by the shops of Albanian grandmas, and past dirtied cement walls. I could see the city behind me now, and could distinguish one rooftop from another. We were getting higher, and closer to our destination. 61\n\n“Here we are!” my dad exclaimed, as he negotiated the vehicle into the thin lot of a warm asphalt road. We all popped our doors and unloaded our sneakers from the car. I pulled our luggage to what I assumed was the hotel for tonight. There was a rectangle sliced into the wall, with a sign above it reading “reception” in three languages. Next to the hole, I found a line of people—really more of a crowd. We stood by a table.\n\nThis again?” my elder brother groaned.\n\n“Patience my friend, it’ll serve ya,” I replied, with some bite. He could not tolerate the old couple checking in slowly. I, with my expert diplomacy, continued extolling the virtues of patience and endurance. I added that such joys could only be tasted through discipline in liminal locations and experiences like these.\n\nAfter a quick update from my father, however, my fidelity to such patience (and to this particular building) took an immediate hit. What I assumed was our hotel turned out to merely be a cable car station that we would use to travel to our lodgings, nestled deep in the mountains. We collected our tickets. “No way I’m getting on a metal box 200 feet above the ground,” I said. “Come along Pati,” my brother teased. “Remember, being patient is a virtue.” “It’ll be fun,” my dad added. “It’s for the experience. Once in a lifetime.” His accent returned.\n\n“No,” I hesitated, starting to walk with them. “It will be scary.” We climbed up the wide, gray-yellow stairs. Forgetting the cable car, I didn’t even trust that this stairway could maintain our collective weight. The second floor greeted us with glass and an open room with a wall intentionally missing, inviting a view of nature that stretched out far and uninterrupted. All that now separated us from the comfortable solid floor and the clean, terrifying air was a small collection of five tourist groups. 62\n\nMy father, with his sweating face, grinned with anticipation for our next ride. My brother and I each frowned in likewise disappointment.\n\n“You scared?” I asked my brother.\n\n“Me? No, I’m not scared.”\n\n“How?”\n\n“Well, I’ve just accepted that I can die. Nothing to be sad about” “Quit kidding.”\n\n“No actually, I’m serious.”\n\n“Whatever.”\n\nI was anxious. My brother always insists he is not nervous when he’s clearly nervous. I could tell. It was in the way he held the railings: his chest ahead of his shoulders and his hands behind his back. The way he stretched his neck and rolled his jaw.\n\nMy father turned to us, “You guys, it’s almost here,” he said, his eyes set on the cart. “Are you boys excited?”\n\n“Maybe,” I said. My brother didn’t respond at the moment.\n\nMy father replied, “Come on, don’t joke.” His head swiveled back to the cart, “we came all the way here to see our country. To be together.” “Alright, I’m excited,” I said, hugging my dad.\n\nAfter the last packet of people leapt from the station, our cart came, elbowing around the track.\n\n\nWe grabbed our packages. I swept myself to one side of the cart, feeling it swing. My brother and father joined right after, sitting across from me while my legs guarded the baggage. We turned around slowly, ascending. My face looked back at the city skyline, my counterparts looking past me to the green mountain cliffs behind. My fear of capsizing stabilized with the cart.\n\nMy brother’s eyes darted to the warning label haloing above the supposedly locked doors. His focused eyebrows revealed a doubt about our total weight, and whether it respected the limit depicted in kilograms. For his part, he never trusted Balkan facilities or their capacity, whether it be in Albania or Macedonia.\n\nMy dad breathed heavily. His forehead now glistened with the warmed sweat of a summer’s headache. He tried finding solace in planning the camera app on his phone.\n\n“Are you okay babi?”\n\n“Yes,” my dad sighed. “I’m just tired from driving. And the heat. That’s all.” From what I could gather, my father was disappointed with this vacation so far. The constant complaining from his two sons tired him. Questioning himself, I imagine him regretting plotting a trip he knows will forecast ungrateful complaints. His head rested on the glass of the cart but he still remained worried about the comfort of his kids. He turned his face to me, “Stop being scared Pati. It’s safe, look down.”\n\nI unlocked my gaze, staring elsewhere from the sky or the floor. I looked down, beyond my seat. We were higher than I expected, and though the cable car’s shadow was shrinking rapidly, I could still make out the details of the land below. I saw the potted roofs of village homes, twined together with the unharvested roots of moss and vine. I noticed the roads stretching from houses increasingly padded with dirt as we strayed farther from the capital. Birds were flapping through the air, and I again saw the city behind them. 64\n\nThe higher the cable car trailed along the mountain, the more the country’s age revealed itself. Bunkers from Enver Hoxha’s four decades of reigning communism popped into view between the tree lines. What resembled unmarked pimples in the earth were likely the offspring of earlier artillery, dating from wars before Hoxha. Brown, dark rotten buildings—no longer distinguishable as either homes, mills, or pens—floated under us as I reviewed a flock of sheep dispersed across the field.\n\nBetween these reminders of Albania’s past, intense streams of nature flourished. The cliffs seemed to grow braver as we soared higher. Gone were the reminders of buildings or farms; only lakes, trees, and flowers remained. On the horizon lay the jagged purple of Tirana, kissing the sinking golden air. It was beautiful.\n\nThe cart slowed again; the incline steadied. At my back was the cable car’s destination, with a glass building behind it. The doors released, and my brother sighed. Our feet shuffled out of the cable car.\n\nMy brother and I happily removed our luggage from the cart, eager to process into the hotel in front of us. My father thanked the operator at the railing and pointed both of us toward the exit.\n\nMy father smiled and looked back down the line of the cable. I’d like to think he was imagining some sort of hike he could perform if he had all the time in the world—and not instead about the unfortunate attitudes of his two boys. From up here the roads looked thin, the houses small, and the fires we passed earlier were certainly invisible now. Whatever had been burning down there was no longer ours to manage. My dad wiped his forehead and stretched his back, already lighter.\n\n“Come,” he said.\n\nAnd this time, I followed without arguing.\n\n65"
      },
      {
        "page": "66",
        "title": "Epilogue of Islam",
        "author": "Hassaan Qadir",
        "genre": "",
        "form": "prose",
        "text": "Hasaan Qadir\n\nI’ve been reading a lot recently about historical practices of the shariah and Islamic civilization, and it can be saddening to see how it’s all fallen. I recently visited Athens, and all that remains of the Ottoman Mosque atop the Acropolis—like countless others across Iberia, the Balkans, Palestine, the Steppe, and India—are faint sketches and passing mentions in poorly-translated manuscripts.\n\nThe wise, pragmatic, divinely-inspired legal system that governed millions from Cordoba to Kuala Lumpur, maintaining predictability, stability, and justice for centuries even as dynasties rose and fell, has been torn to shreds. Laws of commerce and gender relations that once preserved societies are now dismissed as relics of a bygone age. Even a clear understanding of our history and way of life feels locked behind poor translations, pillaged libraries, and masterpieces lost to time. And so, even as we know Islam is eternal, we may sometimes feel dislocated from our true time period—like castaways floating on a life raft, making do with what little could be saved from the great ship of the Caliphate.\n\nBut I recently heard an Imam remind us that this is all part of Allah’s Plan. When He designed this final Ummah, this Ummah Wasat—the middle, primary, best nation—He prepared us for these very times. He foresaw the rise of atheistic rationalism, so He sent the most rationally supported Prophet. He foresaw the collapse of sexual ethics, so He gave us the firmest and most sustaining laws of chastity. He foresaw the supremacy of legal positivism, so He gave us the most decentralized yet unified jurisprudence.\n\n\nToday, when the world holds more Muslims than ever before, we realize that the story of Islam has not dwindled into a footnote of history—it has swelled into its greatest chapter. More Muslims have lived after 1800 than before it. This means the challenges and opportunities of modernity are not an afterword to Islam’s story, but the very stage Allah prepared for us.\n\nJust as thousands of Prophets culminated in Prophet Muhammad, countless generations of Muslims have culminated in us. And when the Day of Judgement arrives, and the Prophet looks upon his Ummah (and we make dua to be counted among them), he will not see us as stragglers washed ashore from a lost age, but as the vast bulk of his community—the ones he wept for, prayed for, and longed to meet. We are not the afterword of the Islamic story; we are its living chapter. We are not the epilogue; we are the main act. 67"
      },
      {
        "page": "69",
        "title": "Closing Reflections",
        "author": "",
        "genre": "",
        "form": "prose",
        "text": "So here we are.\n\nPerhaps you picked up this issue because a friend was featured. Perhaps you saw an announcement and grew curious. Perhaps you are not Muslim, but simply wanted to understand what our corner of the world looks like. Whatever brought you here, we are grateful you chose to spend your time with us.\n\nThank you, truly. This publication exists because writers were brave enough to share their work and readers were generous enough to receive it. We hope these pages offered reflection, inspiration, and maybe even a new way of seeing.\n\nBut this is not the end. The conversations within this issue—about family, faith, justice, purpose, and action—are meant to continue beyond it. If a line lingered with you, follow it. If an idea stirred something in you, explore it. If a poem has been waiting quietly in your notes, write it. Legacy grows when we participate in it! And this is only the beginning. ILM is both a magazine and a community, and we look forward to future issues, gatherings, and conversations. We hope you will join us—as readers, as writers, and as part of what comes next.\n\nUntil then, you are loved, you are bright, you are awesome. Keep writing.\n\nWith gratitude,\n\nThe ILM Editorial Team"
      }
    ]
  }
];

/* ===== PART 3 — SITE CODE ==================================== */
(function () {
  "use strict";
  var C = window.ILM_CONFIG || {};
  var ISSUES = window.ILM_ISSUES || [];
  var TONES = ["ink", "paper", "vellum"];
  var FONTS = {
    ruqaa: { family: '"Aref Ruqaa", "Amiri", serif' },
    naskh: { family: '"Amiri", serif' },
    kufi: { family: '"Reem Kufi", "Amiri", serif', css: "Reem+Kufi:wght@400;500" },
    nastaliq: { family: '"Gulzar", "Amiri", serif', css: "Gulzar" }
  };
  var LIBS = {
    pdfjs: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
    pdfWorker: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js",
    pageFlip: "https://cdn.jsdelivr.net/npm/page-flip@2.0.7/dist/js/page-flip.browser.js"
  };
  var ICONS = {
    book: '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    left: '<path d="m15 18-6-6 6-6"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    external: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'
  };

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function icon(n) {
    return '<svg class="icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[n] + "</svg>";
  }
  function loadScript(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement("script");
      s.src = src; s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  }
  function label(i) {
    var p = [];
    if (i.volume) p.push("Vol. " + i.volume);
    if (i.number) p.push("No. " + i.number);
    return p.join(" · ");
  }
  function fullLabel(i) { return [label(i), i.season].filter(Boolean).join(" · "); }
  function current() {
    for (var k = 0; k < ISSUES.length; k++) if (ISSUES[k].current) return ISSUES[k];
    return ISSUES[0];
  }
  function url(i) { return "issue.html?id=" + encodeURIComponent(i.id); }

  function cover(i) {
    if (i.cover) {
      return '<figure class="cover cover--image"><img src="' + esc(i.cover) + '" alt="Cover of ' + esc(i.title) + '" loading="lazy"></figure>';
    }
    var tone = i.tone || TONES[ISSUES.indexOf(i) % 3];
    return '<div class="cover cover--' + esc(tone) + '" role="img" aria-label="Cover of ' + esc(i.title) + '">' +
      '<div class="cover__frame">' +
      '<span class="cover__mag">' + esc(C.name) + "</span>" +
      '<span class="cover__ar" lang="ar" dir="rtl">' + esc(i.arabic || C.arabicMark) + "</span>" +
      '<span class="cover__bottom"><span class="cover__title">' + esc(i.title) + '</span><span class="cover__label">' + esc(fullLabel(i)) + "</span></span>" +
      "</div></div>";
  }

  function coverPanel(i, ghost) {
    return '<div class="cover-panel">' +
      (ghost ? '<span class="cover-panel__ghost" lang="ar" dir="rtl" aria-hidden="true">' + esc(i.arabic || C.arabicMark) + "</span>" : "") +
      '<a class="cover-panel__link" href="' + url(i) + '">' + cover(i) + "</a>" +
      (i.coverCredit ? '<p class="caption">' + esc(i.coverCredit) + "</p>" : "") +
      "</div>";
  }

  function actions(i, onIssuePage) {
    var b = [];
    if (onIssuePage) {
      if (i.pdf) b.push('<a class="btn btn-primary" href="#read">' + icon("book") + "Turn the pages</a>");
      else if (hasText(i)) b.push('<a class="btn btn-primary" href="#pieces">' + icon("book") + "Read the pieces</a>");
    } else {
      b.push('<a class="btn btn-primary" href="' + url(i) + '">' + icon("book") + "Read the issue</a>");
    }
    if (i.pdf) b.push('<a class="btn btn-secondary" href="' + esc(i.pdf) + '" download>' + icon("download") + "Download PDF</a>");
    if (i.printUrl) b.push('<a class="btn btn-ghost" href="' + esc(i.printUrl) + '" target="_blank" rel="noopener">' + icon("bag") + "Order a print copy</a>");
    return b.length ? '<div class="btn-row">' + b.join("") + "</div>" : "";
  }
  function hasText(i) { return (i.contents || []).some(function (c) { return c.text; }); }

  function toc(i, linkBase) {
    return (i.contents || []).map(function (c, n) {
      var meta = [c.genre, c.author].filter(Boolean).join(" · ");
      var title = c.text ? '<a href="' + (linkBase || "") + "#piece-" + (c.__n || n + 1) + '">' + esc(c.title) + "</a>" : esc(c.title);
      return '<div class="toc__row"><span class="toc__page">' + esc(c.page) + '</span><div><div class="toc__title">' + title + "</div>" +
        (meta ? '<div class="toc__meta">' + esc(meta) + "</div>" : "") + "</div></div>";
    }).join("");
  }

  function pieces(i) {
    var list = (i.contents || []).map(function (c, n) { return { c: c, n: n + 1 }; }).filter(function (x) { return x.c.text; });
    if (!list.length) return "";
    return '<section class="section anchor" id="pieces"><div class="wrap">' +
      '<div class="section-head"><h2>In This Issue</h2></div>' +
      '<div class="pieces">' + list.map(function (x) {
        var stanzas = String(x.c.text).split(/\n\s*\n/).map(function (s) { return "<p>" + esc(s).replace(/\n/g, "<br>") + "</p>"; }).join("");
        return '<article class="piece piece--' + (x.c.form === "prose" ? "prose" : "verse") + ' anchor" id="piece-' + x.n + '">' +
          '<header class="piece__head">' + (x.c.genre ? '<p class="kicker" style="margin:0">' + esc(x.c.genre) + "</p>" : "") +
          "<h3>" + esc(x.c.title) + "</h3>" +
          (x.c.author ? '<p class="piece__author">' + esc(x.c.author) + "</p>" : "") + "</header>" +
          '<div class="piece__text">' + stanzas + "</div>" +
          '<a class="piece__top" href="#contents">Back to contents</a>' +
          "</article>";
      }).join("") + "</div></div></section>";
  }

  function card(i) {
    var isCur = i === current();
    return '<article class="issue-card">' +
      '<a href="' + url(i) + '" aria-hidden="true" tabindex="-1">' + cover(i) + "</a>" +
      '<div><div class="issue-card__label">' + esc(label(i)) + (isCur ? '<span class="tag tag-accent">Current</span>' : "") + "</div>" +
      '<h3 class="issue-card__title"><a href="' + url(i) + '">' + esc(i.title) + "</a></h3>" +
      (i.season ? '<div class="issue-card__season">' + esc(i.season) + "</div>" : "") + "</div>" +
      '<div class="issue-card__links"><a href="' + url(i) + '">Read</a>' + (i.pdf ? '<a href="' + esc(i.pdf) + '" download>PDF</a>' : "") + "</div>" +
      "</article>";
  }

  /* ── home ── */
  function renderHome() {
    var hero = $("#hero");
    if (!hero) return;
    var i = current();
    if (!i) { hero.innerHTML = '<div class="wrap"><p class="lede">The first issue is on its way.</p></div>'; return; }
    hero.innerHTML = '<div class="wrap hero__grid">' +
      '<div class="hero__text">' +
      '<p class="kicker"><span class="tag tag-outline">Current issue</span></p>' +
      '<h1 class="hero__title">' + esc(i.title) + "</h1>" +
      '<p class="hero__meta">' + esc(fullLabel(i)) + "</p>" +
      '<div class="hero__rule"></div>' +
      (i.note ? '<p class="hero__note dropcap">' + esc(i.note) + "</p>" : "") +
      actions(i, false) +
      "</div>" + coverPanel(i, C.heroCalligraphy !== false) + "</div>";

    var tc = $("#home-contents");
    if (tc) {
      if (i.contents && i.contents.length) {
        var list = (i.contents || []).filter(function (c) { return +c.page >= 15 || !/^\d+$/.test(c.page); });
        var shown = (list.length ? list : i.contents).slice(0, 8);
        tc.innerHTML = toc({ contents: shown.map(function (c) { var o = {}; for (var k in c) o[k] = c[k]; o.__n = i.contents.indexOf(c) + 1; return o; }) }, url(i));
        var link = $("#contents-link");
        if (link) link.href = url(i);
      } else {
        tc.closest("section").hidden = true;
      }
    }
    var shelf = $("#home-shelf");
    if (shelf) {
      var past = ISSUES.filter(function (x) { return x !== i; }).slice(0, 4);
      if (past.length) shelf.innerHTML = past.map(card).join("");
      else shelf.closest("section").hidden = true;
    }
  }

  /* ── past issues ── */
  function renderArchive() {
    var el = $("#archive");
    if (!el) return;
    if (!ISSUES.length) { el.innerHTML = '<p class="lede">No issues yet.</p>'; return; }
    var groups = [], map = {};
    ISSUES.forEach(function (i) {
      var key = i.volume || "—";
      if (!map[key]) { map[key] = { vol: i.volume, items: [] }; groups.push(map[key]); }
      map[key].items.push(i);
    });
    el.innerHTML = groups.map(function (g) {
      var years = g.items.map(function (i) { var m = String(i.season || "").match(/\d{4}/); return m ? +m[0] : 0; }).filter(Boolean);
      var lo = Math.min.apply(null, years), hi = Math.max.apply(null, years);
      var span = years.length ? (lo === hi ? String(lo) : lo + "–" + hi) : "";
      return '<section class="volume" aria-labelledby="vol-' + esc(g.vol) + '">' +
        '<div class="volume__head"><h2 id="vol-' + esc(g.vol) + '">' + (g.vol ? "Volume " + esc(g.vol) : "Issues") + "</h2>" +
        (span ? '<span class="volume__years">' + esc(span) + "</span>" : "") + "</div>" +
        '<div class="shelf">' + g.items.map(card).join("") + "</div></section>";
    }).join("");
  }

  /* ── single issue ── */
  function renderIssue() {
    var el = $("#issue");
    if (!el) return;
    var id = new URLSearchParams(location.search).get("id");
    var i = ISSUES.filter(function (x) { return x.id === id; })[0] || current();
    if (!i) { el.innerHTML = '<div class="wrap page-head"><h1>Issue not found</h1><p><a href="issues.html">See all past issues</a></p></div>'; return; }
    document.title = i.title + " — " + C.name;
    var idx = ISSUES.indexOf(i), newer = ISSUES[idx - 1], older = ISSUES[idx + 1];
    el.innerHTML = '<div class="wrap">' +
      '<nav class="crumbs page-head" style="padding-bottom:0" aria-label="Breadcrumb"><a href="issues.html">Past Issues</a><span aria-hidden="true">/</span><span aria-current="page">' + esc(label(i) || i.title) + "</span></nav>" +
      '<div class="issue-hero">' + coverPanel(i, false) +
      "<div>" +
      '<p class="kicker">' + esc(fullLabel(i)) + (i === current() ? ' <span class="tag tag-accent">Current issue</span>' : "") + "</p>" +
      "<h1>" + esc(i.title) + "</h1>" +
      (i.arabic ? '<p class="issue-hero__ar" lang="ar" dir="rtl">' + esc(i.arabic) + "</p>" : '<div class="hero__rule"></div>') +
      (i.note ? '<p class="hero__note dropcap">' + esc(i.note) + "</p>" : "") +
      actions(i, true) + "</div></div></div>" +
      (i.pdf ? '<section class="section anchor" id="read"><div class="wrap"><div class="section-head"><h2>Turn the Pages</h2><a class="link-arrow" href="' + esc(i.pdf) + '" target="_blank" rel="noopener">Open the PDF ' + icon("external") + '</a></div>' +
        '<div class="book"><div class="book__stage"><p class="book__status" role="status">Preparing the pages…</p><div class="book__pages"></div></div>' +
        '<div class="book__controls" hidden><button class="btn btn-secondary book__prev" type="button" aria-label="Previous page">' + icon("left") + '</button><span class="book__count" aria-live="polite"></span><button class="btn btn-secondary book__next" type="button" aria-label="Next page">' + icon("right") + "</button></div></div></div></section>" : "") +
      (i.contents && i.contents.length ? '<section class="section anchor" id="contents"><div class="wrap"><div class="section-head"><h2>Contents</h2></div><div class="toc">' + toc(i) + "</div></div></section>" : "") +
      pieces(i) +
      '<section class="section"><div class="wrap pager">' +
      (older ? '<a href="' + url(older) + '"><span>Previous issue</span><span>' + esc(older.title) + "</span></a>" : "<span></span>") +
      (newer ? '<a href="' + url(newer) + '"><span>Next issue</span><span>' + esc(newer.title) + "</span></a>" : '<a href="issues.html"><span>The archive</span><span>All past issues</span></a>') +
      "</div></section>";
    if (i.pdf) buildBook(i, $(".book"));
  }

  /* ── page-turning reader: PDF.js renders each page, StPageFlip animates the turns ── */
  function buildBook(issue, root) {
    var status = $(".book__status", root), holder = $(".book__pages", root), controls = $(".book__controls", root);
    var fail = function () {
      status.innerHTML = "The page-turning reader couldn’t open this PDF here. <a href=\"" + esc(issue.pdf) + "\" target=\"_blank\" rel=\"noopener\">Open the PDF</a> instead.";
    };
    Promise.all([loadScript(LIBS.pdfjs), loadScript(LIBS.pageFlip)]).then(function () {
      var pdfjsLib = window.pdfjsLib;
      pdfjsLib.GlobalWorkerOptions.workerSrc = LIBS.pdfWorker;
      return pdfjsLib.getDocument(issue.pdf).promise;
    }).then(function (pdf) {
      var total = pdf.numPages;
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      return pdf.getPage(1).then(function (first) {
        var base = first.getViewport({ scale: 1 }), ratio = base.height / base.width;
        // Build every page as an empty sheet, open the book at once, then paint pages in the background.
        var html = "";
        for (var k = 0; k < total; k++) {
          var hard = k === 0 || k === total - 1 ? ' data-density="hard"' : "";
          html += '<div class="book__page"' + hard + '><img alt="Page ' + (k + 1) + '"></div>';
        }
        holder.innerHTML = html;
        var sheets = $$(".book__page img", holder);
        var w = 550, h = Math.round(w * ratio);
        var flip = new window.St.PageFlip(holder, {
          width: w, height: h, size: "stretch", minWidth: 260, maxWidth: 700,
          minHeight: Math.round(260 * ratio), maxHeight: Math.round(700 * ratio),
          showCover: true, maxShadowOpacity: 0.35, mobileScrollSupport: false, flippingTime: 700
        });
        flip.loadFromHTML($$(".book__page", holder));
        status.hidden = true;
        controls.hidden = false;
        var count = $(".book__count", root);
        var painted = {}, queue = [], busy = false;
        function paint(n) {
          return pdf.getPage(n).then(function (page) {
            var v = page.getViewport({ scale: 1 });
            var vp = page.getViewport({ scale: Math.min(1100, 600 * dpr) / v.width });
            var canvas = document.createElement("canvas");
            canvas.width = Math.floor(vp.width); canvas.height = Math.floor(vp.height);
            return page.render({ canvasContext: canvas.getContext("2d"), viewport: vp }).promise.then(function () {
              sheets[n - 1].src = canvas.toDataURL("image/jpeg", 0.85);
            });
          });
        }
        function pump() {
          if (busy) return;
          var n = queue.shift();
          while (n && painted[n]) n = queue.shift();
          if (!n) return;
          busy = true; painted[n] = true;
          paint(n).catch(function () {}).then(function () { busy = false; pump(); });
        }
        function prioritise(idx) {
          var near = [];
          for (var d = 0; d < 6; d++) { near.push(idx + 1 + d); if (d) near.push(idx + 1 - d); }
          near = near.filter(function (p) { return p >= 1 && p <= total && !painted[p]; });
          queue = near.concat(queue.filter(function (p) { return near.indexOf(p) < 0; }));
          pump();
        }
        for (var p = 1; p <= total; p++) queue.push(p);
        var update = function () {
          var idx = flip.getCurrentPageIndex();
          count.textContent = "Page " + (idx + 1) + " of " + total;
          prioritise(idx);
        };
        flip.on("flip", update); update();
        $(".book__prev", root).addEventListener("click", function () { flip.flipPrev(); });
        $(".book__next", root).addEventListener("click", function () { flip.flipNext(); });
        document.addEventListener("keydown", function (e) {
          var rect = root.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > window.innerHeight) return;
          if (e.key === "ArrowRight") flip.flipNext();
          if (e.key === "ArrowLeft") flip.flipPrev();
        });
      });
    }).catch(fail);
  }

  /* ── applications ── */
  function renderApplications() {
    $$("[data-apply]").forEach(function (a) {
      var kind = a.getAttribute("data-apply");
      var u = kind === "board" ? C.boardFormUrl : C.leadershipFormUrl;
      if (u) { a.href = u; a.target = "_blank"; a.rel = "noopener"; }
      else a.href = mailto(kind === "board" ? "Joining the board" : "Leadership application");
    });
    $$("[data-apps-status]").forEach(function (s) {
      s.innerHTML = C.leadershipOpen
        ? '<span class="tag tag-accent">Applications open' + (C.leadershipDeadline ? " · due " + esc(C.leadershipDeadline) : "") + "</span>"
        : '<span class="tag tag-neutral">Applications closed</span>';
    });
    $$("[data-when-open]").forEach(function (n) { n.hidden = !C.leadershipOpen; });
    $$("[data-when-closed]").forEach(function (n) { n.hidden = !!C.leadershipOpen; if (!C.leadershipOpen && C.leadershipOpensNote && n.hasAttribute("data-note")) n.textContent = C.leadershipOpensNote; });
  }

  /* ── contact (email links only — no forms on a static site) ── */
  function mailto(subject) { return "mailto:" + C.email + (subject ? "?subject=" + encodeURIComponent(subject) : ""); }
  function renderContact() {
    $$("[data-email]").forEach(function (a) {
      a.href = mailto(a.getAttribute("data-email"));
      if (!a.textContent.trim()) a.textContent = C.email;
    });
    $$("[data-instagram]").forEach(function (a) { a.href = C.instagram; if (!a.textContent.trim()) a.textContent = C.instagramHandle || "Instagram"; });
  }

  /* ── global ── */
  function setup() {
    var f = FONTS[C.calligraphy] || FONTS.ruqaa;
    if (f.css) {
      var l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=" + f.css + "&display=swap";
      document.head.appendChild(l);
    }
    document.documentElement.style.setProperty("--font-calligraphy", f.family);
    if (C.coverRatio) document.documentElement.style.setProperty("--cover-ratio", C.coverRatio);
    $$("[data-year]").forEach(function (n) { n.textContent = new Date().getFullYear(); });

    var t = $(".nav-toggle");
    if (t) t.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      t.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) { document.body.classList.remove("nav-open"); t && t.setAttribute("aria-expanded", "false"); }
    });
  }

  setup();
  renderHome();
  renderArchive();
  renderIssue();
  renderApplications();
  renderContact();
})();
