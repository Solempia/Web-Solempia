import { marqueeItems } from "@/data/metrics";

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="border-y border-line bg-surface overflow-hidden py-4">
      <div className="flex gap-12 animate-marquee w-max font-mono text-xs uppercase tracking-[0.16em] text-muted">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap"
          >
            <span className="h-1 w-1 rounded-full bg-accent/50" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
