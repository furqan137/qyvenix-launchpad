import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString() + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 12, suffix: "+", label: "Apps Published" },
  { value: 250000, suffix: "+", label: "Active Users" },
  { value: 1500000, suffix: "+", label: "Downloads" },
  { value: 80, suffix: "+", label: "Countries Reached" },
];

export function Stats() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-10 shadow-card">
          <div
            className="absolute inset-0 opacity-50"
            style={{ background: "radial-gradient(ellipse at top, oklch(0.68 0.24 305 / 0.25), transparent 60%)" }}
          />
          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl font-bold text-gradient-brand sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
