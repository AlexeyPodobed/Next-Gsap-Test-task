import { useEffect, useState } from "react";

import { BREAKPOINTS } from "@/consts/main";

export function useBreakpoint() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isReady = width !== null;

  return {
    isReady,
    width,
    isMobile: isReady && width! < BREAKPOINTS.mobile,
    isTablet: isReady && width! >= BREAKPOINTS.mobile && width! < BREAKPOINTS.tablet,
    isDesktop: isReady && width! >= BREAKPOINTS.tablet && width! < BREAKPOINTS.desktop,
    isHD: isReady && width! >= BREAKPOINTS.desktop && width! < BREAKPOINTS.mac,
    isMac: isReady && width! >= BREAKPOINTS.mac && width! < BREAKPOINTS.hdPlus,
    isHdPlus: isReady && width! >= BREAKPOINTS.desktop && width! < BREAKPOINTS.fhd,
    isFHD: isReady && width! >= BREAKPOINTS.fhd && width! < BREAKPOINTS.uhd2k,
    is2K: isReady && width! >= BREAKPOINTS.uhd2k && width! < BREAKPOINTS.uhd4k,
    is4K: isReady && width! >= BREAKPOINTS.uhd4k,
  };
}
