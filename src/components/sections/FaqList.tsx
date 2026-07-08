import { StaggerList, StaggerItem } from "@/components/ui/Motion";

interface FaqEntry {
  id?: string;
  question: string;
  answer: string;
}

interface FaqListProps {
  items: FaqEntry[];
  className?: string;
}

/** Lista abierta de preguntas (sin acordeón): mejor lectura, cero JS, indexable. */
export default function FaqList({ items, className = "" }: FaqListProps) {
  return (
    <StaggerList className={`border-t border-line ${className}`}>
      {items.map((item, i) => (
        <StaggerItem
          key={item.id ?? i}
          className="border-b border-line py-8 md:py-10"
        >
          <div
            id={item.id}
            className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-4 md:gap-16"
          >
            <h3 className="font-sans font-medium text-xl -tracking-tight leading-snug">
              {item.question}
            </h3>
            <p className="text-base text-muted leading-relaxed">
              {item.answer}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerList>
  );
}
