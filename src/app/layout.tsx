import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#1E3A8A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Eurocon System LLP | Advanced HVAC & Industrial Air Management Solutions",
  description:
    "Eurocon System LLP delivers engineered HVAC, ventilation and industrial air management solutions designed for reliable performance, aerodynamic efficiency and total environmental comfort.",
  keywords: [
    "Eurocon System LLP",
    "Air Handling Unit (AHU)",
    "Fan Coil Unit (FCU)",
    "Industrial Air Washer",
    "TFA Treated Fresh Air Unit",
    "Fan Section",
    "Cabinet Exhaust Unit",
    "Scrubber Dry & Wet",
    "Cabinet Inline Unit",
    "HVAC Engineering Solutions",
    "AMCA 210 Certified",
    "EN 1886 Thermal Break",
  ],
  authors: [{ name: "Eurocon System LLP" }],
  creator: "Eurocon System LLP",
  publisher: "Eurocon System LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Eurocon System LLP | Engineered Airflow. Built For Performance.",
    description:
      "Advanced air management, industrial ventilation, and HVAC engineering solutions engineered for peak aerodynamic efficiency and life-safety compliance.",
    url: "https://euroconsystem.com",
    siteName: "Eurocon System LLP",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-white text-[#334155] font-sans antialiased selection:bg-blue-600 selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
