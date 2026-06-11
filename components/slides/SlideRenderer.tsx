// FILE: components/slides/SlideRenderer.tsx
// VERSION: 1.0 – Single rendering engine for ALL slides
// SUMMARY: Handles text, image, and mixed slides. No per-slide conditions. No special casing. All display logic centralized here.

import SlideCanvas from "./SlideCanvas"
import { Slide } from "./slideTypes"
import Image from "next/image"

export default function SlideRenderer({ slide }: { slide: Slide }) {
  return (
    <SlideCanvas>
      {slide.type === "text" && (
        <>
          {slide.title && <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>}
          {slide.body.map((line, i) => {
            const isEmphasis = slide.emphasis?.includes(i)
            return (
              <p key={i} className={`text-lg md:text-2xl ${isEmphasis ? "text-green" : "text-gray-200"}`}>
                {line}
              </p>
            )
          })}
        </>
      )}

      {slide.type === "image" && (
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="w-full flex justify-center">
            <Image
              src={slide.src}
              alt={slide.caption || "Slide image"}
              width={1200}
              height={800}
              className="w-full max-w-2xl h-auto object-contain"
              priority
            />
          </div>
          {slide.caption && <p className="text-green-400 text-lg md:text-xl">{slide.caption}</p>}
          {slide.subCaption && <p className="text-gray-400 text-sm md:text-base">{slide.subCaption}</p>}
        </div>
      )}

      {slide.type === "mixed" && (
        <>
          {slide.blocks.map((block, i) => {
            if (block.type === "text") {
              let className = "text-lg md:text-2xl text-gray-200"
              if (block.style === "hero") className = "text-5xl md:text-7xl font-bold"
              if (block.style === "large") className = "text-2xl md:text-4xl font-semibold"
              if (block.style === "medium") className = "text-xl md:text-3xl"
              if (block.style === "small") className = "text-base md:text-lg"
              if (block.color === "green") className += " text-green"
              if (block.color === "white") className += " text-white"
              return (
                <p key={i} className={className}>
                  {block.content}
                </p>
              )
            }

            if (block.type === "image") {
              return (
                <div key={i} className="w-full flex justify-center my-4">
                  <Image
                    src={block.src}
                    alt={block.caption || "Slide image"}
                    width={1000}
                    height={600}
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                  {block.caption && <p className="text-gray-400 text-sm mt-2">{block.caption}</p>}
                </div>
              )
            }

            if (block.type === "spacer") {
              let height = "h-3"
              if (block.size === "md") height = "h-6"
              if (block.size === "lg") height = "h-12"
              return <div key={i} className={height} />
            }

            return null
          })}
        </>
      )}
    </SlideCanvas>
  )
}

// FILE: components/slides/SlideRenderer.tsx