"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

import { useBreakpoint } from "./useBreakpoint";

gsap.registerPlugin(ScrollTrigger);

export function useParallaxElements() {
  const { isReady, isMobile, isDesktop } = useBreakpoint();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = document.querySelectorAll<HTMLElement>(".js-parallax-el");

      elements.forEach((el) => {
        const rawDistance = parseFloat(el.getAttribute("data-distance") || "20");
        const allowMobile = el.getAttribute("data-mobile-parallax") === "true";

        let distanceY = rawDistance;

        if (isMobile) {
          distanceY = allowMobile ? rawDistance / 2 : 0;
        } else if (isDesktop) {
          distanceY = rawDistance / 2;
        }

        gsap.to(el, {
          y: distanceY,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            scrub: 1,
            onUpdate: (self) => {
              el.style.opacity = `${Math.min(1, self.progress * 2.5)}`;
            },
          },
        });
      });
    });

    return () => ctx.revert();
  }, [isReady, isMobile, isDesktop]);
}
