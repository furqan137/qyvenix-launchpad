import { motion } from "framer-motion";
import { MessageCircle, Lock, Sparkles, Download } from "lucide-react";

const products = [
  {
    name: "Whisp",
    icon: MessageCircle,
    tagline: "AI-powered communication and productivity platform.",
    features: ["Smart replies", "AI summaries", "Cross-device sync"],
    accent: "from-purple-500 to-blue-500",
    screen: ["Inbox", "AI Assist", "Workflow"],
  },
  {
    name: "Hidra",
    icon: Lock,
    tagline: "Advanced privacy and secure storage solution.",
    features: ["End-to-end encryption", "Biometric lock", "Zero-knowledge cloud"],
    accent: "from-cyan-500 to-blue-500",
    screen: ["Vault", "Secure Notes", "Auth"],
  },
  {
    name: "StreakZen",
    icon: Sparkles,
    tagline: "Habit tracker and personal growth platform powered by AI.",
    features: ["Adaptive streaks", "AI coach", "Beautiful insights"],
    accent: "from-pink-500 to-purple-500",
    screen: ["Today", "Streaks", "Coach"],
  },
];

export function Portfolio() {
  return (
    <section id="products" className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand-cyan)]">
            Featured Products
          </div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Products that <span className="text-gradient-brand">define categories</span>.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-strong group relative overflow-hidden rounded-3xl p-7 shadow-card"
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} shadow-glow`}>
                  <p.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                  <p className="text-xs text-muted-foreground">By Qyvenix</p>
                </div>
              </div>

              <p className="mt-5 text-sm text-muted-foreground">{p.tagline}</p>

              {/* Mock screenshot */}
              <div className="glass relative mt-6 h-56 overflow-hidden rounded-2xl p-4">
                <div
                  className={`absolute inset-x-0 -top-20 h-40 rounded-full bg-gradient-to-br ${p.accent} opacity-30 blur-3xl`}
                />
                <div className="relative space-y-2">
                  {p.screen.map((s, j) => (
                    <motion.div
                      key={s}
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: j * 0.3 }}
                      className="glass flex items-center justify-between rounded-xl px-3 py-2.5"
                    >
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full bg-gradient-to-br ${p.accent}`} />
                        <span className="text-xs font-medium">{s}</span>
                      </div>
                      <div className="h-1.5 w-12 rounded-full bg-white/10">
                        <div className={`h-full rounded-full bg-gradient-to-r ${p.accent}`} style={{ width: `${60 + j * 12}%` }} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <ul className="mt-5 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br ${p.accent}`} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Store buttons */}
              <div className="mt-6 flex gap-2">
                <button className="glass flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold transition-colors hover:bg-white/10">
                  <Download className="h-3.5 w-3.5" /> Play Store
                </button>
                <button className="glass flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold transition-colors hover:bg-white/10">
                  <Download className="h-3.5 w-3.5" /> App Store
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
