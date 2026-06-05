import { motion } from "framer-motion";
import { Smartphone, Apple, Package, Github, Box } from "lucide-react";

const stores = [
  { icon: Smartphone, name: "Google Play", desc: "Android apps & games" },
  { icon: Apple, name: "Apple App Store", desc: "iOS experiences" },
  { icon: Package, name: "APKPure", desc: "Direct APK distribution" },
  { icon: Box, name: "F-Droid", desc: "Open source releases" },
  { icon: Github, name: "GitHub Releases", desc: "Source & builds" },
];

export function Stores() {
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
            Distribution
          </div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Available <span className="text-gradient-brand">everywhere</span>.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stores.map((s, i) => (
            <motion.a
              key={s.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass group flex flex-col items-center rounded-3xl p-6 text-center transition-all hover:border-white/20"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow transition-transform group-hover:scale-110">
                <s.icon className="h-7 w-7 text-white" />
              </div>
              <div className="mt-4 font-semibold">{s.name}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.desc}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
