import { motion } from "framer-motion";
import { Smartphone, Apple, Layers, Shield, Zap, Gamepad2 } from "lucide-react";

const features = [
  { icon: Smartphone, title: "Android Applications", desc: "Native and cross-platform mobile apps engineered for performance and scale.", grad: "from-purple-500/20 to-blue-500/10" },
  { icon: Apple, title: "iOS Applications", desc: "Premium, polished experiences designed for the Apple ecosystem.", grad: "from-pink-500/20 to-purple-500/10" },
  { icon: Layers, title: "Cross-Platform Apps", desc: "One codebase, every device. Consistent experiences across all platforms.", grad: "from-cyan-500/20 to-blue-500/10" },
  { icon: Shield, title: "Privacy & Security Apps", desc: "Secure and reliable digital experiences with zero compromises.", grad: "from-blue-500/20 to-purple-500/10" },
  { icon: Zap, title: "Productivity Tools", desc: "Apps designed to streamline daily life and unlock deep focus.", grad: "from-cyan-500/20 to-pink-500/10" },
  { icon: Gamepad2, title: "Mobile Games", desc: "Fun, engaging mobile games built around story, art and play.", grad: "from-pink-500/20 to-cyan-500/10" },
];

export function Features() {
  return (
    <section id="services" className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand-cyan)]">
            What We Build
          </div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Software with a <span className="text-gradient-brand">point of view</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six disciplines. One obsession with quality. We craft products people actually keep using.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group glass relative overflow-hidden rounded-3xl p-7 transition-all hover:border-white/20"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${f.grad} opacity-0 transition-opacity group-hover:opacity-100`} />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow">
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
