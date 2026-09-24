import type { Metadata } from "next";
import TermsContent from "@/components/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Disclaimer | PeraTrack",
  description:
    "By using PeraTrack, you agree to the following. This is a good-faith summary, not exhaustive legal terms, and may change as the product evolves.",
  openGraph: {
    title: "Terms & Disclaimer | PeraTrack",
    description:
      "By using PeraTrack, you agree to the following. This is a good-faith summary, not exhaustive legal terms, and may change as the product evolves.",
    siteName: "PeraTrack",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms & Disclaimer | PeraTrack",
    description:
      "By using PeraTrack, you agree to the following. This is a good-faith summary, not exhaustive legal terms, and may change as the product evolves.",
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
