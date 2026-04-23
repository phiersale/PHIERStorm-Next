// FILE: components/slides.ts
// VERSION: 2.4.0 (added isFinalSlide flag to last slide)

const slides = [
  // 1 – Congress ignores you + can fix
  {
    title: "Congress ignores you.",
    body: [
      "Because they choose to. Nothing forces them to respond.",
      "Congress can fix most of what's broken. They choose not to."
    ],
    greenLines: [1]
  },
  // 2 – War + replacement
  {
    title: "Congress can stop this war.",
    body: [
      "They haven't. Now they're talking draft.",
      "Proof they have a different agenda. They don't represent their constituents.",
      "For this, we will replace them before July 4th."
    ],
    greenLines: [2]
  },
  // 3 – Opinions vs leverage
  {
    title: "Opinions don't force action.",
    body: [
      "Outrage doesn't force action. Noise doesn't force action.",
      "Only leverage works — but only if it's organized the right way: district‑level, online, and viral."
    ],
    greenLines: [1]
  },
  // 4 – Tracking + 1,500 (Nader + Harvard)
  {
    title: "We track how many people in each congressional district have gone on record.",
    body: [
      "Alone, you're easy to ignore.",
      "1,500 people in your district are not — Ralph Nader",
      "3.5% defeats authoritarians every time — Harvard"
    ],
    greenLines: [1, 2]
  },
  // 5 – Tipping point
  {
    title: "That's the tipping point.",
    body: [
      "Just enough people — in the right place, at the same time.",
      "1,500 people per district. Across 435 districts, that's about 650,000 people.",
      "That's all it takes to make Congress do its job."
    ],
    greenLines: [2]
  },
  // 6 – On record → leverage
  {
    title: "When 1,500 people are on record,",
    body: [
      "representatives are forced to respond to the public — or risk being replaced.",
      "Not opinion. Not noise.",
      "Consequence they can't ignore. That's leverage."
    ],
    greenLines: [2]
  },
  // 7 – PHIERS logo slide (custom layout)
  {
    title: "PHIERS",
    body: ["POWER", "HELD", "IN", "EVERY", "REPS", "SEAT"],
    customLayout: true,
    punchLine: "Power Held In Every Reps Seat"
  },
  // 8 – Final slide (with staggered fade-in animation)
  {
    title: "",
    body: [
      "End war. Stop Trump. Recover.",
      "I'm on record.",
      "Congress must respond — or get replaced."
    ],
    greenLines: [],
    isFinalSlide: true
  }
];

export default slides;

// FILE: components/slides.ts (end)
// VERSION: 2.4.0