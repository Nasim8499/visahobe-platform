"use client";

import * as React from "react";
import { Check, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DocsChecklist({ slug, documents }: { slug: string; documents: string[] }) {
  const storageKey = `visahobe.docs.${slug}`;
  const [checked, setChecked] = React.useState<Record<string, boolean>>({});
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, [storageKey]);

  const toggle = (doc: string) => {
    setChecked((prev) => {
      const next = { ...prev, [doc]: !prev[doc] };
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const done = documents.filter((d) => checked[d]).length;
  const pct = Math.round((done / documents.length) * 100);

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-callout font-semibold">Document checklist</p>
          <p className="text-footnote text-muted-foreground">
            {mounted ? `${done} of ${documents.length} ready` : `${documents.length} documents required`}
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={() => window.print()} className="rounded-pill print:hidden">
          <Printer className="h-4 w-4" /> Print
        </Button>
      </div>

      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-pill bg-border print:hidden">
        <div
          className="h-full rounded-pill bg-[#00A86B] transition-all duration-300 ease-ios"
          style={{ width: `${mounted ? pct : 0}%` }}
        />
      </div>

      <ul className="mt-4 space-y-1.5">
        {documents.map((doc) => {
          const isDone = mounted && !!checked[doc];
          return (
            <li key={doc}>
              <button
                type="button"
                onClick={() => toggle(doc)}
                aria-pressed={isDone}
                className={cn(
                  "tap-44 flex w-full items-start gap-3 rounded-btn border px-3 py-2.5 text-left text-subhead transition-all duration-300",
                  isDone
                    ? "border-[#00A86B]/30 bg-[#00A86B]/[0.07] text-foreground"
                    : "border-border/70 bg-card/60 text-muted-foreground hover:border-border hover:bg-card",
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-[7px] border transition-colors",
                    isDone ? "border-[#00A86B] bg-[#00A86B] text-white" : "border-border bg-background",
                  )}
                >
                  {isDone ? <Check className="h-3 w-3" strokeWidth={3} /> : null}
                </span>
                <span className={cn(isDone && "line-through decoration-[#00A86B]/50")}>{doc}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
