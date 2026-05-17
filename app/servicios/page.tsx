"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Scissors, Sparkles, Droplets, Star, Shield } from "lucide-react";

const categories = [
  { id: "cabello", label: "Corte y Cabello", icon: Scissors },
  { id: "barba", label: "Cuidado de Barba", icon: Sparkles },
  { id: "tratamientos", label: "Tratamientos", icon: Droplets },
  { id: "combos", label: "Combos Exclusivos", icon: Star },
];

const servicesData = {
  cabello: [
    {
      name: "Corte Clásico",
      price: "28€",
      duration: "45 min",
      desc: "El corte perfecto adaptado a tu estilo y tipo de cabello. Incluye asesoramiento, lavado premium con masaje capilar y peinado con cera orgánica.",
    },
    {
      name: "Fade Moderno",
      price: "35€",
      duration: "60 min",
      desc: "Degradado skin fade de alta precisión. Transiciones ultrasuaves con afeitado a navaja en contornos. Peinado final incluido.",
    },
    {
      name: "Corte Executive",
      price: "40€",
      duration: "60 min",
      desc: "Diseñado para caballeros exigentes. Incluye un corte personalizado premium, exfoliación facial exprés y masaje de hombros relajante.",
    },
  ],
  barba: [
    {
      name: "Arreglo de Barba",
      price: "22€",
      duration: "30 min",
      desc: "Perfilado y definición de barba con navaja recta, líneas de alta precisión y aceites de hidratación profunda de marca premium.",
    },
    {
      name: "Afeitado Royal",
      price: "38€",
      duration: "45 min",
      desc: "Ritual tradicional de afeitado con navaja de lujo. Doble toalla caliente con vapor de ozono, aceites pre-shave, jabón clásico en brocha y loción calmante.",
    },
  ],
  tratamientos: [
    {
      name: "Tratamiento Anticaída Capilar",
      price: "50€",
      duration: "60 min",
      desc: "Terapia estimulante de folículos capilares mediante loción premium y masaje capilar profundo para mejorar la circulación sanguínea.",
    },
    {
      name: "Exfoliación & Hidratación Facial",
      price: "45€",
      duration: "45 min",
      desc: "Cuidado facial de alta gama para hombres. Eliminación de impurezas mediante peeling de carbón activo y mascarilla hidratante refrescante.",
    },
  ],
  combos: [
    {
      name: "Corte + Barba Combo",
      price: "48€",
      duration: "90 min",
      desc: "La experiencia Blackwood completa. Corte de pelo premium y arreglo de barba clásico con toalla caliente aromatizada.",
    },
    {
      name: "Ritual Blackwood Gold",
      price: "85€",
      duration: "120 min",
      desc: "La experiencia de lujo total: Corte premium, afeitado Royal con doble toalla caliente, tratamiento capilar purificante y masaje relajante.",
    },
  ],
};

const products = [
  {
    name: "Blackwood Matte Wax",
    category: "Peinado",
    price: "24€",
    img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500&q=80",
    desc: "Cera mate con fijación fuerte y aroma a madera de sándalo y tabaco noble.",
  },
  {
    name: "Imperial Beard Oil",
    category: "Cuidado de Barba",
    price: "29€",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80",
    desc: "Aceite nutritivo a base de argán y jojoba que aporta brillo, suavidad y alivia el picor.",
  },
  {
    name: "Purifying Shaving Cream",
    category: "Afeitado",
    price: "26€",
    img: "https://images.unsplash.com/photo-1593487568522-746db8894941?w=500&q=80",
    desc: "Crema de afeitar con extracto de mentol y eucalipto para un afeitado ultrasuave.",
  },
];

export default function ServiciosPage() {
  const [activeTab, setActiveTab] = useState("cabello");

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
            backgroundImage: "url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1600&q=80')",
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
            Nuestro Menú
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
            Cortes y Rituales
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

      {/* Services Menu Section */}
      <section style={{ padding: "6rem 0", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.5rem" }}>
          {/* Tab Navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              marginBottom: "4.5rem",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              paddingBottom: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.8rem 1.5rem",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: isActive ? "#c9a84c" : "rgba(245,245,245,0.4)",
                    transition: "color 0.3s ease, border-color 0.3s ease",
                    borderBottom: isActive ? "2px solid #c9a84c" : "2px solid transparent",
                    marginBottom: "-1.6rem",
                  }}
                >
                  <Icon size={14} />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content with Animation */}
          <div style={{ minHeight: "400px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2.5rem",
                }}
              >
                {servicesData[activeTab as keyof typeof servicesData].map((srv, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                      paddingBottom: "2.5rem",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        flexWrap: "wrap",
                        gap: "1rem",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          color: "#f5f5f5",
                          margin: 0,
                        }}
                      >
                        {srv.name}
                      </h3>
                      <div
                        style={{
                          flexGrow: 1,
                          borderBottom: "1px dotted rgba(255,255,255,0.15)",
                          margin: "0 1rem",
                        }}
                        className="hidden-mobile"
                      />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1.5rem",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.6rem",
                            fontWeight: 700,
                            color: "#c9a84c",
                          }}
                        >
                          {srv.price}
                        </span>
                        <Link
                          href={`/reservar?service=${encodeURIComponent(srv.name)}`}
                          style={{
                            textDecoration: "none",
                            padding: "0.4rem 1rem",
                            border: "1px solid rgba(201,168,76,0.3)",
                            color: "#c9a84c",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.6rem",
                            fontWeight: 700,
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background = "#c9a84c";
                            (e.currentTarget as HTMLElement).style.color = "#0a0a0a";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background = "transparent";
                            (e.currentTarget as HTMLElement).style.color = "#c9a84c";
                          }}
                        >
                          Reservar
                        </Link>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        color: "rgba(245,245,245,0.3)",
                        textTransform: "uppercase",
                      }}
                    >
                      <span>⏱ {srv.duration}</span>
                      <span>•</span>
                      <span>Premium Ritual</span>
                    </div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9rem",
                        color: "rgba(245,245,245,0.5)",
                        lineHeight: 1.7,
                        margin: 0,
                        maxWidth: "800px",
                      }}
                    >
                      {srv.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Products Showcase Section (Ultra Visual) */}
      <section
        style={{
          padding: "8rem 0",
          background: "#111111",
          borderTop: "1px solid rgba(201,168,76,0.1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "80%",
            top: "20%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
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
              Grooming de Lujo
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "#f5f5f5",
                marginBottom: "1rem",
              }}
            >
              Nuestra Gama Exclusiva
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                color: "rgba(245,245,245,0.45)",
                maxWidth: "500px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Utilizamos y disponemos de las marcas cosméticas masculinas más prestigiosas del mundo para el cuidado diario de tu cabello y barba.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {products.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                style={{
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.03)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.2)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.03)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Photo container */}
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "brightness(0.8) contrast(1.1)",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.transform = "scale(1)";
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "1.25rem",
                      left: "1.25rem",
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
                    {p.category}
                  </div>
                </div>

                {/* Info Container */}
                <div style={{ padding: "2rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.3rem",
                        color: "#f5f5f5",
                        margin: 0,
                      }}
                    >
                      {p.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        color: "#c9a84c",
                      }}
                    >
                      {p.price}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      color: "rgba(245,245,245,0.5)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
