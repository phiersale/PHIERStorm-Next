// FILE: components/slides.ts
// VERSION: 9.0 – Plain spoken, kitchen table, no kings

const slides = [
  // 0 — IMAGE (ANCHOR)
  {
    type: "image",
    imageSrc: "/images/You_Are_Not_Powerless.jpg",
    imageAlt: "YOU ARE NOT POWERLESS"
  },

  // 1 — PUNCH
  {
    title: "",
    body: [
      "A few minutes.",
      "Enough to make Congress do its job."
    ],
    greenLines: [1],
    largeFormat: true
  },

  // 2 — HOOK
  {
    title: "Congress works for you.",
    body: [
      "They just forgot that.",
      "PHIERS reminds them.",
      "Your name. Your district. On the record.",
      "And they have to answer for it."
    ],
    greenLines: [3]
  },

  // 3 — WAR
  {
    title: "They could stop the wars today.",
    body: [
      "Most Americans want them stopped.",
      "Congress has the authority.",
      "They're choosing not to use it.",
      "Because nobody holds them accountable."
    ],
    greenLines: [3]
  },

  // 4 — ROOT PROBLEM
  {
    title: "They ignore you because they can.",
    body: [
      "Your email goes in a folder.",
      "Your call gets logged by a staffer.",
      "Your petition disappears into a database.",
      "None of it costs them anything."
    ],
    greenLines: [3]
  },

  // 5 — CORE PRINCIPLE
  {
    title: "Anger doesn't move them.",
    body: [
      "Neither does blame. Neither does noise.",
      "What moves them is organized people in their own district —",
      "people they know will show up."
    ],
    greenLines: [1, 2]
  },

  // 6 — FREDERICK DOUGLASS IMAGE
  {
    type: "image",
    imageSrc: "/images/FredDoug-Power_Concedes_Nothing.jpg",
    imageAlt: "Frederick Douglass – Power concedes nothing without a demand"
  },

  // 7 — A DEMAND THAT HAS TEETH
  {
    title: "",
    body: ["A demand that has TEETH."],
    greenLines: [0],
    largeFormat: true
  },

  // 7 — PROOF
  {
    title: "We know what works.",
    body: [
      "When 3.5% of people get organized, governments move.",
      "That's not a theory. Harvard studied it.",
      "When 1,500 people in a district speak together,",
      "their representative cannot ignore them.",
      "Ralph Nader proved it. We're using it."
    ],
    greenLines: [3, 4]
  },

  // 8 — MECHANISM
  {
    title: "Here's what we do.",
    body: [
      "We count how many people in your district go on record.",
      "Real people. Real names. Real zip codes.",
      "When we hit 1,500, your rep has to respond publicly.",
      "Or answer for why they won't."
    ],
    greenLines: [2, 3]
  },

  // 9 — CONSEQUENCE (large format)
  {
    title: "",
    body: ["Not noise.", "Not opinion.", "Consequence."],
    greenLines: [2],
    largeFormat: true
  },

  // 10 — THE EVIDENCE BASE
  {
    title: "The petition and the survey are the proof.",
    body: [
      "The petition says: this many people in your district are watching.",
      "The survey says: here's exactly what they want.",
      "Should we end the war? Yes or no.",
      "Should everyone have access to affordable healthcare? Yes or no.",
      "Real questions. Real answers. Published for everyone to see.",
      "Not opinions. A verified record of what your neighbors want."
    ],
    greenLines: [4, 5]
  },

  // 11 — THE TOWN HALL
  {
    title: "Then we call the meeting.",
    body: [
      "1,500 signatures means you get a town hall.",
      "Your rep shows up and answers the questions — in public.",
      "Not talking points. The actual things you asked about.",
      "They can agree, disagree, or explain themselves.",
      "But they have to show up.",
      "Refusing to show up is its own answer."
    ],
    greenLines: [0, 5]
  },

  // 12 — THE MOMENT
  {
    title: "The window is open right now.",
    body: [
      "People are paying attention.",
      "Officials are being held accountable.",
      "Many are choosing to resign.",
      "Organized people are winning right now.",
      "This is that moment. Now is our time."
    ],
    greenLines: [3, 4]
  },

  // 13 — ACCOUNTABILITY (custom layout)
  {
    accountabilityLayout: true
  },

  // 14 — REPLACEMENT (custom layout)
  {
    replacementLayout: true
  },

  // 15 — ACRONYM
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
    punchLine: "Power held in every representative's seat."
  },

  // 16 — FINAL CTA
  {
    title: "Your name. Your district. On the record.",
    body: [
      "That's all it takes to start the process.",
      "Name. Email. Zip code.",
      "Make them answer."
    ],
    greenLines: [0, 2],
    isFinalSlide: true
  }
]

export default slides