// FILE: components/slides/slideData.ts
// VERSION: 1.0 – Pure content only, NO layout logic, NO className, NO spacing rules
// SUMMARY: All slide content migrated from old slides.ts. Removed: customLayout, customTextLayout, largeFormat, replacementLayout, teethImage, imageClassName, captionClassName, etc.

import { Slide } from "./slideTypes"

export const slides: Slide[] = [
  {
    id: "intro",
    type: "mixed",
    blocks: [
      { type: "text", content: "PAUSE.", style: "hero", color: "green" },
      { type: "spacer", size: "md" },
      { type: "text", content: "Things are changing fast.", style: "large" },
      { type: "spacer", size: "sm" },
      { type: "text", content: "Before reacting, choose a response that actually works.", style: "medium" }
    ]
  },
  {
    id: "problem-1",
    type: "text",
    title: "Congress works for you.",
    body: ["They just forgot."],
    emphasis: []
  },
  {
    id: "problem-2",
    type: "text",
    title: "Ignoring voters became politically safe.",
    body: [],
    emphasis: []
  },
  {
    id: "hope",
    type: "text",
    title: "PHIERS changes that.",
    body: [],
    emphasis: []
  },
  {
    id: "punch",
    type: "mixed",
    blocks: [
      { type: "spacer", size: "md" },
      { type: "text", content: "A few minutes.", style: "large", color: "green" },
      { type: "spacer", size: "sm" },
      { type: "text", content: "Enough to make Congress listen.", style: "medium" }
    ]
  },
  {
    id: "organized-people",
    type: "mixed",
    blocks: [
      { type: "text", content: "Outrage", style: "large" },
      { type: "text", content: "doesn't move Congress.", style: "medium" },
      { type: "spacer", size: "lg" },
      { type: "text", content: "Organized people do.", style: "large", color: "green" },
      { type: "spacer", size: "md" },
      { type: "text", content: "Especially in their own district.", style: "small" }
    ]
  },
  {
    id: "image-douglass",
    type: "image",
    src: "/images/FredDoug-Power_Concedes_Nothing.jpg",
    caption: "Power concedes nothing without a demand."
  },
  {
    id: "teeth",
    type: "mixed",
    blocks: [
      { type: "image", src: "/images/ORGANIZE_Fish.jpg" },
      { type: "spacer", size: "md" },
      { type: "text", content: "A demand that has TEETH.", style: "hero", color: "green" }
    ]
  },
  {
    id: "mechanism",
    type: "mixed",
    blocks: [
      { type: "text", content: "How to make Congress listen.", style: "large" },
      { type: "spacer", size: "lg" },
      { type: "text", content: "500 signatures — your Rep shows up.", style: "medium", color: "green" },
      { type: "spacer", size: "sm" },
      { type: "text", content: "1,000 signatures — your Senator shows up.", style: "medium", color: "green" },
      { type: "spacer", size: "sm" },
      { type: "text", content: "1,500 — the district is organized.", style: "medium", color: "green" },
      { type: "spacer", size: "lg" },
      { type: "text", content: "Public town hall demanded.", style: "large", color: "green" }
    ]
  },
  {
    id: "image-townhall",
    type: "image",
    src: "/images/town_hall_meeting.jpg",
    caption: "When 1,500 people organize, the district listens."
  },
  {
    id: "image-nader",
    type: "image",
    src: "/images/RalphNader-500-Unstoppable_Change.jpg",
    caption: "1,500 organized people can overcome the influence of money in politics.",
    subCaption: "— Ralph Nader",
    clickable: true
  },
  {
    id: "accountability",
    type: "mixed",
    blocks: [
      { type: "text", content: "If they refuse the meeting, they lose the seat.", style: "large" },
      { type: "spacer", size: "md" },
      { type: "text", content: "Legally. Before the next election.", style: "medium" },
      { type: "spacer", size: "sm" },
      { type: "text", content: "No heat. No threats. Just accountability.", style: "medium", color: "green" }
    ]
  },
  {
    id: "acronym",
    type: "mixed",
    blocks: [
      { type: "text", content: "P", style: "hero", color: "green" },
      { type: "text", content: "Power", style: "small" },
      { type: "spacer", size: "sm" },
      { type: "text", content: "H", style: "hero", color: "green" },
      { type: "text", content: "Held", style: "small" },
      { type: "spacer", size: "sm" },
      { type: "text", content: "I", style: "hero", color: "green" },
      { type: "text", content: "In", style: "small" },
      { type: "spacer", size: "sm" },
      { type: "text", content: "E", style: "hero", color: "green" },
      { type: "text", content: "Every", style: "small" },
      { type: "spacer", size: "sm" },
      { type: "text", content: "R", style: "hero", color: "green" },
      { type: "text", content: "Representative's", style: "small" },
      { type: "spacer", size: "sm" },
      { type: "text", content: "S", style: "hero", color: "green" },
      { type: "text", content: "Seat", style: "small" }
    ]
  },
  {
    id: "final-cta",
    type: "text",
    title: "One petition. Your district. On the record.",
    body: [
      "That's how pressure starts.",
      "Name. Email. Zip code.",
      "Make them answer.",
      "This site is under construction.",
      "Check back often or subscribe to stay informed.",
      "We are evolving with emerging threats and opportunities.",
      "Our best is yet to come."
    ],
    emphasis: [0, 2, 5]
  }
]

// FILE: components/slides/slideData.ts