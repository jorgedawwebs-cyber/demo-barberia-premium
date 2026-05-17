"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#0a0a0a",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {/* Logo animado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ textAlign: "center" }}
          >
            {/* Scissors icon SVG */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "center" }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
                  stroke="#c9a84c"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>

            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.6rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#f5f5f5",
                textTransform: "uppercase",
              }}
            >
              BLACKWOOD
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.45em",
                color: "#c9a84c",
                textTransform: "uppercase",
                marginTop: "0.25rem",
              }}
            >
              BARBER STUDIO
            </div>
          </motion.div>

          {/* Barra de progreso */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ width: "200px" }}
          >
            <div
              style={{
                width: "100%",
                height: "1px",
                background: "rgba(255,255,255,0.1)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <motion.div
                style={{
                  height: "100%",
                  background:
                    "linear-gradient(90deg, #c9a84c, #e8c96d)",
                  transformOrigin: "left",
                }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <div
              style={{
                marginTop: "0.75rem",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.3)",
                textAlign: "center",
              }}
            >
              {Math.min(Math.round(progress), 100)}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
