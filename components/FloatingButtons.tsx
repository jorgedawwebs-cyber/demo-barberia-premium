"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div
        style={{
          position: "fixed",
          bottom: "2rem",
          left: "2rem",
          zIndex: 500,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "0.75rem",
        }}
      >
        <AnimatePresence>
          {whatsappOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              style={{
                background: "#111111",
                border: "1px solid rgba(201,168,76,0.2)",
                padding: "1.25rem 1.5rem",
                maxWidth: "260px",
                backdropFilter: "blur(20px)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  color: "rgba(245,245,245,0.8)",
                  lineHeight: 1.6,
                  marginBottom: "1rem",
                }}
              >
                ¡Hola! 👋 ¿Quieres reservar una cita o tienes alguna pregunta?
              </p>
              <a
                href="https://wa.me/34600000000?text=Hola,%20quiero%20reservar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.6rem 1.25rem",
                  background: "#25D366",
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.9";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                }}
              >
                <MessageCircle size={14} />
                Chatear por WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 3.5, type: "spring" }}
          onClick={() => setWhatsappOpen(!whatsappOpen)}
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "#25D366",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 30px rgba(37, 211, 102, 0.4)",
            transition: "all 0.3s ease",
            color: "#fff",
          }}
          whileHover={{ scale: 1.1, boxShadow: "0 12px 40px rgba(37, 211, 102, 0.6)" }}
          whileTap={{ scale: 0.95 }}
        >
          {whatsappOpen ? <X size={22} /> : <MessageCircle size={22} />}
        </motion.button>
      </div>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "2rem",
              right: "2rem",
              zIndex: 500,
              width: "48px",
              height: "48px",
              background: "rgba(10,10,10,0.9)",
              border: "1px solid rgba(201,168,76,0.3)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#c9a84c",
              backdropFilter: "blur(10px)",
              transition: "all 0.3s ease",
            }}
            whileHover={{
              borderColor: "#c9a84c",
              boxShadow: "0 0 20px rgba(201,168,76,0.3)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
