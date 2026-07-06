import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "./globals.css";
import { Navbar }     from "@/components/layout/Navbar";
import { Footer }     from "@/components/layout/Footer";
import { PageLoader } from "@/components/ui/PageLoader";

export const metadata: Metadata = {
  title: "Nyrogen Technologies | Enterprise Software Engineering",
  description:
    "Nyrogen Technologies helps businesses grow through innovative digital solutions — custom software, web & mobile apps, UI/UX design, digital marketing, SEO, cloud solutions, and AI-powered business automation.",
  keywords: [
    "enterprise software", "custom software development",
    "web applications", "mobile apps", "UI/UX design",
    "digital marketing", "cloud solutions", "AI automation",
    "Nyrogen Technologies",
  ],
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         "https://nyrogen.com",
    siteName:    "Nyrogen Technologies",
    title:       "Nyrogen Technologies | Enterprise Software Engineering",
    description: "Helping businesses grow through innovative digital solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen flex-col bg-charcoal text-white">
        {/* Full-screen preloader — unmounts itself after load */}
        <PageLoader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
