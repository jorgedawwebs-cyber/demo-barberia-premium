"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Diego Ruiz",
    location: "Madrid, España",
    rating: 5,
    comment:
      "Sin duda la mejor barbería en la que he estado. El ambiente es increíble y Alejandro tiene unas manos prodigiosas. El fade que me hizo quedó perfecto. Volveré cada mes sin dudar.",
    service: "Fade Moderno",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    name: "Marco Fernández",
    location: "Barcelona, España",
    rating: 5,
    comment:
      "Pedí el combo corte + barba y fue una experiencia increíble. El ambiente es de otra categoría. La toalla caliente, el afeitado con navaja... me sentí como en un spa de lujo para hombres.",
    service: "Corte + Barba Combo",
    avatar: "https://i.pravatar.cc/80?img=33",
  },
  {
    name: "Javier Moreno",
    location: "Valencia, España",
    rating: 5,
    comment:
      "Carlos es un artista. Los degradados que hace son impresionantes. El estudio en sí ya te dice mucho — limpio, moderno, con música perfecta y un trato excelente. Imposible pedir más.",
    service: "Fade Moderno",
    avatar: "https://i.pravatar.cc/80?img=57",
  },
  {
    name: "Andrés López",
    location: "Sevilla, España",
    rating: 5,
    comment:
      "Vine por primera vez hace 6 meses y ya no puedo imaginarme ir a otro sitio. Sara me arregla la barba de forma perfecta. Un negocio 10/10 en todos los aspectos.",
    service: "Arreglo de Barba Premium",
    avatar: "https://i.pravatar.cc/80?img=68",
  },
  {
    name: "Pablo Sánchez",
    location: "Bilbao, España",
    rating: 5,
    comment:
      "El afeitado premium fue una experiencia que no olvidaré. Toallas calientes, aceites esenciales, navaja perfecta... Se nota que aquí se cuida cada detalle. Absolutamente recomendable.",
    service: "Afeitado Premium",
    avatar: "https://i.pravatar.cc/80?img=22",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section
      id="testimonios"
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
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <div className="section-label" style={{ marginBottom: "1.25rem" }}>
            Testimonios
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              color: "#f5f5f5",
              lineHeight: 1.1,
            }}
          >
            Lo que dicen
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
              nuestros clientes
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "4rem",
            position: "relative",
          }}
          className="testimonial-card"
        >
          {/* Gold top line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "0",
              right: "0",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #c9a84c, transparent)",
            }}
          />

          {/* Quote mark */}
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "6rem",
              lineHeight: 1,
              color: "rgba(201,168,76,0.12)",
              position: "absolute",
              top: "1rem",
              left: "3rem",
              userSelect: "none",
            }}
          >
            "
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              {/* Stars */}
              <div
                style={{
                  display: "flex",
                  gap: "4px",
                  marginBottom: "2rem",
                  justifyContent: "center",
                }}
              >
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#c9a84c"
                    color="#c9a84c"
                  />
                ))}
              </div>

              {/* Comment */}
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "rgba(245,245,245,0.85)",
                  lineHeight: 1.7,
                  textAlign: "center",
                  marginBottom: "2.5rem",
                  maxWidth: "680px",
                  margin: "0 auto 2.5rem",
                }}
              >
                "{t.comment}"
              </p>

              {/* Author */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid rgba(201,168,76,0.3)",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#f5f5f5",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.7rem",
                      color: "rgba(245,245,245,0.4)",
                    }}
                  >
                    {t.location} · {t.service}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
            marginTop: "2.5rem",
          }}
        >
          <button
            onClick={prev}
            style={{
              width: "48px",
              height: "48px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "transparent",
              color: "#f5f5f5",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#c9a84c";
              (e.currentTarget as HTMLElement).style.color = "#c9a84c";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLElement).style.color = "#f5f5f5";
            }}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? "24px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background:
                    i === current
                      ? "linear-gradient(90deg, #c9a84c, #e8c96d)"
                      : "rgba(255,255,255,0.2)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{
              width: "48px",
              height: "48px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "transparent",
              color: "#f5f5f5",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#c9a84c";
              (e.currentTarget as HTMLElement).style.color = "#c9a84c";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLElement).style.color = "#f5f5f5";
            }}
          >
            <ChevronRight size={18} />
          </button>
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 640px) {
          .testimonial-card {
            padding: 2.5rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
