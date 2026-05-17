"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Camera, Globe } from "lucide-react";

const schedule = [
  { day: "Lunes – Viernes", hours: "09:00 – 20:00" },
  { day: "Sábados", hours: "09:00 – 18:00" },
  { day: "Domingos", hours: "10:00 – 15:00" },
];

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Calle del Prado, 14, 28014 Madrid",
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+34 912 345 678",
    link: "tel:+34912345678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hola@blackwoodbarber.es",
    link: "mailto:hola@blackwoodbarber.es",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contacto"
      ref={ref}
      style={{
        padding: "8rem 0",
        background: "#0a0a0a",
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
          style={{ textAlign: "center", marginBottom: "5rem" }}
        >
          <div className="section-label" style={{ marginBottom: "1.25rem" }}>
            Ubicación y contacto
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
            Encuéntranos{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              en Madrid
            </span>
          </h2>
        </motion.div>

        {/* Grid: Map + Info */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2px",
            background: "rgba(255,255,255,0.04)",
          }}
          className="contact-grid"
        >
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ position: "relative", minHeight: "500px", overflow: "hidden" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4584248773256!2d-3.6971588!3d40.4151209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422897552b23f5%3A0x54bff78ebf6e4d44!2sCalle%20del%20Prado%2C%2014%2C%2028014%20Madrid!5e0!3m2!1ses!2ses!4v1716000000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{
                border: 0,
                display: "block",
                filter: "invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.2)",
                minHeight: "500px",
              }}
              allowFullScreen
              loading="lazy"
              title="Ubicación Blackwood Barber Studio"
            />

            {/* Map overlay gradient */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "60px",
                background:
                  "linear-gradient(to top, rgba(10,10,10,0.5), transparent)",
                pointerEvents: "none",
              }}
            />
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              background: "#0a0a0a",
              padding: "4rem 3rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "0",
            }}
            className="contact-info"
          >
            {/* Contact Items */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                marginBottom: "3rem",
              }}
            >
              {contactInfo.map(({ icon: Icon, label, value, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      border: "1px solid rgba(201,168,76,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={17} color="#c9a84c" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "rgba(245,245,245,0.35)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.95rem",
                        fontWeight: 400,
                        color: "rgba(245,245,245,0.85)",
                      }}
                    >
                      {value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.06), transparent)",
                marginBottom: "3rem",
              }}
            />

            {/* Schedule */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                <Clock size={16} color="#c9a84c" />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#c9a84c",
                  }}
                >
                  Horario
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {schedule.map(({ day, hours }, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingBottom: "0.75rem",
                      borderBottom:
                        i < schedule.length - 1
                          ? "1px solid rgba(255,255,255,0.04)"
                          : "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 300,
                        color: "rgba(245,245,245,0.6)",
                      }}
                    >
                      {day}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        color: "#f5f5f5",
                      }}
                    >
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                marginTop: "3rem",
              }}
            >
              {[
                { icon: Camera, href: "#", label: "Instagram" },
                { icon: Globe, href: "#", label: "Youtube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: "44px",
                    height: "44px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#f5f5f5",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#c9a84c";
                    (e.currentTarget as HTMLElement).style.color = "#c9a84c";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "#f5f5f5";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-info { padding: 2.5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
