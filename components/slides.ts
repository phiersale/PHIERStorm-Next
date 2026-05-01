// FILE: components/slides.ts
// VERSION: 6.0 – Added standalone leverage slide + replacement/democracy slide; "Here's how it works" renamed to "The Mechanism"

const slides = [
  // 0 — IMAGE (ANCHOR)
  {
    type: "image",
    imageSrc: "/images/You_Are_Not_Powerless.jpg",
    imageAlt: "YOU ARE NOT POWERLESS"
  },

  // 1 — NEW: Less than 3 minutes (standalone punch)
  {
    title: "",
    body: ["Less than 3 minutes can create leverage."],
    greenLines: [0],
    largeFormat: true
  },

  // 2 — HOOK (originally slide 1)
  {
    title: "Congress responds to power.",
    body: [
      "Right now, they don't have to respond to you.",
      "PHIERS changes that.",
      "3 minutes. On the record. Consequence if they don't."
    ],
    greenLines: [2]
  },

  // 3 — EMOTIONAL TRIGGER (originally slide 2)
  {
    title: "They can stop it.",
    body: [
      "Wars escalate while Congress watches.",
      "They have the authority to act.",
      "They choose not to.",
      "That's not incompetence. That's a choice."
    ],
    greenLines: [3]
  },

  // 4 — ROOT PROBLEM (originally slide 3)
  {
    title: "Congress ignores you.",
    body: [
      "Because nothing forces them to respond.",
      "Not emails. Not calls. Not petitions.",
      "They can fix most of what's broken.",
      "They just don't have to."
    ],
    greenLines: [3]
  },

  // 5 — CORE PRINCIPLE (originally slide 4)
  {
    title: "Outrage doesn't move them.",
    body: [
      "Neither does blame. Neither does noise.",
      "Only organized pressure does.",
      "District-level. Counted. Visible. On the record."
    ],
    greenLines: [1, 2]
  },

  // 6 — FREDERICK DOUGLASS IMAGE (originally slide 5)
  {
    type: "image",
    imageSrc: "/images/FredDoug-Power_Concedes_Nothing.jpg",
    imageAlt: "Frederick Douglass – Power concedes nothing without a demand"
  },

  // 7 — PROOF (originally slide 6)
  {
    title: "The threshold is proven.",
    body: [
      "3.5% organized involvement forces change\n(Harvard Kennedy School)",
      "1,500 constituents in a district can't be ignored\n(Ralph Nader)",
      "435 districts. One coordinated demand.",
      "The math works. The only variable is turnout."
    ],
    greenLines: [3]
  },

  // 8 — MECHANISM (originally slide 7, title changed to "The Mechanism")
  {
    title: "The Mechanism",
    body: [
      "Every district is tracked separately.",
      "Real people. On the record. Counted by district.",
      "At 1,500, your representative must respond publicly.",
      "Or face investigation, primary challenge, or replacement."
    ],
    greenLines: [2, 3]
  },

  // 9 — CONSEQUENCE (originally slide 8)
  {
    title: "",
    body: ["Not noise.", "Not opinion.", "Consequence."],
    greenLines: [2],
    largeFormat: true
  },

  // 10 — THE MOMENT (originally slide 9)
  {
    title: "The landscape is already shifting.",
    body: [
      "The Voting Rights Act was gutted yesterday.",
      "The Iran War is breaking the global economy.",
      "Elected officials are resigning rather than face scrutiny.",
      "Congress is more exposed than it has been in generations.",
      "This is exactly when organized pressure becomes unstoppable."
    ],
    greenLines: [4]
  },

  // 11 — ACCOUNTABILITY (custom layout)
  {
    accountabilityLayout: true
  },

  // 12 — NEW: Replacement + democracy (custom layout)
  {
    replacementLayout: true
  },

  // 13 — ACRONYM (originally slide 11)
  {
    title: "PHIERS",
    body: [
      { letter: "P", word: "POWER" },
      { letter: "H", word: "HELD" },
      { letter: "I", word: "IN" },
      { letter: "E", word: "EVERY" },
      { letter: "R", word: "REP'S" },
      { letter: "S", word: "SEAT" }
    ],
    customLayout: true,
    punchLine: "Power held in every representative's seat."
  },

  // 14 — FINAL CTA (originally slide 12)
  {
    title: "One demand. On the record.",
    body: [
      "Congress must expand telehealth access — or be replaced.",
      "Name. Email. Zip code.",
      "That's all it takes to make them answer."
    ],
    greenLines: [0, 2],
    isFinalSlide: true
  }
]

export default slides