import BottomBg from "@/components/blocks/BottomBg/BottomBg";
import IntegrationsSection from "@/components/sections/IntegrationsSection/IntegrationsSection";
import JoinSection from "@/components/sections/JoinSection/JoinSection";
import MainHero from "@/components/sections/MainHero/MainHero";
import MainText from "@/components/sections/MainText/MainText";
import { TEST_DATA } from "@/utils/test.mock";

export default function Home() {
  const { mainHero, integrationsSection, mainText, joinSection } = TEST_DATA;

  return (
    <div className="page-wrapper">
      <MainHero {...mainHero} />
      <IntegrationsSection {...integrationsSection} />
      <MainText {...mainText} />
      <JoinSection {...joinSection} />
      <BottomBg />
    </div>
  );
}
