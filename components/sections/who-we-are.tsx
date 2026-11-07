"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";

const weDo = [
  "Coordinate every filing from one accountable team",
  "Review documents against the actual current rules",
  "Tell you when a route is not worth your money",
  "Keep a written audit trail for every case",
];

const weDont = [
  "Promise approvals we do not control",
  "Quote a fee and add extras later",
  "Claim offices in countries where we use partners",
  "Disappear once the invoice is paid",
];

export function WhoWeAre() {
  return (
    <section id="about" className="section-tight">
      <div className="shell">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <SectionHeading
              eyebrow="Who we are"
              title="Mobility work is boring, precise and unforgiving. We like it that way."
              body="VisaHOBe PTE. LTD. is incorporated in Singapore and run by people who have filed these routes for over a decade. We take a limited number of cases so that each one gets reviewed twice before it leaves the office."
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <GlassCard interactive className="p-5">
                <p className="flex items-center gap-2 text-headline text-[#00A86B]">
                  <CheckCircle2 className="h-4 w-4" /> What we do
                </p>
                <ul className="mt-3 space-y-2 text-subhead text-muted-foreground">
                  {weDo.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-[#00A86B]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </GlassCard>
              <GlassCard interactive className="p-5">
                <p className="flex items-center gap-2 text-headline text-destructive">
                  <XCircle className="h-4 w-4" /> What we don&apos;t
                </p>
                <ul className="mt-3 space-y-2 text-subhead text-muted-foreground">
                  {weDont.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-destructive" />
                      {t}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-6"
          >
            <GlassCard className="h-full p-6 md:p-8">
              <p className="text-footnote font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                How a case actually runs
              </p>
              <div className="mt-5 space-y-5">
                {[
                  {
                    t: "One consultant, start to finish",
                    d: "The person who assesses your case files it. No handoffs to a junior team you never met.",
                  },
                  {
                    t: "Two-person document review",
                    d: "A second reviewer checks every file against the current checklist before submission.",
                  },
                  {
                    t: "Written status, weekly",
                    d: "You get a note each week whether or not anything moved. Silence is how cases fail.",
                  },
                  {
                    t: "Partner corridors, named clearly",
                    d: "In Serbia, Russia and Belarus we work with licensed local partners and say so on every page.",
                  },
                ].map((item, i) => (
                  <div key={item.t} className="flex gap-3">
                    <span className="mt-0.5 grid h-7 w-7 flex-shrink-0 place-items-center rounded-[9px] bg-[#007AFF]/10 text-footnote font-bold text-[#007AFF]">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-callout font-semibold">{item.t}</p>
                      <p className="mt-0.5 text-subhead text-muted-foreground">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
