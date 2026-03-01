// Server Component
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-neutral-50 dark:bg-neutral-950 border-y border-neutral-200 dark:border-neutral-800">
      {/* Subtle Grid Background - creates that tech/developer vibe */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

          {/* Animated Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300 tracking-wide">
              Committee Registrations Open
            </span>
          </div>

          {/* Clean Typography with Gradient Accent */}
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-neutral-900 dark:text-white">
            Build the future with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              TechNirmaan.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl font-light">
            A community of innovators, creators, and future-ready developers at Thakur Institute of Management Studies, Career Development &amp; Research.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/core"
              className="px-8 py-4 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-neutral-900/20 dark:shadow-white/10"
            >
              Get Started
            </Link>
            <Link
              href="#"
              className="px-8 py-4 rounded-xl bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}