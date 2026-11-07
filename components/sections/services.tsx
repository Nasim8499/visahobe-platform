import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Everything a move needs,
              <br className="hidden md:block" /> under one accountable team.
            </>
          }
          body="Six core services, priced at a fixed fee after assessment. You can start with one and add the rest later."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <GlassCard key={s.title} interactive className="flex h-full flex-col p-6">
                <span className="grid h-11 w-11 place-items-center rounded-[13px] bg-gradient-to-br from-[#007AFF]/15 to-[#7A5CFA]/15 text-[#007AFF]">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-title-3">{s.title}</h3>
                <p className="mt-2 flex-1 text-subhead text-muted-foreground">{s.description}</p>
                <ul className="mt-4 space-y-1.5 border-t border-border/60 pt-4">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-footnote text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-[#007AFF]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 rounded-pill px-4 py-2 text-callout font-semibold text-[#007AFF] transition-transform duration-300 hover:scale-[1.02]"
          >
            Not sure which service you need? Ask us
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
