// FILE: components/slides/universalSlideTypes.ts
// VERSION: 1.0 - Universal slide schema that supports ALL your existing features
// SUMMARY: Defines types that can represent every slide in your current system without losing functionality

export type UniversalSlide = {
  id: string
  // Core
  title?: string
  body?: any[]
  greenLines?: number[]
  
  // Layout flags (preserved from your system)
  customLayout?: boolean
  customTextLayout?: boolean
  largeFormat?: boolean
  replacementLayout?: boolean
  teethImage?: boolean
  isFinalSlide?: boolean
  titleGreen?: boolean
  compactFinal?: boolean
  
  // Image slides
  type?: "image"
  imageSrc?: string
  imageAlt?: string
  imageClassName?: string
  caption?: string
  captionClassName?: string
  subCaption?: string
  subCaptionClassName?: string
  imageClickable?: boolean
  showTapHint?: boolean
  
  // Acronym slide
  punchLine?: string
  
  // Any other properties your slides have
  [key: string]: any
}

// FILE: components/slides/universalSlideTypes.ts