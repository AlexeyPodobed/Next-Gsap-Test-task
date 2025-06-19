import "./common.scss";
import { clsx } from "clsx";
import * as React from "react";
import { memo } from "react";

export interface Container extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container = memo<Container>(({ children, className, ...props }) => {
  return (
    <div
      className={clsx("container-common", className)}
      {...props}
    >
      {children}
    </div>
  );
});

Container.displayName = "Container";
