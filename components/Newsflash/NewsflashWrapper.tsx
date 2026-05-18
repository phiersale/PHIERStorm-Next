// src/components/Newsflash/NewsflashWrapper.tsx
export default function NewsflashWrapper({ children }: { children: React.ReactNode }) {
  return <div className="nf-wrap">{children}</div>;
}