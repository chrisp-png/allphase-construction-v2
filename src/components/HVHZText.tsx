import { Shield } from 'lucide-react';

interface HVHZTextProps {
  variant?: 'full' | 'acronym' | 'south-florida';
  className?: string;
  showIcon?: boolean;
}

/**
 * Component to visually emphasize HVHZ (High Velocity Hurricane Zone) references
 * with subtle professional styling and optional icon.
 */
export default function HVHZText({
  variant = 'full',
  className = '',
  showIcon = true
}: HVHZTextProps) {
  const getText = () => {
    switch (variant) {
      case 'south-florida':
        return 'South Florida High Velocity Hurricane Zone (HVHZ)';
      case 'acronym':
        return 'HVHZ';
      case 'full':
      default:
        return 'High Velocity Hurricane Zone (HVHZ)';
    }
  };

  return (
    <span className={`inline-flex items-center gap-1 text-amber-400 font-semibold ${className}`}>
      {showIcon && <Shield className="w-3.5 h-3.5 inline-block" aria-hidden="true" />}
      <span>{getText()}</span>
    </span>
  );
}
