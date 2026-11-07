import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const site = {
  name: "VisaHOBe",
  legalName: "VisaHOBe PTE. LTD.",
  tagline: "Global mobility, handled properly.",
  description:
    "VisaHOBe PTE. LTD. is a Singapore-based mobility consultancy coordinating work passes, employment passes, employer-of-record and company incorporation across Singapore, Bangladesh, Serbia, Russia and Belarus.",
  url: "https://visahobe.com",
  email: "hello@visahobe.com",
  supportEmail: "support@visahobe.com",
  phone: "+65 6xxx xxxx",
  whatsapp: "+6560000000",
  whatsappHref: "https://wa.me/6560000000",
  addressLines: ["VisaHOBe PTE. LTD.", "Singapore"],
  responseWindow: "Within one business day",
} as const;

export const complianceBanner =
  "Visa decisions are made by government authorities only. VisaHOBe provides coordination and document support. Approval is not guaranteed.";
