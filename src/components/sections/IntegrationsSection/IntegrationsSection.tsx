import clsx from "clsx";
import { memo } from "react";

import "./IntegrationsSection.scss";
import { Container } from "@/common/Container";
import { ImageWrapper } from "@/common/ImageWrapper";
import { Image } from "@/types/global";

import IntegrationsScrollAnimation from "./IntegrationsScrollAnimation";

interface IntegrationsSectionProps {
  title: string;
  images: Image[];
  className?: string;
}

const IntegrationsSection = memo<IntegrationsSectionProps>(({ title, images, className }) => {
  return (
    <>
      <div className={clsx("integrationss-section js-integrationss-section", className)}>
        <Container>{title && <h2 className="integrationss-section__title sections-title">{title}</h2>}</Container>
        <div className="integrationss-section__content">
          <div className="integrationss-section__list js-integrationss-section-list">
            {!!images?.length &&
              [...images, ...images, ...images].map((image, idx) => (
                <ImageWrapper
                  key={`${image.src}-${idx}`}
                  src={image.src}
                  alt={image.alt ?? ""}
                  className="integrationss-section__item"
                />
              ))}
          </div>
        </div>
      </div>

      <IntegrationsScrollAnimation />
    </>
  );
});

IntegrationsSection.displayName = "IntegrationsSection";

export default IntegrationsSection;
