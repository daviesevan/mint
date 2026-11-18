import type { Metadata } from "next";
import "@/components/arc/foundation.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "mint",
  description: "The mint application",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
