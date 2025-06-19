import clsx from "clsx";
import Image from "next/image";
import { memo } from "react";

import { ImageWrapper } from "@/common/ImageWrapper";

import "./ParallaxWarpper.scss";
import ParallaxWarpperAnimation from "./ParallaxWarpperAnimation";

interface ParallaxWarpperProps {
  className?: string;
}

const ParallaxWarpper = memo<ParallaxWarpperProps>(({ className }) => {
  return (
    <section className={clsx("parallax-wrapper js-parallax-wrapper", className)}>
      <ImageWrapper
        src="/images/hero-blur.svg"
        className="parallax-wrapper__blur-left js-parallax-wrapper-blur-left"
        aria-hidden="true"
      />

      <ImageWrapper
        src="/images/hero-blur-top.svg"
        className="parallax-wrapper__blur-top js-parallax-wrapper-blur-top"
        aria-hidden="true"
      />

      <Image
        src="/images/hero-planet.webp"
        alt="Decorative planet"
        sizes="100%"
        width={0}
        height={0}
        className="parallax-wrapper__planet-decor js-planet-decor"
        aria-hidden="true"
        priority
      />

      <ParallaxWarpperAnimation />
    </section>
  );
});

ParallaxWarpper.displayName = "ParallaxWarpper";

export default ParallaxWarpper;
