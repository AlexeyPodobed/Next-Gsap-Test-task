import { clsx } from "clsx";
import Image from "next/image";
import { HTMLAttributes, memo } from "react";

interface ImageWrapper extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
  cover?: boolean;
  inherit?: boolean;
  absolute?: boolean;
  wFit?: boolean;
}

export const ImageWrapper = memo<ImageWrapper>(({ src, alt = "", cover, inherit, absolute, wFit, ...props }) => {
  return (
    <div {...props}>
      {src ? (
        <Image
          className={clsx(
            "image",
            {
              "object-cover": cover,
            },
            { absolute: absolute },
            { "!w-fit": wFit }
          )}
          src={src}
          alt={alt}
          sizes="100%"
          width={0}
          height={0}
        />
      ) : (
        <div className={clsx("w-full h-full rounded-full", { "!rounded-[inherit]": inherit })}></div>
      )}
    </div>
  );
});

ImageWrapper.displayName = "ImageWrapper";
