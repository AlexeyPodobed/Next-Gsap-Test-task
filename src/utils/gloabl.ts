export const rem = (rem: number) =>
  rem * (typeof window === "undefined" ? 16 : +getComputedStyle(document.documentElement).fontSize.replace("px", ""));
