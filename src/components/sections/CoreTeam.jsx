"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Instagram, ArrowUpRight, Cpu, ShieldCheck, Mail } from "lucide-react";
import Link from "next/link";
import GradientHighlight from "../GradientHighlight";

const mentorData = {
  name: "Prof. Anamika",
  role: "Faculty Mentor",
  designation: "Assistant Professor, CS Dept",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop",
  socials: { linkedin: "#", mail: "mailto:anamika@college.edu" },
};

const teamMembers = [
  { id: 1, name: "Manish Jha", role: "Developer", image: "/manish.png", socials: { linkedin: "#", github: "#", instagram: "#" }, status: "online" },
  { id: 2, name: "Sanya Ver", role: "FullStack_Lead", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop", socials: { linkedin: "#", github: "#", instagram: "#" }, status: "busy" },
  { id: 3, name: "Rohan Das", role: "UI_UX_Designer", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2787&auto=format&fit=crop", socials: { linkedin: "#", github: "#", instagram: "#" }, status: "away" },
  { id: 4, name: "Meera Iyer", role: "DevOps_Eng", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop", socials: { linkedin: "#", github: "#", instagram: "#" }, status: "online" },
];

const statusColors = { online: "bg-emerald-500", busy: "bg-amber-500", away: "bg-neutral-400" };

const StatusDot = ({ status }) => (
  <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
    <span className={`w-2 h-2 rounded-full ${statusColors[status] || "bg-neutral-400"} animate-pulse`} />
    <span className="text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono">{status}</span>
  </div>
);

const SocialLink = ({ href, icon, label }) => (
  <a href={href} aria-label={label} className="text-neutral-400 hover:text-blue-600 dark:hover:text-emerald-400 hover:scale-110 transition-all duration-200">
    {icon}
  </a>
);

const MentorBar = ({ mentor }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="relative w-full mb-12 group"
  >
    <div className="flex flex-col md:flex-row md:items-center justify-between bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-lg relative overflow-hidden hover:border-emerald-500/30 transition-all">
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-neutral-100 dark:from-neutral-800/30 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="flex items-center gap-5 z-10">
        <div className="relative">
          <div className="w-16 h-16 rounded-full p-[2px] border-2 border-emerald-500/30 group-hover:border-emerald-500 transition-colors">
            <Image src={mentor.image} alt={`${mentor.name}, Faculty Mentor`} width={64} height={64} className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-neutral-900 text-emerald-500 border border-neutral-700 p-1 rounded-full" aria-hidden="true">
            <ShieldCheck size={12} />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white uppercase tracking-tight">{mentor.name}</h3>
            <span className="hidden md:inline-flex px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-blue-400 border border-emerald-200 dark:border-emerald-500/20">ROOT_ADMIN</span>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">{mentor.designation}</p>
        </div>
      </div>
      <div className="mt-4 md:mt-0 flex items-center gap-4 z-10">
        <SocialLink href={mentor.socials.mail} icon={<Mail size={18} />} label={`Email ${mentor.name}`} />
        <SocialLink href={mentor.socials.linkedin} icon={<Linkedin size={18} />} label={`${mentor.name} on LinkedIn`} />
      </div>
    </div>
  </motion.div>
);

const Card = ({ member }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative w-full h-[400px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-300 overflow-hidden"
  >
    <div className="absolute inset-0 bg-[size:24px_24px] opacity-30 dark:opacity-20 bg-[linear-gradient(to_right,#d4d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d4_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]" aria-hidden="true" />
    <div className="absolute top-0 left-0 w-full h-8 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between px-3 z-20 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm">
      <div className="flex gap-1.5" aria-hidden="true">
        <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
      </div>
      <div className="text-[9px] font-mono text-neutral-400" aria-hidden="true">ID: DEV-0{member.id}</div>
    </div>

    <div className="absolute inset-0 pt-8 pb-16 px-3 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500">
        <Image src={member.image} alt={`${member.name}, ${member.role.replace(/_/g, " ")}`} fill className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" sizes="(max-width: 768px) 100vw, 25vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 z-10 pointer-events-none" aria-hidden="true" />
      </div>
    </div>

    <div className="absolute bottom-0 left-0 w-full bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 p-4 z-20">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-tight">{member.name}</h3>
          <p className="text-blue-600 dark:text-blue-400 text-xs font-mono mt-0.5">{`> ${member.role}`}</p>
        </div>
        <StatusDot status={member.status} />
      </div>
      <div className="h-0 group-hover:h-10 overflow-hidden transition-all duration-300 ease-out">
        <div className="flex items-center gap-3 pt-2 border-t border-neutral-200 dark:border-neutral-900 mt-2">
          <SocialLink href={member.socials.github} icon={<Github size={16} />} label={`${member.name} on GitHub`} />
          <SocialLink href={member.socials.linkedin} icon={<Linkedin size={16} />} label={`${member.name} on LinkedIn`} />
          <SocialLink href={member.socials.instagram} icon={<Instagram size={16} />} label={`${member.name} on Instagram`} />
          <div className="flex-grow" />
          <a href="#" className="text-[10px] text-neutral-500 hover:text-blue-600 flex items-center gap-1 transition-colors">
            PORTFOLIO <ArrowUpRight size={10} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function CoreTeam() {
  return (
    <section className="w-full dark:bg-neutral-950 py-20 md:px-0" aria-label="Core team">
      <div className="max-w-[1100px] mx-auto mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 dark:border-neutral-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Cpu size={20} className="text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <span className="font-mono text-blue-600 dark:text-blue-400 text-sm">/system_architecture/core</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white tracking-tighter uppercase">
            Committee <span className="text-neutral-300 dark:text-neutral-700">Mainframe</span>
          </h2>
          {/* <GradientHighlight>TechNirmaan.</GradientHighlight> */}
        </div>
        <p className="text-neutral-500 dark:text-neutral-400 max-w-xs text-xs font-mono leading-relaxed">
          // A collective of developers, designers, and innovators building the future.
        </p>
      </div>
      <div className="max-w-[1180px] mx-auto">
        <MentorBar mentor={mentorData} />
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member) => (
            <Card key={member.id} member={member} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/core"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            View Full Team
          </Link>
        </div>
      </div>
    </section>
  );
}
