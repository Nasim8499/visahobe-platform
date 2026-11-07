import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/utils";

export function MobileCtaBar() {
  return (
    <div className="safe-bottom fixed inset-x-0 bottom-0 z-50 px-3 pb-3 md:hidden">
      <div className="specular flex items-center gap-2 rounded-pill border border-white/70 bg-white/80 p-2 shadow-ios-lg backdrop-blur-2xl backdrop-saturate-150 dark:border-white/10 dark:bg-[#141822]/85">
        <Link
          href="/#contact"
          className="tap-44 flex h-11 flex-1 items-center justify-center rounded-pill bg-[#007AFF] text-callout font-semibold text-white shadow-ios"
        >
          Talk to Consultant
        </Link>
        <Link
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="tap-44 grid h-11 w-11 place-items-center rounded-pill bg-[#25D366] text-white"
        >
          <MessageCircle className="h-5 w-5" />
        </Link>
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          aria-label="Call"
          className="tap-44 grid h-11 w-11 place-items-center rounded-pill border border-border bg-white/70 text-foreground dark:bg-white/[0.08]"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
