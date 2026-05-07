// FILE: components/slides.ts
// VERSION: 10.0 – Lean deck (10 slides, compressed mechanism)

const slides = [
  // 0 — IMAGE ANCHOR
  {
    type: "image",
    imageSrc: "/images/You_Are_Not_Powerless.jpg",
    imageAlt: "YOU ARE NOT POWERLESS"
  },

  // 1 — THE PROMISE
  {
    title: "",
    body: [
      "A few minutes.",
      "Enough to make",
      "Congress listen."
    ],
    greenLines: [2],
    largeFormat: true
  },

  // 2 — THE HOOK (merged)
  {
    title: "Congress works for you.",
    body: [
      "They just forgot that.",
      "Ignoring people became politically safe.",
      "PHIERS changes the cost of ignoring you.",
      "Your name. Your district. On the record."
    ],
    greenLines: [2]
  },

  // 3 — CORE PRINCIPLE
  {
    title: "Anger doesn't move them.",
    body: [
      "Organized people do.",
      "Especially in their own district."
    ],
    greenLines: [0, 1]
  },

  // 4 — FREDERICK DOUGLASS IMAGE
  {
    type: "image",
    imageSrc: "/images/FredDoug-Power_Concedes_Nothing.jpg",
    imageAlt: "Frederick Douglass – Power concedes nothing without a demand"
  },

  // 5 — TEETH IMAGE
  {
    title: "",
    body: ["A demand that has TEETH."],
    greenLines: [0],
    largeFormat: true,
    teethImage: true
  },

  // 6 — CONSEQUENCE
  {
    title: "",
    body: [
      "Not noise.",
      "Not outrage.",
      "Consequence."
    ],
    greenLines: [2],
    largeFormat: true
  },

  // 7 — THE MECHANISM (merged, single escalation)
  {
    title: "How pressure becomes unavoidable.",
    body: [
      "1,500 verified people in a district go on record.",
      "A public town hall is demanded.",
      "If they refuse or lie → investigation.",
      "Votes. Donors. Financial ties. Published publicly.",
      "Then voters decide what happens next."
    ],
    greenLines: [1, 2, 3]
  },

  // 8 — ACCOUNTABILITY (cold procedural)
  {
    replacementLayout: true
  },

   // 9 — PHIERS ACRONYM (original meaning)
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
    punchLine: "Power Held In Every Representative's Seat"
  },

  // 10 — FINAL CTA
  {
    title: "Your name. Your district. On the record.",
    body: [
      "That's how pressure starts.",
      "Name. Email. Zip code.",
      "Make them answer."
    ],
    greenLines: [0, 2],
    isFinalSlide: true
  }
]

export default slides