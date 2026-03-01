"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, Layers, Rocket, Users } from "lucide-react";

// MatrixRain only runs while the card is hovered — saves CPU
const MatrixRain = ({ color, active }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "010101001100101010HEXCODE".split("");
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array.from({ length: columns }, () => Math.random() * -100);

    const draw = () => {
      const isDark = document.documentElement.classList.contains("dark");
      ctx.fillStyle = isDark ? "rgba(23,23,23,0.1)" : "rgba(255,255,255,0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    if (active) rafRef.current = requestAnimationFrame(draw);
    else cancelAnimationFrame(rafRef.current);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [active, color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-700"
      style={{ opacity: active ? 0.2 : 0 }}
      aria-hidden="true"
    />
  );
};

const features = [
  {
    icon: Users,
    title: "Collaborative Coding",
    description: "Work together on exciting projects with fellow developers. Share knowledge and grow together.",
    theme: "from-cyan-400 to-blue-500",
    hex: "#06b6d4",
  },
  {
    icon: Calendar,
    title: "Tech Workshops",
    description: "Regular hands-on workshops covering the latest technologies and industry best practices.",
    theme: "from-purple-400 to-pink-500",
    hex: "#d946ef",
  },
  {
    icon: Rocket,
    title: "Open Source Projects",
    description: "Contribute to meaningful open source projects and build your portfolio while learning.",
    theme: "from-orange-400 to-red-500",
    hex: "#f97316",
  },
  {
    icon: Layers,
    title: "AI & ML Bootcamps",
    description: "Deep dive into artificial intelligence and machine learning with expert-led bootcamps.",
    theme: "from-emerald-400 to-green-500",
    hex: "#10b981",
  },
];

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      className="py-24 relative bg-neutral-50 dark:bg-neutral-950 overflow-hidden"
      aria-label="Platform features"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          {/*
            H2 TAGS — Second most important SEO heading.
            Good place to use secondary keywords naturally.
          */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white"
          >
            Platform Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg"
          >
            Unlock the full potential of tech learning with our comprehensive
            platform designed to simplify your coding journey.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="group relative h-full"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent dark:from-white/10 dark:to-white/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

              <div className="relative h-full bg-white dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200 dark:border-white/10 rounded-3xl overflow-hidden hover:border-neutral-300 dark:hover:border-white/20 shadow-xl transition-all duration-500">
                <MatrixRain color={feature.hex} active={hoveredIndex === i} />

                <div className="p-8 relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.theme} p-[1px] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="w-full h-full bg-white dark:bg-neutral-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.theme} opacity-10 dark:opacity-20`} aria-hidden="true" />
                      <feature.icon className="w-7 h-7 text-neutral-800 dark:text-white relative z-10" aria-hidden="true" />
                    </div>
                  </div>

                  {/* H3 inside feature cards — good for long-tail keyword coverage */}
                  <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.theme} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} aria-hidden="true" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
