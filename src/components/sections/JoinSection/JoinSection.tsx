import clsx from "clsx";
import { memo } from "react";

import "./JoinSection.scss";
import { Container } from "@/common/Container";
import { ImageWrapper } from "@/common/ImageWrapper";
import SocLink from "@/components/base/SocLink";
import { SocLinkType } from "@/types/global";

import JoinSectionAnimations from "./JoinSectionAnimations";
import ParallaxElements from "../Animations/ParallaxElements";

interface JoinSectionProps {
  title: string;
  text: string;
  subText: string;
  links: SocLinkType[];
  className?: string;
}

const JoinSection = memo<JoinSectionProps>(({ title, text, subText, links, className }) => {
  return (
    <>
      <section className={clsx("join-section js-join-section", className)}>
        <div className="join-section__bg js-join-section-bg"></div>
        <Container>
          <div className="join-section__row">
            <div
              className="join-section__content js-parallax-el"
              data-distance="40"
              data-mobile-parallax="true"
            >
              {title && <h2 className="join-section__title sections-title">{title}</h2>}
              {text && <p className="join-section__text">{text}</p>}
              <ul className="join-section__soc-list">
                {!!links?.length &&
                  links.map((link, index) => (
                    <li key={index}>
                      <SocLink link={link} />
                    </li>
                  ))}
              </ul>
            </div>

            <ImageWrapper
              src="/images/moon.webp"
              alt="Join Section decor"
              className="join-section__decor js-join-section-decor"
              aria-hidden="true"
              absolute
              cover
            />
          </div>
          {subText && (
            <div
              className="join-section__content-secondary js-parallax-el"
              data-distance="20"
              data-mobile-parallax="true"
            >
              <h3 className="join-section__title-secondary">{subText}</h3>
            </div>
          )}
        </Container>
      </section>

      <JoinSectionAnimations />
      <ParallaxElements />
    </>
  );
});

JoinSection.displayName = "JoinSection";

export default JoinSection;
