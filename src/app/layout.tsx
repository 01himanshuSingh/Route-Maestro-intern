import type { Metadata } from "next";
import { Geist, Geist_Mono,Bricolage_Grotesque ,Carlito} from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import Script from "next/script"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const carlito = Carlito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-carlito",
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "RouteMaestro | AI Travel Planning & Booking Platform for Travel Agencies",
  description:
    "RouteMaestro is an AI-powered travel planning and booking platform for travel agencies and tour operators. Build multi-city travel packages, manage bookings, and digitize travel operations.",
  keywords: [
    "AI travel planning",
    "travel booking platform",
    "travel agency software",
    "tour operator software",
    "AI itinerary builder",
    "travel package builder",
  ],
  openGraph: {
    title: "RouteMaestro | AI Travel Planning Platform",
    description:
      "AI-powered travel planning and booking platform for travel agencies.",
    type: "website",
  },
  icons:{
     icon: "/rmMetalogo.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${carlito.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        <Script id="clarity-script" strategy="afterInteractive">
{`
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "tg8zmwq6bl");
`}
</Script>
       <SmoothScroll/>
        <Header/>
        {children}
         <Footer />
      </body>
    </html>
  );
}
