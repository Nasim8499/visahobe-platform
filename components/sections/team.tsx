"use client";

import { motion } from "framer-motion";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";
import { team } from "@/lib/content";

export function Team() {
  return (
    <section id="team" className="section-tight">
      <div className="shell">
        <SectionHeading
          eyebrow="Team"
          title="Operators, not intermediaries."
          body="A deliberately small senior team, with named regional partners we have worked with for years."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <GlassCard interactive className="h-full p-5">
                <span className="grid h-12 w-12 place-items-center rounded-[15px] bg-gradient-to-br from-[#007AFF]/15 to-[#7A5CFA]/20 text-callout font-bold text-[#007AFF]">
                  {m.initials}
                </span>
                <p className="mt-3 text-callout font-semibold">{m.name}</p>
                <p className="text-footnote text-muted-foreground">{m.role}</p>
                <p className="mt-2 text-caption uppercase tracking-[0.1em] text-muted-foreground/80">{m.focus}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
