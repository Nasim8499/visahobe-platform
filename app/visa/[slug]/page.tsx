import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Building2, CheckCircle2, Clock3, FileText, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { DocsChecklist } from "@/components/docs-checklist";
import { countries } from "@/lib/content";
import { complianceBanner, site } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return countries.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const c = countries.find((x) => x.slug === params.slug);
  if (!c) return { title: "Destination not found" };
  return {
    title: `${c.name} visa & work permit services`,
    description: `${c.headline}. Visa types, fees, document checklist and timeline for ${c.name} from ${site.legalName}.`,
    alternates: { canonical: `/visa/${c.slug}` },
    openGraph: { title: `${c.name} — ${site.name}`, description: c.summary },
  };
}

export default function CountryPage({ params }: { params: Params }) {
  const c = countries.find((x) => x.slug === params.slug);
  if (!c) notFound();

  return (
    <>
      <section className="relative overflow-hidden pt-24 md:pt-32">
        <div className="shell">
          <nav className="flex items-center gap-2 text-footnote text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/#destinations" className="hover:text-foreground">
              Destinations
            </Link>
            <span>/</span>
            <span className="text-foreground">{c.name}</span>
          </nav>

          <div className="mt-6 grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <span className="eyebrow">
                <span className="text-[15px] leading-none">{c.flag}</span>
                {c.region}
              </span>
              <h1 className="mt-4 text-balance text-[34px] font-bold leading-[1.08] tracking-[-0.03em] md:text-[52px] md:leading-[1.04]">
                {c.headline}
              </h1>
              <p className="mt-4 max-w-xl text-body text-muted-foreground">{c.summary}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-pill bg-card px-3 py-1.5 text-footnote text-muted-foreground">
                  <Clock3 className="h-3.5 w-3.5" /> {c.processingTime}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-pill bg-card px-3 py-1.5 text-footnote text-muted-foreground">
                  <FileText className="h-3.5 w-3.5" /> {c.documents.length} documents
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-pill bg-card px-3 py-1.5 text-footnote text-muted-foreground">
                  <Building2 className="h-3.5 w-3.5" /> {c.visaTypes.length} routes
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-pill">
                  <Link href={`/tools/eligibility?country=${c.slug}`}>
                    Start assessment <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="lg" className="rounded-pill">
                  <Link href="/#contact">Talk to a consultant</Link>
                </Button>
              </div>
            </div>

            <div className="md:col-span-5">
              <GlassCard className="p-5">
                <p className="text-footnote font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  What to expect
                </p>
                <p className="mt-2 text-callout">{c.successNote}</p>
                <div className="mt-4 border-t border-border/60 pt-4">
                  <p className="text-footnote text-muted-foreground">Processing window</p>
                  <p className="text-headline">{c.processingTime}</p>
                </div>
                {c.partnerSupported ? (
                  <div className="mt-4 flex items-start gap-2 rounded-btn border border-[#7A5CFA]/25 bg-[#7A5CFA]/[0.07] p-3">
                    <ShieldAlert className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#7A5CFA]" />
                    <p className="text-footnote leading-relaxed text-muted-foreground">{c.partnerNote}</p>
                  </div>
                ) : (
                  <div className="mt-4 flex items-start gap-2 rounded-btn border border-[#00A86B]/25 bg-[#00A86B]/[0.07] p-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#00A86B]" />
                    <p className="text-footnote leading-relaxed text-muted-foreground">{c.partnerNote}</p>
                  </div>
                )}
              </GlassCard>
            </div>
          </div>

          <div className="mt-8 rounded-card border border-warning/25 bg-warning/[0.07] p-4">
            <p className="text-footnote leading-relaxed text-muted-foreground">{complianceBanner}</p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="shell">
          <h2 className="text-title-1">Visa types and fees</h2>
          <p className="mt-2 max-w-xl text-subhead text-muted-foreground">
            Government fees are passed through at cost with receipts. Service fees are fixed after assessment.
          </p>

          <div className="mt-6 hidden overflow-hidden rounded-card border border-border/70 md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-card/80 backdrop-blur-xl">
                  <th className="px-4 py-3 text-footnote font-semibold uppercase tracking-[0.1em] text-muted-foreground">Route</th>
                  <th className="px-4 py-3 text-footnote font-semibold uppercase tracking-[0.1em] text-muted-foreground">Who it suits</th>
                  <th className="px-4 py-3 text-footnote font-semibold uppercase tracking-[0.1em] text-muted-foreground">Timeline</th>
                  <th className="px-4 py-3 text-footnote font-semibold uppercase tracking-[0.1em] text-muted-foreground">Government fee</th>
                  <th className="px-4 py-3 text-footnote font-semibold uppercase tracking-[0.1em] text-muted-foreground">Service fee</th>
                </tr>
              </thead>
              <tbody>
                {c.visaTypes.map((v) => (
                  <tr key={v.name} className="border-t border-border/70 align-top">
                    <td className="px-4 py-4 text-callout font-semibold">{v.name}</td>
                    <td className="px-4 py-4 text-subhead text-muted-foreground">{v.forWhom}</td>
                    <td className="px-4 py-4 text-subhead text-muted-foreground">{v.timeline}</td>
                    <td className="px-4 py-4 text-subhead text-muted-foreground">{v.govtFee}</td>
                    <td className="px-4 py-4 text-subhead font-medium">{v.serviceFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-3 md:hidden">
            {c.visaTypes.map((v) => (
              <GlassCard key={v.name} className="p-4">
                <p className="text-callout font-semibold">{v.name}</p>
                <p className="mt-1 text-subhead text-muted-foreground">{v.forWhom}</p>
                <dl className="mt-3 grid grid-cols-2 gap-2 border-t border-border/60 pt-3 text-footnote">
                  <div>
                    <dt className="text-muted-foreground">Timeline</dt>
                    <dd className="font-medium">{v.timeline}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Service fee</dt>
                    <dd className="font-medium">{v.serviceFee}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-muted-foreground">Government fee</dt>
                    <dd className="font-medium">{v.govtFee}</dd>
                  </div>
                </dl>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="shell">
          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard className="p-5 md:p-6">
              <h2 className="text-title-3">Eligibility requirements</h2>
              <ul className="mt-4 space-y-2.5">
                {c.requirements.map((r) => (
                  <li key={r} className="flex gap-2.5 text-subhead text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#00A86B]" />
                    {r}
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-5 md:p-6">
              <DocsChecklist slug={c.slug} documents={c.documents} />
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="section-tight pb-16">
        <div className="shell">
          <GlassCard className="flex flex-col items-start justify-between gap-4 bg-gradient-to-br from-[#007AFF]/10 to-[#7A5CFA]/10 p-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-title-2">Ready to start your {c.name} case?</h2>
              <p className="mt-1 text-subhead text-muted-foreground">
                Assessment call, fixed fee quote, and a document list built for your exact route.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild size="lg" className="rounded-pill">
                <Link href="/#contact">Book assessment</Link>
              </Button>
              <Button asChild variant="glass" size="lg" className="rounded-pill">
                <Link href={`/tools/eligibility?country=${c.slug}`}>Check eligibility</Link>
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
