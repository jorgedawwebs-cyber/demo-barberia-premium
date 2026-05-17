import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "BLACKWOOD BARBER STUDIO | Barbería Premium de Lujo",
  description:
    "Bienvenido a Blackwood Barber Studio — Tu barbería de alta gama. Cortes premium, afeitados clásicos y una experiencia única de otro nivel. Reserva tu cita hoy.",
  keywords: [
    "barbería premium",
    "barbería de lujo",
    "corte de pelo hombre",
    "afeitado clásico",
    "Blackwood Barber Studio",
    "barbería moderna",
    "fade haircut",
    "arreglo de barba",
  ],
  openGraph: {
    title: "BLACKWOOD BARBER STUDIO | Barbería Premium",
    description:
      "Cortes premium, afeitados clásicos y experiencia de otro nivel. Tu barbería de lujo.",
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
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise-overlay">
        <Loader />
        <Navbar />
        <div style={{ paddingTop: "80px" }}>{children}</div>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
