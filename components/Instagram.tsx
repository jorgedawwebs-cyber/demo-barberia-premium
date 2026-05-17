"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, ArrowUpRight } from "lucide-react";

const instaPosts = [
  {
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80",
    likes: "1.2k",
    caption: "Fade perfecto 🔥 #BlackwoodBarber",
  },
  {
    img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80",
    likes: "876",
    caption: "Barba de lujo ✨ #BarberLife",
  },
  {
    img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80",
    likes: "2.1k",
    caption: "Nuestro estudio 💈 #Premium",
  },
  {
    img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=80",
    likes: "954",
    caption: "Afeitado clásico ⚡ #Luxury",
  },
  {
    img: "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=400&q=80",
    likes: "1.4k",
    caption: "Grooming premium 🎯 #Style",
  },
  {
    img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80",
    likes: "738",
    caption: "Maestría en cada corte 💇‍♂️",
  },
];

export default function InstagramSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "8rem 0",
        background: "#111111",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <div className="section-label" style={{ marginBottom: "0.75rem" }}>
              Instagram
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#f5f5f5",
                lineHeight: 1.1,
              }}
            >
              Síguenos en{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontStyle: "italic",
                }}
              >
                @blackwoodbarber
              </span>
            </h2>
          </div>

          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.5rem",
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#c9a84c",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.1)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <Camera size={14} />
            Seguir en Instagram
            <ArrowUpRight size={13} />
          </a>
        </motion.div>

        {/* Instagram Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "4px",
          }}
          className="insta-grid"
        >
          {instaPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              style={{
                position: "relative",
                overflow: "hidden",
                aspectRatio: "1",
                cursor: "pointer",
              }}
            >
              <img
                src={post.img}
                alt={post.caption}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                  display: "block",
                }}
                loading="lazy"
              />
              {/* Hover */}
              <div
                className="insta-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(10,10,10,0.8)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "1rem",
                }}
              >
                <Camera size={20} color="#c9a84c" />
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#c9a84c",
                  }}
                >
                  ♥ {post.likes}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.65rem",
                    color: "rgba(245,245,245,0.7)",
                    textAlign: "center",
                    lineHeight: 1.4,
                  }}
                >
                  {post.caption}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .insta-grid > div:hover img { transform: scale(1.1); }
        .insta-grid > div:hover .insta-overlay { opacity: 1 !important; }
        @media (max-width: 1024px) {
          .insta-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .insta-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
