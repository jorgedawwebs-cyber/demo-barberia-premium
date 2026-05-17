"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ZoomIn } from "lucide-react";

const categories = [
  { id: "todos", label: "Ver Todo" },
  { id: "cortes", label: "Cortes de Pelo" },
  { id: "barbas", label: "Estilos de Barba" },
  { id: "studio", label: "El Estudio" },
];

const galleryData = [
  {
    src: "/gallery1.png",
    alt: "Fade moderno premium",
    label: "Fade Moderno",
    category: "cortes",
    span: "large",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
    alt: "Corte clásico caballero",
    label: "Corte Clásico",
    category: "cortes",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80",
    alt: "Arreglo de barba de alta precisión",
    label: "Barba Royal",
    category: "barbas",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80",
    alt: "Sillón de barbería de cuero negro vintage",
    label: "Nuestras Sillas",
    category: "studio",
    span: "large",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
    alt: "Afeitado tradicional con navaja clásica y toallas calientes",
    label: "Afeitado Clásico",
    category: "barbas",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=800&q=80",
    alt: "Detalle de cosméticos masculinos premium",
    label: "Grooming Premium",
    category: "studio",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80",
    alt: "Corte moderno texturizado",
    label: "Textured Crop",
    category: "cortes",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?w=800&q=80",
    alt: "Detalle de herramientas de corte",
    label: "Maestría Técnica",
    category: "studio",
    span: "large",
  },
];

export default function GaleriaPage() {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [lightbox, setLightbox] = useState<null | { src: string; alt: string; label: string }>(null);

  const filteredItems = galleryData.filter(
    (item) => activeFilter === "todos" || item.category === activeFilter
  );

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
            backgroundImage: "url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1600&q=80')",
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
            Nuestros Cortes
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
            Galería Premium
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

      {/* Gallery Filter & Grid Section */}
      <section style={{ padding: "6rem 0", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          
          {/* Filters */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "4rem",
              flexWrap: "wrap",
            }}
          >
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  style={{
                    background: isActive ? "linear-gradient(135deg, #c9a84c, #e8c96d)" : "rgba(255,255,255,0.03)",
                    border: isActive ? "none" : "1px solid rgba(255,255,255,0.06)",
                    color: isActive ? "#0a0a0a" : "#f5f5f5",
                    cursor: "pointer",
                    padding: "0.75rem 1.75rem",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.borderColor = "#c9a84c";
                      (e.currentTarget as HTMLElement).style.color = "#c9a84c";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                      (e.currentTarget as HTMLElement).style.color = "#f5f5f5";
                    }
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Grid Layout */}
          <motion.div
            layout
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "6px",
            }}
            className="gallery-grid-main"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, i) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  key={item.src}
                  onClick={() =>
                    setLightbox({ src: item.src, alt: item.alt, label: item.label })
                  }
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    aspectRatio: item.span === "large" ? "16/10" : "4/3",
                    gridColumn: item.span === "large" ? "span 2" : "span 1",
                  }}
                  className={`gallery-card-item ${item.span === "large" ? "span-two" : ""}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                      display: "block",
                    }}
                    loading="lazy"
                  />

                  {/* Hover mask */}
                  <div
                    className="gallery-card-mask"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.3) 60%, transparent 100%)",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      padding: "2rem",
                    }}
                  >
                    <ZoomIn size={22} color="#c9a84c" style={{ marginBottom: "0.75rem" }} />
                    <span
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        color: "#f5f5f5",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.6rem",
                        fontWeight: 600,
                        color: "#c9a84c",
                        textTransform: "uppercase",
                        letterSpacing: "0.2em",
                        marginTop: "0.25rem",
                      }}
                    >
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Pop-up Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(5,5,5,0.97)",
              zIndex: 9000,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              cursor: "zoom-out",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute",
                top: "2rem",
                right: "2rem",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#f5f5f5",
                cursor: "pointer",
                padding: "0.75rem",
                display: "flex",
              }}
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "85vw",
                maxHeight: "75vh",
                position: "relative",
                cursor: "default",
              }}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "75vh",
                  objectFit: "contain",
                  boxShadow: "0 25px 80px rgba(0,0,0,0.9)",
                }}
              />
            </motion.div>

            {/* Label and Caption beneath photo */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                marginTop: "1.5rem",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.75rem",
                  color: "#f5f5f5",
                  margin: 0,
                }}
              >
                {lightbox.label}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(245,245,245,0.5)",
                  marginTop: "0.5rem",
                  maxWidth: "500px",
                }}
              >
                {lightbox.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .gallery-card-item:hover img {
          transform: scale(1.08);
        }
        .gallery-card-item:hover .gallery-card-mask {
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .gallery-grid-main {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .span-two {
            grid-column: span 2 !important;
            aspect-ratio: 4/3 !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid-main {
            grid-template-columns: 1fr !important;
          }
          .span-two {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
