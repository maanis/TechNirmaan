"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function OverviewSection() {
  const pulseRef = useRef(null);
  const isInView = useInView(pulseRef, { margin: "0px 0px -100px 0px" });

  return (
    <section
      className="py-20 dark:bg-gradient-to-b dark:from-neutral-950 dark:to-neutral-900 relative"
      aria-label="Overview"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Stay Connected */}
          <motion.div
            className="glass-card rounded-3xl p-8 cursor-pointer"
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl" role="img" aria-label="Thumbs up">👍</span>
              </motion.div>
              <motion.div
                whileHover={{ rotate: -10, scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl" role="img" aria-label="Timer">⏱️</span>
              </motion.div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
            <p className="text-sm text-muted-foreground">
              Join our vibrant community of developers and innovators
            </p>
          </motion.div>

          {/* Overview */}
          <motion.div
            className="glass-card rounded-3xl p-8 cursor-pointer"
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <div className="flex justify-center gap-2 mb-4" aria-hidden="true">
                {[
                  { from: "from-blue-400", to: "to-cyan-500" },
                  { from: "from-purple-400", to: "to-pink-500" },
                  { from: "from-green-400", to: "to-emerald-500" },
                ].map((g, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${g.from} ${g.to} border-2 border-background ${i > 0 ? "-ml-3" : ""}`}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Active Contributors</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-4 text-center"
              >
                <div className="text-3xl font-bold mb-1">16+</div>
                <div className="text-xs text-muted-foreground">Total Members</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-4 text-center"
              >
                <div className="text-3xl font-bold mb-1">75%</div>
                <div className="text-xs text-muted-foreground">Growth Rate</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Ready to Code */}
          <motion.div
            ref={pulseRef}
            className="glass-card rounded-3xl p-8 cursor-pointer"
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <div className="mb-6">
              <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 flex items-center justify-center overflow-hidden">
                <motion.div
                  animate={
                    isInView
                      ? { scale: [1, 1.2, 1], opacity: [0.6, 0.3, 0.6] }
                      : { scale: 1, opacity: 0.6 }
                  }
                  transition={{
                    duration: 3,
                    repeat: isInView ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Ready to Code</h3>
            <p className="text-sm text-muted-foreground">
              Access resources and start building amazing projects
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
