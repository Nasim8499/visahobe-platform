import { Quote } from "lucide-react";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-tight">
      <div className="shell">
        <SectionHeading
          eyebrow="Client outcomes"
          title="What clients say after the card arrives."
          body="Real cases, described the way the client described them. Names used with permission."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <GlassCard key={t.name} interactive className="flex h-full flex-col p-6">
              <Quote className="h-6 w-6 text-[#007AFF]/40" />
              <blockquote className="mt-3 flex-1 text-callout leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
                <span className="grid h-9 w-9 place-items-center rounded-pill bg-gradient-to-br from-[#007AFF] to-[#7A5CFA] text-footnote font-bold text-white">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div>
                  <p className="text-footnote font-semibold">{t.name}</p>
                  <p className="text-caption text-muted-foreground">
                    {t.role} · {t.country}
                  </p>
                </div>
              </footer>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
