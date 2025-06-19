import clsx from "clsx";
import { memo } from "react";

import HeroCard, { HeroCardProps } from "@/components/cards/HeroCard/HeroCard";
import "./MainInfo.scss";

interface MainInfoProps {
  cards: HeroCardProps[];
  className?: string;
}

const MainInfo = memo<MainInfoProps>(({ cards, className }) => {
  return (
    <div className={clsx("main-info js-main-info", className)}>
      <div className="main-info__content js-main-info-content">
        {!!cards?.length &&
          cards.map((card) => (
            <HeroCard
              key={card.label}
              label={card.label}
              text={card.text}
            />
          ))}
      </div>
    </div>
  );
});

MainInfo.displayName = "MainInfo";

export default MainInfo;
