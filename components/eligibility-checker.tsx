"use client";

import * as React from "react";
import { AlertTriangle, ArrowUpRight, CheckCircle2, Info, MinusCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { countries } from "@/lib/content";
import { cn } from "@/lib/utils";

type Outcome = "eligible" | "borderline" | "not-eligible";

type Rule = {
  minSalary: number;
  currency: string;
  note: string;
};

// Minimum monthly salary benchmarks used for a first-pass read only. These are
// indicative screening thresholds, not a filing decision.
const rules: Record<string, Rule> = {
  singapore: {
    minSalary: 5000,
    currency: "SGD",
    note: "Employment Pass screening benchmark. Financial-sector roles and experienced hires are assessed higher.",
  },
  bangladesh: {
    minSalary: 0,
    currency: "USD",
    note: "Outbound support: eligibility depends on a destination offer, not a local salary floor.",
  },
  serbia: {
    minSalary: 0,
    currency: "EUR",
    note: "Residence tied to employment: eligibility follows the local contract and registration.",
  },
  russia: {
    minSalary: 0,
    currency: "USD",
    note: "Invitation-led: eligibility depends on an authorised sponsor.",
  },
  belarus: {
    minSalary: 0,
    currency: "USD",
    note: "Employer permit led: eligibility depends on the employer filing first.",
  },
};

const jobOptions = [
  { value: "senior", label: "Senior professional / manager" },
  { value: "mid", label: "Mid-level professional" },
  { value: "technical", label: "Technical / trade role" },
  { value: "founder", label: "Founder / director" },
  { value: "student", label: "Student / graduate" },
];

export function EligibilityChecker() {
  const [country, setCountry] = React.useState("singapore");
  const [nationality, setNationality] = React.useState("");
  const [job, setJob] = React.useState("mid");
  const [salary, setSalary] = React.useState("");
  const [education, setEducation] = React.useState("degree");
  const [result, setResult] = React.useState<{ outcome: Outcome; reasons: string[] } | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const target = countries.find((c) => c.slug === country)!;
  const rule = rules[country];

  function evaluate(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!nationality.trim()) {
      setError("Enter your nationality so we can screen correctly.");
      return;
    }
    const salaryNum = Number(salary.replace(/[^0-9.]/g, ""));
    if (rule.minSalary > 0 && (!salaryNum || Number.isNaN(salaryNum))) {
      setError(`Enter your expected monthly salary in ${rule.currency}.`);
      return;
    }

    const reasons: string[] = [];
    let outcome: Outcome = "eligible";

    if (rule.minSalary > 0) {
      if (salaryNum >= rule.minSalary) {
        reasons.push(`Salary of ${rule.currency} ${salaryNum.toLocaleString()} meets the ${rule.currency} ${rule.minSalary.toLocaleString()} screening benchmark.`);
      } else if (salaryNum >= rule.minSalary * 0.9) {
        outcome = "borderline";
        reasons.push(`Salary of ${rule.currency} ${salaryNum.toLocaleString()} sits just under the ${rule.currency} ${rule.minSalary.toLocaleString()} benchmark. Compensating experience is sometimes accepted.`);
      } else {
        outcome = "not-eligible";
        reasons.push(`Salary of ${rule.currency} ${salaryNum.toLocaleString()} is below the ${rule.currency} ${rule.minSalary.toLocaleString()} screening benchmark for this route.`);
      }
    }

    if (job === "student" && country === "singapore") {
      if (outcome === "eligible") outcome = "borderline";
      reasons.push("Student profiles usually need a Training Employment Pass or a Student Pass route instead of a standard EP.");
    }

    if (education === "none" && rule.minSalary > 0) {
      if (outcome === "eligible") outcome = "borderline";
      reasons.push("No formal qualification on record. Compensating work experience evidence becomes essential.");
    }

    if (education === "degree") {
      reasons.push("A recognised degree is on record, which supports the standard route.");
    }

    if (country !== "singapore") {
      outcome = "borderline";
      reasons.push(rule.note);
      reasons.push(`Cases into ${target.name} depend on employer-side paperwork first. We confirm that before quoting.`);
    }

    reasons.push("Final decisions rest with the government authority. This screen is guidance, not an approval.");

    const payload = { outcome, reasons, country, nationality, job, salary, at: new Date().toISOString() };
    try {
      localStorage.setItem("visahobe.eligibility.last", JSON.stringify(payload));
    } catch {
      /* ignore */
    }
    setResult({ outcome, reasons });
  }

  const tone =
    result?.outcome === "eligible"
      ? { color: "text-[#00A86B]", bg: "bg-[#00A86B]/10", Icon: CheckCircle2, label: "Likely eligible" }
      : result?.outcome === "borderline"
        ? { color: "text-warning", bg: "bg-warning/10", Icon: AlertTriangle, label: "Case by case" }
        : { color: "text-destructive", bg: "bg-destructive/10", Icon: MinusCircle, label: "Unlikely on this route" };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <GlassCard className="p-5 md:p-6">
        <form onSubmit={evaluate} className="grid gap-3">
          <div>
            <label htmlFor="nationality" className="mb-1.5 block text-footnote font-medium text-muted-foreground">
              Your nationality
            </label>
            <input
              id="nationality"
              className="ios-input"
              placeholder="e.g. Bangladeshi"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="country" className="mb-1.5 block text-footnote font-medium text-muted-foreground">
              Target country
            </label>
            <select id="country" className="ios-input appearance-none" value={country} onChange={(e) => setCountry(e.target.value)}>
              {countries.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.flag} {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="job" className="mb-1.5 block text-footnote font-medium text-muted-foreground">
              Role type
            </label>
            <select id="job" className="ios-input appearance-none" value={job} onChange={(e) => setJob(e.target.value)}>
              {jobOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="salary" className="mb-1.5 block text-footnote font-medium text-muted-foreground">
              Expected monthly salary {rule.minSalary > 0 ? `(${rule.currency})` : ""}
            </label>
            <input
              id="salary"
              className="ios-input"
              inputMode="numeric"
              placeholder={rule.minSalary > 0 ? String(rule.minSalary) : "Optional"}
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="education" className="mb-1.5 block text-footnote font-medium text-muted-foreground">
              Highest qualification
            </label>
            <select id="education" className="ios-input appearance-none" value={education} onChange={(e) => setEducation(e.target.value)}>
              <option value="degree">Bachelor&apos;s degree or higher</option>
              <option value="diploma">Diploma / vocational</option>
              <option value="none">No formal qualification</option>
            </select>
          </div>

          {error ? <p className="rounded-btn bg-destructive/10 px-3 py-2 text-footnote text-destructive">{error}</p> : null}

          <Button type="submit" size="lg" className="mt-1 rounded-pill">
            Run assessment
          </Button>
          <p className="text-caption text-muted-foreground">
            Nothing is uploaded. This screen runs entirely in your browser.
          </p>
        </form>
      </GlassCard>

      <GlassCard className="flex flex-col p-5 md:p-6">
        {result ? (
          <>
            <div className={cn("flex items-center gap-2 rounded-pill px-3 py-1.5 text-footnote font-semibold", tone.bg, tone.color)}>
              <tone.Icon className="h-4 w-4" /> {tone.label}
            </div>
            <h3 className="mt-4 text-title-3">
              {target.flag} {target.name}
            </h3>
            <ul className="mt-3 flex-1 space-y-2">
              {result.reasons.map((r) => (
                <li key={r} className="flex gap-2 text-subhead text-muted-foreground">
                  <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-[#007AFF]" />
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-5 grid gap-2">
              <Button asChild size="lg" className="rounded-pill">
                <Link href="/#contact">
                  Discuss this with a consultant <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-pill">
                <Link href={`/visa/${country}`}>See {target.name} requirements</Link>
              </Button>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center py-10 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-pill bg-[#007AFF]/10 text-[#007AFF]">
              <Info className="h-6 w-6" />
            </span>
            <p className="mt-4 max-w-xs text-subhead text-muted-foreground">
              Fill in the form to get a first-pass read on which route fits, with the specific reasons behind it.
            </p>
          </div>
        )}
      </GlassCard>
    </div>
  );
}
