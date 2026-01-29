"use client";

import { motion } from "framer-motion";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "saarx1331@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-4 md:px-8 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-b from-slate-900/50 to-slate-950/50 border border-white/5 overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] -z-10" />

        <h2 className="text-3xl md:text-5xl font-bold font-mono text-slate-100 mb-6">
          Ready to Collaborate?
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          Whether you need a high-performance web app, an AI integration, or just want to talk tech—I&apos;m always open to new ideas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Main CTA: Open Gmail */}
          <Link
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
            target="_blank"
            className="group relative px-8 py-4 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-white transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>Send an Email</span>
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>

          {/* Secondary Action: Copy Email */}
          <button
            onClick={handleCopy}
            className="px-8 py-4 bg-white/5 text-slate-300 font-medium rounded-xl border border-white/10 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            {copied ? (
              <>
                <Check size={20} className="text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={20} />
                <span>Copy Address</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
