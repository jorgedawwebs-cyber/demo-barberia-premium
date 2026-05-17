"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Sparkle } from "lucide-react";

const schedule = [
  { day: "Lunes – Viernes", hours: "09:00 – 20:00" },
  { day: "Sábados", hours: "09:00 – 18:00" },
  { day: "Domingos", hours: "Cerrado" },
];

export default function ContactoPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

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
            backgroundImage: "url('https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?w=1600&q=80')",
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
            Encuéntranos
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
            Contacto y Ubicación
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

      {/* Main Grid Section */}
      <section style={{ padding: "6rem 0", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr",
              gap: "5rem",
            }}
            className="contact-grid-main"
          >
            {/* Info and Hours */}
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
                Información de contacto
              </span>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2.2rem",
                  color: "#f5f5f5",
                  marginBottom: "2.5rem",
                }}
              >
                Visítanos en el Studio
              </h2>

              {/* Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "4rem" }}>
                <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
                  <div style={{ width: "48px", height: "48px", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#c9a84c", flexShrink: 0 }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,245,245,0.4)", margin: "0 0 0.25rem" }}>Dirección</h4>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#fff" }}>Calle Serrano 45, Madrid, España</span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
                  <div style={{ width: "48px", height: "48px", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#c9a84c", flexShrink: 0 }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,245,245,0.4)", margin: "0 0 0.25rem" }}>Teléfono</h4>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#fff" }}>+34 912 345 678</span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
                  <div style={{ width: "48px", height: "48px", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#c9a84c", flexShrink: 0 }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,245,245,0.4)", margin: "0 0 0.25rem" }}>Correo Electrónico</h4>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#fff" }}>club@blackwoodstudio.com</span>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  padding: "2.5rem 2rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", color: "#c9a84c" }}>
                  <Clock size={16} />
                  <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: 0 }}>
                    Horarios de Apertura
                  </h4>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {schedule.map((item, idx) => (
                    <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "rgba(245,245,245,0.5)" }}>{item.day}</span>
                      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#fff", fontWeight: 600 }}>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map and Form */}
            <div>
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="sent-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      padding: "3rem",
                      textAlign: "center",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ width: "56px", height: "56px", border: "1px solid #c9a84c", display: "flex", alignItems: "center", justifyContent: "center", color: "#c9a84c", marginBottom: "1.5rem" }}>
                      <Sparkle size={24} />
                    </div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", color: "#fff", marginBottom: "0.75rem" }}>Consulta Enviada</h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "rgba(245,245,245,0.5)", lineHeight: 1.6, maxWidth: "340px", margin: 0 }}>
                      Gracias por ponerte en contacto. Responderemos a tu correo en un plazo máximo de 24 horas laborables.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      padding: "3rem",
                    }}
                    className="contact-card-form"
                  >
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#fff", marginBottom: "1.75rem" }}>Envíanos un Mensaje</h3>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                      <div>
                        <label style={labelStyle}>Nombre</label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Correo Electrónico</label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Asunto</label>
                        <input
                          type="text"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Mensaje</label>
                        <textarea
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          style={{ ...inputStyle, resize: "none" }}
                        />
                      </div>

                      <button
                        type="submit"
                        style={{
                          marginTop: "1rem",
                          padding: "1rem",
                          background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
                          color: "#0a0a0a",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          border: "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.5rem",
                          transition: "all 0.3s ease",
                        }}
                      >
                        Enviar Mensaje
                        <Send size={12} />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Dark Custom Iframe Google Map */}
          <div
            style={{
              marginTop: "6rem",
              position: "relative",
              height: "450px",
              width: "100%",
              border: "1px solid rgba(201,168,76,0.15)",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.382894562095!2d-3.68766128460395!3d40.422501079364585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422899dc60114b%3A0x5df5bd8ea66fae05!2sCalle%20de%20Serrano%2C%20Madrid!5e0!3m2!1ses!2ses!4v1684332923984!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg) grayscale(100%) contrast(120%) brightness(0.9)",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 900px) {
          .contact-grid-main {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
        @media (max-width: 640px) {
          .contact-card-form {
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.6rem",
  fontWeight: 700,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "rgba(245,245,245,0.45)",
  marginBottom: "0.5rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "#fff",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.9rem",
  padding: "0.85rem 1.1rem",
  outline: "none",
  transition: "all 0.3s ease",
};
