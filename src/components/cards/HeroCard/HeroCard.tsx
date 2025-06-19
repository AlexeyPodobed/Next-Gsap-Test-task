import { memo } from "react";

import "./HeroCard.scss";

export interface HeroCardProps {
  label: string;
  text: string;
}

const HeroCard = memo<HeroCardProps>(({ label, text }) => {
  return (
    <div className="hero-card js-hero-card">
      <p className="hero-card__info">{label}</p>
      <p className="hero-card__text">{text}</p>
    </div>
  );
});

HeroCard.displayName = "HeroCard";

export default HeroCard;
