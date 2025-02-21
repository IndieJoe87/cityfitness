import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { WavyBackground } from "@/components/ui/WavyBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "City Fitness Weißenfels - Ihr Studio für Gesundheit & Fitness",
  description: "Modernste Fitnesslösungen für Rückentraining, Abnehmen und Rehabilitation. Mit Smart Flex, Smart Strength und Reha-Sport.",
  keywords: [
    "Fitnessstudio Weißenfels",
    "Smart Flex",
    "Smart Strength",
    "Reha-Sport",
    "Fitness",
    "Gesundheit",
    "Training"
  ],
  authors: [{ name: "City Fitness Weißenfels" }],
  formatDetection: {
    email: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "City Fitness Weißenfels",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="flex flex-col min-h-screen text-neutral antialiased">
        {/* Background */}
        <div className="fixed inset-0 -z-10">
          <WavyBackground
            colors={[
              "rgba(0, 119, 182, 0.1)", // primary with opacity
              "rgba(0, 180, 216, 0.05)", // primary-light with opacity
              "rgba(102, 187, 106, 0.05)", // secondary with opacity
              "rgba(135, 203, 139, 0.05)", // secondary-light with opacity
              "rgba(0, 90, 140, 0.05)", // primary-dark with opacity
            ]}
            waveWidth={100}
            backgroundFill="#FFFEF8"
            blur={2}
            speed="slow"
            waveOpacity={0.05}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col min-h-screen">
          {/* Header */}
          <header className="fixed top-0 left-0 right-0 z-50">
            <Header />
          </header>

          {/* Main content */}
          <main className="flex-grow mt-20">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
