import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-lg hover:text-[var(--color-accent)] transition-colors">
          amrit@dev:~$
        </Link>
        <nav className="flex items-center gap-6 font-mono text-sm text-[var(--color-text-muted)]">
          <Link href="#work" className="hover:text-[var(--color-text-primary)] transition-colors">
            ~/work
          </Link>
          <Link href="#skills" className="hover:text-[var(--color-text-primary)] transition-colors">
            ~/skills
          </Link>
          <Link href="#about" className="hover:text-[var(--color-text-primary)] transition-colors">
            ~/about
          </Link>
          <a
            href="mailto:amritanshu8415@gmail.com"
            className="flex items-center gap-1 hover:text-[var(--color-text-primary)] transition-colors"
          >
            contact <ArrowUpRight className="w-4 h-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
