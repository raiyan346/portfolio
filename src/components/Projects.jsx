import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Figma App Prototype",
    description:
      "An interactive food delivery app designed in Figma to streamline native food orders with smooth UX.",
    image: "/logos/figma new.jpg",
    link: "https://www.figma.com/proto/nASJ3Z9Kmdg7GGltBfpN4t/cloud-kitchen?page-id=0%3A1&node-id=2-2&viewport=-1166%2C-190%2C0.84&t=rSdst2PLrRa8Ml2Y-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2&show-proto-sidebar=1",
  },
  {
    title: "College Website-React",
    description:
      "Developed a responsive college website with React, featuring contact forms, image galleries, and smooth animations for an engaging user experience.",
    image: "/logos/clg-proj.jpg",
    link: "http://localhost:5174/",
  }
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.85,
    transition: { duration: 0.5, ease: "easeIn" },
  }),
};

const Projects = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  const next = () =>
    setIndex([(index + 1) % projects.length, 1]);
  const prev = () =>
    setIndex([(index - 1 + projects.length) % projects.length, -1]);

  return (
    <section
      id="projects"
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#0f172a",
        color: "#f1f5f9",
        fontFamily: "sans-serif",
        minHeight: "100vh",
      }}
    >
      <h2 className="section-title">Projects</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* ← Previous Button */}
        <button
          onClick={prev}
          style={{
            fontSize: "2rem",
            background: "#1e40af",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          ←
        </button>

        {/* Animated Project Card */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              display: "flex",
              flexDirection: "row",
              background: "radial-gradient(circle at top left, #1e293b, #0f172a)",
              borderRadius: "24px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
              overflow: "hidden",
              maxWidth: "1100px",
              width: "100%",
              minHeight: "380px",
            }}
          >
            <img
              src={projects[index].image}
              alt={projects[index].title}
              style={{
                width: "35%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                padding: "2rem",
                width: "65%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                {projects[index].title}
              </h3>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                {projects[index].description}
              </p>
              <a
                href={projects[index].link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "1.5rem",
                  color: "#38bdf8",
                  fontWeight: "bold",
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
              >
                View Project →
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* → Next Button */}
        <button
          onClick={next}
          style={{
            fontSize: "2rem",
            background: "#1e40af",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Projects;
