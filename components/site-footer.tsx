import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { countries, navItems } from "@/lib/content";
import { complianceBanner, site } from "@/lib/utils";

const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Refund Policy", href: "/legal/refund" },
  { label: "Anti-Bribery Statement", href: "/legal/anti-bribery" },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-10 border-t border-border/70 pb-28 pt-16 md:pb-12">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-[#007AFF] text-[16px] font-bold text-white shadow-ios">
                V
              </span>
              <span className="text-title-3">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-subhead text-muted-foreground">
              {site.legalName} is a Singapore-incorporated mobility consultancy coordinating work passes, employer of
              record and entity setup across five corridors.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-subhead text-muted-foreground">
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4" /> {site.email}
              </a>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-foreground">
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {site.addressLines.join(", ")}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-3">
            <div>
              <h3 className="text-footnote font-semibold uppercase tracking-[0.12em] text-muted-foreground">Company</h3>
              <ul className="mt-4 space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-subhead text-muted-foreground hover:text-foreground">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-footnote font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Destinations
              </h3>
              <ul className="mt-4 space-y-2.5">
                {countries.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/visa/${c.slug}`} className="text-subhead text-muted-foreground hover:text-foreground">
                      {c.flag} {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-footnote font-semibold uppercase tracking-[0.12em] text-muted-foreground">Legal</h3>
              <ul className="mt-4 space-y-2.5">
                {legalLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-subhead text-muted-foreground hover:text-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-card border border-warning/25 bg-warning/[0.06] p-4">
          <p className="text-footnote leading-relaxed text-muted-foreground">{complianceBanner}</p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border/70 pt-6 text-caption text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved. UEN pending publication.
          </p>
          <p>Partner-supported operations in Serbia, Russia and Belarus.</p>
        </div>
      </div>
    </footer>
  );
}
