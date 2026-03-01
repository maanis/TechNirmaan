// Server Component
import { Target, Code, Cpu, ArrowRight } from "lucide-react";
import CoreTeam from "./CoreTeam";
import GradientHighlight from "../GradientHighlight"; // Ensure this has "use client" at the top of its file!

const steps = [
  {
    id: "01",
    title: "Participate in Events",
    description: "Attend workshops and hackathons tailored for all skill levels.",
    icon: Target
  },
  {
    id: "02",
    title: "Build Projects",
    description: "Collaborate on real-world applications with continuous mentorship.",
    icon: Code
  },
  {
    id: "03",
    title: "Explore & Innovate",
    description: "Dive deeper into specialized tech domains like AI and Robotics.",
    icon: Cpu
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 bg-white dark:bg-[#050505] relative" id="process" aria-label="How it works">
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">

        {/* Compact Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-sm mb-4">
            <span className="w-4 h-px bg-current"></span>
            <span>HOW IT WORKS</span>
            <span className="w-4 h-px bg-current"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white tracking-tight mb-4 flex flex-col sm:flex-row items-center justify-center gap-2">
            Simplified Process, <span className="inline-block items-center">
              <GradientHighlight>Outstanding</GradientHighlight> Results.
            </span>

          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base">
            Our streamlined approach ensures every member can grow from beginner to innovator.
          </p>
        </div>

        {/* Sleek Horizontal Grid (No bulky images) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

          {/* Optional subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="relative z-10 group p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/50 dark:border-neutral-800/50 hover:bg-white dark:hover:bg-neutral-900 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 flex items-center justify-center shadow-sm group-hover:border-cyan-500/30 transition-colors">
                    <Icon className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-cyan-500 transition-colors" />
                  </div>
                  {/* Subtle Numbering */}
                  <span className="text-4xl font-black text-neutral-200/50 dark:text-neutral-800/50 group-hover:text-cyan-500/10 transition-colors">
                    {step.id}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Micro-interaction link */}
                <div className="flex items-center gap-1 text-sm font-semibold text-cyan-600 dark:text-cyan-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Core Team integration */}
        <div className="mt-24 pt-12 border-t border-neutral-200/50 dark:border-neutral-800/50">
          <CoreTeam />
        </div>

      </div>
    </section>
  );
}