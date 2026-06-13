"use client";

import { ExternalLink } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import ScrollReveal from "./ScrollReveal";

export default function CPStatsClient({ lcStats }: { lcStats: { solved: number; rating: number } }) {
  return (
    <section id="cp" className="container mx-auto px-6 py-24 border-t border-[var(--color-border)]">
      <ScrollReveal>
        <div className="mb-12">
          <h2 className="font-mono text-xl text-[var(--color-text-primary)]">
            // competitive-programming
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* CodeChef Card */}
        <ScrollReveal delay={0}>
          <a
            href="https://www.codechef.com/users/thebeast_07"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 hover:border-[var(--color-accent)] hover:-translate-y-1 transition-all flex flex-col justify-between group h-full cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(0,229,160,0.1)]">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-sm text-[var(--color-text-muted)]">codechef</span>
                  <ExternalLink className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
                </div>
                <h3 className="font-mono text-xl text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-accent)] transition-colors">thebeast_07</h3>
                <div className="text-3xl font-bold text-[var(--color-accent)] mb-4">
                  <AnimatedCounter target={1475} suffix=" " />
                  <span className="text-sm font-normal text-[var(--color-text-muted)]">2★</span>
                </div>
                <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
                  <li className="flex justify-between">
                    <span>Problems Solved</span>
                    <span className="text-[var(--color-text-primary)]"><AnimatedCounter target={123} /></span>
                  </li>
                  <li className="flex justify-between">
                    <span>Contests</span>
                    <span className="text-[var(--color-text-primary)]"><AnimatedCounter target={36} /></span>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </ScrollReveal>

        {/* LeetCode Card */}
        <ScrollReveal delay={0.1}>
          <a
            href="https://leetcode.com/u/TheBeast_07/"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 hover:border-[var(--color-accent)] hover:-translate-y-1 transition-all flex flex-col justify-between group h-full cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(0,229,160,0.1)]">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-sm text-[var(--color-text-muted)]">leetcode</span>
                  <ExternalLink className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
                </div>
                <h3 className="font-mono text-xl text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-accent)] transition-colors">TheBeast_07</h3>
                <div className="text-3xl font-bold text-[var(--color-accent)] mb-4">
                  <AnimatedCounter target={lcStats.rating} suffix=" " />
                  <span className="text-sm font-normal text-[var(--color-text-muted)]">Rating</span>
                </div>
                <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
                  <li className="flex justify-between">
                    <span>Problems Solved</span>
                    <span className="text-[var(--color-text-primary)]"><AnimatedCounter target={lcStats.solved} /></span>
                  </li>
                  <li className="flex justify-between">
                    <span>Status</span>
                    <span className="text-[var(--color-text-primary)] animate-pulse text-[var(--color-accent)]">Active</span>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </ScrollReveal>

        {/* Codeforces Card */}
        <ScrollReveal delay={0.2}>
          <a
            href="https://codeforces.com/profile/TheBeast_07"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 hover:border-[var(--color-accent)] hover:-translate-y-1 transition-all flex flex-col justify-between group h-full cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(0,229,160,0.1)]">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-sm text-[var(--color-text-muted)]">codeforces</span>
                  <ExternalLink className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
                </div>
                <h3 className="font-mono text-xl text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-accent)] transition-colors">TheBeast_07</h3>
                <div className="text-3xl font-bold text-[var(--color-accent)] mb-4 flex items-baseline gap-2">
                  <AnimatedCounter target={800} />
                  <span className="text-sm font-normal text-[var(--color-text-muted)]">Newbie</span>
                </div>
                <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
                  <li className="flex justify-between">
                    <span>Max Rating</span>
                    <span className="text-[var(--color-text-primary)]">800</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Status</span>
                    <span className="text-[var(--color-text-primary)]">Active</span>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
