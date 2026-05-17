"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import InstagramSection from "@/components/Instagram";
import { Scissors, ShieldCheck, ArrowRight, Eye, Sparkle, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div style={{ background: "#0a0a0a" }}>
      {/* Cinematic Hero */}
      <Hero />

      {/* Philosophy Teaser (Nosotros Teaser) */}
      <section
        style={{
          padding: "8rem 0",
          background: "#0a0a0a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "-10%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="home-grid-split"
        >
          {/* Visual Left Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative" }}
          >
            {/* Elegant double-border frame */}
            <div
              style={{
                position: "absolute",
                top: "-15px",
                left: "-15px",
                right: "15px",
                bottom: "15px",
                border: "1px solid rgba(201,168,76,0.25)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", zIndex: 10, aspectRatio: "4/5", overflow: "hidden" }}>
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80"
                alt="El Arte de la Precisión"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.7) contrast(1.05)",
                }}
              />
            </div>
            {/* Overlay tag */}
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                right: "-2rem",
                background: "#111111",
                border: "1px solid rgba(201,168,76,0.3)",
                padding: "1.5rem 2rem",
                zIndex: 20,
              }}
              className="hidden-mobile"
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#c9a84c",
                  textTransform: "uppercase",
                  display: "block",
                }}
              >
                Establecido en
              </span>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "#f5f5f5",
                  marginTop: "0.25rem",
                  display: "block",
                }}
              >
                2014 • Madrid
              </span>
            </div>
          </motion.div>

          {/* Philosophy Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
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
              El Ritual Masculino
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "#f5f5f5",
                lineHeight: 1.2,
                marginBottom: "1.75rem",
              }}
            >
              El Arte del Grooming Clásico y de Vanguardia
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                color: "rgba(245,245,245,0.5)",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
              }}
            >
              En Blackwood Barber Studio no solo realizamos cortes de cabello; creamos una experiencia inigualable adaptada a cada caballero. Fusionamos el afeitado a navaja clásica tradicional de toalla caliente con los estilos y degradados urbanos más precisos del momento.
            </p>

            {/* Micro badges list */}
            <div style={{ display: "flex", gap: "2.5rem", marginBottom: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <Scissors size={18} color="#c9a84c" />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#f5f5f5" }}>
                  Maestros Barberos
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <ShieldCheck size={18} color="#c9a84c" />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#f5f5f5" }}>
                  Productos Premium
                </span>
              </div>
            </div>

            <Link
              href="/nosotros"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "#c9a84c",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                borderBottom: "1px solid rgba(201,168,76,0.3)",
                paddingBottom: "0.4rem",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#c9a84c";
                (e.currentTarget as HTMLElement).style.paddingRight = "8px";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)";
                (e.currentTarget as HTMLElement).style.paddingRight = "0";
              }}
            >
              Nuestra Historia
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Services (Teaser) */}
      <section
        style={{
          padding: "8rem 0",
          background: "#111111",
          borderTop: "1px solid rgba(255,255,255,0.03)",
          borderBottom: "1px solid rgba(255,255,255,0.03)",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "5rem",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <div>
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
                Servicios Estrella
              </span>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: "#f5f5f5",
                  margin: 0,
                }}
              >
                Nuestra Firma de Lujo
              </h2>
            </div>
            
            <Link
              href="/servicios"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#c9a84c",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.75rem 1.75rem",
                border: "1px solid rgba(201,168,76,0.3)",
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
              Ver Carta Completa
            </Link>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {[
              {
                name: "Corte Clásico",
                price: "28€",
                img: "/about.png",
                desc: "Corte de pelo personalizado a tijera y máquina con ritual de lavado orgánico con toalla tibia aromatizada.",
              },
              {
                name: "Afeitado Royal",
                price: "38€",
                img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
                desc: "Ritual completo de navaja a la antigua usanza con vapor de ozono y aceites esenciales relajantes de sándalo.",
              },
              {
                name: "Combo Blackwood",
                price: "48€",
                img: "/hero.png",
                desc: "Nuestra experiencia exclusiva de firma. Incluye corte de pelo premium y ritual perfilado de barba al detalle.",
              },
            ].map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                style={{
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.03)",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.03)";
                }}
              >
                <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
                  <img
                    src={srv.img}
                    alt={srv.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "brightness(0.75)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      right: "1rem",
                      background: "#111",
                      border: "1px solid rgba(201,168,76,0.3)",
                      padding: "0.25rem 0.75rem",
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#c9a84c",
                    }}
                  >
                    {srv.price}
                  </div>
                </div>

                <div style={{ padding: "2rem" }}>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.3rem",
                      color: "#f5f5f5",
                      marginBottom: "0.75rem",
                      marginTop: 0,
                    }}
                  >
                    {srv.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      color: "rgba(245,245,245,0.5)",
                      lineHeight: 1.6,
                      margin: 0,
                      minHeight: "48px",
                    }}
                  >
                    {srv.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Teaser Section */}
      <section style={{ padding: "8rem 0", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          
          <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
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
              El Lookbook
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "#f5f5f5",
                marginBottom: "1rem",
              }}
            >
              Precisión Milimétrica
            </h2>
          </div>

          {/* Quick Grid (3 images) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "6px",
              marginBottom: "3.5rem",
            }}
            className="home-gallery-teaser-grid"
          >
            {[
              "/gallery1.png",
              "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80",
              "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80",
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  overflow: "hidden",
                }}
              >
                <img
                  src={src}
                  alt="Barbershop Cut Teaser"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.8)",
                  }}
                />
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              href="/galeria"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#c9a84c",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                borderBottom: "1px solid rgba(201,168,76,0.3)",
                paddingBottom: "0.4rem",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#c9a84c";
                (e.currentTarget as HTMLElement).style.paddingRight = "8px";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)";
                (e.currentTarget as HTMLElement).style.paddingRight = "0";
              }}
            >
              Explorar Galería Completa
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimoniales */}
      <Testimonials />

      {/* Instagram Live Feed */}
      <InstagramSection />

      {/* Great Gold CTA Banner */}
      <section
        style={{
          background: "linear-gradient(135deg, #0d0d0d, #161616)",
          borderTop: "1px solid rgba(201,168,76,0.15)",
          padding: "6rem 0",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 10 }}>
          <span style={{ display: "block", color: "#c9a84c", fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Elige Distinción
          </span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f5f5f5", marginBottom: "1.5rem", fontWeight: 700 }}>
            ¿Preparado para Elevar tu Estilo?
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "rgba(245,245,245,0.45)", lineHeight: 1.8, marginBottom: "3rem", maxWidth: "500px", margin: "0 auto 3rem" }}>
            Garantiza tu espacio con nuestros estilistas de élite. Haz clic abajo para entrar en nuestro programador paso a paso.
          </p>

          <Link
            href="/reservar"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "1.1rem 2.5rem",
              background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
              color: "#0a0a0a",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s ease",
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
            Reservar Cita Ahora
          </Link>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 900px) {
          .home-grid-split {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
        @media (max-width: 768px) {
          .home-gallery-teaser-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}
