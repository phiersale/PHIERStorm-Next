// src/components/Newsflash/NewsflashSection.tsx
import { Icon } from '@tabler/icons-react';

const iconMap: Record<string, any> = {
  'ti-shield-off': require('@tabler/icons-react').IconShieldOff,
  'ti-world': require('@tabler/icons-react').IconWorld,
  'ti-heart-rate-monitor': require('@tabler/icons-react').IconHeartRateMonitor,
  'ti-home': require('@tabler/icons-react').IconHome,
  'ti-eye-off': require('@tabler/icons-react').IconEyeOff,
  'ti-building-community': require('@tabler/icons-react').IconBuildingCommunity,
  'ti-shield-x': require('@tabler/icons-react').IconShieldX,
};

export default function NewsflashSection({
  title,
  icon,
  pillLabel,
  pillVariant,
  body,
  note,
}: {
  title: string;
  icon: string;
  pillLabel: string;
  pillVariant: 'red' | 'amber' | 'teal' | 'blue';
  body: string;
  note?: string;
}) {
  const IconComponent = iconMap[icon] || null;
  return (
    <div className="nf-section">
      <div className="nf-section-header">
        {IconComponent && <IconComponent size={20} color="#1D9E75" />}
        <h2>{title}</h2>
      </div>
      <span className={`nf-pill pill-${pillVariant}`}>{pillLabel}</span>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      {note && <div className="nf-phiers-note" dangerouslySetInnerHTML={{ __html: note }} />}
    </div>
  );
}