"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, Phone, User, Scissors, ArrowRight } from "lucide-react";

const services = [
  "Corte Clásico — 28€",
  "Fade Moderno — 35€",
  "Arreglo de Barba — 22€",
  "Afeitado Premium — 45€",
  "Tratamientos Capilares — 55€",
  "Corte + Barba Combo — 48€",
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30",
];

const barbers = [
  "Sin preferencia",
  "Alejandro Morales",
  "Carlos Vega",
  "Sara Delgado",
];

export default function Booking() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    barber: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="reservas"
      ref={ref}
      style={{
        padding: "8rem 0",
        background: "#111111",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top border */}
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

      {/* BG text decoration */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Playfair Display', serif",
          fontSize: "20vw",
          fontWeight: 900,
          color: "rgba(255,255,255,0.015)",
          userSelect: "none",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        RESERVA
      </div>

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <div className="section-label" style={{ marginBottom: "1.25rem" }}>
            Reserva tu cita
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              color: "#f5f5f5",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Tu próxima cita,
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
              a un click
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 300,
              color: "rgba(245,245,245,0.5)",
              maxWidth: "400px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Elige el servicio, el barbero y el horario que mejor se adapte a ti.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "3.5rem",
            position: "relative",
          }}
          className="booking-form"
        >
          {/* Gold corner accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "80px",
              height: "2px",
              background: "linear-gradient(90deg, #c9a84c, transparent)",
            }}
          />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: "center", padding: "3rem 0" }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  border: "2px solid #c9a84c",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                }}
              >
                <Scissors size={28} color="#c9a84c" />
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#f5f5f5",
                  marginBottom: "1rem",
                }}
              >
                ¡Reserva confirmada!
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.95rem",
                  color: "rgba(245,245,245,0.6)",
                  lineHeight: 1.7,
                }}
              >
                Te contactaremos en breve para confirmar tu cita en{" "}
                <span style={{ color: "#c9a84c" }}>Blackwood Barber Studio</span>.
                <br />
                ¡Nos vemos pronto!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                  marginBottom: "1.5rem",
                }}
                className="form-grid"
              >
                {/* Name */}
                <div style={{ position: "relative" }}>
                  <label style={labelStyle}>Nombre completo *</label>
                  <div style={{ position: "relative" }}>
                    <User
                      size={14}
                      color="rgba(245,245,245,0.3)"
                      style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }}
                    />
                    <input
                      className="input-premium"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      style={{ paddingLeft: "2.75rem" }}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle}>Teléfono *</label>
                  <div style={{ position: "relative" }}>
                    <Phone
                      size={14}
                      color="rgba(245,245,245,0.3)"
                      style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }}
                    />
                    <input
                      className="input-premium"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                      required
                      style={{ paddingLeft: "2.75rem" }}
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label style={labelStyle}>Servicio *</label>
                  <div style={{ position: "relative" }}>
                    <Scissors
                      size={14}
                      color="rgba(245,245,245,0.3)"
                      style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", zIndex: 1 }}
                    />
                    <select
                      className="input-premium"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      style={{ paddingLeft: "2.75rem", cursor: "pointer" }}
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Barber */}
                <div>
                  <label style={labelStyle}>Barbero</label>
                  <select
                    className="input-premium"
                    name="barber"
                    value={form.barber}
                    onChange={handleChange}
                    style={{ cursor: "pointer" }}
                  >
                    {barbers.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label style={labelStyle}>Fecha *</label>
                  <div style={{ position: "relative" }}>
                    <Calendar
                      size={14}
                      color="rgba(245,245,245,0.3)"
                      style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }}
                    />
                    <input
                      className="input-premium"
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      style={{ paddingLeft: "2.75rem", colorScheme: "dark" }}
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label style={labelStyle}>Hora *</label>
                  <div style={{ position: "relative" }}>
                    <Clock
                      size={14}
                      color="rgba(245,245,245,0.3)"
                      style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", zIndex: 1 }}
                    />
                    <select
                      className="input-premium"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      style={{ paddingLeft: "2.75rem", cursor: "pointer" }}
                    >
                      <option value="">Selecciona una hora</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div style={{ marginBottom: "2.5rem" }}>
                <label style={labelStyle}>Notas adicionales</label>
                <textarea
                  className="input-premium"
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Cuéntanos qué tienes en mente..."
                  rows={3}
                  style={{ resize: "none" }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "1.1rem 2rem",
                  background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
                  color: "#0a0a0a",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 20px 50px rgba(201,168,76,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                Reservar ahora
                <ArrowRight size={16} />
              </button>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  color: "rgba(245,245,245,0.3)",
                  textAlign: "center",
                  marginTop: "1.25rem",
                  lineHeight: 1.6,
                }}
              >
                Al reservar aceptas nuestros términos de servicio. Te confirmaremos la
                cita por teléfono o WhatsApp.
              </p>
            </form>
          )}
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
          .booking-form {
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.65rem",
  fontWeight: 600,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "rgba(245,245,245,0.5)",
  marginBottom: "0.5rem",
};
