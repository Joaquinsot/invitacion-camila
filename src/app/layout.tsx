import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mis XV Años | Alexia Camila",
  description: "Te invito a compartir conmigo este momento tan especial. ¡No faltes!",
  openGraph: {
    title: "Mis XV Años | Alexia Camila",
    description: "Te invito a compartir conmigo este momento tan especial. ¡No faltes!",
    url: "https://invitacion-camila.vercel.app", // O tu dominio final
    siteName: "Invitación Alexia Camila",
    images: [
      {
        url: "/images/nueva-portada-alexia.png", // Usaremos la imagen que subiste
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${playfair.variable} ${dancing.variable} antialiased`}
    >
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-background text-foreground selection:bg-pastel-pink/50">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
