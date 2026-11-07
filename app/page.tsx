import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Snapshot } from "@/components/sections/snapshot";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { Services } from "@/components/sections/services";
import { Destinations } from "@/components/sections/destinations";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Team } from "@/components/sections/team";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "VisaHOBe — Global mobility, handled properly",
  description:
    "Singapore-based visa and mobility consultancy. Employment passes, employer of record and company incorporation across Singapore, Bangladesh, Serbia, Russia and Belarus.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Snapshot />
      <WhoWeAre />
      <Services />
      <Destinations />
      <Process />
      <Testimonials />
      <Team />
      <Faq />
      <Contact />
    </>
  );
}
