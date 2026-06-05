import { motion } from "framer-motion";
import { Heart, Sparkles, Shield, Rocket, Users, Compass } from "lucide-react";

const values = [
  { icon: Heart, title: "Craft Over Speed", desc: "Every detail matters. We don't ship until it feels right." },
  { icon: Shield, title: "Privacy First", desc: "User trust is non-negotiable. Security is built in, not bolted on." },
  { icon: Sparkles, title: "Design as Default", desc: "Beautiful, intuitive interfaces aren't optional — they're standard." },
  { icon: Rocket, title: "Performance Obsessed", desc: "Snappy, responsive, optimized — apps that feel native and fast." },
  { icon: Users, title: "User-Centered", desc: "Real people guide every decision we make in the product." },
  { icon: Compass, title: "Long-Term Thinking", desc: "We build for the next decade, not the next sprint." },
];

export function Values() {
  return (
    <section className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand-cyan)]">
            Our Values
          </div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            What we <span className="text-gradient-brand">stand for</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            The principles that shape every product, every decision, every line of code.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="glass flex items-start gap-4 rounded-3xl p-6"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
                <v.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold">{v.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
