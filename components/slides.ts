// FILE: components/slides.ts
// VERSION: 2.2.0 (REPS, remove ellipsis, tighten slide 6)

const slides = [
  // 1 – Merged: Congress doesn't listen + Congress can fix
  {
    title: "Congress ignores you.",
    body: [
      "Not because they can't. Because nothing forces them to.",
      "Congress can fix most of what's broken. They just don't have to."
    ],
    greenLines: [1]
  },

  // 2 – Merged: War + replacement
  {
    title: "Congress can stop this war.",
    body: [
      "They haven't. That failure is proof.",
      "Proof they are not representing their constituents — and that gives us a way to replace them."
    ],
    greenLines: [1]
  },

  // 3 – Opinions/outrage/noise vs leverage
  {
    title: "Opinions don't force action.",
    body: [
      "Outrage doesn't force action. Noise doesn't force action.",
      "Only leverage works — but only if it's organized the right way (district level, online, and viral)."
    ],
    greenLines: [1]
  },

  // 4 – Tracking + 1,500 (Nader)
  {
    title: "We track how many people in each congressional district have gone on record.",
    body: [
      "Alone, you're easy to ignore.",
      "1,500 people in your district are not.",
      "Proven in civic campaigns — Ralph Nader"
    ],
    greenLines: [1, 2]
  },

  // 5 – Tipping point + nationwide math (tightened)
  {
    title: "That's the tipping point.",
    body: [
      "Just enough people — in the right place, at the same time.",
      "1,500 people per district. Across 435 districts, that's about 650,000 people. That's all it takes."
    ],
    greenLines: [1]
  },

  // 6 – On record → leverage (tightened)
  {
    title: "When 1,500 people are on record,",
    body: [
      "representatives are forced to respond in public. Or they risk being replaced.",
      "Not opinion. Not noise. Consequence they can't ignore. That's leverage."
    ],
    greenLines: [1]
  },

  // 7 – PHIERS acronym 
  {
    title: "PHIERS",
    body: ["POWER", "HELD", "IN", "EVERY", "REPS", "SEAT"],
    customLayout: true,
    punchLine: "Power Held In Every Rep's Seat"
  },

  // 8 – Final slide (ellipsis removed)
  {
    title: "",
    body: [
      "I agree",
      "I'm on record",
      "So they respond — or get replaced."
    ],
    isFinalSlide: true,
    greenLines: []
  }
];

export default slides;

// FILE: components/slides.ts (end)
// VERSION: 2.2.0