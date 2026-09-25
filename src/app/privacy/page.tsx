import type { Metadata } from "next";
import PrivacyContent from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | PeraTrack",
  description:
    "PeraTrack is in active production. This plain-language policy explains what we store and how we handle it. It is not a substitute for legal advice, and we may refine it as the product evolves.",
  openGraph: {
    title: "Privacy Policy | PeraTrack",
    description:
      "PeraTrack is in active production. This plain-language policy explains what we store and how we handle it.",
    siteName: "PeraTrack",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | PeraTrack",
    description:
      "PeraTrack is in active production. This plain-language policy explains what we store and how we handle it.",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
