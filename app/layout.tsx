import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PriceWatch Local – Track Competitor Pricing in Your Area",
  description: "Monitor competitor websites, social media, and review sites for pricing changes. Get instant alerts when local competitors update their prices."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9ef69ff6-e2dc-49db-acfa-a6eb432c265c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
