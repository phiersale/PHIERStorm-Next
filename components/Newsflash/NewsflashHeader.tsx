// src/components/Newsflash/NewsflashHeader.tsx
export default function NewsflashHeader({ issue, date }: { issue: number; date: string }) {
  return (
    <div className="nf-header">
      <div className="nf-logo">PHIERS<span>.org</span> News Flash</div>
      <div className="nf-tagline">Organized leverage. The kind Congress already fears.</div>
      <div className="nf-dateline">{date} &nbsp;·&nbsp; Issue #{issue}</div>
    </div>
  );
}