import { ExternalLink } from "lucide-react";

async function getLeetCodeStats() {
  try {
    const solvedRes = await fetch("https://alfa-leetcode-api.onrender.com/TheBeast_07/solved", { next: { revalidate: 3600 } });
    const contestRes = await fetch("https://alfa-leetcode-api.onrender.com/TheBeast_07/contest", { next: { revalidate: 3600 } });
    
    const solvedData = await solvedRes.json();
    const contestData = await contestRes.json();

    return {
      solved: solvedData.solvedProblem || 123,
      rating: contestData.contestRating ? Math.round(contestData.contestRating) : 1518,
    };
  } catch (error) {
    return { solved: 123, rating: 1518 };
  }
}

export default async function CPStats() {
  const lcStats = await getLeetCodeStats();

  return (
    <section id="cp" className="container mx-auto px-6 py-24 border-t border-[var(--color-border)]">
      <div className="mb-12">
        <h2 className="font-mono text-xl text-[var(--color-text-primary)]">
          // competitive-programming
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* CodeChef Card */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 hover:border-[var(--color-accent)] transition-colors flex flex-col justify-between group">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="font-mono text-sm text-[var(--color-text-muted)]">codechef</span>
              <ExternalLink className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
            </div>
            <h3 className="font-mono text-xl text-[var(--color-text-primary)] mb-1">thebeast_07</h3>
            <div className="text-3xl font-bold text-[var(--color-accent)] mb-4">
              1475 <span className="text-sm font-normal text-[var(--color-text-muted)]">2★</span>
            </div>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
              <li className="flex justify-between">
                <span>Problems Solved</span>
                <span className="text-[var(--color-text-primary)]">123</span>
              </li>
              <li className="flex justify-between">
                <span>Contests</span>
                <span className="text-[var(--color-text-primary)]">36</span>
              </li>
            </ul>
          </div>
          <a
            href="https://www.codechef.com/users/thebeast_07"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
          >
            View Profile ↗
          </a>
        </div>

        {/* LeetCode Card */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 hover:border-[var(--color-accent)] transition-colors flex flex-col justify-between group">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="font-mono text-sm text-[var(--color-text-muted)]">leetcode</span>
              <ExternalLink className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
            </div>
            <h3 className="font-mono text-xl text-[var(--color-text-primary)] mb-1">TheBeast_07</h3>
            <div className="text-3xl font-bold text-[var(--color-accent)] mb-4">
              {lcStats.rating} <span className="text-sm font-normal text-[var(--color-text-muted)]">Rating</span>
            </div>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
              <li className="flex justify-between">
                <span>Problems Solved</span>
                <span className="text-[var(--color-text-primary)]">{lcStats.solved}</span>
              </li>
              <li className="flex justify-between">
                <span>Status</span>
                <span className="text-[var(--color-text-primary)]">Active</span>
              </li>
            </ul>
          </div>
          <a
            href="https://leetcode.com/u/TheBeast_07/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
          >
            View Profile ↗
          </a>
        </div>
      </div>
    </section>
  );
}
