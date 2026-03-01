import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import OverviewSection from "@/components/sections/OverviewSection";
import LogoStrip from "@/components/sections/LogoStrip";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

// Page-level metadata overrides layout.js for the home page
export const metadata = {
  // Targeting: "TechNirmaan", "TIMSCDR coding committee", "technirmaan coding club"
  title: "TechNirmaan | TIMSCDR Coding Committee — AI, Robotics & Dev",
  description:
    "TechNirmaan is the official coding committee of TIMSCDR, Thakur Institute Kandivali. Build AI projects, attend workshops, win hackathons. 16+ active developers in Mumbai.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TechNirmaan | TIMSCDR Coding Committee",
    description:
      "The official coding committee of TIMSCDR, Thakur Institute Kandivali. AI, robotics, open-source & more.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="gradient-bg min-h-screen text-foreground">
        <section id="home">
          <HeroSection />
        </section>

        <section id="overview">
          <OverviewSection />
        </section>

        <LogoStrip />

        <section id="features">
          <FeaturesSection />
        </section>

        <section id="process">
          <ProcessSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="testimonials">
          <TestimonialsSection />
        </section>

        <section id="contact">
          <CTASection />
        </section>

        <Footer />
      </main>
    </>
  );
}
