// src/components/Newsflash/NewsflashFettermanBox.tsx
import { IconAlertTriangle } from '@tabler/icons-react';

export default function NewsflashFettermanBox({ content }: { content: string }) {
  return (
    <div className="nf-fetterman">
      <h2>
        <IconAlertTriangle size={16} style={{ verticalAlign: '-2px', marginRight: '6px' }} />
        Proof of concept: what accountability looks like
      </h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}