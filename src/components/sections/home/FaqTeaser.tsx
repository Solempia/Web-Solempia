import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import FaqList from "@/components/sections/FaqList";
import { Reveal } from "@/components/ui/Motion";
import { faqTeaser } from "@/data/home";

export default function FaqTeaser() {
  return (
    <SectionWrapper id="faq">
      <Reveal className="mb-16">
        <Eyebrow>faq_</Eyebrow>
        <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
          Preguntas,
          <br />
          <span className="text-accent">sin rodeos.</span>
        </h2>
      </Reveal>

      <FaqList items={faqTeaser} />

      <Reveal delay={0.1} className="mt-10">
        <Button href="/faq" variant="ghost">
          Ver todas las preguntas →
        </Button>
      </Reveal>
    </SectionWrapper>
  );
}
