import type { Metadata } from "next";
import AccountDeletionContent from "@/components/AccountDeletionContent";

export const metadata: Metadata = {
  title: "Account Deletion — PeraTrack | PeraTrack",
  description:
    "How to delete your PeraTrack account and data, what is removed, what is retained, and for how long.",
  openGraph: {
    title: "Account Deletion — PeraTrack",
    description:
      "How to delete your PeraTrack account and data, what is removed, what is retained, and for how long.",
    siteName: "PeraTrack",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Account Deletion — PeraTrack",
    description:
      "How to delete your PeraTrack account and data, what is removed, what is retained, and for how long.",
  },
};

export default function AccountDeletionPage() {
  return <AccountDeletionContent />;
}
