"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Code, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

const navItems = [
  { name: "Home", path: "/", icon: Code },
  { name: "Projects", path: "/projects", icon: FolderGit2 },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass px-6 py-3 rounded-full flex items-center gap-8 shadow-2xl shadow-purple-900/20">
        <Link href="/" className="text-xl font-bold font-mono tracking-tighter flex items-center gap-2 hover:text-purple-400 transition-colors">
          <Terminal size={20} className="text-purple-500" />
          <span>SAAR_HADIR</span>
        </Link>

        <div className="flex items-center gap-1 bg-white/5 rounded-full p-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={clsx(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                  isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-purple-600/20 border border-purple-500/30 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon size={16} />
                <span className="hidden sm:inline">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
