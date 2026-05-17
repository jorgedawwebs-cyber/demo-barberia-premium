"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Star, CheckCircle } from "lucide-react";

function AnimatedCounter({
  target,
  suffix,
  prefix,
  delay,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay: delay || 0 }}
    >
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {prefix}
          <CountUp target={target} />
          {suffix}
        </motion.span>
      ) : (
        <span style={{ opacity: 0 }}>
          {prefix}0{suffix}
        </span>
      )}
    </motion.span>
  );
}

function CountUp({ target }: { target: number }) {
  const [count, setCount] = useCountUp(target);
  return <>{count}</>;
}

function useCountUp(target: number): [number, (n: number) => void] {
  const { useState, useEffect } = require("react");
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target]);
  return [count, setCount];
}

const stats = [
  {
    icon: Award,
    prefix: "+",
    value: 10,
    suffix: "",
    label: "Años de experiencia",
  },
  {
    icon: Users,
    prefix: "+",
    value: 5000,
    suffix: "",
    label: "Clientes satisfechos",
  },
  {
    icon: Star,
    prefix: "",
    value: 4,
    suffix: ".9★",
    label: "Valoración media",
  },
];

const highlights = [
  "Productos de alta gama exclusivos",
  "Barberos certificados con experiencia internacional",
  "Ambiente privado y de lujo",
  "Servicio personalizado para cada cliente",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="nosotros"
      ref={ref}
      style={{
        padding: "8rem 0",
        background: "#0f0f0f",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gold accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)",
        }}
      />

      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          right: "-20%",
          top: "10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* Grid: Text + Image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
            marginBottom: "6rem",
          }}
          className="about-grid"
        >
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>
              Sobre nosotros
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                color: "#f5f5f5",
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}
            >
              Arte, precisión
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #c9a84c, #e8c96d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontStyle: "italic",
                }}
              >
                y pasión
              </span>
            </h2>

            <div
              style={{
                width: "50px",
                height: "1px",
                background: "linear-gradient(90deg, #c9a84c, transparent)",
                marginBottom: "2rem",
              }}
            />

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "rgba(245,245,245,0.65)",
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              En{" "}
              <strong style={{ color: "#c9a84c", fontWeight: 600 }}>
                Blackwood Barber Studio
              </strong>{" "}
              creemos que un buen corte es mucho más que estética — es confianza,
              identidad y carácter. Fundado en 2014 en el corazón de Madrid,
              hemos construido un espacio donde la tradición se une a la
              modernidad.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "rgba(245,245,245,0.65)",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
              }}
            >
              Cada cliente recibe una atención única, personalizada y con los
              mejores productos del mercado. No somos una barbería más — somos
              tu próxima experiencia favorita.
            </p>

            {/* Highlights */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <CheckCircle
                    size={16}
                    color="#c9a84c"
                    style={{ flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 300,
                      color: "rgba(245,245,245,0.7)",
                    }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                aspectRatio: "4/5",
              }}
            >
              <img
                src="/about.png"
                alt="Herramientas premium de barbería"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
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
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(10,10,10,0.4), transparent 60%)",
                }}
              />
            </div>

            {/* Decorative border */}
            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "-1.5rem",
                bottom: "-1.5rem",
                left: "1.5rem",
                border: "1px solid rgba(201,168,76,0.2)",
                zIndex: -1,
                pointerEvents: "none",
              }}
            />

            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "-2rem",
                background: "rgba(10,10,10,0.95)",
                border: "1px solid rgba(201,168,76,0.2)",
                padding: "1.25rem 1.5rem",
                backdropFilter: "blur(20px)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#c9a84c",
                  lineHeight: 1,
                }}
              >
                #1
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  color: "rgba(245,245,245,0.6)",
                  marginTop: "0.25rem",
                }}
              >
                Barbería Premium
                <br />
                Madrid 2024
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            background: "rgba(255,255,255,0.04)",
          }}
          className="stats-grid"
        >
          {stats.map(({ icon: Icon, prefix, value, suffix, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.7 }}
              style={{
                background: "#0a0a0a",
                padding: "3rem 2rem",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#111111";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#0a0a0a";
              }}
            >
              <div
                style={{
                  marginBottom: "1rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Icon size={24} color="#c9a84c" />
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "3rem",
                  fontWeight: 700,
                  background:
                    "linear-gradient(135deg, #c9a84c, #e8c96d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                <AnimatedCounter
                  target={value}
                  prefix={prefix}
                  suffix={suffix}
                  delay={0.6 + i * 0.15}
                />
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(245,245,245,0.45)",
                }}
              >
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
