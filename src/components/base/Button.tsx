import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap cursor-pointer ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-transparent text-text-primary border-2 border-transparent",
        outline: "",
      },
      size: {
        default: "text-sm xs:text-lg font-medium rounded-full xs:min-h-[3.25rem] px-6 xs:px-8 py-3 xs:pt-3.5 xs:pb-4 leading-none",
        lg: "text-md xs:text-2xl font-medium rounded-full xs:min-h-[4.688rem] px-7 xs:px-12 py-4 xs:pb-6 xs:pt-5.3 leading-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isFluid?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, children, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    >
      <span className="z-10">{children}</span>
    </Comp>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
