"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Scissors } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Galería", href: "/galeria" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: "80px",
          display: "flex",
          alignItems: "center",
          transition: "all 0.4s ease",
          background: scrolled || pathname !== "/"
            ? "rgba(10,10,10,0.96)"
            : "rgba(10,10,10,0.1)",
          backdropFilter: scrolled || pathname !== "/" ? "blur(20px)" : "none",
          borderBottom: scrolled || pathname !== "/"
            ? "1px solid rgba(201,168,76,0.15)"
            : "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                border: "1px solid rgba(201,168,76,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Scissors size={16} color="#c9a84c" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1rem",
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
          </Link>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    textDecoration: "none",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: isActive
                      ? "#c9a84c"
                      : "rgba(245,245,245,0.7)",
                    transition: "color 0.3s ease",
                    position: "relative",
                    padding: "0.25rem 0",
                  }}
                  className="nav-link-hover"
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      style={{
                        position: "absolute",
                        bottom: "-4px",
                        left: 0,
                        right: 0,
                        height: "1px",
                        background: "#c9a84c",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link
              href="/reservar"
              className="btn-cta-nav hidden-mobile"
              style={{
                textDecoration: "none",
                padding: "0.6rem 1.5rem",
                background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
                color: "#0a0a0a",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(201,168,76,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Reservar cita
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "none",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#f5f5f5",
                cursor: "pointer",
                padding: "0.5rem",
                display: "none",
              }}
              className="show-mobile"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              maxWidth: "320px",
              background: "#111111",
              zIndex: 999,
              padding: "6rem 2rem 2rem",
              borderLeft: "1px solid rgba(201,168,76,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: pathname === link.href ? "#c9a84c" : "#f5f5f5",
                    textAlign: "left",
                    padding: "1.25rem 0",
                    transition: "color 0.3s ease",
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/reservar"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  textDecoration: "none",
                  textAlign: "center",
                  marginTop: "2rem",
                  padding: "1rem 2rem",
                  background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
                  color: "#0a0a0a",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  border: "none",
                }}
              >
                Reservar cita
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .nav-link-hover:hover {
          color: #c9a84c !important;
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
