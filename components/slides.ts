// FILE: components/slides.ts
// VERSION: 7.0 – Final copy & structure per 2026-05-01 review

const slides = [
  // 0 — IMAGE (ANCHOR)
  {
    type: "image",
    imageSrc: "/images/You_Are_Not_Powerless.jpg",
    imageAlt: "YOU ARE NOT POWERLESS"
  },

  // 1 — PUNCH (less marketing‑y)
  {
    title: "",
    body: ["This takes minutes. The impact is leverage."],
    greenLines: [0],
    largeFormat: true
  },

  // 2 — HOOK
  {
    title: "Congress responds to power.",
    body: [
      "Right now, they don't have to respond to you.",
      "PHIERS changes that.",
      "On the record. Counted in your district. Consequences if they don't respond."
    ],
    greenLines: [2]
  },

  // 3 — WAR / DECIDING MOMENT (sharper, connects to leverage)
  {
    title: "They can stop it.",
    body: [
      "Wars escalate while Congress watches.",
      "They have the authority to stop it.",
      "They are choosing not to act.",
      "And they will only act when the public forces them to."
    ],
    greenLines: [3]
  },

  // 4 — ROOT PROBLEM (sharper cause‑effect)
  {
    title: "Congress ignores you.",
    body: [
      "Because nothing forces them to respond.",
      "Not emails. Not calls. Not petitions.",
      "They can fix most of what's broken.",
      "Because nothing makes them."
    ],
    greenLines: [3]
  },

  // 5 — CORE PRINCIPLE (leverage language unified)
  {
    title: "Outrage doesn't move them.",
    body: [
      "Outrage doesn't move them.",
      "Neither does blame. Neither does noise.",
      "Only organized leverage does.",
      "District-level. Counted. Visible. On the record."
    ],
    greenLines: [2, 3]
  },

  // 6 — FREDERICK DOUGLASS IMAGE (unchanged)
  {
    type: "image",
    imageSrc: "/images/FredDoug-Power_Concedes_Nothing.jpg",
    imageAlt: "Frederick Douglass – Power concedes nothing without a demand"
  },

  // 7 — PROOF (stronger, personal)
  {
    title: "The threshold is proven.",
    body: [
      "3.5% organized involvement forces change (Harvard Kennedy School)",
      "1,500 constituents in a district can't be ignored (Ralph Nader)",
      "Every district is measurable.",
      "The only variable is whether people show up."
    ],
    greenLines: [3]
  },

  // 8 — MECHANISM (legally safer, clearer)
  {
    title: "The Mechanism",
    body: [
      "We track how many people in each district go on record.",
      "Not opinions — real people, counted.",
      "At 1,500, it becomes visible to the public, the press, and other voters.",
      "That visibility creates accountability."
    ],
    greenLines: [1, 3]
  },

  // 9 — CONSEQUENCE (untouched)
  {
    title: "",
    body: ["Not noise.", "Not opinion.", "Consequence."],
    greenLines: [2],
    largeFormat: true
  },

  // 10 — THE MOMENT (universal, less fragile)
  {
    title: "The landscape is already shifting.",
    body: [
      "The system is under strain.",
      "Trust is breaking down.",
      "Officials are being exposed.",
      "People are paying attention again.",
      "This is when leverage works."
    ],
    greenLines: [4]
  },

  // 11 — ACCOUNTABILITY (custom layout, unchanged)
  {
    accountabilityLayout: true
  },

  // 12 — REPLACEMENT & DEMOCRACY (large format, unchanged)
  {
    title: "",
    body: [
      "We replace them. Legally.",
      "Before the next election.",
      "That's not a threat.",
      "That's democracy working the way it was designed to."
    ],
    greenLines: [1, 3],
    largeFormat: true
  },

  // 13 — ACRONYM (fixed apostrophe)
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

  // 14 — FINAL CTA (broader, less specific)
  {
    title: "One demand. On the record.",
    body: [
      "Set the demand. Put it on the record.",
      "Name. Email. Zip code.",
      "Make your representative answer."
    ],
    greenLines: [2],
    isFinalSlide: true
  }
]

export default slides