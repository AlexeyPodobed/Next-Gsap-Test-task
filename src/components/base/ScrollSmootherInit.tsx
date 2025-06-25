"use client";

import { gsap } from "gsap/dist/gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function ScrollSmootherInit() {
  useLayoutEffect(() => {
    const init = () => {
      const wrapper = document.querySelector<HTMLElement>("#smooth-wrapper");
      const content = document.querySelector<HTMLElement>("#smooth-content");

      if (!wrapper || !content) return;

      const smoother = ScrollSmoother.create({
        wrapper,
        content,
        smooth: 1.2,
        effects: true,
        smoothTouch: 0.1,
      });

      return () => {
        smoother.kill();
      };
    };

    const id = requestAnimationFrame(init);

    return () => cancelAnimationFrame(id);
  }, []);

  return null;
}
