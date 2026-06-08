'use client';

import Image from 'next/image';

type Tier = "small" | "tiny" | "medium" | "hero";

interface ProphecyImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  tier?: Tier;
  className?: string;
}

const tierDimensions: Record<Tier, { width: number; height: number }> = {
  small: { width: 160, height: 120 },
  tiny: { width: 80, height: 60 },
  medium: { width: 320, height: 200 },
  hero: { width: 480, height: 270 },
};

export default function ProphecyImage({ 
  src, 
  alt, 
  priority = false, 
  tier = "medium",
  className = "" 
}: ProphecyImageProps) {
  const { width, height } = tierDimensions[tier];
  
  return (
    <div className={`w-[85%] mx-auto my-8 md:my-12 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="w-full h-auto rounded-xl"
      />
    </div>
  );
}