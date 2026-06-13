"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: "~/work", href: "#work", id: "work" },
    { name: "~/skills", href: "#skills", id: "skills" },
    { name: "~/about", href: "#about", id: "about" },
    { name: "~/contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-lg hover:text-[var(--color-accent)] transition-colors z-50 relative">
          amrit@dev:~$
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative py-1 transition-colors ${
                activeSection === link.id
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-accent)]"
                />
              )}
            </Link>
          ))}
          <a
            href="mailto:amritanshu8415@gmail.com"
            className="flex items-center gap-1 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            email <ArrowUpRight className="w-4 h-4" />
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden z-50 relative text-[var(--color-text-primary)] p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-40 bg-[var(--color-background)]/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-mono text-2xl transition-colors ${
                    activeSection === link.id
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="mailto:amritanshu8415@gmail.com"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 font-mono text-2xl text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors mt-4"
              >
                email <ArrowUpRight className="w-6 h-6" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
