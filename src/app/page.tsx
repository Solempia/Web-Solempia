import HeroHome from "@/components/sections/home/HeroHome";
import Problema from "@/components/sections/home/Problema";
import Cambio from "@/components/sections/home/Cambio";
import MetodoResumen from "@/components/sections/home/MetodoResumen";
import Escalera from "@/components/sections/home/Escalera";
import Garantia from "@/components/sections/home/Garantia";
import Numero from "@/components/sections/home/Numero";
import PorQue from "@/components/sections/home/PorQue";
import FaqTeaser from "@/components/sections/home/FaqTeaser";
import CtaBand from "@/components/sections/CtaBand";
import { ctaFinal } from "@/data/home";

export default function Home() {
  return (
    <main>
      <HeroHome />
      <Problema />
      <Cambio />
      <MetodoResumen />
      <Escalera />
      <Garantia />
      <Numero />
      <PorQue />
      <FaqTeaser />
      <CtaBand
        id="contacto"
        title={ctaFinal.heading}
        titleAccent={ctaFinal.headingAccent}
        body={ctaFinal.body}
        primary={ctaFinal.primary}
        note={ctaFinal.alt}
      />
    </main>
  );
}
