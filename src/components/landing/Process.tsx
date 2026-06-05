import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Research & Planning", desc: "Deep user research and product strategy informs every decision." },
  { icon: Palette, title: "Design & Experience", desc: "Crafting refined interfaces with motion, hierarchy and intent." },
  { icon: Code, title: "Development & Testing", desc: "Robust engineering with rigorous QA across devices and platforms." },
  { icon: Rocket, title: "Launch & Iteration", desc: "Ship fast, listen close, and continuously improve every release." },
];

export function Process() {
  return (
    <section id="process" className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand-cyan)]">
            How We Work
          </div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            How we create <span className="text-gradient-brand">great products</span>.
          </h2>
        </motion.div>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass relative rounded-3xl p-6"
              >
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow">
                  <s.icon className="h-7 w-7 text-white" />
                  <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full glass-strong text-xs font-bold">
                    {i + 1}
                  </div>
                </div>
                <h3 className="mt-5 text-center text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-center text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
