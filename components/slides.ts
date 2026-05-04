// FILE: components/slides.ts
// VERSION: 9.2 – Added "From Investigation to Accountability" slide

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
      "Enough to make",
      "Congress do its job."
    ],
    greenLines: [2],
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

  // 3 — WAR + ROOT PROBLEM (merged)
  {
    title: "They could stop it. They choose not to.",
    body: [
      "Most Americans want the wars stopped.",
      "Congress has the authority.",
      "They're choosing not to use it.",
      "Because your email goes in a folder.",
      "Your call gets logged by a staffer.",
      "None of it costs them anything."
    ],
    greenLines: [2, 5]
  },

  // 4 — CORE PRINCIPLE
  {
    title: "Anger doesn't move them.",
    body: [
      "Neither does blame. Neither does noise.",
      "What moves them is organized people in their own district —",
      "people they know will show up."
    ],
    greenLines: [1, 2]
  },

  // 5 — FREDERICK DOUGLASS IMAGE
  {
    type: "image",
    imageSrc: "/images/FredDoug-Power_Concedes_Nothing.jpg",
    imageAlt: "Frederick Douglass – Power concedes nothing without a demand"
  },

  // 6 — (previously missing, now used for teeth? but we'll keep as is – skip to 7)
  // 7 — A DEMAND THAT HAS TEETH (with image)
  {
    title: "",
    body: ["A demand that has TEETH."],
    greenLines: [0],
    largeFormat: true,
    teethImage: true
  },

  // 8 — PROOF + MECHANISM (merged)
  {
    title: "We know what works. Here's how we use it.",
    body: [
      "3.5% organized involvement forces change. Harvard proved it.",
      "1,500 people in a district can't be ignored. Ralph Nader proved it.",
      "So we count real people in your district — on the record.",
      "At 1,500, your rep has to respond publicly.",
      "Or answer for why they won't."
    ],
    greenLines: [3, 4]
  },

  // 9 — CONSEQUENCE (large format)
  {
    title: "",
    body: ["Not noise.", "Not opinion.", "Consequence."],
    greenLines: [2],
    largeFormat: true
  },

  // 10 — EVIDENCE BASE + TOWN HALL (merged)
  {
    title: "The petition and survey call the meeting.",
    body: [
      "The petition proves organized standing — verified, by district.",
      "The survey documents exactly what constituents demand.",
      "Together they trigger a mandatory town hall.",
      "Your rep shows up and answers — in public.",
      "Refusing to show up is its own answer."
    ],
    greenLines: [2, 4]
  },

  // 11 — THE MOMENT
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

  // 12 — ACCOUNTABILITY (custom layout)
  {
    accountabilityLayout: true
  },

  // 13 — NEW SLIDE: FROM INVESTIGATION TO ACCOUNTABILITY
  {
    title: "",
    body: [
      "1,500 signatures → town hall demanded.",
      "Rep must answer: Why won't you end the war?",
      "If the answer is corrupt or evasive → public investigation.",
      "We publish votes, donors, ties to war profiteers.",
      "Then: resign under pressure, or face a primary challenger who pre‑commits to the district's demands.",
      "That's the leverage. No recall needed."
    ],
    greenLines: [4],
    largeFormat: false
  },

  // 14 — REPLACEMENT (custom layout) – shifted from 13
  {
    replacementLayout: true
  },

  // 15 — ACRONYM – shifted from 14
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

  // 16 — FINAL CTA – shifted from 15
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