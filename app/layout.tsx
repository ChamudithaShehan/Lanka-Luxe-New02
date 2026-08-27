import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/context/LanguageContext";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import ScrollProgress from "@/components/navigation/ScrollProgress";
import WhatsAppFloating from "@/components/ui/WhatsAppFloating";
import BackToTop from "@/components/ui/BackToTop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lanka Luxe Journeys | Discover Sri Lanka in Extraordinary Style",
  description:
    "Curators of ultra-luxury bespoke journeys, championship golf holidays, private wildlife safaris, and Relais & Châteaux retreats in Sri Lanka. Tailored for discerning international and Korean travelers.",
  keywords: [
    "Sri Lanka Luxury Travel",
    "Sri Lanka Golf Tour",
    "스리랑카 럭셔리 골프 여행",
    "스리랑카 맞춤 여행",
    "Victoria Golf Resort",
    "Ceylon Tea Trails",
    "Wild Coast Tented Lodge",
    "Amangalla",
    "Sri Lanka Private Tour Chauffeur",
  ],
  authors: [{ name: "Lanka Luxe Journeys Concierge" }],
  openGraph: {
    title: "Lanka Luxe Journeys | Bespoke Sri Lanka Luxury Travel & Golf",
    description:
      "Experience Sri Lanka in extraordinary style. Championship golf, private leopard safaris, colonial tea bungalows, and ocean villas.",
    type: "website",
    locale: "en_US",
    siteName: "Lanka Luxe Journeys",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} ${notoSansKR.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#081A33] text-[#F6F3EE] font-sans antialiased flex flex-col selection:bg-[#C9A86A] selection:text-[#081A33]">
        <LanguageProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloating />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
