// FILE: app/Prophecy/components/QuietZone.tsx
'use client';

export default function QuietZone({ height = "h-12 md:h-16" }: { height?: string }) {
  return <div className={height} />;
}