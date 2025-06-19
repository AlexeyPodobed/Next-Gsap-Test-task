"use client";

import clsx from "clsx";
import Link from "next/link";
import { memo } from "react";

import { ImageWrapper } from "@/common/ImageWrapper";
import { SocLinkType } from "@/types/global";

interface SocLinkProps {
  link: SocLinkType;
  className?: string;
}

const SocLink = memo<SocLinkProps>(({ link, className }) => {
  return (
    <Link
      href={link.href}
      className={clsx("soc-link", className)}
    >
      <ImageWrapper
        src={link.src}
        alt={link.alt}
        absolute
        cover
      />
    </Link>
  );
});

SocLink.displayName = "SocLink";

export default SocLink;
