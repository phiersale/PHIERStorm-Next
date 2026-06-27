  // FILE: components/slides/universalSlideData.ts
  // VERSION: 1.3 - increased size of townhall image
  // SUMMARY: All slides with corrected indices. Nader slide now includes source attribution.

  import { UniversalSlide } from "./universalSlideTypes"

  export const universalSlides: UniversalSlide[] = [
    // 0 — SIGNAL SLIDE (cinematic title card)
    {
      id: "slide-0",
      customLayout: true,
      body: [
        {
          type: "logo",
          large: false,
          className: "w-20 md:w-28 mt-1 mb-1 opacity-0 animate-fadeIn duration-[450ms] delay-[0ms]"
        },
        {
          type: "spacer",
          height: 8
        },
        {
          type: "divider",
          className: "w-12 h-px bg-green-400/50 mx-auto opacity-0 animate-fadeIn duration-[250ms] delay-[550ms]"
        },
        {
          type: "spacer",
          height: 16
        },
        {
          type: "text",
          content: "PAUSE.",
          large: true,
          green: true,
          bold: true,
          className:
            "text-4xl md:text-5xl font-semibold text-green-400/60 tracking-[0.02em] mb-3 opacity-0 animate-fadeIn duration-[400ms] delay-[900ms]"
        },
        {
          type: "text",
          content: "Things are changing fast.",
          large: false,
          green: false,
          bold: true,
          className:
            "text-lg md:text-xl font-medium leading-relaxed text-gray-200 max-w-md opacity-0 animate-fadeIn duration-[400ms] delay-[1250ms]"
        },
        {
          type: "spacer",
          height: 6
        },
        {
          type: "text",
          content: "Before reacting,\nchoose a response\nthat actually works.",
          large: false,
          green: false,
          bold: false,
          className:
            "text-base md:text-lg font-medium leading-relaxed text-slate-200 max-w-md opacity-0 animate-fadeIn duration-[400ms] delay-[1600ms]"
        }
      ],
      className: "bg-neutral-950 flex flex-col items-center justify-center py-12"
    },

    // 1 — PROBLEM (billboard style)
    {
      id: "slide-1",
      title: "Congress works for you.",
      body: ["They just forgot."],
      greenLines: []
    },

    // 2 — PROBLEM (second problem slide)
    {
      id: "slide-2",
      title: "Ignoring voters became politically safe.",
      body: [],
      greenLines: []
    },

    // 3 — HOPE
    {
      id: "slide-3",
      title: "PHIERS changes that.",
      body: [],
      greenLines: [],
      titleGreen: true
    },

    // 4 — PUNCH SLIDE
    {
      id: "slide-4",
      title: "",
      body: [
        "", 
        "", 
        { text: "A few minutes.", large: true, green: true, bold: true },
        { text: "Enough to make", large: false, green: false, bold: false },
        { text: "Congress listen.", large: false, green: true, bold: false }
      ],
      customTextLayout: true
    },

    // 5 — ORGANIZED PEOPLE
    {
      id: "slide-5",
      title: "",
      body: [
        { text: "Outrage", large: true, green: false, bold: true },
        { text: "doesn't move Congress.", large: false, green: false, bold: false },
        { type: "spacer", height: 24 },
        { text: "Organized people do.", large: true, green: true, bold: true },
        { type: "spacer", height: 20 },
        { text: "Especially in their own district.", large: false, green: false, bold: false, className: "text-gray-400 text-base" }
      ],
      customTextLayout: true
    },

    // 6 — FREDERICK DOUGLASS IMAGE
    {
      id: "slide-6",
      type: "image",
      imageSrc: "/images/FredDoug-Power_Concedes_Nothing.jpg",
      imageAlt: "Frederick Douglass – Power concedes nothing without a demand"
    },

    // 7 — TEETH IMAGE (fish)
    {
      id: "slide-7",
      title: "",
      body: ["A demand that has TEETH."],
      greenLines: [0],
      largeFormat: true,
      teethImage: true
    },

    // 8 — WE ARE THE TEETH IMAGE
    {
      id: "slide-8",
      type: "image",
      imageSrc: "/images/Power_Concedes_Nothing_TEETH.png",
      imageAlt: "Power Concedes Nothing Without A Demand That Has Teeth - We Are The Teeth",
      imageClassName: "w-[90%] md:w-[85%] max-w-4xl mx-auto max-h-[calc(100vh-200px)] object-contain",
      caption: "",
      captionClassName: "text-center text-green-400 text-lg md:text-xl font-bold mt-3"
    },

    // 9 — MECHANISM
    {
      id: "slide-9",
      title: "",
      body: [
        { text: "How to make Congress listen.", large: false, green: false, bold: true, className: "text-2xl md:text-3xl font-bold text-white" },
        { type: "spacer", height: 32 },
        { text: "500 signatures — your Rep shows up.", green: true, bold: true },
        { type: "spacer", height: 12 },
        { text: "1,000 signatures — your Senator shows up.", green: true, bold: true },
        { type: "spacer", height: 12 },
        { text: "1,500 — the district is organized.", green: true, bold: true },
        { type: "spacer", height: 32 },
        { text: "Public town hall demanded.", green: true, bold: true, className: "text-xl md:text-2xl text-green font-bold" }
      ],
      customTextLayout: true
    },

    // 10 — TOWN HALL MEETING (reduced 25% from 52% to 39%)
    {
      id: "slide-10",
      type: "image",
      imageSrc: "/images/town_hall_meeting.jpg",
      imageAlt: "Town hall meeting — the district organized",
      className: "bg-neutral-950 flex flex-col items-center justify-center py-4 md:py-12",
      imageClassName: "w-full md:w-[52%] max-w-2xl mx-auto",
      caption: "When 1,500 people organize, the district listens.",
      captionClassName: "text-center text-green-400 text-base md:text-xl font-medium mt-2 md:mt-3 tracking-tight max-w-3xl mx-auto"
    },

    // 11 — RALPH NADER (click-to-enlarge) - sourced
    {
      id: "slide-11",
      type: "image",
      imageSrc: "/images/RalphNader-500-Unstoppable_Change.jpg",
      imageAlt: "Ralph Nader — 1,500 organized voters. Congress remembers who it works for. Unstoppable Change.",
      className: "bg-neutral-950 flex flex-col items-center justify-center py-4 md:py-12",
      imageClassName: "w-full md:w-[52%] max-w-2xl mx-auto cursor-pointer transition-transform hover:scale-[1.02]",
      imageClickable: true,
      showTapHint: true,
      title: "A Proven Strategy",
      caption: "Source: Ralph Nader, nader.org — drawing on \"Breaking Through Power: It's Easier Than We Think\"",
      captionClassName: "text-center text-gray-500 text-xs mt-2 max-w-xl mx-auto"
    },

    // 12 — ACCOUNTABILITY
    {
      id: "slide-12",
      replacementLayout: true
    },

    // 13 — [NEW] Tools of Accountability
{
  id: "slide-13",
  title: "Tools of Accountability",
  body: [
    { text: "Recall.", large: false, green: true, bold: true, className: "text-lg md:text-xl font-bold text-green" },
    { type: "spacer", height: 6 },

    { text: "Primary.", large: false, green: true, bold: true, className: "text-lg md:text-xl font-bold text-green" },
    { type: "spacer", height: 6 },

    { text: "Investigate.", large: false, green: true, bold: true, className: "text-lg md:text-xl font-bold text-green" },
    { type: "spacer", height: 6 },

    { text: "Expose.", large: false, green: true, bold: true, className: "text-lg md:text-xl font-bold text-green" },
    { type: "spacer", height: 12 },

    {
      text: "If they refuse accountability, the public gets the truth.",
      large: false,
      green: false,
      bold: false,
      className: "text-gray-300 text-sm md:text-base max-w-md"
    }
  ],
  customTextLayout: true
},


    // 14 — PHIERS ACRONYM
    {
      id: "slide-14",
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
      punchLine: "Power Held In Every Representative's Seat (pronounced FIRES)",
      className: "w-[85%] mx-auto"
    },

    // 15 — FINAL CTA
    {
      id: "slide-15",
      title: "One petition. Your district. On the record.",
      body: [
        "That's how pressure starts.",
        "Name. Email. Zip code.",
        "Make them answer."
      ],
      greenLines: [0, 2],
      isFinalSlide: true,
      compactFinal: true
    }
  ]

  // FILE: components/slides/universalSlideData.ts
  // VERSION: 1.3