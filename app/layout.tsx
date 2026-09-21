import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quadaid LLC | Mortgage Back Office Support Services",
  description:
    "Your Trusted Business Partner in Mortgage Back office support services in Texas and Colorado.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
