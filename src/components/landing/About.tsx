import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative px-4 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand-cyan)]">
            Who We Are
          </div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            A modern studio crafting <span className="text-gradient-brand">software people love</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Qyvenix is a modern software studio dedicated to building high-quality mobile experiences.
            From productivity apps and AI tools to privacy-focused solutions and immersive mobile games,
            our mission is to create products that people love using every day.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { k: "5+", v: "Years" },
              { k: "12+", v: "Products" },
              { k: "80+", v: "Countries" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-4">
                <div className="text-2xl font-bold text-gradient-brand">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[420px]"
        >
          <div className="glass-strong absolute inset-0 rounded-3xl shadow-card overflow-hidden">
            <div
              className="absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl opacity-60"
              style={{ background: "radial-gradient(circle, var(--brand-purple), transparent 70%)" }}
            />
            <div
              className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full blur-3xl opacity-50"
              style={{ background: "radial-gradient(circle, var(--brand-cyan), transparent 70%)" }}
            />
            <div className="relative grid h-full grid-cols-2 gap-4 p-8">
              {["Design", "Build", "Ship", "Iterate"].map((label, i) => (
                <motion.div
                  key={label}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
                  className="glass flex flex-col justify-end rounded-2xl p-5"
                >
                  <div className="h-2 w-12 rounded-full bg-gradient-brand mb-3" />
                  <div className="font-display text-xl font-semibold">{label}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Step {i + 1} of our craft
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
