"use client";

import { motion } from "framer-motion";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";
import { stats, trustBadges } from "@/lib/content";

export function Snapshot() {
  return (
    <section id="snapshot" className="section">
      <div className="shell">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Company snapshot"
            title={
              <>
                A small firm by design.
                <br className="hidden md:block" /> Senior hands on every case.
              </>
            }
            body="VisaHOBe was built for companies that cannot afford an immigration mistake. Every file is prepared and reviewed by someone who has filed that route before."
          />

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <GlassCard interactive className="h-full p-5">
                  <p className="text-[34px] font-bold leading-none tracking-[-0.03em]">{s.value}</p>
                  <p className="mt-2 text-footnote font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                    {s.label}
                  </p>
                  <p className="mt-1.5 text-subhead text-muted-foreground">{s.detail}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <GlassCard className="p-4 md:p-5">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {trustBadges.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-subhead text-muted-foreground">
                  <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-[9px] bg-[#007AFF]/10 text-[#007AFF]">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
