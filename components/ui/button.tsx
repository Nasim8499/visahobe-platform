import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-btn px-5 text-callout font-semibold transition-all duration-300 ease-ios active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        primary: "bg-[#007AFF] text-white shadow-ios hover:bg-[#0071eb] hover:shadow-ios-lg hover:scale-[1.02]",
        accent: "bg-[#7A5CFA] text-white shadow-ios hover:bg-[#6b4df0] hover:shadow-ios-lg hover:scale-[1.02]",
        glass: "glass text-foreground hover:scale-[1.02]",
        outline: "border border-border bg-transparent text-foreground hover:bg-card hover:scale-[1.02]",
        ghost: "text-foreground hover:bg-card",
        destructive: "bg-destructive text-white hover:opacity-90",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-subhead",
        lg: "h-12 px-6 text-body",
        pill: "h-11 rounded-pill px-5",
        icon: "h-11 w-11 px-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
