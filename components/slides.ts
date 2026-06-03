// FILE: components/slides.ts
// VERSION: 11.2 – Added divider line between logo and PAUSE for clear separation

const slides = [
  // 0 — SIGNAL SLIDE (cinematic title card)
  {
    customLayout: true,
    body: [
      {
        type: "logo",
        large: false,
        className: "animate-logo w-16 md:w-24 mt-2 mb-2"
      },
      {
        type: "spacer",
        height: 16
      },
      {
        type: "divider",
        className: "w-16 h-px bg-green-400/50 mx-auto animate-divider"
      },
      {
        type: "spacer",
        height: 16
      },
      {
        type: "text",
        content: "PAUSE.",
        large: true,
        green: true,
        bold: true,
        className: "text-5xl md:text-6xl font-semibold text-green-400 tracking-tight mb-6 animate-pause"
      },
      {
        type: "text",
        content: "Things are changing fast.",
        large: false,
        green: false,
        bold: false,
        className: "text-xl md:text-2xl font-medium leading-relaxed text-gray-200 max-w-md animate-copy-1"
      },
      {
        type: "spacer",
        height: 12
      },
      {
        type: "text",
        content: "Before reacting,\nchoose a response\nthat actually works.",
        large: false,
        green: false,
        bold: true,
        className: "text-lg md:text-xl font-medium leading-relaxed text-gray-300 max-w-md animate-copy-2"
      }
    ]
  },

  // 1 through 11 remain exactly the same as your current file...
  // (keeping your existing slides 1-11 unchanged)

  // 1 — PROBLEM (billboard style)
  {
    title: "Congress works for you.",
    body: ["They just forgot."],
    greenLines: []
  },

  // 2 — PROBLEM (second problem slide)
  {
    title: "Ignoring voters became politically safe.",
    body: [],
    greenLines: []
  },

  // 3 — HOPE
  {
    title: "PHIERS changes that.",
    body: [],
    greenLines: [],
    titleGreen: true
  },

  // 4 — PUNCH SLIDE (restored from original)
  {
    title: "",
    body: [
      "", 
      "", 
      { text: "A few minutes.", large: true, green: true, bold: true },
      { text: "Enough to make", large: false, green: false, bold: false },
      { text: "Congress listen.", large: false, green: true, bold: false }
    ],
    customTextLayout: true
  },

  // 5 — ORGANIZED PEOPLE
  {
    title: "",
    body: [
      { text: "Outrage", large: true, green: false, bold: true },
      { text: "doesn't move Congress.", large: false, green: false, bold: false },
      { type: "spacer", height: 24 },
      { text: "Organized people do.", large: true, green: true, bold: true },
      { type: "spacer", height: 20 },
      { text: "Especially in their own district.", large: false, green: false, bold: false, className: "text-gray-400 text-base" }
    ],
    customTextLayout: true
  },

  // 6 — FREDERICK DOUGLASS IMAGE
  {
    type: "image",
    imageSrc: "/images/FredDoug-Power_Concedes_Nothing.jpg",
    imageAlt: "Frederick Douglass – Power concedes nothing without a demand"
  },

  // 7 — TEETH IMAGE
  {
    title: "",
    body: ["A demand that has TEETH."],
    greenLines: [0],
    largeFormat: true,
    teethImage: true
  },

  // 8 — MECHANISM (shortened, 4 beats)
  {
    title: "How to make Congress listen.",
    body: [
      "1,500 verified people go on record.",
      "Public town hall demanded.",
      "Refuse? Investigation.",
      "Then voters decide."
    ],
    greenLines: [0, 1, 2, 3]
  },

  // 9 — ACCOUNTABILITY
  {
    replacementLayout: true
  },

  // 10 — PHIERS ACRONYM
  {
    title: "PHIERS",
    body: [
      { letter: "P", word: "POWER" },
      { letter: "H", word: "HELD" },
      { letter: "I", word: "IN" },
      { letter: "E", word: "EVERY" },
      { letter: "R", word: "REPS" },
      { letter: "S", word: "SEAT" }
    ],
    customLayout: true,
    punchLine: "Power Held In Every Representative's Seat (pronounced FIRES)"
  },

  // 11 — FINAL CTA
  {
    title: "One petition. Your district. On the record.",
    body: [
      "That's how pressure starts.",
      "Name. Email. Zip code.",
      "Make them answer."
    ],
    greenLines: [0, 2],
    isFinalSlide: true,
    compactFinal: true
  },
]

export default slides

// FILE: components/slides.ts