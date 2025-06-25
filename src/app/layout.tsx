import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "BKLOVESRECS",
  description: "BKLOVESRECS",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/bk-recs-logo-light.png",
        href: "/bk-recs-logo-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/bk-recs-logo-dark.png",
        href: "/bk-recs-logo-dark.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          manrope.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
