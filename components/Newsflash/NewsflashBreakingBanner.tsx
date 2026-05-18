// src/components/Newsflash/NewsflashBreakingBanner.tsx
export default function NewsflashBreakingBanner({ text }: { text: string }) {
  return (
    <div className="nf-breaking">
      <span className="nf-breaking-label">Breaking</span>
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}