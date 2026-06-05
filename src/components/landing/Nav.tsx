import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-card" : "glass"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <div className="relative h-8 w-8 rounded-lg bg-gradient-brand shadow-glow">
            <div className="absolute inset-[2px] rounded-md bg-background/40 backdrop-blur" />
            <div className="absolute inset-0 flex items-center justify-center font-display text-sm font-bold text-white">Q</div>
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">Qyvenix</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-xl bg-gradient-brand px-4 py-2 text-sm font-medium text-white shadow-glow transition-transform hover:scale-105"
        >
          Get In Touch
        </a>
      </nav>
    </motion.header>
  );
}
