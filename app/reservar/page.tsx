"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Sparkles, Droplets, Star, User, Calendar, Clock, ChevronRight, ChevronLeft, Check, Sparkle } from "lucide-react";

const steps = [
  { label: "Servicio", icon: Scissors },
  { label: "Barbero", icon: User },
  { label: "Horario", icon: Calendar },
  { label: "Detalles", icon: Clock },
];

const services = [
  { name: "Corte Clásico", price: "28€", category: "Cabello", icon: Scissors, duration: "45 min" },
  { name: "Fade Moderno", price: "35€", category: "Cabello", icon: Scissors, duration: "60 min" },
  { name: "Arreglo de Barba", price: "22€", category: "Barba", icon: Sparkles, duration: "30 min" },
  { name: "Afeitado Royal", price: "38€", category: "Barba", icon: Sparkles, duration: "45 min" },
  { name: "Tratamiento Anticaída", price: "50€", category: "Cuidado", icon: Droplets, duration: "60 min" },
  { name: "Corte + Barba Combo", price: "48€", category: "Combos", icon: Star, duration: "90 min" },
];

const barbers = [
  { name: "Sin preferencia", role: "Cualquier profesional disponible", photo: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=100&q=80", specialty: "Todos los servicios" },
  { name: "Alejandro Morales", role: "Master Barber & Fundador", photo: "/barber1.png", specialty: "Afeitados a navaja & Corte Clásico" },
  { name: "Carlos Vega", role: "Senior Barber", photo: "/barber2.png", specialty: "Degradados de alta precisión & Diseños" },
  { name: "Sara Delgado", role: "Barber & Estilista", photo: "/barber3.png", specialty: "Cuidado de barba & Tratamientos capilares" },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30",
];

export default function ReservarPage() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [booking, setBooking] = useState({
    service: "",
    barber: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    notes: "",
  });

  // Pre-select service if passed in query string
  useEffect(() => {
    const srvParam = searchParams.get("service");
    if (srvParam) {
      const match = services.find((s) => s.name.toLowerCase() === srvParam.toLowerCase());
      if (match) {
        setBooking((b) => ({ ...b, service: match.name }));
        setCurrentStep(1); // Go straight to Barber selection
      }
    }
  }, [searchParams]);

  const selectService = (name: string) => {
    setBooking({ ...booking, service: name });
    setCurrentStep(1);
  };

  const selectBarber = (name: string) => {
    setBooking({ ...booking, barber: name });
    setCurrentStep(2);
  };

  const selectTime = (time: string) => {
    setBooking({ ...booking, time: time });
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Helper validation
  const canNext = () => {
    if (currentStep === 0) return booking.service !== "";
    if (currentStep === 1) return booking.barber !== "";
    if (currentStep === 2) return booking.date !== "" && booking.time !== "";
    return booking.name !== "" && booking.phone !== "";
  };

  return (
    <div style={{ background: "#0a0a0a", minHeight: "90vh", padding: "4rem 0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1.5rem" }}>
        
        {/* Progress Bar (Visual Step Tracker) */}
        {!submitted && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "4rem",
              position: "relative",
            }}
          >
            {/* Background Line */}
            <div
              style={{
                position: "absolute",
                top: "22px",
                left: "20px",
                right: "20px",
                height: "2px",
                background: "rgba(255,255,255,0.06)",
                zIndex: 0,
              }}
            />
            {/* Active Highlight Line */}
            <motion.div
              style={{
                position: "absolute",
                top: "22px",
                left: "20px",
                height: "2px",
                background: "linear-gradient(90deg, #c9a84c, #e8c96d)",
                zIndex: 1,
              }}
              animate={{ width: `${(currentStep / 3) * 94}%` }}
              transition={{ duration: 0.3 }}
            />

            {steps.map((st, idx) => {
              const Icon = st.icon;
              const isActive = idx === currentStep;
              const isCompleted = idx < currentStep;

              return (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    zIndex: 10,
                  }}
                >
                  <button
                    onClick={() => {
                      if (isCompleted || (booking.service && idx === 0) || (booking.barber && idx === 1)) {
                        setCurrentStep(idx);
                      }
                    }}
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "50%",
                      background: isActive
                        ? "linear-gradient(135deg, #c9a84c, #e8c96d)"
                        : isCompleted
                        ? "#c9a84c"
                        : "#111111",
                      border: isActive
                        ? "none"
                        : isCompleted
                        ? "none"
                        : "1px solid rgba(255,255,255,0.1)",
                      color: isActive || isCompleted ? "#0a0a0a" : "rgba(245,245,245,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: isCompleted ? "pointer" : "default",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {isCompleted ? <Check size={18} /> : <Icon size={18} />}
                  </button>
                  <span
                    style={{
                      marginTop: "0.75rem",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: isActive || isCompleted ? 700 : 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: isActive ? "#c9a84c" : isCompleted ? "#f5f5f5" : "rgba(245,245,245,0.3)",
                    }}
                  >
                    {st.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Main Content Area */}
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", padding: "3rem" }} className="booking-card">
          <AnimatePresence mode="wait">
            {submitted ? (
              /* Success Animation */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "2rem 0" }}
                key="success"
              >
                <div
                  style={{
                    width: "76px",
                    height: "76px",
                    border: "2px solid #c9a84c",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 2rem",
                    color: "#c9a84c",
                  }}
                >
                  <Sparkle size={32} className="animate-spin-slow" />
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2.2rem",
                    fontWeight: 700,
                    color: "#f5f5f5",
                    marginBottom: "1rem",
                  }}
                >
                  ¡Reserva Recibida!
                </h2>
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    background: "#c9a84c",
                    margin: "1rem auto 2rem",
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    color: "rgba(245,245,245,0.6)",
                    lineHeight: 1.8,
                    maxWidth: "500px",
                    margin: "0 auto 3rem",
                  }}
                >
                  Muchas gracias, <strong style={{ color: "#fff" }}>{booking.name}</strong>. Hemos bloqueado tu cita para el <span style={{ color: "#c9a84c" }}>{booking.date}</span> a las <span style={{ color: "#c9a84c" }}>{booking.time}</span> con el profesional <span style={{ color: "#c9a84c" }}>{booking.barber}</span>. Te enviaremos un WhatsApp de confirmación en breve.
                </p>

                <div
                  style={{
                    background: "rgba(201,168,76,0.05)",
                    border: "1px solid rgba(201,168,76,0.15)",
                    padding: "1.5rem",
                    borderRadius: "2px",
                    textAlign: "left",
                    maxWidth: "460px",
                    margin: "0 auto 3rem",
                  }}
                >
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "0.75rem" }}>
                    Resumen de Servicio
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>Servicio:</span>
                    <span style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 600 }}>{booking.service}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>Precio estimado:</span>
                    <span style={{ color: "#c9a84c", fontSize: "0.95rem", fontWeight: 700 }}>
                      {services.find((s) => s.name === booking.service)?.price || "—"}
                    </span>
                  </div>
                </div>

                <Link
                  href="/"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "1rem 2.5rem",
                    background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
                    color: "#0a0a0a",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                >
                  Volver al inicio
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* STEP 1: SELECT SERVICE */}
                {currentStep === 0 && (
                  <div>
                    <h2 style={titleStyle}>Selecciona tu corte o ritual</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "2rem" }} className="booking-grid-2">
                      {services.map((srv, idx) => {
                        const Icon = srv.icon;
                        const isSelected = booking.service === srv.name;
                        return (
                          <div
                            key={idx}
                            onClick={() => selectService(srv.name)}
                            style={{
                              background: isSelected ? "rgba(201, 168, 76, 0.08)" : "rgba(255,255,255,0.02)",
                              border: isSelected ? "1px solid #c9a84c" : "1px solid rgba(255,255,255,0.06)",
                              padding: "1.75rem",
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                            onMouseEnter={(e) => {
                              if (!isSelected) {
                                e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
                                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isSelected) {
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                              }
                            }}
                          >
                            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                              <div style={{ width: "40px", height: "40px", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#c9a84c" }}>
                                <Icon size={16} />
                              </div>
                              <div>
                                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#fff", margin: 0 }}>{srv.name}</h4>
                                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "rgba(245,245,245,0.4)" }}>⏱ {srv.duration}</span>
                              </div>
                            </div>
                            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, color: "#c9a84c" }}>{srv.price}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 2: SELECT BARBER */}
                {currentStep === 1 && (
                  <div>
                    <h2 style={titleStyle}>Elige tu profesional</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "2rem" }} className="booking-grid-2">
                      {barbers.map((b, idx) => {
                        const isSelected = booking.barber === b.name;
                        return (
                          <div
                            key={idx}
                            onClick={() => selectBarber(b.name)}
                            style={{
                              background: isSelected ? "rgba(201, 168, 76, 0.08)" : "rgba(255,255,255,0.02)",
                              border: isSelected ? "1px solid #c9a84c" : "1px solid rgba(255,255,255,0.06)",
                              padding: "1.5rem",
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                              display: "flex",
                              gap: "1.25rem",
                              alignItems: "center",
                            }}
                            onMouseEnter={(e) => {
                              if (!isSelected) {
                                e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
                                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isSelected) {
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                              }
                            }}
                          >
                            <img
                              src={b.photo}
                              alt={b.name}
                              style={{
                                width: "56px",
                                height: "56px",
                                objectFit: "cover",
                                border: "1px solid rgba(201,168,76,0.3)",
                              }}
                            />
                            <div>
                              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#fff", margin: 0 }}>{b.name}</h4>
                              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#c9a84c", margin: "0.15rem 0 0" }}>{b.role}</p>
                              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "rgba(245,245,245,0.4)" }}>{b.specialty}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 3: DATE AND TIME */}
                {currentStep === 2 && (
                  <div>
                    <h2 style={titleStyle}>Elige Fecha y Hora</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "2.5rem", marginTop: "2rem" }} className="booking-grid-2">
                      {/* Date */}
                      <div>
                        <label style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,245,245,0.5)", marginBottom: "0.75rem" }}>
                          Fecha de Cita
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={booking.date}
                          onChange={handleTextChange}
                          required
                          style={{
                            width: "100%",
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "#fff",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.95rem",
                            padding: "1rem 1.25rem",
                            outline: "none",
                            colorScheme: "dark",
                          }}
                        />
                      </div>

                      {/* Time Slots */}
                      <div>
                        <label style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,245,245,0.5)", marginBottom: "0.75rem" }}>
                          Horas Disponibles
                        </label>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "0.5rem",
                            maxHeight: "180px",
                            overflowY: "auto",
                            paddingRight: "0.25rem",
                          }}
                          className="scrollbar-custom"
                        >
                          {timeSlots.map((time) => {
                            const isSelected = booking.time === time;
                            return (
                              <button
                                type="button"
                                key={time}
                                onClick={() => selectTime(time)}
                                style={{
                                  background: isSelected ? "#c9a84c" : "rgba(255,255,255,0.03)",
                                  border: isSelected ? "none" : "1px solid rgba(255,255,255,0.06)",
                                  color: isSelected ? "#0a0a0a" : "#fff",
                                  padding: "0.6rem 0",
                                  fontFamily: "'Inter', sans-serif",
                                  fontSize: "0.75rem",
                                  fontWeight: isSelected ? 700 : 500,
                                  cursor: "pointer",
                                  transition: "all 0.2s ease",
                                }}
                              >
                                {time}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: CONTACT DETAILS & CONFIRM */}
                {currentStep === 3 && (
                  <div>
                    <h2 style={titleStyle}>Completa tu reserva</h2>
                    <form onSubmit={handleFinalSubmit} style={{ marginTop: "2rem" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }} className="booking-grid-2">
                        <div>
                          <label style={labelStyle}>Tu Nombre Completo *</label>
                          <input
                            type="text"
                            name="name"
                            value={booking.name}
                            onChange={handleTextChange}
                            required
                            placeholder="Nombre y Apellidos"
                            style={{
                              width: "100%",
                              background: "rgba(255,255,255,0.04)",
                              border: "1px solid rgba(255,255,255,0.1)",
                              color: "#fff",
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "0.9rem",
                              padding: "1rem 1.25rem",
                              outline: "none",
                            }}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Teléfono de Contacto *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={booking.phone}
                            onChange={handleTextChange}
                            required
                            placeholder="+34 600 000 000"
                            style={{
                              width: "100%",
                              background: "rgba(255,255,255,0.04)",
                              border: "1px solid rgba(255,255,255,0.1)",
                              color: "#fff",
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "0.9rem",
                              padding: "1rem 1.25rem",
                              outline: "none",
                            }}
                          />
                        </div>
                      </div>
                      <div style={{ marginBottom: "2.5rem" }}>
                        <label style={labelStyle}>Notas Especiales o Preferencias</label>
                        <textarea
                          name="notes"
                          value={booking.notes}
                          onChange={handleTextChange}
                          rows={3}
                          placeholder="Indícanos si tienes alguna alergia o estilo en mente..."
                          style={{
                            width: "100%",
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "#fff",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.9rem",
                            padding: "1rem 1.25rem",
                            outline: "none",
                            resize: "none",
                          }}
                        />
                      </div>

                      {/* Summary Banner inside step 4 */}
                      <div
                        style={{
                          background: "rgba(201,168,76,0.04)",
                          border: "1px solid rgba(201,168,76,0.15)",
                          padding: "1.5rem 2rem",
                          marginBottom: "2.5rem",
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr 1fr",
                          gap: "1.5rem",
                          textAlign: "left",
                        }}
                        className="booking-grid-2"
                      >
                        <div>
                          <span style={summaryTitle}>Ritual</span>
                          <span style={summaryVal}>{booking.service}</span>
                        </div>
                        <div>
                          <span style={summaryTitle}>Estilista</span>
                          <span style={summaryVal}>{booking.barber}</span>
                        </div>
                        <div>
                          <span style={summaryTitle}>Fecha y Hora</span>
                          <span style={summaryVal}>{booking.date} @ {booking.time}</span>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={!canNext()}
                        style={{
                          width: "100%",
                          padding: "1.1rem",
                          background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
                          color: "#0a0a0a",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          border: "none",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                      >
                        Confirmar y Agendar
                      </button>
                    </form>
                  </div>
                )}

                {/* Footer Navigation Buttons */}
                {currentStep < 3 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "3.5rem",
                      paddingTop: "2rem",
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <button
                      type="button"
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      style={{
                        background: "none",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: currentStep === 0 ? "rgba(255,255,255,0.1)" : "#fff",
                        padding: "0.75rem 1.5rem",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        cursor: currentStep === 0 ? "default" : "pointer",
                      }}
                    >
                      <ChevronLeft size={14} />
                      Atrás
                    </button>

                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!canNext()}
                      style={{
                        background: canNext() ? "linear-gradient(135deg, #c9a84c, #e8c96d)" : "rgba(255,255,255,0.03)",
                        border: canNext() ? "none" : "1px solid rgba(255,255,255,0.06)",
                        color: canNext() ? "#0a0a0a" : "rgba(245,245,245,0.3)",
                        padding: "0.75rem 2rem",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        cursor: canNext() ? "pointer" : "default",
                      }}
                    >
                      Continuar
                      <ChevronRight size={14} />
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-custom::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: rgba(201,168,76,0.3);
          border-radius: 2px;
        }
        @media (max-width: 640px) {
          .booking-grid-2 {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .booking-card {
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}

const titleStyle: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontSize: "1.75rem",
  fontWeight: 700,
  color: "#f5f5f5",
  margin: 0,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.65rem",
  fontWeight: 700,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "rgba(245,245,245,0.5)",
  marginBottom: "0.5rem",
};

const summaryTitle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.6rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#c9a84c",
  marginBottom: "0.25rem",
};

const summaryVal: React.CSSProperties = {
  display: "block",
  fontFamily: "'Playfair Display', serif",
  fontSize: "0.95rem",
  fontWeight: 600,
  color: "#fff",
};
