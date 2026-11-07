"use client";

import Image from "next/image";
import heroImage from "@/public/hero-singapore.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BadgeCheck, Clock3, MessageCircle, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { complianceBanner, site } from "@/lib/utils";

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28">
      <div className="shell">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="relative z-10">
            <motion.span variants={fade} custom={0} initial="hidden" animate="show" className="eyebrow">
              <BadgeCheck className="h-3.5 w-3.5 text-[#007AFF]" />
              Singapore-registered consultancy
            </motion.span>

            <motion.h1
              variants={fade}
              custom={1}
              initial="hidden"
              animate="show"
              className="mt-5 text-balance text-[40px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[64px] md:leading-[1.02]"
            >
              Global mobility,
              <br />
              <span className="bg-gradient-to-r from-[#007AFF] via-[#3D8BFF] to-[#7A5CFA] bg-clip-text text-transparent">
                handled properly.
              </span>
            </motion.h1>

            <motion.p
              variants={fade}
              custom={2}
              initial="hidden"
              animate="show"
              className="mt-5 max-w-lg text-pretty text-body text-muted-foreground md:text-[19px] md:leading-[28px]"
            >
              Work passes, employer of record and company incorporation across Singapore, Bangladesh, Serbia, Russia and
              Belarus. Fixed fees, document QC before every filing, and a real person who answers.
            </motion.p>

            <motion.div
              variants={fade}
              custom={3}
              initial="hidden"
              animate="show"
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg" variant="primary" className="rounded-pill">
                <Link href="/#contact">
                  Talk to Consultants
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="glass" className="rounded-pill">
                <Link href="/tools/eligibility">
                  Check eligibility
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fade}
              custom={4}
              initial="hidden"
              animate="show"
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-footnote text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 fill-[#FFB020] text-[#FFB020]" /> 4.9/5 client rating
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#00A86B]" /> Fixed fees, no success charges
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-3.5 w-3.5 text-[#007AFF]" /> Reply {site.responseWindow.toLowerCase()}
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-white/70 shadow-[0_24px_60px_rgba(16,24,40,0.14)] dark:border-white/10">
              <Image
                src={heroImage}
                alt="Singapore skyline at dusk with Marina Bay Sands"
                width={1600}
                height={1000}
                priority
                className="h-[320px] w-full object-cover md:h-[520px]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

              <div className="absolute inset-x-3 bottom-3 md:inset-x-4 md:bottom-4">
                <GlassCard className="border-white/40 bg-white/25 p-4 backdrop-blur-2xl">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-footnote uppercase tracking-[0.14em] text-white/80">Currently coordinating</p>
                      <p className="mt-1 text-title-3 text-white">Employment Pass · Singapore</p>
                    </div>
                    <span className="rounded-pill bg-[#00A86B] px-3 py-1 text-caption font-semibold text-white">
                      In review
                    </span>
                  </div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-pill bg-white/25">
                    <div className="h-full w-[62%] rounded-pill bg-white" />
                  </div>
                  <div className="mt-2 flex justify-between text-caption text-white/80">
                    <span>Documents verified</span>
                    <span>62%</span>
                  </div>
                </GlassCard>
              </div>
            </div>

            <div className="mt-3 flex items-start gap-2 rounded-card border border-warning/25 bg-warning/[0.07] px-3 py-2">
              <ShieldCheck className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-warning" />
              <p className="text-caption leading-relaxed text-muted-foreground">{complianceBanner}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
