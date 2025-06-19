"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

import { useBreakpoint } from "@/hooks/useBreakpoint";
import { rem } from "@/utils/gloabl";

gsap.registerPlugin(ScrollTrigger);

export default function JoinSectionAnimations() {
  const { isReady, isMobile, isTablet, isHdPlus } = useBreakpoint();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = document.querySelector<HTMLElement>(".js-join-section");
      const bg = document.querySelector<HTMLElement>(".js-bottom-bg");
      const decor = document.querySelector<HTMLElement>(".js-join-section-decor");

      if (!section) return;

      const offset = isHdPlus ? rem(-20) : isMobile ? rem(-12) : rem(-34.5);

      if (bg) {
        gsap.set(bg, { y: offset });

        ScrollTrigger.create({
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            bg.classList.add("visible");
            gsap.set(bg, { y: offset * self.progress });
          },
        });
      }

      if (decor) {
        const startX = -window.innerWidth;
        const startY = rem(10);
        const speedMultiplier = 4.5;

        gsap.set(decor, { x: startX, y: startY });

        ScrollTrigger.create({
          trigger: section,
          start: `${isHdPlus ? "20%" : isTablet ? "-80%" : "-30%"}  bottom`,
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            const progress = Math.min(1, self.progress * speedMultiplier);
            gsap.set(decor, {
              x: startX * (1 - progress),
              y: startY * (1 - progress),
            });
          },
        });
      }
    });

    return () => ctx.revert();
  }, [isReady, isMobile, isTablet, isHdPlus]);

  return null;
}
