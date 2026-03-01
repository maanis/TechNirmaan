// Server Component — renders on the server, fully indexable by Google.
// No "use client" needed since there's no interactivity here.
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { Spotlight } from '../ui/spotlight-new'
import GradientHighlight from "../GradientHighlight";


export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center dark:bg-neutral-950 justify-center overflow-hidden pt-32 pb-20"
      aria-label="Hero"
    >
      <div className="absolute inset-0 will-change-transform">
        <Spotlight />
      </div>
      {/* Background gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 pointer-events-none" /> */}
      <div className="absolute dark:hidden inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 dark:from-purple-900/30 dark:via-background dark:to-blue-900/30 pointer-events-none" />

      {/* Glow orbs — hidden on mobile to save paint cost */}
      <div className="absolute max-sm:hidden top-1/4 left-[33%] w-72 h-72 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl animate-pulse will-change-transform pointer-events-none" />
      <div className="absolute max-sm:hidden bottom-1/4 right-[33%] w-72 h-72 bg-secondary/20 dark:bg-secondary/20 rounded-full blur-3xl animate-pulse will-change-transform pointer-events-none" style={{ animationDelay: "1s" }} />

      <div className="container py-20 mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">

          {/*
            H1 TAG — The single most important on-page SEO element.
            Google reads this to understand what the page is about.
            Keywords: "TIMSCDR", "coding committee", "AI-native development"
            Keep it natural — don't stuff keywords.
          */}
          {/*
            H1 — Most important SEO signal on the page.
            Targets: "TechNirmaan", "coding club", "AI development", "TIMSCDR"
            Rule: read naturally. Never keyword-stuff.
          */}
          <h1 className="max-w-5xl bg-gradient-to-r from-foreground/60 via-foreground to-foreground/60 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent sm:text-5xl xl:text-7xl/none mb-4">
            <GradientHighlight>TechNirmaan</GradientHighlight>
            <span className="block mt-2">Built for AI-native development</span>
          </h1>

          {/*
            DESCRIPTION — Indexed by Google. Include: brand name, institution,
            location, what you actually do. Keep it human-readable.
          */}
          <p className="text-sm mt-4 sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
            The official coding committee of{" "}
            <strong className="text-foreground">TIMSCDR, Thakur Institute Kandivali</strong>.
            Empowering developers through AI projects, robotics, workshops &amp; open-source.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              href="/compiler"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary via-secondary to-accent text-white hover:opacity-90 rounded-full px-6 py-2 sm:py-2 text-sm sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5" aria-hidden="true" />
              Start Coding
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 bg-card hover:bg-card/80 text-card-foreground rounded-full px-8 py-2 sm:py-2 text-sm sm:text-lg font-semibold shadow-lg border border-border"
            >
              Learn More
            </Link>
          </div>

          {/* Stats — use real numbers, they build trust with visitors AND Google */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                stat: "4x",
                label: "Faster Skill Development with AI-Powered Learning",
              },
              {
                stat: "75%",
                label: "Of Members Actively Contributing",
              },
              {
                stat: "30%",
                label: "Better Placement Success Rate",
              },
            ].map(({ stat, label }) => (
              <div
                key={stat}
                className="stat-card shadow-lg rounded-3xl p-8 border border-white/10 backdrop-blur-md"
              >
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                  {stat}
                </div>
                <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider font-medium">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
