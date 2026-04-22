// FILE: components/slides.ts
// VERSION: 1.1.0 (stacked letters for PHIERS slide)

const slides = [
  
   // 1
  { 
    title: "Congress doesn't listen to you.", 
    body: [
      "Why? Because nothing forces them to."
    ],
    greenLines: [1]
  },
  // 2
  { 
    title: "Congress can fix most of what's broken.", 
    body: ["They chose not to."],
    greenLines: [0]
  },
  // 3
  { 
    title: "Congress can stop this war.", 
    body: [
      "They haven't because many are paid not to.",
    ],
    greenLines: [1]
  },
  // 4
  { 
    title: "Congress refuses to represent their constituents.", 
    body: [
      "This gives us a reason to replace them."
    ],
    greenLines: [0]
  },
  // 5
  { 
    title: "Opinions don't force action.", 
    body: [
      "Outrage doesn't force action.", 
      "Noise doesn't force action."
    ],
    greenLines: [1]
  },
  // 6
  { 
    title: "Only Leverage forces action.", 
    body: [
      "To succeed, it must be organized the right way",
      "district by district, online, and viral."
    ],
    greenLines: [0]
  },
  // 7
  { 
    title: "We track and report support in each congressional district", 
    body: [
      "Many have already gone on record.",
      "More are needed to make Congress do its job."],
    greenLines: [0]
  },
  // 8
  { 
    title: "Alone, you're easy to ignore.", 
    body: [
      "1,500 people in your district are not.",
      "Proven in civic campaigns — Ralph Nader"
    ],
    greenLines: [0, 1]
  },
  // 9
  {
    title: "That's the tipping point.",
    body: [
      "Just enough people — in the right place, at the same time."
    ],
    greenLines: [0]
  },
  // 10
  {
    title: "1,500 people per district.",
    body: [
      "Across 435 districts, that's about 650,000 people.", 
      "That's the Math that will make Congress listen."
    ],
    greenLines: [1]
  },
  // 11
  {
    title: "When 1,500 people are on record,",
    body: [
      "representatives must respond in public.", 
      "Or they will get replaced before July 4."
    ],
    greenLines: [1]
  },
  // 12
  { 
    title: "That's leverage.", 
    body: [
      "Not opinion.", 
      "Not noise.", 
      "Consequences that can't be ignored."
    ],
    greenLines: [2]
  },
  // 13 – PHIERS acronym with stacked letters
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
    punchLine: "Power Held In Every Reps Seat"
  },
  // 14 – final slide
  {
    title: "",
    body: [
      "I agree",
      "I'm on record",
      "…so they respond — or get replaced."
    ],
    isFinalSlide: true,
    greenLines: []
  }
];

export default slides;

// FILE: components/slides.ts (end)
// VERSION: 1.1.0