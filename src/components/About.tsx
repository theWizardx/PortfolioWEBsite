"use client";

import { motion } from "framer-motion";
import { HeartPulse, Terminal, Activity, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-32 px-4 md:px-8 relative max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-900/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-fuchsia-900/10 rounded-full blur-[100px] -z-10" />

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-32"
      >
        <h2 className="text-4xl md:text-6xl font-bold font-mono tracking-tight mb-4">
          <span className="text-slate-600 mr-4">{"//"}</span>
          THE DUALITY
        </h2>
        <p className="text-slate-500 text-lg uppercase tracking-widest">Precision & Creativity</p>
      </motion.div>

      <div className="flex flex-col gap-32">
        {/* Role 1: Perfusionist */}
        <div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-right md:text-right order-2 md:order-1"
          >
            <div className="flex items-center justify-end mb-4 text-sky-400">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">The Perfusionist</h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md ml-auto">
              I operate the heart-lung machine during open-heart surgery. A role demanding <span className="text-sky-300">absolute precision</span> to keep patients alive. In the OR, there is no margin for error.
            </p>
          </motion.div>

          {/* Visual Anchor 1 */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative flex-shrink-0 order-1 md:order-2"
          >
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-sky-500/50 to-transparent absolute -top-32 left-1/2 -translate-x-1/2 md:hidden" />
            <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border border-sky-500/20 flex items-center justify-center bg-sky-950/10 backdrop-blur-sm">
              <div className="absolute inset-0 rounded-full border border-sky-500/10 animate-[spin_10s_linear_infinite]" />
              <HeartPulse className="w-12 h-12 md:w-16 md:h-16 text-sky-400" strokeWidth={1} />
            </div>
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-sky-500/50 to-transparent absolute -bottom-32 left-1/2 -translate-x-1/2 md:hidden" />
          </motion.div>

          <div className="hidden md:block flex-1 order-3" />
        </div>

        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-48 bottom-48 w-px bg-gradient-to-b from-transparent via-slate-800 to-transparent -translate-x-1/2 -z-10" />

        {/* Role 2: Vibe Coder */}
        <div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="hidden md:block flex-1" />

          {/* Visual Anchor 2 */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative flex-shrink-0"
          >
             <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border border-fuchsia-500/20 flex items-center justify-center bg-fuchsia-950/10 backdrop-blur-sm">
              <div className="absolute inset-0 rounded-full border border-fuchsia-500/10 animate-[spin_10s_linear_infinite_reverse]" />
              <Terminal className="w-12 h-12 md:w-16 md:h-16 text-fuchsia-400" strokeWidth={1} />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-left"
          >
            <div className="flex items-center gap-3 mb-4 text-fuchsia-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">The Vibe Coder</h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              I build full-stack apps fast using AI. By combining my ideas with <span className="text-fuchsia-300">AI agents</span>, I turn concepts into reality instantly. It&apos;s efficient, creative, and purely in the flow.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}