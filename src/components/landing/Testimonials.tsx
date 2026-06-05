import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Whisp completely changed how my team communicates. The AI features feel like magic, but the privacy story is what made us commit.",
    name: "Ayaan Patel",
    role: "Product Lead, Northwind",
    grad: "from-purple-500 to-blue-500",
  },
  {
    quote: "Hidra is the most polished privacy app I've ever used. It feels expensive in the best way — every interaction is intentional.",
    name: "Sofia Martínez",
    role: "Security Engineer",
    grad: "from-cyan-500 to-blue-500",
  },
  {
    quote: "StreakZen finally got me to stick with habits. The AI coach is gentle but smart. Qyvenix clearly cares about quality.",
    name: "Marcus Lin",
    role: "Independent Designer",
    grad: "from-pink-500 to-purple-500",
  },
];

export function Testimonials() {
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
            What Users Say
          </div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Loved by <span className="text-gradient-brand">people worldwide</span>.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass relative flex flex-col rounded-3xl p-7"
            >
              <div className="flex gap-1 text-[var(--brand-cyan)]">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 flex-1 text-base text-foreground/85 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.grad} font-display font-bold text-white`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
