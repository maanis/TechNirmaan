import Navigation from "@/components/Navigation";
import CoreTeamFull from "@/components/sections/CoreTeamFull";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Core Team | TechNirmaan TIMSCDR Coding Committee",
  description:
    "Meet the core team behind TechNirmaan — the coding committee of TIMSCDR, Thakur Institute Kandivali. Developers, designers, AI engineers, and our faculty mentor.",
  alternates: {
    canonical: "/core",
  },
  openGraph: {
    title: "Core Team | TechNirmaan",
    description:
      "Meet the developers, designers, and AI engineers powering TechNirmaan at TIMSCDR, Thakur Institute.",
    url: "/core",
  },
};

export default function CorePage() {
  return (
    <>
      <Navigation />
      <main className="gradient-bg min-h-screen text-foreground">
        <CoreTeamFull />
      </main>
      <Footer />
    </>
  );
}
