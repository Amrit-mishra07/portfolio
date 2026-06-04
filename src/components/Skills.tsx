const skills = [
  {
    category: "$ languages",
    items: ["Python", "JavaScript", "TypeScript", "C++", "Java"],
  },
  {
    category: "$ web-backend",
    items: ["React.js", "Node.js", "Express.js", "REST APIs", "MongoDB"],
  },
  {
    category: "$ cloud-infra",
    items: ["AWS (learning)", "Docker (learning)", "Linux", "Git & GitHub", "Bash scripting"],
  },
  {
    category: "$ cs-core",
    items: ["Data Structures", "Algorithms", "Operating Systems", "DBMS", "Computer Networks", "System Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-6 py-24 border-t border-[var(--color-border)]">
      <div className="mb-12">
        <h2 className="font-mono text-xl text-[var(--color-text-primary)]">
          // tech-stack
        </h2>
      </div>

      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h3 className="font-mono text-[var(--color-accent)]">{skillGroup.category}</h3>
              <ul className="flex flex-col gap-2">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="font-mono text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors cursor-default">
                    <span className="text-[var(--color-border)] mr-2">&gt;</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-6 border-t border-[var(--color-border)]">
          <p className="font-mono text-sm text-[var(--color-text-muted)] italic">
            // actively deepening cloud & systems knowledge
          </p>
        </div>
      </div>
    </section>
  );
}
