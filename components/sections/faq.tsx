"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/glass-card";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="section-tight">
      <div className="shell">
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions, straight answers."
              body="If yours is not here, ask it directly. We answer plainly, including when the answer is no."
            />
          </div>

          <div className="md:col-span-8">
            <Accordion.Root type="single" collapsible className="ios-group">
              {faqs.map((f, i) => (
                <Accordion.Item
                  key={f.q}
                  value={`item-${i}`}
                  className="border-b border-border/70 last:border-b-0"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-callout font-semibold transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.03]">
                      {f.q}
                      <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-pill border border-border/80 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-45">
                        <Plus className="h-3.5 w-3.5" />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden px-4 pb-4 text-subhead text-muted-foreground data-[state=closed]:hidden">
                    {f.a}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </section>
  );
}
