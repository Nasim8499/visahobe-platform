import type { Metadata } from "next";
import Link from "next/link";
import { EligibilityChecker } from "@/components/eligibility-checker";
import { complianceBanner } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Visa eligibility checker",
  description:
    "A free first-pass visa eligibility check for Singapore, Bangladesh, Serbia, Russia and Belarus. Runs in your browser, no document upload.",
  alternates: { canonical: "/tools/eligibility" },
};

export default function EligibilityPage() {
  return (
    <section className="relative pt-24 md:pt-32">
      <div className="shell">
        <nav className="flex items-center gap-2 text-footnote text-muted-foreground" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Tools</span>
          <span>/</span>
          <span className="text-foreground">Eligibility</span>
        </nav>

        <div className="mt-6 max-w-2xl">
          <span className="eyebrow">Free tool</span>
          <h1 className="mt-4 text-balance text-[34px] font-bold leading-[1.08] tracking-[-0.03em] md:text-[46px]">
            Check where you stand before you pay anyone.
          </h1>
          <p className="mt-3 text-body text-muted-foreground">
            Five questions, an honest read on the route that fits, and the reasons behind it. This is a screening
            opinion, not a filing decision.
          </p>
        </div>

        <div className="mt-8 pb-16">
          <EligibilityChecker />
        </div>

        <div className="mb-16 rounded-card border border-warning/25 bg-warning/[0.07] p-4">
          <p className="text-footnote leading-relaxed text-muted-foreground">{complianceBanner}</p>
        </div>
      </div>
    </section>
  );
}
