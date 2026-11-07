"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const KEY = "visahobe.cookie-consent.v1";

export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      /* storage blocked, leave banner hidden */
    }
  }, []);

  const decide = (value: "all" | "essential") => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ value, at: new Date().toISOString() }));
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-x-3 bottom-[calc(84px+env(safe-area-inset-bottom))] z-[70] md:inset-x-auto md:bottom-6 md:left-6 md:max-w-md"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="specular overflow-hidden rounded-card border border-white/70 bg-white/85 p-4 shadow-ios-xl backdrop-blur-2xl backdrop-saturate-150 dark:border-white/10 dark:bg-[#141822]/90">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-9 w-9 flex-shrink-0 place-items-center rounded-[11px] bg-[#007AFF]/10 text-[#007AFF]">
                <Cookie className="h-[18px] w-[18px]" />
              </span>
              <div className="min-w-0">
                <p className="text-headline">We use cookies</p>
                <p className="mt-1 text-footnote text-muted-foreground">
                  Essential cookies keep the site working. Analytics cookies help us improve it. See our{" "}
                  <Link href="/legal/privacy" className="underline underline-offset-2 hover:text-foreground">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" onClick={() => decide("all")} className="flex-1">
                    Accept all
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => decide("essential")} className="flex-1">
                    Essential only
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
