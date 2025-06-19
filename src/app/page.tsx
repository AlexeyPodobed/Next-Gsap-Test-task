import BottomBg from "@/components/blocks/BottomBg/BottomBg";
import IntegrationsSection from "@/components/sections/IntegrationsSection/IntegrationsSection";
import JoinSection from "@/components/sections/JoinSection/JoinSection";
import MainHero from "@/components/sections/MainHero/MainHero";
import MainText from "@/components/sections/MainText/MainText";
import ParallaxWarpper from "@/components/sections/ParallaxWarpper/ParallaxWarpper";
import { HOME_DATA } from "@/utils/home.mock";

export default function Home() {
  const { mainHero, integrationsSection, mainText, joinSection } = HOME_DATA;

  return (
    <div className="page-wrapper">
      <ParallaxWarpper />
      <MainHero {...mainHero} />
      <IntegrationsSection {...integrationsSection} />
      <MainText {...mainText} />
      <JoinSection {...joinSection} />
      <BottomBg />
    </div>
  );
}
