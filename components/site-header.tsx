"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "@/lib/content";
import { cn, site } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div
        className={cn(
          "mx-auto flex w-full max-w-[1280px] items-center justify-between gap-3 rounded-pill px-3 transition-all duration-300 ease-ios md:px-4",
          "h-14 md:h-16",
          scrolled
            ? "specular border border-white/70 bg-white/70 shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset,0_1px_3px_rgba(16,24,40,0.1),0_8px_24px_rgba(16,24,40,0.08)] backdrop-blur-2xl backdrop-saturate-150 dark:border-white/10 dark:bg-[#1c202c]/70"
            : "specular border border-white/50 bg-white/45 backdrop-blur-xl backdrop-saturate-150 dark:border-white/[0.08] dark:bg-[#1c202c]/45",
        )}
      >
        <Link href="/" className="tap-44 flex items-center gap-2.5 pl-1 pr-2" aria-label={`${site.name} home`}>
          <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[#007AFF] text-[15px] font-bold text-white shadow-ios">
            V
          </span>
          <span className="text-headline tracking-[-0.01em]">{site.name}</span>
          <span className="hidden text-caption text-muted-foreground sm:inline">PTE. LTD.</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-pill px-3.5 py-2 text-subhead font-medium text-muted-foreground transition-colors duration-300 hover:bg-white/60 hover:text-foreground dark:hover:bg-white/[0.08]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="tap-44 hidden h-11 w-11 place-items-center rounded-pill border border-[#25D366]/30 bg-[#25D366]/10 text-[#128C7E] transition-all duration-300 hover:scale-[1.02] hover:bg-[#25D366]/20 dark:text-[#25D366] sm:grid"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2} />
          </Link>
          <Button asChild variant="primary" size="pill" className="hidden md:inline-flex">
            <Link href="/#contact">
              Talk to Consultants
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
            </Link>
          </Button>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <Button variant="glass" size="icon" className="rounded-pill lg:hidden" aria-label="Open menu">
                <Menu className="h-[18px] w-[18px]" strokeWidth={2.2} />
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/25 backdrop-blur-sm data-[state=open]:animate-in" />
              <Dialog.Content
                className="fixed inset-x-3 top-3 z-[61] overflow-hidden rounded-sheet border border-white/70 bg-white/85 p-5 shadow-ios-xl backdrop-blur-2xl backdrop-saturate-150 focus:outline-none dark:border-white/10 dark:bg-[#141822]/90"
                aria-describedby={undefined}
              >
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-title-3">{site.name}</Dialog.Title>
                  <Dialog.Close asChild>
                    <Button variant="glass" size="icon" className="rounded-pill" aria-label="Close menu">
                      <X className="h-[18px] w-[18px]" />
                    </Button>
                  </Dialog.Close>
                </div>

                <nav className="mt-4 grid gap-1" aria-label="Mobile">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.03 * i, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <Link
                        href={item.href}
                        className="tap-44 flex items-center justify-between rounded-btn px-3 py-3 text-body font-medium hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                      >
                        {item.label}
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-4 grid gap-2">
                  <Button asChild variant="primary" size="pill" className="w-full">
                    <Link href="/#contact">Talk to Consultants</Link>
                  </Button>
                  <Button asChild variant="glass" size="pill" className="w-full">
                    <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" /> WhatsApp us
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="pill" className="w-full">
                    <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
                      <Phone className="h-4 w-4" /> {site.phone}
                    </a>
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>

      <AnimatePresence />
    </header>
  );
}
