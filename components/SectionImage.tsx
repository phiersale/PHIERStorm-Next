import Image from 'next/image'

interface SectionImageProps {
  src: string
  alt: string
  priority?: boolean
}

export default function SectionImage({ src, alt, priority = false }: SectionImageProps) {
  return (
    <div className="relative my-6 aspect-video w-full overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 80vw"
      />
    </div>
  )
}