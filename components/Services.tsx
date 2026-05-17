"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Scissors, Zap, Droplets, Sparkles, Package, Star } from "lucide-react";

const services = [
  {
    icon: Scissors,
    name: "Corte Clásico",
    description:
      "El corte perfecto adaptado a tu estilo y tipo de cabello. Incluye lavado y acabado profesional.",
    price: "28€",
    duration: "45 min",
    badge: null,
  },
  {
    icon: Zap,
    name: "Fade Moderno",
    description:
      "Degradado skin fade de alta precisión. Transiciones perfectas para un look contemporáneo y definido.",
    price: "35€",
    duration: "60 min",
    badge: "Popular",
  },
  {
    icon: Sparkles,
    name: "Arreglo de Barba",
    description:
      "Perfilado y definición de barba con navaja recta, líneas perfectas y productos premium.",
    price: "22€",
    duration: "30 min",
    badge: null,
  },
  {
    icon: Droplets,
    name: "Afeitado Premium",
    description:
      "Ritual completo con toalla caliente, aceites esenciales y navaja de lujo. Una experiencia única.",
    price: "45€",
    duration: "50 min",
    badge: "Luxury",
  },
  {
    icon: Package,
    name: "Tratamientos Capilares",
    description:
      "Hidratación profunda, anticaída y tratamientos especializados con productos exclusivos de lujo.",
    price: "55€",
    duration: "75 min",
    badge: null,
  },
  {
    icon: Star,
    name: "Corte + Barba Combo",
    description:
      "La experiencia completa. Corte de pelo y arreglo de barba con toalla caliente incluida.",
    price: "48€",
    duration: "90 min",
    badge: "Best Value",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="servicios"
      ref={ref}
      style={{
        padding: "8rem 0",
        background: "#0a0a0a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          left: "-15%",
          top: "20%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "4.5rem" }}
        >
          <div className="section-label" style={{ marginBottom: "1.25rem" }}>
            Nuestros servicios
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              color: "#f5f5f5",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Servicios que
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              marcan la diferencia
            </span>
          </h2>
          <div
            style={{
              width: "50px",
              height: "1px",
              background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
              margin: "0 auto",
            }}
          />
        </motion.div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5px",
            background: "rgba(255,255,255,0.04)",
          }}
          className="services-grid"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.7 }}
                style={{
                  background: "#0a0a0a",
                  padding: "2.5rem 2rem",
                  position: "relative",
                  cursor: "default",
                  transition: "all 0.4s ease",
                  overflow: "hidden",
                  borderBottom: "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#111111";
                  el.style.borderBottomColor = "#c9a84c";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#0a0a0a";
                  el.style.borderBottomColor = "transparent";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Badge */}
                {service.badge && (
                  <div
                    style={{
                      position: "absolute",
                      top: "1.25rem",
                      right: "1.25rem",
                      padding: "0.25rem 0.75rem",
                      background: "rgba(201,168,76,0.15)",
                      border: "1px solid rgba(201,168,76,0.3)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#c9a84c",
                    }}
                  >
                    {service.badge}
                  </div>
                )}

                {/* Icon */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    border: "1px solid rgba(201,168,76,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Icon size={22} color="#c9a84c" />
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#f5f5f5",
                    marginBottom: "0.75rem",
                  }}
                >
                  {service.name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    color: "rgba(245,245,245,0.55)",
                    lineHeight: 1.7,
                    marginBottom: "2rem",
                    flexGrow: 1,
                  }}
                >
                  {service.description}
                </p>

                {/* Footer: Price + Duration */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "1.5rem",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {service.price}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      color: "rgba(245,245,245,0.35)",
                      textTransform: "uppercase",
                    }}
                  >
                    ⏱ {service.duration}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.7 }}
          style={{ textAlign: "center", marginTop: "3.5rem" }}
        >
          <button
            onClick={() => {
              const el = document.querySelector("#reservas");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              padding: "1rem 3rem",
              background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
              color: "#0a0a0a",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 20px 50px rgba(201,168,76,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Reservar ahora
          </button>
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
