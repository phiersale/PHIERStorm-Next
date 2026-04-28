// VERSION: 4.4.1 – added title to slide 5 & mobileScale for Douglass quote

const slides = [
  // 0 — IMAGE (ANCHOR)
  {
    type: "image",
    imageSrc: "/images/You_Are_Not_Powerless.jpg",
    imageAlt: "YOU ARE NOT POWERLESS"
  },

  // 1 — HOOK (SERIOUS, NOT SALESY)
  {
    title: "It's Not Too Late.",
    body: [
      "It takes less than 3 minutes to force a response from Congress.",
      "Right now, they don’t respond because they don’t have to.",
      "PHIERS changes that.",
      "Either they do their job or risk being replaced."
    ],
    greenLines: [0, 3]
  },

  // 2 — EMOTIONAL TRIGGER (WAR / POWER ABUSE)
  {
    title: "Congress can stop this.",
    body: [
      "They are talking escalation.",
      "They can act — and choose not to.",
      "More and more people are starting to see it.",
      "They respond only when the public forces them to."
    ],
    greenLines: [3]
  },

  // 3 — ROOT PROBLEM
  {
    title: "Congress ignores you.",
    body: [
      "Because they can.",
      "Nothing forces them to respond.",
      "They can fix most of what's broken — but choose not to.",
      "PHIERS makes them answer to you."
    ],
    greenLines: [1, 3]
  },

  // 4 — CORE PRINCIPLE (CLEAN, NO TITLE – DOUGLASS QUOTE IS ON THE IMAGE)
  {
    title: "Outrage doesn’t create change.",
    body: [
      "Outrage doesn’t create change. Neither does hate or blame",
      "Only leverage does.",
      "If it's organized — district-level, online, and visible."
    ],
    greenLines: [1, 2]
  },

  // 5 — FREDERICK DOUGLASS IMAGE SLIDE (title added, +15% larger on mobile)
  {
    type: "image",
    title: "Power creates change.",               // <-- ADDED: matches other title slides
    imageSrc: "/images/FredDoug-Power_Concedes_Nothing.jpg",
    imageAlt: "Frederick Douglass – Power concedes nothing without a demand",
    mobileScale: 1.15                         // <-- ADDED: makes image 15% larger on mobile
  },

  // 6 — PROOF (UPDATED)
  {
    title: "Our plan works. The milestones are proven.",
    body: [
      "3.5% involvement forces change — Harvard Kennedy School",
      "1,500 people in a district can’t be ignored — Ralph Nader",
      "PHIERS will apply this to all 435 districts",
      "The only thing missing is you"
    ],
    greenLines: [2]
  },

  // 7 — MECHANISM (was slide 6)
  {
    title: "Here’s how it works.",
    body: [
      "We track how many people in each district go on record.",
      "Every district counts separately.",
      "Not opinions — real people, counted.",
      "At 1,500, representatives are forced to respond.",
      "Or they risk being replaced."
    ],
    greenLines: [2, 3]
  },

  // 8 — CONSEQUENCE (was slide 7)
  {
    title: "",
    body: ["Not noise.", "Not opinion.", "Consequence."],
    greenLines: [2],
    largeFormat: true
  },

  // 9 — ORDER OUT OF CHAOS (was slide 8)
  {
    title: "ORDER OUT OF CHAOS",
    body: [
      "Right now, resignations, investigations, and impeachment proceedings are reshaping the landscape.",
      "This moment gives the public real leverage."
    ],
    greenLines: [1]
  },

  // 10 — BRAND LOCK (ACRONYM) – was slide 9
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

  // 11 — DEMAND + CTA (FINAL SLIDE) – was slide 10
  {
    title: "Demand: Congress must reclaim war powers & expand telehealth access.",
    body: [
      "Get on the record.",
      "Name. Email. Zip code.",
      "Congress must respond or be replaced."
    ],
    isFinalSlide: true
  }
]

export default slides