import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FileText } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { getLegalDoc, legalDocs } from "@/lib/legal";
import { site } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return legalDocs.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const doc = getLegalDoc(params.slug);
  if (!doc) return { title: "Not found" };
  return {
    title: doc.title,
    description: doc.intro.slice(0, 155),
    alternates: { canonical: `/legal/${doc.slug}` },
  };
}

export default function LegalPage({ params }: { params: Params }) {
  const doc = getLegalDoc(params.slug);
  if (!doc) notFound();

  return (
    <section className="relative pt-24 md:pt-32">
      <div className="shell">
        <nav className="flex items-center gap-2 text-footnote text-muted-foreground" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Legal</span>
          <span>/</span>
          <span className="text-foreground">{doc.title}</span>
        </nav>

        <div className="mt-6 grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-8">
            <h1 className="text-[34px] font-bold leading-[1.1] tracking-[-0.03em] md:text-[44px]">{doc.title}</h1>
            <p className="mt-2 text-footnote text-muted-foreground">Last updated {doc.updated}</p>
            <p className="mt-5 text-body text-muted-foreground">{doc.intro}</p>

            <div className="mt-8 space-y-7">
              {doc.sections.map((s) => (
                <article key={s.heading}>
                  <h2 className="text-title-3">{s.heading}</h2>
                  <div className="mt-2 space-y-2.5">
                    {s.body.map((p) => (
                      <p key={p} className="text-subhead leading-relaxed text-muted-foreground">
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <GlassCard className="mt-10 p-5">
              <p className="text-callout font-semibold">Questions about this document?</p>
              <p className="mt-1 text-subhead text-muted-foreground">
                Email{" "}
                <a href={`mailto:${site.email}`} className="underline underline-offset-2 hover:text-foreground">
                  {site.email}
                </a>{" "}
                and a person will respond, not an autoresponder.
              </p>
            </GlassCard>
          </div>

          <aside className="md:col-span-4">
            <GlassCard className="p-5">
              <p className="text-footnote font-semibold uppercase tracking-[0.12em] text-muted-foreground">Legal documents</p>
              <ul className="mt-3 space-y-1">
                {legalDocs.map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={`/legal/${d.slug}`}
                      className={`flex items-center gap-2 rounded-btn px-2 py-2 text-subhead transition-colors ${
                        d.slug === doc.slug ? "bg-[#007AFF]/10 text-[#007AFF]" : "text-muted-foreground hover:bg-black/[0.03] dark:hover:bg-white/[0.05]"
                      }`}
                    >
                      <FileText className="h-4 w-4" />
                      {d.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </aside>
        </div>

        <div className="pb-16" />
      </div>
    </section>
  );
}
