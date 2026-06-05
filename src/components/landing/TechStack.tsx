import { motion } from "framer-motion";

const tech = [
  "Flutter", "React Native", "Kotlin", "Swift",
  "Next.js", "TypeScript", "Firebase", "AI Integration",
];

export function TechStack() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand-cyan)]">
            Engineering
          </div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Built with <span className="text-gradient-brand">modern technology</span>.
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {tech.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass group relative overflow-hidden rounded-2xl px-4 py-6 text-center"
            >
              <div className="absolute inset-0 bg-gradient-brand opacity-0 transition-opacity group-hover:opacity-10" />
              <div className="relative text-sm font-semibold">{t}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
