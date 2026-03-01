"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import GradientHighlight from "@/components/GradientHighlight";

const fakeLogs = [
  "> Initiating TechNirmaan Compiler Engine v2.0...",
  "> Allocating memory and loading language servers...",
  "> Parsing Abstract Syntax Trees (AST)...",
  "> Fetching dependencies from registry...",
  "> Optimizing frontend bundles...",
  "> [WARN] Core execution logic not found in current directory!",
  "> [ERROR] Module 'compiler' is still actively being coded by the team.",
  "> SYSTEM: Halting process. Awaiting future updates...",
];

export default function CompilerPage() {
  const [visibleLogs, setVisibleLogs] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (visibleLogs < fakeLogs.length) {
      const timeout = setTimeout(() => {
        setVisibleLogs((prev) => prev + 1);
      }, Math.random() * 600 + 400);
      return () => clearTimeout(timeout);
    } else {
      const t = setTimeout(() => setIsDone(true), 500);
      return () => clearTimeout(t);
    }
  }, [visibleLogs]);

  const getLogStyle = (log) => {
    if (log.includes("ERROR")) return "text-red-600 dark:text-red-400 font-semibold";
    if (log.includes("WARN")) return "text-amber-600 dark:text-amber-400";
    if (log.includes("SYSTEM")) return "text-blue-600 dark:text-cyan-400 font-bold mt-4";
    return "text-neutral-700 dark:text-neutral-300";
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#050505] relative flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/10 dark:bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white tracking-tight mb-4 flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-2">
            TechNirmaan
            <GradientHighlight>Compiler</GradientHighlight>
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 font-mono text-sm border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            STATUS: BUILDING...
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full rounded-2xl bg-white dark:bg-[#0a0a0a] border border-neutral-200/80 dark:border-neutral-800 shadow-2xl overflow-hidden flex flex-col"
        >
          <div className="h-12 border-b border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between px-4 bg-neutral-50/80 dark:bg-neutral-900/50 backdrop-blur-sm">
            <div className="flex gap-2 w-20">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 font-mono">
              <Cpu className="w-3 h-3 text-blue-500 dark:text-cyan-500" />
              <span>bash — technirmaan/compiler</span>
            </div>
            <div className="w-20" />
          </div>

          <div className="p-6 h-[320px] overflow-y-auto font-mono text-sm sm:text-base flex flex-col gap-2.5 bg-neutral-50/50 dark:bg-transparent">
            {fakeLogs.slice(0, visibleLogs).map((log, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={getLogStyle(log)}
              >
                {log}
              </motion.div>
            ))}

            {!isDone && (
              <div className="flex items-center gap-2 text-neutral-500 mt-2">
                <Loader2 className="w-4 h-4 animate-spin text-blue-500 dark:text-cyan-500" />
                <span className="animate-pulse">Processing...</span>
              </div>
            )}

            {isDone && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2.5 h-5 bg-neutral-800 dark:bg-neutral-300 mt-2"
              />
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isDone ? 1 : 0, y: isDone ? 0 : 10 }}
          transition={{ duration: 0.4 }}
          className="mt-12"
        >
          <Link
            href="/"
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold hover:scale-105 transition-transform shadow-xl"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Return to Base
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
