import * as React from "react";
import { cn } from "@/lib/utils";

/** Liquid glass card: translucent surface, specular sheen, iOS radius. */
export function GlassCard({
  className,
  children,
  interactive = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { interactive?: boolean }) {
  return (
    <div
      className={cn(
        "specular relative rounded-card border border-white/70 bg-white/70 backdrop-blur-2xl backdrop-saturate-150",
        "shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset,0_1px_3px_rgba(16,24,40,0.12),0_8px_24px_rgba(16,24,40,0.08)]",
        "dark:border-white/10 dark:bg-[#1c202c]/60 dark:shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset,0_1px_3px_rgba(0,0,0,0.5),0_8px_24px_rgba(0,0,0,0.45)]",
        interactive &&
          "transition-all duration-300 ease-ios hover:-translate-y-0.5 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset,0_1px_3px_rgba(16,24,40,0.12),0_24px_60px_rgba(16,24,40,0.1)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="max-w-3xl text-balance text-title-1 md:text-[40px] md:leading-[46px] md:tracking-[-0.025em]">
        {title}
      </h2>
      {body ? (
        <p className={cn("max-w-xl text-pretty text-body text-muted-foreground", align === "center" && "mx-auto")}>
          {body}
        </p>
      ) : null}
    </div>
  );
}
