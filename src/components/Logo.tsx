import React from "react";
import { motion } from "framer-motion";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo">
      <motion.span
        initial={{ x: 30, color: "#ffcccc" }}
        animate={{ x: 0, color: "#ffffff" }}
        transition={{ duration: 1 }}
      >
        &lt;
      </motion.span>

      <motion.span
        initial={{ opacity: 0, color: "#ffffff" }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="name"
      >
        Naila
      </motion.span>

      <motion.span
        initial={{ x: -30, color: "#ffcccc" }}
        animate={{ x: 0, color: "#ffffff" }}
        transition={{ duration: 1 }}
      >
        &gt;
      </motion.span>
    </div>
  );
}
