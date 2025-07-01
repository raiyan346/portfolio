import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello", "வணக்கம்", "नमस्ते", "مرحبا", "Hola",
  "Hallo", "Ciao", "こんにちは", "안녕하세요", "Bonjour", "Привет"
];

const MainIntroSection = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const rotate = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 1000);

    const timeout = setTimeout(() => {
      setShow(false);
      setTimeout(() => onComplete(), 800); // Trigger unmount after animation
    }, 5000); // ⏱ Show for 2s

    return () => {
      clearInterval(rotate);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.section
          className="intro-screen"
          initial={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="intro-text">{greetings[index]}</h1>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default MainIntroSection;
