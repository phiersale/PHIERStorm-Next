// FILE: components/slides/UniversalSlideRenderer.tsx
// VERSION: 1.0 - Renders EVERY slide type from your original system
// SUMMARY: Contains ALL the rendering logic from your old PreHomepage renderBody() function
// PLUS ensures every slide fits viewport with consistent vertical centering

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { UniversalSlide } from './universalSlideTypes'

type Props = {
  slide: UniversalSlide
  index: number
  onImageClick?: (slideId: string) => void
  onFinalSlideButtonClick?: () => void
}

export default function UniversalSlideRenderer({ slide, index, onImageClick, onFinalSlideButtonClick }: Props) {
  
  const renderTitle = () => {
    if (slide.customLayout) return null
    if (!slide.title) return null

    const splitTitle = (text: string) => {
      const periodSpaceIndex = text.indexOf('. ')
      if (periodSpaceIndex !== -1 && periodSpaceIndex < text.length - 2) {
        const firstPart = text.substring(0, periodSpaceIndex + 1)
        const secondPart = text.substring(periodSpaceIndex + 2)
        return <>{firstPart}<br />{secondPart}</>
      }
      return text
    }

    const renderedTitle = splitTitle(slide.title)

    // For final slide, show logo at top
    if (slide.isFinalSlide) {
      return (
        <>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pt-4 mb-4"
          >
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS Logo"
              width={120}
              height={120}
              className="w-24 sm:w-32 md:w-40 h-auto mx-auto drop-shadow-[0_0_15px_rgba(61,220,132,0.4)]"
              priority
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-bold leading-tight mb-4"
          >
            {renderedTitle}
          </motion.h1>
        </>
      )
    }
    if (slide.title === "PHIERS") {
      return <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green">{renderedTitle}</h1>
    }
    if (slide.titleGreen) {
      return <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-green">{renderedTitle}</h1>
    }
    if (slide.title && slide.title.includes("Frederick Douglass")) {
      return <h1 className="text-xl md:text-2xl font-bold leading-tight mb-2">{renderedTitle}</h1>
    }
    return <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">{renderedTitle}</h1>
  }

  const renderBody = () => {
    if (slide.teethImage) {
      return (
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full flex justify-center mb-4"
          >
            <img
              src="/images/ORGANIZE_Fish.jpg"
              alt="Organized fish – a demand with teeth"
              className="w-full md:w-[80%] max-w-4xl rounded-lg shadow-md"
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold text-green mt-2"
          >
            A demand that has TEETH.
          </motion.p>
        </div>
      )
    }

    if (slide.replacementLayout) {
      return (
        <div className="flex flex-col items-center text-center px-6 md:px-12 pt-0 pb-12">
          <div className="space-y-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              If they refuse the meeting,
              <br />
              they lose the seat.
            </h2>
          </div>
          <div className="space-y-1 mb-6">
            <p className="text-base md:text-lg text-gray-200">Legally.</p>
            <p className="text-base md:text-lg font-semibold" style={{ color: "#22c55e" }}>
              Before the next election.
            </p>
            <p className="text-base md:text-lg text-gray-200">No heat. No threats.</p>
            <p className="text-base md:text-lg text-gray-200">Just accountability.</p>
          </div>
        </div>
      )
    }

    if (slide.customTextLayout) {
      const items = slide.body
      // Check if this is slide-13 (Tools of Accountability)
      const isToolsOfAccountability = slide.id === "slide-13"
      
      return (
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-4">
          {/* Logo for slide-13 - same position as slide-14 */}
          {isToolsOfAccountability && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              <Image
                src="/images/PHIERS_Logo.png"
                alt="PHIERS Logo"
                width={120}
                height={120}
                className="w-24 sm:w-32 md:w-40 h-auto mx-auto drop-shadow-[0_0_15px_rgba(61,220,132,0.4)]"
                priority
              />
            </motion.div>
          )}
          {items.map((item: any, idx: number) => {
            if (item.type === 'spacer') {
              return <div key={idx} style={{ height: item.height || 16 }} />
            }
            if (item.type === 'image') {
              return (
                <div key={idx} className="w-full my-6">
                  <img
                    src={item.imageSrc}
                    alt={item.alt || "Town hall meeting"}
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl border border-green/30"
                    onError={(e) => {
                      console.error('Image failed to load:', item.imageSrc)
                      e.currentTarget.src = '/images/placeholder.png'
                    }}
                    onLoad={() => console.log('Image loaded:', item.imageSrc)}
                  />
                  {item.caption && (
                    <p className="text-gray-400 text-sm italic mt-3 text-center">{item.caption}</p>
                  )}
                </div>
              )
            }
            if (item.text) {
              let textColor = 'text-white'
              if (item.green) textColor = 'text-green'
              
              let textSize = 'text-lg md:text-xl'
              if (item.large) textSize = 'text-4xl md:text-5xl'
              
              let fontWeight = item.bold ? 'font-bold' : 'font-normal'
              
              let className = item.className || `${textSize} ${textColor} ${fontWeight} leading-tight`
              
              return (
                <p
                  key={idx}
                  className={className}
                >
                  {item.text}
                </p>
              )
            }
            if (item === "" || item === " ") return <div key={idx} className="h-0" />
            if (typeof item === 'string') return <div key={idx} className="h-4" />
            return null
          })}
        </div>
      )
    }

    if (slide.compactConsequence) {
      return (
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-4">
          <p className="text-gray-300 text-2xl md:text-3xl mb-3">Not noise.</p>
          <p className="text-gray-300 text-2xl md:text-3xl mb-4">Not outrage.</p>
          <p className="text-green font-bold text-4xl md:text-5xl mt-3 mb-3">Leverage.</p>
          <p className="text-green font-bold text-2xl md:text-3xl">Leverage = Consequences = Teeth</p>
        </div>
      )
    }

    if (slide.customLayout) {
      const items = slide.body
      
      // Check if this is the text-based custom layout (has type properties)
      if (items.length > 0 && typeof items[0] === 'object' && 'type' in items[0]) {
        return (
          <div className="flex flex-col items-center text-center max-w-md mx-auto px-6 w-full custom-layout-container">
            {items.map((item: any, idx: number) => {
              if (item.type === 'logo') {
                const logoClass = item.className || ''
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={`mb-2 ${logoClass}`}
                  >
                    <img
                      src="/images/PHIERS-Pause.png"
                      alt="PHIERS Pause"
                      className="w-24 md:w-32 object-contain mx-auto"
                    />
                  </motion.div>
                )
              }
              if (item.type === 'spacer') {
                return <div key={idx} style={{ height: item.height || 16 }} />
              }
              if (item.type === 'divider') {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25, delay: 0.55 }}
                    className={item.className || "w-12 h-px bg-green-400/40 mx-auto my-2"}
                  />
                )
              }
              if (item.type === 'image') {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: item.delay || 0.5 }}
                    className="w-full my-4"
                  >
                    <img
                      src={item.imageSrc}
                      alt={item.alt || "Town hall meeting"}
                      className="w-full max-w-xl mx-auto rounded-lg shadow-2xl border border-green/30"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; }}
                    />
                    {item.caption && (
                      <p className="text-gray-400 text-sm italic mt-3 text-center">{item.caption}</p>
                    )}
                  </motion.div>
                )
              }
              if (item.type === 'text') {
                if (item.className) {
                  const content = item.content
                  const hasNewlines = content && content.includes('\n')
                  
                  let delay = 0
                  if (content === "PAUSE.") delay = 0.6
                  else if (content === "Things are changing fast.") delay = 1.4
                  else if (content === "Before reacting,") delay = 2.2
                  else if (content === "choose a response") delay = 2.7
                  else if (content === "that actually works.") delay = 3.2
                  else delay = 0.4
                  
                  if (hasNewlines) {
                    const isBeforeReacting = content.includes("Before reacting")
                    const lines = content.split('\n')
                    const lineOpacities = isBeforeReacting ? [0.45, 0.75, 1] : [1, 1, 1]
                    const lineDelays = isBeforeReacting ? [2.3, 2.8, 3.3] : [2.3, 2.6, 2.9]
                    return (
                      <div key={idx} className="max-w-md text-center mx-auto mt-3">
                        {lines.map((line: string, lineIdx: number) => (
                          <motion.div
                            key={lineIdx}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: lineOpacities[lineIdx] ?? 1, y: 0 }}
                            transition={{ duration: 0.8, delay: lineDelays[lineIdx] ?? 2.3, ease: [0.25, 0.1, 0.25, 1] }}
                            className="text-lg md:text-xl font-medium leading-relaxed text-slate-200"
                          >
                            {line}
                          </motion.div>
                        ))}
                      </div>
                    )
                  }
                  return (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] }}
                      className={item.className}
                    >
                      {content}
                    </motion.p>
                  )
                }
                
                let textColor = 'text-gray-300'
                if (item.green) textColor = 'text-green'
                if (item.italic) textColor = 'text-gray-400'
                
                let fontWeight = item.bold ? 'font-bold' : 'font-normal'
                let fontStyle = item.italic ? 'italic' : ''
                
                let textSize = 'text-base md:text-lg'
                if (item.large) textSize = 'text-3xl md:text-4xl font-semibold'
                
                const content = item.content
                const hasNewlines = content && content.includes('\n')
                
                let delay = 0
                if (content === "PAUSE.") delay = 0.6
                else if (content === "Things are changing fast.") delay = 1.4
                else if (content === "Before reacting,") delay = 2.2
                else if (content === "choose a response") delay = 2.7
                else if (content === "that actually works.") delay = 3.2
                
                if (hasNewlines) {
                  let blockDelay = 0
                  if (content.includes("Before reacting")) blockDelay = 2.3
                  else blockDelay = delay
                  
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, maskImage: "linear-gradient(to bottom, transparent 0%, black 0%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 0%)" }}
                      animate={{ opacity: 1, maskImage: "linear-gradient(to bottom, transparent 0%, black 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 100%)" }}
                      transition={{ duration: 1.2, delay: blockDelay, ease: [0.25, 0.1, 0.25, 1] }}
                      className={`${textSize} ${textColor} ${fontWeight} ${fontStyle} leading-tight w-full text-center`}
                    >
                      {content.split('\n').map((line: string, lineIdx: number) => (
                        <div key={lineIdx}>{line}</div>
                      ))}
                    </motion.div>
                  )
                }
                
                return (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] }}
                    className={`${textSize} ${textColor} ${fontWeight} ${fontStyle} leading-tight w-full text-center`}
                  >
                    {content}
                  </motion.p>
                )
              }
              return null
            })}
          </div>
        )
      }
      
      // Original PHIERS acronym layout
      const acronymItems = slide.body as { letter: string; word: string }[]
      return (
        <div className="flex flex-col items-center space-y-4 pb-6 pt-8 md:pt-12">
          <div className="mb-2">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS Logo"
              width={80}
              height={80}
              className="w-25 sm:w-30 md:w-24 h-auto mx-auto drop-shadow-[0_0_15px_rgba(61,220,132,0.4)]"
              priority
            />
          </div>
          <div className="w-full px-2 sm:px-6">
            <div className="grid grid-cols-6 gap-0.5 sm:gap-2 justify-items-center mx-auto w-full min-w-full px-1">
              {acronymItems.map((item: { letter: string; word: string }, idx: number) => (
                <div key={idx} className="flex flex-col items-center space-y-1 sm:space-y-2">
                  <span className="text-xl sm:text-3xl md:text-4xl font-extrabold text-green whitespace-nowrap drop-shadow-[0_0_8px_rgba(61,220,132,0.6)]">
                    {item.letter}
                  </span>
                  <span className="text-[8px] sm:text-[12px] md:text-sm font-bold text-gray-200 uppercase tracking-wide leading-tight">
                    {item.letter === 'R' ? 'REPS' : item.word}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {slide.punchLine && (
            <>
              <div style={{ height: '1.5rem' }}></div>
              <div className="w-full">
                <p className="text-xs md:text-sm font-normal text-gray-500 text-center px-2">
                  {slide.punchLine}
                </p>
              </div>
            </>
          )}
        </div>
      )
    }

    if (slide.type === "image" && slide.imageSrc) {
      const isDouglassSlide = slide.imageSrc.includes('FredDoug')
      const handleImageClick = () => {
        // Modal functionality completely removed for all devices
        // No click-to-enlarge on desktop or mobile
        return
      }

      // Special handling for slide 0 (You Are Not Powerless)
      if (index === 0) {
        return (
          <div className="w-full flex flex-col items-center justify-center px-4">
            <div onClick={handleImageClick} className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <Image
                  src="/images/You_Are_Not_Powerless.jpg"
                  alt="You Are Not Powerless"
                  width={1200}
                  height={800}
                  className="w-[70%] md:w-[50%] max-w-xl h-auto object-contain mx-auto max-h-[60vh]"
                  priority
                />
              </motion.div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-300 text-xs sm:text-sm">Swipe to continue</p>
              <div className="mt-2 text-gray-400 text-xs">← →</div>
            </div>
          </div>
        )
      }

      let widthClass = 'w-[85%] md:w-[47%]'
      if (index === 6) {
        widthClass = 'w-[95%] md:w-[70%]'
      }
      if (index === 9) {
        widthClass = 'w-[95%] md:w-[75%]'
      }
      
      return (
        <div className="w-full flex flex-col items-center max-h-[calc(100vh-180px)] overflow-visible">
          <div onClick={handleImageClick} className={isDouglassSlide || slide.imageClickable ? 'cursor-pointer w-full mb-0' : ''}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full"
            >
              <Image
                src={slide.imageSrc}
                alt={slide.imageAlt || "Slide image"}
                width={1200}
                height={800}
                className={`mx-auto object-contain phiers-slide-image ${slide.imageClassName || widthClass} max-h-[60vh] w-auto`}
                priority
                onError={(e) => console.error('Image failed to load:', slide.imageSrc)}
              />
            </motion.div>
          </div>  
          {index === 9 && slide.caption && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className={slide.captionClassName || "text-center text-red-400 text-lg md:text-xl font-medium mt-6 tracking-tight max-w-3xl mx-auto"}
            >
              {slide.caption}
            </motion.p>
          )}
          {slide.caption && index !== 9 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className={slide.captionClassName || "text-center text-green-400 text-lg md:text-2xl font-semibold mt-4 max-w-3xl mx-auto"}
            >
              {slide.caption}
            </motion.p>
          )}
          {slide.subCaption && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              className={slide.subCaptionClassName || "text-center text-gray-400 text-sm md:text-base mt-2"}
            >
              {slide.subCaption}
            </motion.p>
          )}
   {slide.showTapHint && typeof window !== 'undefined' && window.innerWidth <= 768 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="text-center text-gray-500 text-xs mt-4 opacity-70"
            >
              tap image to enlarge
            </motion.p>
          )}
        </div>
      )
    }

    if (!slide.body) return null

    const greenLineIndices = slide.greenLines || []
    const isLargeFormatSlide = slide.largeFormat === true

    if (isLargeFormatSlide) {
      const largeBodyClass = "text-3xl md:text-5xl font-semibold tracking-tight"
      const wrapperClass = "space-y-4 md:space-y-6"
      return (
        <div className={wrapperClass}>
          {slide.body.map((line, i) => {
            const isGreen = greenLineIndices.includes(i)
            const color = isGreen ? "text-green" : "text-white"
            return (
              <p key={i} className={`${largeBodyClass} ${color}`}>
                {line}
              </p>
            )
          })}
        </div>
      )
    }

    const grayClass = "text-gray-300 text-sm md:text-base leading-relaxed"
    const greenClass = "text-green font-bold text-sm md:text-base leading-relaxed"

    let wrapperClass = "space-y-0.5 md:space-y-1"
    if (slide.isFinalSlide) {
      wrapperClass = "space-y-0.5 md:space-y-1 mt-0 md:mt-0"
    }

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className={wrapperClass}
      >
        {slide.body.map((line, i) => {
          const isGreen = greenLineIndices.includes(i)
          let greenColorClass = "text-green"
          if (slide.isFinalSlide && isGreen) {
            if (i === 0) greenColorClass = "text-green-400"
            else if (i === 1) greenColorClass = "text-green-500"
            else if (i === 2) greenColorClass = "text-green-600"
          }
          if (isGreen) {
            return (
              <p key={i} className={`${greenClass} ${greenColorClass}`}>
                {line}
              </p>
            )
          }
          return (
            <p key={i} className={grayClass}>
              {line}
            </p>
          )
        })}
        
        {/* Button only on final slide */}
        {slide.isFinalSlide && onFinalSlideButtonClick && (
          <>
            <div className="h-12"></div>
            <div className="mb-4">
              <button
                onClick={onFinalSlideButtonClick}
                className="w-full max-w-xs mx-auto block border border-green/40 text-green text-sm md:text-base font-semibold py-3 px-4 rounded-md hover:bg-green/10 transition"
              >
                → SEE WHAT THE EXPERTS SAY
              </button>
            </div>
          </>
        )}
      </motion.div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[50vh]">
      {renderTitle()}
      {renderBody()}
    </div>
  )
}

// FILE: components/slides/UniversalSlideRenderer.tsx