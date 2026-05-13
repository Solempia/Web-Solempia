interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-32 md:py-40 px-6 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
}
