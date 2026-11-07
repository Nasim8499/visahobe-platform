"use client";

import * as React from "react";
import Link from "next/link";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";
import { countries, services } from "@/lib/content";
import { complianceBanner, site } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

const initial = {
  name: "",
  email: "",
  phone: "",
  country: "",
  service: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = React.useState(initial);
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState<string | null>(null);

  const set = (k: keyof typeof initial) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email and a short description.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      setError("That email address does not look right.");
      return;
    }

    setStatus("sending");
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...form, source: "website", submittedAt: new Date().toISOString() }),
        });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
      } else {
        // No backend configured yet: hand off to the client's mail app with a
        // fully composed message so the enquiry is never silently lost.
        const subject = `Consultation request — ${form.service || "General"}`;
        const body = [
          `Name: ${form.name}`,
          `Email: ${form.email}`,
          `Phone: ${form.phone || "—"}`,
          `Country of interest: ${form.country || "—"}`,
          `Service: ${form.service || "—"}`,
          "",
          form.message,
        ].join("\n");
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please email us directly.");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="shell">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <SectionHeading
              eyebrow="Talk to consultants"
              title="Tell us where you are going. We will tell you what it takes."
              body="A 30-minute assessment call, no charge. You leave with a realistic timeline, a document list and a fixed fee, or a straight answer that the route will not work."
            />

            <div className="ios-group mt-6">
              <div className="ios-row">
                <span className="text-muted-foreground">Email</span>
                <a href={`mailto:${site.email}`} className="font-medium hover:text-[#007AFF]">
                  {site.email}
                </a>
              </div>
              <div className="ios-row">
                <span className="text-muted-foreground">WhatsApp</span>
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-[#007AFF]">
                  Message us
                </a>
              </div>
              <div className="ios-row">
                <span className="text-muted-foreground">Response time</span>
                <span className="font-medium">{site.responseWindow}</span>
              </div>
            </div>

            <p className="mt-4 text-footnote leading-relaxed text-muted-foreground">{complianceBanner}</p>
          </div>

          <div className="md:col-span-7">
            <GlassCard className="p-5 md:p-7">
              {status === "sent" ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-pill bg-[#00A86B]/12 text-[#00A86B]">
                    <CheckCircle2 className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 text-title-3">
                    {process.env.NEXT_PUBLIC_FORM_ENDPOINT ? "Request received" : "Your email is ready to send"}
                  </h3>
                  <p className="mt-2 max-w-sm text-subhead text-muted-foreground">
                    {process.env.NEXT_PUBLIC_FORM_ENDPOINT
                      ? "A consultant will review your details and reply within one business day."
                      : `We opened your mail app with the request already written to ${site.email}. Press send and we will reply within one business day.`}
                  </p>
                  <Button
                    variant="outline"
                    size="pill"
                    className="mt-5"
                    onClick={() => {
                      setForm(initial);
                      setStatus("idle");
                    }}
                  >
                    Send another
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2" noValidate>
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="mb-1.5 block text-footnote font-medium text-muted-foreground">
                      Full name
                    </label>
                    <input id="name" className="ios-input" placeholder="Your name" value={form.name} onChange={set("name")} autoComplete="name" />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="mb-1.5 block text-footnote font-medium text-muted-foreground">
                      Email
                    </label>
                    <input id="email" type="email" className="ios-input" placeholder="you@company.com" value={form.email} onChange={set("email")} autoComplete="email" />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className="mb-1.5 block text-footnote font-medium text-muted-foreground">
                      Phone / WhatsApp
                    </label>
                    <input id="phone" className="ios-input" placeholder="+65 0000 0000" value={form.phone} onChange={set("phone")} autoComplete="tel" inputMode="tel" />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="country" className="mb-1.5 block text-footnote font-medium text-muted-foreground">
                      Destination
                    </label>
                    <select id="country" className="ios-input appearance-none" value={form.country} onChange={set("country")}>
                      <option value="">Select a country</option>
                      {countries.map((c) => (
                        <option key={c.slug} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                      <option value="Other">Other / not listed</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="service" className="mb-1.5 block text-footnote font-medium text-muted-foreground">
                      What do you need?
                    </label>
                    <select id="service" className="ios-input appearance-none" value={form.service} onChange={set("service")}>
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-footnote font-medium text-muted-foreground">
                      Your situation
                    </label>
                    <textarea
                      id="message"
                      className="ios-textarea"
                      placeholder="Who is moving, from where, and by when?"
                      value={form.message}
                      onChange={set("message")}
                    />
                  </div>

                  {error ? (
                    <p className="flex items-center gap-2 rounded-btn bg-destructive/10 px-3 py-2 text-footnote text-destructive sm:col-span-2">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" /> {error}
                    </p>
                  ) : null}

                  <div className="flex flex-col gap-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-caption text-muted-foreground">
                      We never share your details. See the{" "}
                      <Link href="/legal/privacy" className="underline underline-offset-2">
                        privacy policy
                      </Link>
                      .
                    </p>
                    <Button type="submit" size="lg" className="rounded-pill sm:min-w-[180px]" disabled={status === "sending"}>
                      {status === "sending" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Sending
                        </>
                      ) : (
                        <>
                          Send request <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
