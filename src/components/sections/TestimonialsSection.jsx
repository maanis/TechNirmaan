// Server Component — static testimonials, SSR'd for SEO
import { Star, MessageSquareQuote } from "lucide-react";
import GradientHighlight from "../GradientHighlight"; // Ensure "use client" is inside this component file

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Final Year CS",
    date: "Mar 15, 2025",
    rating: 5,
    text: "TechNirmaan transformed my coding journey. The workshops and hackathons gave me real-world experience that landed me my dream internship. The community here is incredibly supportive!",
    avatar: "RS",
  },
  {
    name: "Priya Desai",
    role: "Third Year IT",
    date: "Feb 8, 2025",
    rating: 5,
    text: "Joining this committee was the best decision of my college life. The mentorship and hands-on projects helped me build a strong portfolio. I've learned more here than in any classroom.",
    avatar: "PD",
  },
  {
    name: "Arjun Patel",
    role: "Second Year CS",
    date: "Jan 20, 2025",
    rating: 5,
    text: "The AI & ML bootcamps are exceptional. The instructors break down complex concepts beautifully. I went from zero knowledge to building my own ML models in just a few months!",
    avatar: "AP",
  },
  {
    name: "Sneha Reddy",
    role: "Final Year IT",
    date: "Dec 12, 2024",
    rating: 5,
    text: "What I love most is the collaborative environment. Everyone helps each other grow. The open source projects gave me practical GitHub experience that impressed recruiters during placements.",
    avatar: "SR",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-[#050505] relative overflow-hidden" aria-label="Member testimonials">

      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 dark:bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-sm mb-4">
            <span className="w-4 h-px bg-current"></span>
            <span>COMMUNITY FEEDBACK</span>
            <span className="w-4 h-px bg-current"></span>
          </div>

          {/* FIXED HIGHLIGHT ALIGNMENT */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white tracking-tighter mb-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            What our
            <GradientHighlight>Members</GradientHighlight>
            say
          </h2>

          <p className="text-lg text-neutral-500 dark:text-neutral-400 font-light">
            Real experiences from students who&apos;ve grown their skills, built projects, and launched their careers with TIMSCDR Coding Committee.
          </p>
        </div>

        {/* Schema-friendly review list */}
        <ul
          className="grid md:grid-cols-2 gap-6"
          aria-label="Member reviews"
        >
          {testimonials.map((t, i) => (
            <li
              key={i}
              className="relative group bg-white dark:bg-neutral-900/40 backdrop-blur-xl border border-neutral-200/60 dark:border-neutral-800/60 rounded-3xl p-8 hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-cyan-500/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              // itemScope + itemType for Review schema — Google may show star ratings in search results
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Decorative background quote icon */}
              <MessageSquareQuote className="absolute -bottom-4 -right-4 w-32 h-32 text-neutral-100 dark:text-neutral-800/30 -rotate-12 pointer-events-none z-0 transition-transform group-hover:-translate-y-2 group-hover:-rotate-6" aria-hidden="true" />

              <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {/* Modern Glowing Avatar */}
                  <div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-sm text-white shadow-lg shadow-cyan-500/30"
                    aria-hidden="true"
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 dark:text-white" itemProp="author">{t.name}</h4>
                    <p className="text-sm font-mono text-cyan-600 dark:text-cyan-400">{t.role}</p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-0.5 bg-neutral-100 dark:bg-neutral-950 px-2 py-1 rounded-full border border-neutral-200 dark:border-neutral-800" aria-label={`${t.rating} out of 5 stars`}>
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
              </div>

              <p className="relative z-10 text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 font-light" itemProp="reviewBody">
                &quot;{t.text}&quot;
              </p>

              <div className="relative z-10 flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800 pt-4">
                <time className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider" dateTime={t.date} itemProp="datePublished">
                  {t.date}
                </time>
                {/* Visual SEO tag */}
                <span className="text-[10px] font-semibold text-neutral-300 dark:text-neutral-700 uppercase tracking-widest bg-neutral-100 dark:bg-neutral-950 px-2 py-0.5 rounded-sm">Verified</span>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}