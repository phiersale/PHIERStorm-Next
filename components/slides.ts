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
        className: "w-28 md:w-36 mt-2 mb-2 opacity-0 animate-fadeIn duration-[450ms] delay-[0ms]"
      },
      {
        type: "spacer",
        height: 16
      },
      {
        type: "divider",
        className: "w-16 h-px bg-green-400/50 mx-auto opacity-0 animate-fadeIn duration-[250ms] delay-[550ms]"
      },
      {
        type: "spacer",
        height: 40
      },
      {
        type: "text",
        content: "PAUSE.",
        large: true,
        green: true,
        bold: true,
        className:
          "text-5xl md:text-6xl font-semibold text-green-400/60 tracking-[0.02em] mb-6 opacity-0 animate-fadeIn duration-[400ms] delay-[900ms]"
      },
      {
        type: "text",
        content: "Things are changing fast.",
        large: false,
        green: false,
        bold: true,
        className:
          "text-xl md:text-2xl font-medium leading-relaxed text-gray-200 max-w-md opacity-0 animate-fadeIn duration-[400ms] delay-[1250ms]"
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
        bold: false,
        className:
          "text-lg md:text-xl font-medium leading-relaxed text-slate-200 max-w-md opacity-0 animate-fadeIn duration-[400ms] delay-[1600ms]"
      }
    ],
    className: "bg-neutral-950 flex flex-col items-center justify-center py-20"
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

   // 8 — MECHANISM (clean, text-only — matches the centered rhythm of slides 4-5)
  {
    title: "",
    body: [
      { text: "How to make Congress listen.", large: false, green: false, bold: true, className: "text-2xl md:text-3xl font-bold text-white" },
      { type: "spacer", height: 32 },
      { text: "500 signatures — your Rep shows up.", green: true, bold: true },
      { type: "spacer", height: 12 },
      { text: "1,000 signatures — your Senator shows up.", green: true, bold: true },
      { type: "spacer", height: 12 },
      { text: "1,500 — the district is organized.", green: true, bold: true },
      { type: "spacer", height: 32 },
      { text: "Public town hall demanded.", green: true, bold: true, className: "text-xl md:text-2xl text-green font-bold" }
    ],
    customTextLayout: true
  },

  // 9 — TOWN HALL MEETING (image slide - full width on mobile)
  {
    type: "image",
    imageSrc: "/images/town_hall_meeting.jpg",
    imageAlt: "Town hall meeting — the district organized",
    className: "bg-neutral-950 flex flex-col items-center justify-center py-4 md:py-12",
    imageClassName: "w-full md:w-[72%] max-w-5xl mx-auto animate-fadeInSlow",
    caption: "When 1,500 people organize, the district listens.",
    captionClassName: "text-center text-green-400 text-base md:text-xl font-medium mt-2 md:mt-4 tracking-tight max-w-3xl mx-auto"
  },

  // 10 — RALPH NADER (click-to-enlarge + fifteen hundred quote)
  {
    type: "image",
    imageSrc: "/images/RalphNader-500-Unstoppable_Change.jpg",
    imageAlt: "Ralph Nader — Unstoppable Change",
    className: "bg-neutral-950 flex flex-col items-center justify-center py-4 md:py-12",
    imageClassName: "w-full md:w-[72%] max-w-5xl mx-auto animate-fadeInSlow cursor-pointer transition-transform hover:scale-[1.02]",
    imageClickable: true,
    caption: "1,500 organized people can overcome the influence of money in politics.",
    captionClassName: "text-center text-green-400 text-lg md:text-2xl font-semibold mt-4 md:mt-6 tracking-tight max-w-3xl mx-auto",
    subCaption: "— Ralph Nader",
    subCaptionClassName: "text-center text-gray-400 text-sm md:text-base mt-2",
    showTapHint: true
  },

  // 11 — ACCOUNTABILITY
  {
    replacementLayout: true
  },

  // 12 — PHIERS ACRONYM
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

  // 13 — FINAL CTA
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