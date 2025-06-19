import clsx from "clsx";
import { memo } from "react";

import "./BottomBg.scss";
import { ImageWrapper } from "@/common/ImageWrapper";

interface BottomBgProps {
  className?: string;
}

const BottomBg = memo<BottomBgProps>(({ className }) => {
  return (
    <div className={clsx("bottom-bg js-bottom-bg", className)}>
      <ImageWrapper
        src="/images/join-bottom-decor.webp"
        className="bottom-bg__bottom-decor"
        cover
      />
    </div>
  );
});

BottomBg.displayName = "BottomBg";

export default BottomBg;
