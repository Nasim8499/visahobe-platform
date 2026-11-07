"use client";

import { motion } from "framer-motion";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Process"
          title="Four steps. No mystery."
          body="You always know which step you are on and what comes next. That is the whole promise."
          align="center"
        />

        <div className="relative mt-12">
          <div
            aria-hidden
            className="absolute left-[27px] top-2 hidden h-[calc(100%-24px)] w-px bg-gradient-to-b from-[#007AFF]/40 via-[#007AFF]/20 to-transparent md:left-1/2 md:top-[27px] md:h-px md:w-[calc(100%-140px)] md:-translate-x-1/2 md:bg-gradient-to-r"
          />
          <ol className="grid gap-4 md:grid-cols-4 md:gap-5">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.step}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <GlassCard interactive className="h-full p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-pill bg-[#007AFF] text-footnote font-bold text-white shadow-ios">
                      {step.step}
                    </span>
                    <h3 className="text-callout font-semibold">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-subhead text-muted-foreground">{step.body}</p>
                </GlassCard>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
