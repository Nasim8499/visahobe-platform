import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";
import { countries } from "@/lib/content";

export function Destinations() {
  return (
    <section id="destinations" className="section-tight">
      <div className="shell">
        <SectionHeading
          eyebrow="Destinations"
          title="Five corridors we actually run."
          body="Each destination page carries the visa types, real fee ranges, document checklists and the honest timeline. Where we use a local partner, the page says so."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {countries.map((c) => (
            <Link key={c.slug} href={`/visa/${c.slug}`} className="group">
              <GlassCard interactive className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[28px] leading-none">{c.flag}</span>
                    <h3 className="mt-3 text-title-3">{c.name}</h3>
                    <p className="text-footnote uppercase tracking-[0.1em] text-muted-foreground">{c.region}</p>
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-pill bg-[#007AFF]/10 text-[#007AFF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>

                <p className="mt-4 flex-1 text-subhead text-muted-foreground">{c.headline}</p>

                <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border/60 pt-4 text-caption">
                  <span className="inline-flex items-center gap-1.5 rounded-pill bg-card px-2.5 py-1 text-muted-foreground">
                    <Clock3 className="h-3 w-3" /> {c.processingTime}
                  </span>
                  {c.partnerSupported ? (
                    <span className="rounded-pill bg-[#7A5CFA]/10 px-2.5 py-1 font-medium text-[#7A5CFA]">
                      Partner-supported
                    </span>
                  ) : (
                    <span className="rounded-pill bg-[#00A86B]/10 px-2.5 py-1 font-medium text-[#00A86B]">
                      Direct office
                    </span>
                  )}
                </div>
              </GlassCard>
            </Link>
          ))}

          <GlassCard className="flex h-full flex-col justify-between bg-gradient-to-br from-[#7A5CFA]/10 to-[#007AFF]/10 p-6">
            <div>
              <h3 className="text-title-3">Going somewhere else?</h3>
              <p className="mt-2 text-subhead text-muted-foreground">
                We take on adjacent corridors case by case when the route is clear. Send us the destination and we will
                tell you honestly whether we can help.
              </p>
            </div>
            <Link
              href="/#contact"
              className="mt-5 inline-flex h-11 items-center justify-center rounded-pill bg-[#7A5CFA] px-5 text-callout font-semibold text-white shadow-ios transition-transform duration-300 hover:scale-[1.02]"
            >
              Ask about a route
            </Link>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
