"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type ClientPathDetectorProps = {
  path: string[];
  children: ReactNode;
};

export default function ClientPathDetector({ path, children }: ClientPathDetectorProps) {
  const pathname = usePathname();

  if (!path.includes(pathname)) return null;

  return <>{children}</>;
}
