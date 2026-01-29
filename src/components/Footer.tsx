"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-mono text-slate-100 mb-2">
              SAAR HADIR
            </h3>
            <p className="text-slate-500 text-sm">
              © {currentYear} Built with <Heart size={12} className="inline text-red-500 mx-1" /> and AI.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link 
              href="https://github.com/theWizardx" 
              target="_blank"
              className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"
            >
              <Github size={20} />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/saarhadir?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
              target="_blank"
              className="text-slate-400 hover:text-blue-500 transition-colors transform hover:scale-110"
            >
              <Linkedin size={20} />
            </Link>
            <Link 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=saarx1331@gmail.com" 
              target="_blank"
              className="text-slate-400 hover:text-purple-400 transition-colors transform hover:scale-110"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
