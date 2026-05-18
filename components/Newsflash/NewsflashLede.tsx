// src/components/Newsflash/NewsflashLede.tsx
export default function NewsflashLede({ content }: { content: string }) {
  return (
    <div className="nf-lede">
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}