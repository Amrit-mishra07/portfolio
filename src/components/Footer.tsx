"use client";

import { Mail, Code, Terminal, BrainCircuit } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)] relative">
      {/* Animated separator line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent origin-center"
      />

      <ScrollReveal>
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left */}
            <div className="text-[var(--color-text-muted)] text-sm font-mono text-center md:text-left hover:text-[var(--color-text-primary)] transition-colors">
              amritanshu mishra · varanasi, india · {currentYear}
            </div>

            {/* Right */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-[var(--color-text-muted)]">
              <a
                href="https://github.com/Amrit-mishra07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[var(--color-accent)] hover:underline underline-offset-4 transition-all"
              >
                <IconBrandGithub className="w-4 h-4" /> <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/amritanshu-mishra-a4442b25b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[var(--color-accent)] hover:underline underline-offset-4 transition-all"
              >
                <IconBrandLinkedin className="w-4 h-4" /> <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://leetcode.com/u/TheBeast_07/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[var(--color-accent)] hover:underline underline-offset-4 transition-all"
              >
                <Code className="w-4 h-4" /> <span className="hidden sm:inline">LeetCode</span>
              </a>
              <a
                href="https://www.codechef.com/users/thebeast_07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[var(--color-accent)] hover:underline underline-offset-4 transition-all"
              >
                <Terminal className="w-4 h-4" /> <span className="hidden sm:inline">CodeChef</span>
              </a>
              <a
                href="https://codeforces.com/profile/TheBeast_07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[var(--color-accent)] hover:underline underline-offset-4 transition-all"
              >
                <BrainCircuit className="w-4 h-4" /> <span className="hidden sm:inline">Codeforces</span>
              </a>
              <a
                href="mailto:amritanshu8415@gmail.com"
                className="flex items-center gap-2 hover:text-[var(--color-accent)] hover:underline underline-offset-4 transition-all"
              >
                <Mail className="w-4 h-4" /> <span className="hidden sm:inline">Email</span>
              </a>
            </div>
          </div>

          <div className="mt-12 text-center text-[var(--color-border)] text-xs font-mono hover:text-[var(--color-accent)] transition-colors cursor-default">
            // designed & built with intention
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
