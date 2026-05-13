import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Pillars from "@/components/sections/Pillars";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Case from "@/components/sections/Case";
import WhyUs from "@/components/sections/WhyUs";
import Team from "@/components/sections/Team";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Pillars />
      <Process />
      <Services />
      <Case />
      <WhyUs />
      <Team />
      <FinalCTA />
    </main>
  );
}
