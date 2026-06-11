// FILE: components/slides/slideTypes.ts
// VERSION: 1.0 – Strict schema, no layout logic
// SUMMARY: Defines pure data types for slides - text, image, mixed. No className, no spacing, no layout rules.

export type Slide =
  | {
      id: string
      type: "text"
      title?: string
      body: string[]
      emphasis?: number[] // green lines
    }
  | {
      id: string
      type: "image"
      src: string
      caption?: string
      subCaption?: string
      clickable?: boolean
    }
  | {
      id: string
      type: "mixed"
      blocks: SlideBlock[]
    }

export type SlideBlock =
  | { type: "text"; content: string; style?: "small" | "medium" | "large" | "hero"; color?: "white" | "green" }
  | { type: "image"; src: string; caption?: string }
  | { type: "spacer"; size: "sm" | "md" | "lg" }

// FILE: components/slides/slideTypes.ts