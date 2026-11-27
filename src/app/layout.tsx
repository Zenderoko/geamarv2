import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Geamar SpA | Logística y Transporte Marítimo-Portuario",
  description:
    "GEAMAR SpA es una empresa fundada en 2021, orientada a satisfacer las exigencias nacionales en los ámbitos terrestre, marítimo, acuícola y portuario.",
  keywords: [
    "logística",
    "transporte marítimo",
    "consultoría marítima",
    "seguridad portuaria",
    "Geamar",
    "Chile",
  ],
  openGraph: {
    title: "Geamar SpA | Logística y Transporte",
    description:
      "Servicios de consultoría y asesoría en el ámbito marítimo portuario, prevención de riesgos, logística y transporte.",
    url: "https://geamar.cl",
    siteName: "Geamar SpA",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
