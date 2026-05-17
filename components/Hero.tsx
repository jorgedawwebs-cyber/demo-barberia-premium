"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image + Overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark gradient overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.4) 40%, rgba(10,10,10,0.85) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Animated grain texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
        }}
      >
        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              display: "block",
              width: "40px",
              height: "1px",
              background: "linear-gradient(90deg, transparent, #c9a84c)",
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#c9a84c",
            }}
          >
            Desde 2014 · Premium Barbershop
          </span>
          <span
            style={{
              display: "block",
              width: "40px",
              height: "1px",
              background: "linear-gradient(90deg, #c9a84c, transparent)",
            }}
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 9vw, 7.5rem)",
            fontWeight: 900,
            lineHeight: 1.0,
            color: "#f5f5f5",
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          Tu estilo
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #c9a84c 0%, #e8c96d 50%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontStyle: "italic",
            }}
          >
            empieza aquí
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            fontWeight: 300,
            color: "rgba(245,245,245,0.7)",
            maxWidth: "560px",
            margin: "0 auto 3rem",
            lineHeight: 1.7,
            letterSpacing: "0.02em",
          }}
        >
          Cortes premium, afeitados clásicos y una experiencia de{" "}
          <em style={{ color: "#c9a84c", fontStyle: "normal" }}>otro nivel</em>.
          Donde cada visita es un ritual.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => scrollTo("#reservas")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "1rem 2.5rem",
              background:
                "linear-gradient(135deg, #c9a84c 0%, #e8c96d 100%)",
              color: "#0a0a0a",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 20px 50px rgba(201,168,76,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Reservar cita
            <ArrowRight size={14} />
          </button>

          <button
            onClick={() => scrollTo("#servicios")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "1rem 2.5rem",
              background: "transparent",
              color: "#f5f5f5",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              border: "1px solid rgba(255,255,255,0.25)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#c9a84c";
              (e.currentTarget as HTMLElement).style.color = "#c9a84c";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)";
              (e.currentTarget as HTMLElement).style.color = "#f5f5f5";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Ver servicios
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2 }}
          onClick={() => scrollTo("#nosotros")}
          style={{
            position: "absolute",
            bottom: "-8rem",
            left: "50%",
            transform: "translateX(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={16} color="rgba(201,168,76,0.7)" />
          </motion.div>
        </motion.button>
      </div>

      {/* Side decorative text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 3 }}
        style={{
          position: "absolute",
          right: "2rem",
          top: "50%",
          transform: "translateY(-50%) rotate(90deg)",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.6rem",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "#c9a84c",
          whiteSpace: "nowrap",
        }}
      >
        Est. 2014 · Madrid, España
      </motion.div>
    </section>
  );
}
