import type { Metadata } from "next";
import { EB_Garamond, Roboto_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "namelessman | Developer Portfolio",
  description: "Code simplifies the world, liberates humanity — I create it.",
  keywords: ["portfolio", "front end", "full stack", "developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${ebGaramond.variable} ${robotoMono.variable} antialiased bg-background text-foreground font-mono overflow-x-hidden`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-KSC1NTLKDV" />
    </html>
  );
}
