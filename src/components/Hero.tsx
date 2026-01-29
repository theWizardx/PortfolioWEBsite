"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const textSegments = [
    { text: "Full-stack mastery with a focus on ", className: "text-slate-400" },
    { text: "React", className: "text-sky-400 font-semibold shadow-sky-400/20" },
    { text: ", ", className: "text-slate-400" },
    { text: "Next.js", className: "text-violet-400 font-semibold shadow-violet-400/20" },
    { text: ", and ", className: "text-slate-400" },
    { text: "AI Integration", className: "text-fuchsia-400 font-semibold shadow-fuchsia-400/20" },
    { text: ". Coding at the speed of thought.", className: "text-slate-400" },
  ];

  const [charIndex, setCharIndex] = useState(0);
  
  // Flatten segments into a single array of characters for granular control
  const flattenedChars = textSegments.flatMap(segment => 
    segment.text.split("").map(char => ({ char, className: segment.className }))
  );

  useEffect(() => {
    if (charIndex < flattenedChars.length) {
      const timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 70); // Slower typing speed (ms)
      return () => clearTimeout(timeout);
    }
  }, [charIndex, flattenedChars.length]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      
      <div className="text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-mono mb-6">
            System Online • Ready to Vibe
          </span>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2 }}
          className="relative w-64 h-64 md:w-96 md:h-96 mx-auto -mb-16 md:-mb-24 z-0"
        >
          {/* Intense Glow behind image */}
          <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-[60px] animate-pulse" />
          
          <div className="relative w-full h-full rounded-full overflow-hidden z-10 [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
            <Image 
              src="/assets/mepicturecoding.png" 
              alt="Vibe Coding"
              width={400}
              height={400}
              className="w-full h-full object-cover scale-110"
              priority
            />
            {/* Soft inner vignette */}
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(2,6,23,0.6)]" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 text-5xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400 text-glow font-mono"
        >
          BUILDING <br /> THE FUTURE
        </motion.h1>

        {/* Typing Effect Container */}
        <div className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed min-h-[60px] relative z-20">
           <p className="inline break-words">
             {flattenedChars.map((item, idx) => (
               <span key={idx} className={`relative ${item.className}`}>
                 {/* The Character */}
                 <span className={idx < charIndex ? "opacity-100" : "opacity-0"}>
                   {item.char}
                 </span>
                 
                 {/* The Leading Cursor (attached to the character about to be typed) */}
                 {idx === charIndex && (
                   <span className="absolute left-0 bottom-0 top-0 w-[2px] bg-purple-400 animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                 )}
               </span>
             ))}
             
             {/* The Trailing Cursor (when typing is complete) */}
             {charIndex >= flattenedChars.length && (
               <span className="inline-block w-[2px] h-[1em] bg-purple-400 animate-pulse align-middle ml-1 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
             )}
           </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 9.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link 
            href="/projects" 
            className="group relative px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </span>
          </Link>
          
          <Link 
            href="https://github.com/theWizardx" 
            target="_blank"
            className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 rounded-lg transition-all"
          >
            GitHub Profile
          </Link>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#020617] to-transparent z-20 pointer-events-none" />
    </section>
  );
}