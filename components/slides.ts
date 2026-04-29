// FILE: components/slides.ts
// VERSION: 5.0 – v2 rewrite (escalation logic, earned pivot, no wasted lines)

const slides = [
  // 0 — IMAGE (ANCHOR)
  {
    type: "image",
    imageSrc: "/images/You_Are_Not_Powerless.jpg",
    imageAlt: "YOU ARE NOT POWERLESS"
  },

  // 1 — HOOK (escalation first, time stat at the end)
  {
    title: "Congress responds to power.",
    body: [
      "Right now, they don't have to respond to you.",
      "PHIERS changes that.",
      "3 minutes. On the record. Consequence if they don't."
    ],
    greenLines: [2]   // last line green
  },

  // 2 — EMOTIONAL TRIGGER (choice, not incompetence)
  {
    title: "They can stop it.",
    body: [
      "Wars escalate while Congress watches.",
      "They have the authority to act.",
      "They choose not to.",
      "That's not incompetence. That's a choice."
    ],
    greenLines: [3]   // last line green
  },

  // 3 — ROOT PROBLEM (no solution yet)
  {
    title: "Congress ignores you.",
    body: [
      "Because nothing forces them to respond.",
      "Not emails. Not calls. Not petitions.",
      "They can fix most of what's broken.",
      "They just don't have to."
    ],
    greenLines: [3]   // last line green
  },

  // 4 — CORE PRINCIPLE (outrage doesn't move them)
  {
    title: "Outrage doesn't move them.",
    body: [
      "Neither does blame. Neither does noise.",
      "Only organized pressure does.",
      "District-level. Counted. Visible. On the record."
    ],
    greenLines: [1, 2]   // second and third lines green
  },

  // 5 — FREDERICK DOUGLASS IMAGE (unchanged)
  {
    type: "image",
    imageSrc: "/images/FredDoug-Power_Concedes_Nothing.jpg",
    imageAlt: "Frederick Douglass – Power concedes nothing without a demand"
  },

   // 6 — PROOF (threshold is proven)
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

  // 7 — MECHANISM (how it works, consequence at end)
  {
    title: "Here's how it works.",
    body: [
      "Every district is tracked separately.",
      "Real people. On the record. Counted by district.",
      "At 1,500, your representative must respond.",
      "Or face being replaced."
    ],
    greenLines: [2, 3]   // two green lines at the end
  },

  // 8 — CONSEQUENCE (large format, no title)
  {
    title: "",
    body: ["Not noise.", "Not opinion.", "Consequence."],
    greenLines: [2],
    largeFormat: true
  },

  // 9 — THE MOMENT (renamed from "ORDER OUT OF CHAOS")
  {
    title: "The landscape is already shifting.",
    body: [
      "Resignations. Investigations. Public pressure mounting.",
      "Congress is more exposed than it has been in decades.",
      "This is when organized pressure becomes unstoppable."
    ],
    greenLines: [2]   // last line green
  },

  // 10 — ACRONYM (unchanged except "REP'S")
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

  // 11 — FINAL CTA (single demand: telehealth)
  {
    title: "One demand. On the record.",
    body: [
      "Congress must expand telehealth access — or be replaced.",
      "Name. Email. Zip code.",
      "That's all it takes to make them answer."
    ],
    greenLines: [0, 2],   // first and last line green
    isFinalSlide: true
  }
]

export default slides