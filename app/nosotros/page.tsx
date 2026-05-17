"use client";

import { motion } from "framer-motion";
import About from "@/components/About";
import Team from "@/components/Team";
import { Award, ShieldCheck, Compass, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Tradición y Maestría",
    desc: "Respetamos las técnicas clásicas del afeitado a navaja tradicional combinándolas con cortes contemporáneos.",
  },
  {
    icon: ShieldCheck,
    title: "Máximo Rigor",
    desc: "Cuidamos cada detalle higiénico y técnico para garantizar que tu experiencia sea perfecta y segura.",
  },
  {
    icon: Compass,
    title: "Estilo Personal",
    desc: "No creemos en cortes genéricos. Diseñamos tu look basándonos en tu fisonomía, tipo de cabello y estilo de vida.",
  },
  {
    icon: HeartHandshake,
    title: "Ritual Exclusivo",
    desc: "Nuestra barbería es un club privado de relajación. Disfruta de un café premium, un whisky de cortesía y música inmejorable.",
  },
];

export default function NosotrosPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      {/* Visual Header */}
      <section
        style={{
          position: "relative",
          height: "45vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.25) grayscale(0.5)",
          }}
        />
        {/* Subtle glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 80%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            padding: "0 1.5rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "1rem",
            }}
          >
            Nuestra Esencia
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 900,
              color: "#f5f5f5",
              margin: 0,
            }}
          >
            Sobre Nosotros
          </motion.h1>
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "linear-gradient(90deg, #c9a84c, #e8c96d)",
              margin: "1.5rem auto 0",
            }}
          />
        </div>
      </section>

      {/* About Component (Contains History & Stats) */}
      <About />

      {/* Values Section */}
      <section
        style={{
          padding: "6rem 0",
          background: "#111111",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#c9a84c",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              Nuestra Filosofía
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "#f5f5f5",
              }}
            >
              Los Fundamentos del Club
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    padding: "2.5rem 2rem",
                    transition: "all 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(201, 168, 76, 0.03)";
                    el.style.borderColor = "rgba(201, 168, 76, 0.2)";
                    el.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255, 255, 255, 0.02)";
                    el.style.borderColor = "rgba(255, 255, 255, 0.05)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      border: "1px solid rgba(201, 168, 76, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#c9a84c",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.25rem",
                      color: "#f5f5f5",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      color: "rgba(245,245,245,0.5)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {v.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Component */}
      <Team />
    </div>
  );
}
