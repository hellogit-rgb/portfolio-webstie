import Reveal from './Reveal';

interface SectionLabelProps {
  children: string;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <Reveal>
      <div className={`flex items-center gap-3 ${className}`}>
        <span className="w-8 h-px bg-ink-500" />
        <span className="label">{children}</span>
      </div>
    </Reveal>
  );
}
