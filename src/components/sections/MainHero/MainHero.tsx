import clsx from "clsx";
import Link from "next/link";
import { memo } from "react";

import { Container } from "@/common/Container";
import { Button } from "@/components/base/Button";
import "./MainHero.scss";
import { HeroCardProps } from "@/components/cards/HeroCard/HeroCard";
import { LinkType } from "@/types/global";

import MainHeroAnimations from "./MainHeroAnimations";
import MainInfo from "../MainInfo/MainInfo";

interface MainHeroProps {
  title: string;
  text: string;
  heroCards: HeroCardProps[];
  primaryLink?: LinkType;
  secondaryLink?: LinkType;
  className?: string;
}

const MainHero = memo<MainHeroProps>(({ title, text, heroCards, className, primaryLink, secondaryLink }) => {
  return (
    <>
      <section className={clsx("main-hero js-main-hero", className)}>
        <Container>
          <div className="main-hero__content js-main-hero-content">
            <h1
              className="main-hero__title js-main-info-title"
              data-title={title}
            >
              {title}
            </h1>
            {text && <p className="main-hero__subtitle">{text}</p>}

            <div className="main-hero__actions">
              {primaryLink && (
                <Link href={primaryLink.href}>
                  <Button
                    size="lg"
                    className="button"
                  >
                    {primaryLink.text}
                  </Button>
                </Link>
              )}
              {secondaryLink && (
                <Link
                  href={secondaryLink.href}
                  className="main-hero__link link"
                >
                  {secondaryLink.text}
                </Link>
              )}
            </div>
          </div>

          <MainInfo cards={heroCards} />
        </Container>
      </section>

      <MainHeroAnimations />
    </>
  );
});

MainHero.displayName = "MainHero";

export default MainHero;
