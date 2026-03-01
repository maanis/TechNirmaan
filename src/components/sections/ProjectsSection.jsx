"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Github, Activity, X, Cpu } from "lucide-react";
import GradientHighlight from "../GradientHighlight";
import { Sparkles } from "lucide-react";

export default function ProjectsSection() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    // Prevent scrolling when modal is open
    React.useEffect(() => {
        if (isVideoOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isVideoOpen]);

    return (
        <section className="py-10 bg-neutral-50 dark:bg-[#0a0a0a] relative" id="projects">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="max-w-[1100px] mx-auto px-6 relative z-10">
                {/* Minimal Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 max-w-6xl mx-auto">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-sm mb-4">
                            <Activity className="w-4 h-4" />
                            <span>01 / HARDWARE & AI</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white tracking-tighter leading-tight">
                            Innovations by <br />
                            <GradientHighlight>TechNirmaan</GradientHighlight>
                        </h2>
                    </div>
                    <p className="text-neutral-500 dark:text-neutral-400 max-w-sm md:text-right font-light">
                        Pushing the boundaries of robotics, AI, and software through collaborative engineering.
                    </p>
                </div>

                {/* The Showcase Container */}
                <div className="max-w-6xl mx-auto">
                    <div className="group relative rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">

                        {/* Top App Bar with Mac OS Icons */}
                        <div className="h-12 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between px-4 bg-neutral-50/50 dark:bg-neutral-950/50 backdrop-blur-sm">
                            <div className="flex gap-1.5 w-20">
                                <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 font-mono">
                                <Cpu className="w-3 h-3 text-green-500 animate-pulse hidden sm:block" />
                                <span>TIRA_SYS_ONLINE</span>
                            </div>
                            <div className="w-20"></div> {/* Spacer to keep title centered */}
                        </div>

                        <div className="grid lg:grid-cols-[1.2fr_1fr] lg:h-[600px] gap-0">
                            {/* Project Image - Fixed Fitting */}
                            <div className="relative h-[400px] lg:h-full w-full bg-neutral-100 dark:bg-neutral-950 overflow-hidden flex items-center justify-center">
                                <Image
                                    src="/project.jpeg"
                                    alt="TIRA Robot"
                                    fill
                                    className="object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                                />
                                {/* Overlay Play Button on Image for visual cue */}
                                <button
                                    onClick={() => setIsVideoOpen(true)}
                                    className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors z-10"
                                >
                                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50 text-white shadow-xl hover:scale-110 transition-transform">
                                        <Play className="w-6 h-6 ml-1 fill-white" />
                                    </div>
                                </button>
                            </div>

                            {/* Project Details - Clean Sidebar */}
                            <div className="p-6 lg:p-10 flex flex-col border-t lg:border-t-0 lg:border-l border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                                <div className="mb-auto">
                                    <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                                        TIRA
                                    </h3>
                                    <p className="text-sm text-blue-600 dark:text-blue-400 font-mono mb-4">TIMSCDR Intelligent Robot Assistant</p>

                                    <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
                                        An advanced humanoid robot capable of walking and engaging in real-time, natural conversations. Ask it anything—TIRA processes speech, formulates intelligent responses, and physically interacts with its environment.
                                    </p>

                                    {/* Minimal Tech List */}
                                    <div className="space-y-3 mb-12">
                                        <h4 className="text-xs font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">Core Technologies</h4>
                                        <ul className="flex flex-col gap-2">
                                            {['Raspberry Pi / Microcontrollers', 'Conversational AI (LLM)', 'Speech-to-Text & TTS', 'Servo Motor Control'].map((tech) => (
                                                <li key={tech} className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                                                    <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-col gap-3">
                                    <button
                                        onClick={() => setIsVideoOpen(true)}
                                        className="flex items-center justify-between w-full px-6 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                                    >
                                        Watch Live Demo
                                        <Play className="w-5 h-5 fill-current" />
                                    </button>
                                    <Link
                                        href="#"
                                        className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-transparent border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white font-semibold rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                        View Codebase
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Minimal Upcoming Teaser */}
                    {/* Teaser for future projects */}
                    <div className="mt-16 text-center">
                        <div className="inline-flex flex-col items-center justify-center p-8 rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 w-full max-w-2xl mx-auto">
                            <div className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center mb-4 animate-pulse">
                                <Sparkles className="w-6 h-6 text-neutral-500 dark:text-neutral-400" />
                            </div>
                            <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">More projects are brewing</h4>
                            <p className="text-neutral-500 dark:text-neutral-400">
                                Our committee members are actively working on new open-source tools. Stay tuned!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- VIDEO MODAL OVERLAY (Fixed z-index) --- */}
            {isVideoOpen && (
                <div
                    /* CHANGED: Added z-[9999] and onClick backdrop close */
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-0 sm:p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-300"
                    onClick={() => setIsVideoOpen(false)}
                >
                    <div
                        /* CHANGED: Added stopPropagation so clicking the video doesn't close the modal */
                        className="relative w-full h-full sm:h-auto sm:max-w-md bg-black sm:rounded-3xl overflow-hidden flex flex-col ring-1 ring-white/10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Modal Header */}
                        <div className="absolute top-0 left-0 right-0 z-[10000] flex justify-between items-center p-4 pt-6 sm:p-4 bg-gradient-to-b from-black/80 to-transparent">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Video Element */}
                        <div className="relative w-full h-full sm:h-[80vh] bg-black flex items-center justify-center">
                            <video
                                className="w-full h-full object-contain"
                                controls
                                autoPlay
                                playsInline
                                preload="metadata"
                            >
                                <source src="/tira-demo-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}