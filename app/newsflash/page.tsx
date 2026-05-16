/* FILE: app/newsflash/page.tsx */
/* VERSION: 2.1.0 – server component with metadata */

import ClientNewsflash from './ClientNewsflash';

export const metadata = {
  title: 'PHIERS Newsflash – May 2026 | Voting Rights Emergency',
  description: 'The Supreme Court gutted the Voting Rights Act. PHIERS has the plan: 1,500 signatures per district.',
};

export default function NewsflashPage() {
  return <ClientNewsflash />;
}
/* FILE: app/newsflash/page.tsx */