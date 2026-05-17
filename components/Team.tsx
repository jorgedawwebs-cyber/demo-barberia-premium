"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, ArrowUpRight, Globe } from "lucide-react";

const team = [
  {
    name: "Alejandro Morales",
    role: "Master Barber & Fundador",
    specialty: "Fade Artístico · Afeitado Clásico",
    description:
      "Con más de 12 años en la industria, Alejandro es el alma de Blackwood. Especialista en técnicas clásicas y fade de alta precisión.",
    photo: "/barber1.png",
    instagram: "#",
    facebook: "#",
  },
  {
    name: "Carlos Vega",
    role: "Senior Barber",
    specialty: "Degradados · Cortes Modernos",
    description:
      "Formado en las mejores academias de Europa, Carlos domina los estilos más contemporáneos y las transiciones de degradado más complejas.",
    photo: "/barber2.png",
    instagram: "#",
    facebook: "#",
  },
  {
    name: "Sara Delgado",
    role: "Barber & Especialista en Barba",
    specialty: "Barba Premium · Tratamientos",
    description:
      "Sara es nuestra experta en cuidado capilar y de barba. Combina precisión técnica con un trato extraordinariamente personal.",
    photo: "/barber3.png",
    instagram: "#",
    facebook: "#",
  },
];

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="equipo"
      ref={ref}
      style={{
        padding: "8rem 0",
        background: "#0a0a0a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          right: "-10%",
          bottom: "10%",
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
          style={{ textAlign: "center", marginBottom: "5rem" }}
        >
          <div className="section-label" style={{ marginBottom: "1.25rem" }}>
            Nuestro equipo
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
            Los mejores
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
              en su arte
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              fontWeight: 300,
              color: "rgba(245,245,245,0.5)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Nuestro equipo de barberos certificados combina talento, experiencia
            y pasión para darte el mejor resultado posible.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}
          className="team-grid"
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.8 }}
              style={{
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.04)",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(201,168,76,0.2)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 30px 80px rgba(0,0,0,0.6)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Photo */}
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  aspectRatio: "3/4",
                }}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.1) 60%)",
                  }}
                />

                {/* Social icons overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <a
                    href={member.instagram}
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "rgba(10,10,10,0.7)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#f5f5f5",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      backdropFilter: "blur(10px)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#c9a84c";
                      (e.currentTarget as HTMLElement).style.color = "#c9a84c";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(255,255,255,0.1)";
                      (e.currentTarget as HTMLElement).style.color = "#f5f5f5";
                    }}
                  >
                    <Camera size={14} />
                  </a>
                  <a
                    href={member.facebook}
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "rgba(10,10,10,0.7)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#f5f5f5",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      backdropFilter: "blur(10px)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#c9a84c";
                      (e.currentTarget as HTMLElement).style.color = "#c9a84c";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(255,255,255,0.1)";
                      (e.currentTarget as HTMLElement).style.color = "#f5f5f5";
                    }}
                  >
                    <Globe size={14} />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: "1.75rem" }}>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#f5f5f5",
                    marginBottom: "0.25rem",
                  }}
                >
                  {member.name}
                </h3>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#c9a84c",
                    marginBottom: "0.5rem",
                  }}
                >
                  {member.role}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "rgba(245,245,245,0.4)",
                    marginBottom: "1rem",
                  }}
                >
                  {member.specialty}
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 300,
                    color: "rgba(245,245,245,0.6)",
                    lineHeight: 1.7,
                  }}
                >
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .team-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
