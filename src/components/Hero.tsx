"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const terminalLines = [
  { text: "$ whoami", type: "command" },
  { text: "> amritanshu mishra", type: "output", delay: 800 },
  { text: "", type: "output", delay: 1000 },
  { text: "$ cat profile.json", type: "command", delay: 1200 },
  {
    text: `{\n  college:  "iiit pune",\n  focus:    "cloud · swe",\n  cp_rating: "1475 (CC)",\n  contests: "36+ rated",\n  status:   "open to work"\n}`,
    type: "output",
    delay: 2000,
  },
  { text: "", type: "output", delay: 2200 },
  { text: "$ ls links/", type: "command", delay: 2400 },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];
    
    let currentDelay = 0;
    terminalLines.forEach((line, index) => {
      // Slightly increased delays for more choreographed feel
      currentDelay = line.delay ? line.delay + 300 : currentDelay + (line.type === 'command' ? 600 : 200);
      const id = setTimeout(() => {
        setVisibleLines(index + 1);
      }, currentDelay);
      timeoutIds.push(id);
    });

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="relative container mx-auto px-6 py-24 min-h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden">
      {/* Animated Dot Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
        {/* Left: Text */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-[var(--color-text-muted)] text-sm"
          >
            // cs student · swe · iiit pune
          </motion.p>
          
          <div className="relative">
            {/* Subtle glow behind name */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -inset-4 bg-[var(--color-accent)]/5 blur-2xl rounded-full -z-10"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--color-text-primary)] relative"
            >
              Amritanshu <br className="hidden md:block" />
              Mishra
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="text-[var(--color-accent)] inline-block w-[0.5em] h-[1em] translate-y-2 bg-[var(--color-accent)] ml-1"
              >
                _
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-[var(--color-text-muted)] text-lg md:text-xl max-w-2xl leading-relaxed mt-2"
          >
            I build systems that scale and code that lasts. Focused on cloud infrastructure, distributed systems, and backend engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <Link
              href="#work"
              className="px-6 py-3 border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all font-mono text-sm flex items-center gap-2 group"
            >
              View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#"
              className="px-6 py-3 border border-[var(--color-border)] hover:border-[var(--color-text-primary)] transition-all font-mono text-sm flex items-center gap-2 group"
            >
              Resume <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center gap-2 mt-4 text-sm text-[var(--color-text-muted)] font-mono"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            Open to SWE internships & placements
          </motion.div>
        </div>

        {/* Right: Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100, delay: 1.2 }}
          className="lg:col-span-5 w-full"
        >
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="h-8 border-b border-[var(--color-border)] flex items-center px-4 gap-2 bg-[#161616]">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm min-h-[320px] max-h-[320px] overflow-y-auto">
              {terminalLines.map((line, index) => (
                <div
                  key={index}
                  className={`mb-2 ${index < visibleLines ? "block" : "hidden"}`}
                >
                  {line.type === "command" ? (
                    <span className="text-[var(--color-text-primary)]">
                      {line.text}
                    </span>
                  ) : line.text === "$ ls links/" ? (
                    <></> // Handled below
                  ) : (
                    <pre className="text-[var(--color-text-muted)] whitespace-pre-wrap">
                      {line.text}
                    </pre>
                  )}
                </div>
              ))}
              {visibleLines >= terminalLines.length && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-4 mt-2 text-[var(--color-text-muted)]"
                >
                  <a href="https://github.com/Amrit-mishra07" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">github</a>
                  <a href="https://www.linkedin.com/in/amritanshu-mishra-a4442b25b/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">linkedin</a>
                  <a href="https://leetcode.com/u/TheBeast_07/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">leetcode</a>
                  <a href="https://www.codechef.com/users/thebeast_07" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">codechef</a>
                  <a href="https://codeforces.com/profile/TheBeast_07" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">codeforces</a>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
