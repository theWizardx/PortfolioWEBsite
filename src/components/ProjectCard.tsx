"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass-card rounded-xl overflow-hidden flex flex-col h-full group"
    >
      {/* Image / Placeholder */}
      <div className="h-64 w-full bg-slate-800/50 relative overflow-hidden">
        {project.image_url && !imgError ? (
          <Image 
            src={project.image_url} 
            alt={project.title} 
            fill
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
            unoptimized={project.image_url.includes('placehold.co')}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 group-hover:from-purple-900/20 group-hover:to-slate-900 transition-colors">
            <Layers className="text-slate-600 w-12 h-12" />
          </div>
        )}
        
        {/* Overlay Links */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
          {project.demo_url && (
            <Link 
              href={project.demo_url} 
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-purple-600 text-white transition-all hover:scale-110"
              title="View Demo"
            >
              <ExternalLink size={20} />
            </Link>
          )}
          {project.repo_url && (
            <Link 
              href={project.repo_url} 
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-black text-white transition-all hover:scale-110"
              title="View Code"
            >
              <Github size={20} />
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-mono mb-2 text-slate-100 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech_stack?.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs font-medium rounded bg-purple-500/10 text-purple-300 border border-purple-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
