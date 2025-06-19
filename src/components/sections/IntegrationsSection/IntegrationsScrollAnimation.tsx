"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

import { useBreakpoint } from "@/hooks/useBreakpoint";

gsap.registerPlugin(ScrollTrigger);

export default function IntegrationsScrollAnimation() {
  const { isReady, isMobile } = useBreakpoint();

  useLayoutEffect(() => {
    const container = document.querySelector<HTMLElement>(".js-integrationss-section");
    if (!container) return;

    const list = container.querySelector<HTMLElement>(".js-integrationss-section-list");
    if (!list) return;

    const scrollAmount = list.scrollWidth - container.clientWidth;

    const trigger = gsap.to(list, {
      x: scrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: `"top" ${isMobile ? "85%" : "bottom"}`,
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      trigger.scrollTrigger?.kill();
    };
  }, [isReady, isMobile]);

  return null;
}
