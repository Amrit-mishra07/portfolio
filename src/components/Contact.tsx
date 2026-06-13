"use client";

import ScrollReveal from "./ScrollReveal";
import { Mail } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Code, Terminal, BrainCircuit } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-6 py-24 border-t border-[var(--color-border)]">
      <ScrollReveal>
        <div className="mb-12">
          <h2 className="font-mono text-xl text-[var(--color-text-primary)]">
            // get-in-touch
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="h-8 border-b border-[var(--color-border)] flex items-center px-4 gap-2 bg-[#161616]">
              <div className="w-3 h-3 rounded-full bg-[var(--color-border)]" />
              <div className="w-3 h-3 rounded-full bg-[var(--color-border)]" />
              <div className="w-3 h-3 rounded-full bg-[var(--color-border)]" />
            </div>
            
            {/* Terminal Body */}
            <div className="p-8 md:p-12 text-center flex flex-col items-center gap-8">
              <div className="font-mono text-sm md:text-base text-[var(--color-text-primary)] text-left w-full max-w-lg">
                <span className="text-[var(--color-accent)]">$</span> echo "Let's build something together"
              </div>
              
              <p className="text-[var(--color-text-muted)] text-lg leading-relaxed max-w-xl">
                I'm open to SWE internships, placements, and interesting projects. Drop me a line.
              </p>
              
              <a
                href="mailto:amritanshu8415@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] text-[var(--color-text-primary)] font-mono transition-all rounded-md group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                amritanshu8415@gmail.com
              </a>

              <div className="pt-8 border-t border-[var(--color-border)] w-full flex flex-wrap justify-center gap-6 text-[var(--color-text-muted)]">
                <a
                  href="https://github.com/Amrit-mishra07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors"
                >
                  <IconBrandGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/amritanshu-mishra-a4442b25b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors"
                >
                  <IconBrandLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://leetcode.com/u/TheBeast_07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors"
                >
                  <Code className="w-5 h-5" />
                </a>
                <a
                  href="https://www.codechef.com/users/thebeast_07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors"
                >
                  <Terminal className="w-5 h-5" />
                </a>
                <a
                  href="https://codeforces.com/profile/TheBeast_07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors"
                >
                  <BrainCircuit className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
