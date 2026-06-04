import { ExternalLink } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";

const projects = [
  {
    num: "[01]",
    tag: "$ full-stack · web-app",
    name: "Student Project Management System",
    desc: "Full-stack web application that automates project management workflows at IIIT Pune — handles submissions, reviews, and faculty coordination end-to-end.",
    tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Amrit-mishra07/Student-Project-Management-System-IIITP",
    live: null,
  },
  {
    num: "[02]",
    tag: "$ system-design · typescript",
    name: "Resource Management System",
    desc: "Institute-level platform for tracking, assigning, and monitoring resources across departments — built for scale.",
    tech: ["TypeScript", "React", "Node.js"],
    github: "https://github.com/Amrit-mishra07/Resource-Management-Project",
    live: null,
  },
  {
    num: "[03]",
    tag: "$ in-progress",
    name: "// coming soon",
    desc: "Currently building — drop by GitHub to see what's cooking.",
    tech: [],
    github: "https://github.com/Amrit-mishra07",
    live: null,
    isComingSoon: true,
  },
  {
    num: "[04]",
    tag: "$ in-progress",
    name: "// coming soon",
    desc: "Currently building — drop by GitHub to see what's cooking.",
    tech: [],
    github: "https://github.com/Amrit-mishra07",
    live: null,
    isComingSoon: true,
  }
];

export default function Projects() {
  return (
    <section id="work" className="container mx-auto px-6 py-24 border-t border-[var(--color-border)]">
      <div className="mb-12">
        <h2 className="font-mono text-xl text-[var(--color-text-primary)]">
          // selected-work
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-hover)] transition-all duration-300 p-8 rounded-lg flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="font-mono text-sm text-[var(--color-accent)]">{project.tag}</span>
              <span className="font-mono text-[var(--color-text-muted)]">{project.num}</span>
            </div>
            
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3 flex items-center gap-2">
              {project.name}
              {project.isComingSoon && (
                <span className="inline-flex space-x-1 animate-pulse">
                  <span className="w-1.5 h-1.5 bg-[var(--color-text-primary)] rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-[var(--color-text-primary)] rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-[var(--color-text-primary)] rounded-full"></span>
                </span>
              )}
            </h3>
            
            <p className="text-[var(--color-text-muted)] mb-8 flex-grow leading-relaxed">
              {project.desc}
            </p>
            
            <div className="mt-auto flex flex-col gap-6">
              {project.tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 border border-[var(--color-border)] rounded-full text-xs font-mono text-[var(--color-text-muted)] group-hover:border-[var(--color-text-muted)] transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="flex gap-4 border-t border-[var(--color-border)] pt-4 mt-2">
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
        ))}
      </div>
    </section>
  );
}
