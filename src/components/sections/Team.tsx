import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Motion";
import { teamBio } from "@/data/team";

export default function Team() {
  return (
    <SectionWrapper id="equipo">
      <Reveal className="max-w-3xl">
        <Eyebrow>({teamBio.code}) quién está detrás</Eyebrow>
        <p className="mt-7 font-sans font-medium text-2xl md:text-3xl -tracking-tight leading-snug text-ink">
          {teamBio.body}
        </p>
      </Reveal>
    </SectionWrapper>
  );
}
