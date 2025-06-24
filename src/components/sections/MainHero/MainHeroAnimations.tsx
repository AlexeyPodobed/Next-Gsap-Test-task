"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

import { useBreakpoint } from "@/hooks/useBreakpoint";
import { rem } from "@/utils/gloabl";

gsap.registerPlugin(ScrollTrigger);

export default function MainHeroAnimations() {
  const { isMobile, isTablet, isHdPlus, isReady } = useBreakpoint();

  useLayoutEffect(() => {
    if (!isReady) return;

    const section = document.querySelector(".js-main-hero");
    if (!section) return;

    const content = section.querySelector(".js-main-hero-content");
    const title = section.querySelector(".js-main-info-title");
    const cards = section.querySelectorAll(".js-main-info .js-hero-card");

    if (!content || !title || !cards.length) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${rem(60)}`,
        scrub: true,
        pin: true,
        onUpdate: ({ progress }) => {
          title.classList.toggle("is-alt-gradient", progress > 0.6);
        },
      },
    });

    timeline.to(content, { y: isHdPlus ? rem(-8) : isMobile ? rem(-1) : rem(-8), ease: "power2.out" }, 0).to(
      cards,
      {
        y: isTablet ? rem(-50) : isMobile ? rem(-25) : rem(-29),
        ease: "power2.out",
        stagger: 0.15,
      },
      0
    );

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, [isReady, isMobile, isTablet, isHdPlus]);

  return null;
}
