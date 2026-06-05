import { motion } from "framer-motion";

const platforms = ["Android", "iOS", "Google Play", "App Store", "APKPure", "F-Droid"];

export function TrustBar() {
  return (
    <section className="relative px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
        >
          Available Across Leading App Platforms
        </motion.p>
        <div className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-6">
          {platforms.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass flex items-center justify-center rounded-2xl px-4 py-5 text-sm font-medium text-foreground/80 transition-all hover:bg-white/10 hover:text-foreground"
            >
              {p}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
