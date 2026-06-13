"use client";

import { ExternalLink } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";
import ScrollReveal from "./ScrollReveal";

type Project = {
  num: string;
  tag: string;
  name: string;
  desc: string;
  tech: string[];
  github: string | null;
  live: string | null;
  isComingSoon?: boolean;
};

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="container mx-auto px-6 py-24 border-t border-[var(--color-border)]">
      <ScrollReveal>
        <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="font-mono text-xl text-[var(--color-text-primary)]">
            // selected-work
          </h2>
          <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] font-mono animate-pulse">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
            live sync: github active
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.1}>
            <div
              className="group bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-hover)] transition-all duration-300 p-8 rounded-lg flex flex-col h-full hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,229,160,0.05)] cursor-default"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono text-sm text-[var(--color-accent)]">{project.tag}</span>
                <span className="font-mono text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-colors">{project.num}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3 flex items-center gap-2 group-hover:text-[var(--color-accent)] transition-colors">
                {project.name}
                {project.isComingSoon && (
                  <span className="inline-flex space-x-1 animate-pulse">
                    <span className="w-1.5 h-1.5 bg-[var(--color-text-primary)] rounded-full group-hover:bg-[var(--color-accent)] transition-colors"></span>
                    <span className="w-1.5 h-1.5 bg-[var(--color-text-primary)] rounded-full group-hover:bg-[var(--color-accent)] transition-colors"></span>
                    <span className="w-1.5 h-1.5 bg-[var(--color-text-primary)] rounded-full group-hover:bg-[var(--color-accent)] transition-colors"></span>
                  </span>
                )}
              </h3>
              
              <p className="text-[var(--color-text-muted)] mb-8 flex-grow leading-relaxed group-hover:text-[var(--color-text-primary)] transition-colors">
                {project.desc}
              </p>
              
              <div className="mt-auto flex flex-col gap-6">
                {project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 border border-[var(--color-border)] rounded-full text-xs font-mono text-[var(--color-text-muted)] group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-text-primary)] transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex gap-4 border-t border-[var(--color-border)] pt-4 mt-2 group-hover:border-[var(--color-accent)]/30 transition-colors">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-mono text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      <IconBrandGithub className="w-4 h-4" /> GitHub ↗
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-mono text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
