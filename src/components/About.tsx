"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="container mx-auto px-6 py-24 border-t border-[var(--color-border)] overflow-hidden">
      <ScrollReveal>
        <div className="mb-12">
          <h2 className="font-mono text-xl text-[var(--color-text-primary)]">
            $ whoami --verbose
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Prose */}
        <ScrollReveal direction="left">
          <div className="space-y-6 text-[var(--color-text-muted)] text-lg leading-relaxed">
            <p>
              I&apos;m Amritanshu Mishra, a CS student at IIIT Pune on a mission to crack SWE placements and grow into a cloud engineer.
            </p>
            <p>
              I care about understanding systems not just how to use them, but why they work the way they do. I spend my time solving DSA problems, building projects that touch real infrastructure, and learning the fundamentals that power modern software.
            </p>
            <p>
              Long-term goal: contribute to meaningful, scalable systems and grow into someone who can design and lead engineering solutions from first principles.
            </p>
          </div>
        </ScrollReveal>

        {/* Right Terminal JSON */}
        <ScrollReveal direction="right" delay={0.2}>
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg overflow-hidden shadow-xl">
            {/* Terminal Header */}
            <div className="h-8 border-b border-[var(--color-border)] flex items-center px-4 gap-2 bg-[#161616]">
              <div className="w-3 h-3 rounded-full bg-[var(--color-border)]" />
              <div className="w-3 h-3 rounded-full bg-[var(--color-border)]" />
              <div className="w-3 h-3 rounded-full bg-[var(--color-border)]" />
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <div className="text-[var(--color-text-primary)] mb-4">$ cat amrit.json</div>
              <pre className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors">
{`{
  "name":      "Amritanshu Mishra",
  "college":   "IIIT Pune",
  "location":  "Varanasi, India",
  "currently": "CS undergrad",
  "building":  "cloud + backend skills",
  "learning":  [
    "system design",
    "AWS", "distributed sys"
  ],
  "cp_handles": {
    "codechef":   "thebeast_07",
    "leetcode":   "TheBeast_07",
    "codeforces": "TheBeast_07"
  },
  "goal": "SWE → Cloud Eng"
}`}
              </pre>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
