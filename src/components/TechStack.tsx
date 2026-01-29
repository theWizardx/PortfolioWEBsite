"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Layout, 
  Globe, 
  Layers, 
  GitBranch,
  Sparkles,
  MousePointer2,
  Brain,
  Terminal
} from "lucide-react";

const technologies = [
  { name: "React", icon: Code2, color: "text-sky-400" },
  { name: "TypeScript", icon: Layout, color: "text-blue-400" },
  { name: "Tailwind", icon: Layers, color: "text-cyan-400" },
  { name: "Next.js", icon: Globe, color: "text-violet-400" },
  { name: "Supabase with SQL", icon: Database, color: "text-emerald-400" },
  { name: "Python", icon: Terminal, color: "text-yellow-400" },
  { name: "Git", icon: GitBranch, color: "text-orange-500" },
  { name: "Cursor", icon: MousePointer2, color: "text-white" },
  { name: "Gemini", icon: Sparkles, color: "text-blue-500" },
  { name: "Claude", icon: Brain, color: "text-orange-300" },
];

export default function TechStack() {
  return (
    <section className="py-10 border-y border-white/5 bg-white/[0.02] overflow-hidden relative">
      {/* Gradient Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />

      <div className="flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-shrink-0 gap-16 pr-16"
        >
          {/* First Copy */}
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center gap-3 group cursor-default">
              <tech.icon className={`w-6 h-6 ${tech.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
              <span className="text-lg font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
          
          {/* Second Copy for Loop */}
          {technologies.map((tech, index) => (
            <div key={`duplicate-${index}`} className="flex items-center gap-3 group cursor-default">
              <tech.icon className={`w-6 h-6 ${tech.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
              <span className="text-lg font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
