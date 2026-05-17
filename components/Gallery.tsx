"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  {
    src: "/gallery1.png",
    alt: "Fade moderno premium",
    label: "Fade Moderno",
    span: "large",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
    alt: "Corte clásico caballero",
    label: "Corte Clásico",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80",
    alt: "Arreglo de barba",
    label: "Barba Premium",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80",
    alt: "Barbería de lujo interior",
    label: "Nuestro Studio",
    span: "large",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
    alt: "Afeitado con navaja clásica",
    label: "Afeitado Clásico",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=800&q=80",
    alt: "Producto de barbería premium",
    label: "Grooming Premium",
    span: "normal",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<null | {
    src: string;
    alt: string;
  }>(null);

  return (
    <section
      id="galeria"
      ref={ref}
      style={{
        padding: "8rem 0",
        background: "#0f0f0f",
        position: "relative",
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
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <div className="section-label" style={{ marginBottom: "1.25rem" }}>
            Galería de trabajos
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
            Cada corte,
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
              una obra de arte
            </span>
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto",
            gap: "4px",
          }}
          className="gallery-grid"
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              onClick={() =>
                setLightbox({ src: item.src, alt: item.alt })
              }
              style={{
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                aspectRatio: item.span === "large" ? "16/9" : "4/3",
                gridColumn: item.span === "large" ? "span 2" : "span 1",
              }}
              className={`gallery-item ${item.span === "large" ? "gallery-large" : ""}`}
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

              {/* Hover overlay */}
              <div
                className="gallery-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(10,10,10,0.9), rgba(10,10,10,0.2))",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  padding: "1.5rem",
                }}
              >
                <ZoomIn size={24} color="#c9a84c" style={{ marginBottom: "0.75rem" }} />
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#f5f5f5",
                  }}
                >
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
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
              background: "rgba(0,0,0,0.95)",
              zIndex: 9000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              cursor: "zoom-out",
            }}
          >
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute",
                top: "2rem",
                right: "2rem",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#f5f5f5",
                cursor: "pointer",
                padding: "0.75rem",
                display: "flex",
                borderRadius: "2px",
              }}
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              src={lightbox.src}
              alt={lightbox.alt}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90vw",
                maxHeight: "85vh",
                objectFit: "contain",
                boxShadow: "0 0 100px rgba(0,0,0,0.8)",
                cursor: "default",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .gallery-item:hover img {
          transform: scale(1.08);
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .gallery-large {
            grid-column: span 2 !important;
            aspect-ratio: 4/3 !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
          .gallery-large {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
