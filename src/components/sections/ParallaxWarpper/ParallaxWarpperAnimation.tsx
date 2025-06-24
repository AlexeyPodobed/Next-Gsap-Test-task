"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

import { useBreakpoint } from "@/hooks/useBreakpoint";
import { rem } from "@/utils/gloabl";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxWrapperAnimation() {
  const { isReady, isMobile } = useBreakpoint();

  useLayoutEffect(() => {
    const wrapper = document.querySelector<HTMLElement>(".js-parallax-wrapper");
    const joinSection = document.querySelector<HTMLElement>(".js-join-section");
    const joinBg = joinSection?.querySelector<HTMLElement>(".js-join-section-bg");

    if (!wrapper) return;

    const elements: {
      el: HTMLElement;
      baseY: number;
      baseX: number;
      jumpY: number;
      jumpX: number;
      fadeOut?: boolean;
    }[] = [];

    const addElement = (
      selector: string,
      options: Partial<{
        baseY: number;
        baseX: number;
        jumpY: number;
        jumpX: number;
        fadeOut: boolean;
      }>
    ) => {
      const el = wrapper.querySelector<HTMLElement>(selector);
      if (!el) return;
      elements.push({
        el,
        baseY: options.baseY ?? 0,
        baseX: options.baseX ?? 0,
        jumpY: options.jumpY ?? 0,
        jumpX: options.jumpX ?? 0,
        fadeOut: options.fadeOut ?? false,
      });
    };

    addElement(".js-planet-decor", { baseY: isMobile ? rem(-10) : rem(-40), jumpY: rem(0) });
    addElement(".js-parallax-wrapper-blur-top", { baseY: isMobile ? rem(-5) : rem(-40), jumpY: isMobile ? rem(-2) : rem(-15) });
    addElement(".js-parallax-wrapper-blur-left", {
      baseY: isMobile ? rem(-5) : rem(-20),
      baseX: isMobile ? rem(-2) : rem(45),
      jumpY: isMobile ? rem(-2) : rem(-6),
      jumpX: isMobile ? rem(-3) : rem(30),
      fadeOut: true,
    });

    const triggers: ScrollTrigger[] = [];

    elements.forEach(({ el, baseY, baseX, fadeOut }) => {
      const jumpOffsetY = 0;
      const jumpOffsetX = 0;
      const speedMultiplier = 1;
      const progressAtSpeedUp = 0;
      const fadeOutEnabled = false;

      const moveTrigger = ScrollTrigger.create({
        scrub: true,
        onUpdate: ({ progress }) => {
          const extra = Math.max(0, progress - progressAtSpeedUp);

          const y = baseY * progressAtSpeedUp + baseY * extra * speedMultiplier + jumpOffsetY;
          const x = baseX * progressAtSpeedUp + baseX * extra * speedMultiplier + jumpOffsetX;

          const tweenVars: gsap.TweenVars = {
            y,
            x,
            ease: "power2.out",
            duration: 0.5,
          };

          if (fadeOut && fadeOutEnabled) {
            tweenVars.opacity = Math.max(0, 1 - extra * 5);
          }

          gsap.to(el, tweenVars);
        },
      });

      triggers.push(moveTrigger);
    });

    if (joinSection && joinBg) {
      gsap.set(joinBg, { opacity: 0 });

      triggers.push(
        ScrollTrigger.create({
          trigger: joinSection,
          start: "top bottom",
          end: "center center",
          scrub: true,
          onUpdate: (self) => {
            gsap.to(joinBg, {
              opacity: self.progress,
              ease: "none",
            });
          },
        })
      );
    }

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, [isReady, isMobile]);

  return null;
}
