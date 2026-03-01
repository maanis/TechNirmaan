// Server Component
import Image from "next/image";
import { ChevronRight, Target, Code, Cpu } from "lucide-react";
import CoreTeam from "./CoreTeam";
import GradientHighlight from "../GradientHighlight"; // Ensure this file has "use client" at the top!

const steps = [
  {
    title: "Participate in Events",
    description: "Attend workshops, hackathons, and coding challenges tailored for all skill levels.",
    icon: Target
  },
  {
    title: "Build Projects",
    description: "Collaborate and create real-world applications with continuous mentorship.",
    icon: Code
  },
  {
    title: "Explore & Innovate",
    description: "Dive deeper into specialized tech domains like AI, Web3, and Robotics.",
    icon: Cpu
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden" id="process" aria-label="How it works">

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10 space-y-32">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Image with Premium Tech Frame */}
          <div className="relative max-sm:hidden order-2 lg:order-1 group">
            {/* Glowing Border effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 dark:from-blue-500/30 dark:to-cyan-500/30 rounded-[2.5rem] blur-sm group-hover:blur-md transition-all duration-500" />

            <div className="relative rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2868&auto=format&fit=crop"
                alt="Developer working on a coding project at TIMSCDR"
                width={800}
                height={800}
                className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                priority={false}
              />
              {/* Decorative Tech Badge overlay */}
              <div className="absolute bottom-6 left-6 z-20 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl">
                <p className="text-xs font-mono font-semibold tracking-wider opacity-80 mb-1">CURRENT STATUS</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-sm font-medium">Building the Future</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text and Timeline */}
          <div className="order-1 lg:order-2">

            <div className="mb-12">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-sm mb-4">
                <span className="w-8 h-px bg-current"></span>
                <span>HOW IT WORKS</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white tracking-tighter leading-tight mb-6">
                Simplified Process,<br />
                {/* Wrapped in a flex container to fix alignment issues */}
                <span className="inline-flex items-center flex-wrap gap-x-3 mt-2">
                  <GradientHighlight>Outstanding</GradientHighlight>
                  <span>Results.</span>
                </span>
              </h2>

              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg font-light">
                At TIMSCDR Coding Committee, we believe in making tech education accessible. Our streamlined approach ensures every member can grow from beginner to innovator.
              </p>
            </div>

            {/* The Connected Timeline Steps */}
            <div className="relative pl-4 sm:pl-8">
              {/* Vertical connecting line */}
              <div className="absolute left-[27px] sm:left-[43px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-500/50 to-transparent dark:from-blue-600 dark:via-cyan-600/50" />

              <ol className="space-y-8 relative" aria-label="Steps to join">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <li key={i} className="relative group">
                      {/* Timeline Dot/Icon */}
                      <div className="absolute -left-[43px] sm:-left-[59px] top-1.5 w-10 h-10 rounded-full bg-white dark:bg-neutral-950 border-2 border-neutral-200 dark:border-neutral-800 flex items-center justify-center group-hover:border-cyan-500 dark:group-hover:border-cyan-400 transition-colors z-10 shadow-sm">
                        <Icon className="w-4 h-4 text-neutral-400 dark:text-neutral-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                      </div>

                      {/* Content Card */}
                      <div className="block p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-neutral-800 hover:border-blue-500/30 dark:hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 cursor-pointer">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-xs font-mono text-cyan-600 dark:text-cyan-500 font-bold mb-2 tracking-widest">
                              PHASE 0{i + 1}
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{step.title}</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                          <ChevronRight className="w-5 h-5 mt-1 text-neutral-300 dark:text-neutral-700 group-hover:text-cyan-500 transition-colors shrink-0" aria-hidden="true" />
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

          </div>
        </div>

        {/* Core Team Component at the bottom */}
        <div className="pt-16 border-t border-neutral-200/50 dark:border-neutral-800/50">
          <CoreTeam />
        </div>

      </div>
    </section>
  );
}