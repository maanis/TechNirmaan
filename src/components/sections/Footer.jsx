// Server Component
import Link from "next/link";
import Image from "next/image";
import { Github, DiscIcon as Discord, Mail, ChevronRight } from "lucide-react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative  bg-neutral-50 dark:bg-neutral-950 pt-20 pb-10 overflow-hidden" aria-label="Site footer">
      {/* Subtle top gradient border instead of a harsh solid line */}
      <div className="max-w-[1100px] mx-auto">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-800 to-transparent" />

        {/* Optional ambient background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Grid updated: 
          - grid-cols-2 for mobile (small screens)
          - md:grid-cols-4 for larger screens
        */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">

            {/* Brand & Identity Column (Spans full width on mobile, 2 columns on desktop) */}
            <div className="col-span-2">
              <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 group-hover:border-blue-500 transition-colors duration-300">
                  <Image src="/favicon.ico" alt="TechNirmaan Logo" fill className="object-cover" />
                </div>
                <span className="font-bold text-2xl text-neutral-900 dark:text-white tracking-tight">
                  TechNirmaan
                </span>
              </Link>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed max-w-sm mb-8 font-light">
                Empowering the next generation of developers. The official Coding Committee at Thakur Institute of Management Studies, Career Development & Research, Mumbai.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a href="#" aria-label="Discord" className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-500 hover:text-[#5865F2] hover:border-[#5865F2]/50 hover:bg-[#5865F2]/10 transition-all duration-300">
                  <Discord className="w-5 h-5" />
                </a>
                <a href="https://github.com/timscdr" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href="mailto:coding@timscdr.edu" aria-label="Email" className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-500 hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation Column 1 - Takes 1 column */}
            <div className="col-span-1">
              <h4 className="font-semibold text-neutral-900 dark:text-white mb-6">Features</h4>
              <ul className="space-y-4">
                {['Workshops', 'Hackathons', 'Projects', 'Resources'].map((item) => (
                  <li key={item}>
                    <Link href="#features" className="group flex items-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <ChevronRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Column 2 - Takes 1 column */}
            <div className="col-span-1">
              <h4 className="font-semibold text-neutral-900 dark:text-white mb-6">About</h4>
              <ul className="space-y-4">
                {['About Us', 'Team Process', 'Leaderboard', 'Careers'].map((item) => (
                  <li key={item}>
                    <Link href="#about" className="group flex items-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <ChevronRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
              <p>© {currentYear} TechNirmaan Coding Committee.</p>
              {/* Added small legal links here where they naturally belong */}
              <div className="flex items-center gap-4 mt-2 md:mt-0">
                <Link href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Privacy</Link>
                <Link href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Terms</Link>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span>Built with</span>
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span>in Mumbai</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}