import clsx from "clsx";
import Link from "next/link";
import { memo } from "react";

import "./MainText.scss";
import { Container } from "@/common/Container";
import { Button } from "@/components/base/Button";
import { LinkType } from "@/types/global";

import ParallaxElements from "../Animations/ParallaxElements";

interface MainTextProps {
  title: string;
  text: string;
  link: LinkType;
  className?: string;
}

const MainText = memo<MainTextProps>(({ className, title, text, link }) => {
  const [firstSentence, ...rest] = text.split(".");
  const firstPart = firstSentence.trim() + ".";
  const secondPart = rest.join(".").trim();

  return (
    <>
      <section className={clsx("main-text js-main-info", className)}>
        <Container>
          <div
            className="main-text__content js-parallax-el"
            data-distance="-200"
            data-mobile-parallax="true"
          >
            {title && <h2 className="main-text__title sections-title">{title}</h2>}

            {text && (
              <p className="main-text__text">
                <span>{firstPart}</span>
                {secondPart && <span>{secondPart}</span>}
              </p>
            )}

            {link && (
              <Link href={link.href}>
                <Button
                  size="lg"
                  className="main-text__button button"
                >
                  {link.text}
                </Button>
              </Link>
            )}
          </div>
        </Container>
      </section>

      <ParallaxElements />
    </>
  );
});

MainText.displayName = "MainText";

export default MainText;
