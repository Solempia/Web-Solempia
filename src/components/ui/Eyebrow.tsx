interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  withDash?: boolean;
}

export default function Eyebrow({
  children,
  className = "",
  withDash = true,
}: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted ${className}`}
    >
      {withDash && <span className="h-px w-7 bg-line" />}
      {children}
    </span>
  );
}
