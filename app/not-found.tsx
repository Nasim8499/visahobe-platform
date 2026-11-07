import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center pt-24">
      <div className="shell">
        <GlassCard className="mx-auto max-w-lg p-8 text-center">
          <p className="text-[56px] font-bold leading-none tracking-[-0.04em] text-[#007AFF]">404</p>
          <h1 className="mt-3 text-title-2">That page does not exist</h1>
          <p className="mt-2 text-subhead text-muted-foreground">
            The link may be old, or the destination may have moved. Start from the homepage or check eligibility.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Button asChild className="rounded-pill">
              <Link href="/">Back to home</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-pill">
              <Link href="/tools/eligibility">Check eligibility</Link>
            </Button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
