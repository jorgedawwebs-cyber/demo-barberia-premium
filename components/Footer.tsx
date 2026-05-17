"use client";

import { Scissors, Camera, Globe, ArrowUpRight, Heart } from "lucide-react";

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Equipo", href: "#equipo" },
  { label: "Reservas", href: "#reservas" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  "Corte Clásico",
  "Fade Moderno",
  "Arreglo de Barba",
  "Afeitado Premium",
  "Tratamientos Capilares",
  "Corte + Barba Combo",
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#080808",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(201,168,76,0.1)",
      }}
    >
      {/* Top gradient accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)",
        }}
      />

      {/* Main footer content */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "5rem 1.5rem 4rem",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "5rem",
        }}
        className="footer-grid"
      >
        {/* Brand Column */}
        <div>
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.75rem",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                border: "1px solid rgba(201,168,76,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Scissors size={18} color="#c9a84c" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#f5f5f5",
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                }}
              >
                BLACKWOOD
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.5rem",
                  fontWeight: 500,
                  letterSpacing: "0.4em",
                  color: "#c9a84c",
                  textTransform: "uppercase",
                }}
              >
                BARBER STUDIO
              </div>
            </div>
          </div>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 300,
              color: "rgba(245,245,245,0.45)",
              lineHeight: 1.8,
              marginBottom: "2rem",
              maxWidth: "300px",
            }}
          >
            Donde el estilo se convierte en arte. Barbería premium en el corazón
            de Madrid desde 2014. Cada visita, una experiencia única.
          </p>

          {/* Social */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[
              { icon: Camera, href: "#", label: "Instagram" },
              { icon: Globe, href: "#", label: "Youtube" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(245,245,245,0.5)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#c9a84c";
                  (e.currentTarget as HTMLElement).style.color = "#c9a84c";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(245,245,245,0.5)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "1.75rem",
            }}
          >
            Navegación
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {quickLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  color: "rgba(245,245,245,0.45)",
                  transition: "all 0.3s ease",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#c9a84c";
                  (e.currentTarget as HTMLElement).style.paddingLeft = "8px";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(245,245,245,0.45)";
                  (e.currentTarget as HTMLElement).style.paddingLeft = "0";
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "1.75rem",
            }}
          >
            Servicios
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {services.map((service) => (
              <button
                key={service}
                onClick={() => scrollTo("#servicios")}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  color: "rgba(245,245,245,0.45)",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#c9a84c";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(245,245,245,0.45)";
                }}
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "1.75rem 1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.75rem",
            color: "rgba(245,245,245,0.25)",
          }}
        >
          © {new Date().getFullYear()} Blackwood Barber Studio. Todos los derechos reservados.
        </span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              color: "rgba(245,245,245,0.2)",
            }}
          >
            Diseñado con
          </span>
          <Heart size={11} fill="#c9a84c" color="#c9a84c" />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              color: "rgba(245,245,245,0.2)",
            }}
          >
            para la mejor barbería
          </span>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
