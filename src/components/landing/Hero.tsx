import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Smartphone, Brain, Shield, Gamepad2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const } }),
};

const floatingCards = [
  { icon: Smartphone, label: "Whisp", sub: "AI Productivity", className: "top-[8%] -left-4 md:left-[-60px]", delay: 0 },
  { icon: Shield, label: "Hidra", sub: "Privacy Vault", className: "top-[18%] -right-4 md:right-[-50px]", delay: 1 },
  { icon: Brain, label: "StreakZen", sub: "Habit AI", className: "bottom-[18%] -left-4 md:left-[-40px]", delay: 2 },
  { icon: Gamepad2, label: "Mobile Games", sub: "Engaging Play", className: "bottom-[8%] -right-4 md:right-[-60px]", delay: 1.5 },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-4 pt-32 pb-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left content */}
        <div className="relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--brand-cyan)]" />
            Innovative Apps. Exceptional Experiences.
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Building The Future of{" "}
            <span className="text-gradient-brand">Mobile Apps</span> & Games
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Qyvenix creates powerful Android and iOS applications, AI-driven experiences,
            privacy-focused tools, and engaging mobile games used by people worldwide.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              Explore Our Apps
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass-strong inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              Contact Us
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-12 flex items-center gap-6 text-xs text-muted-foreground"
          >
            <div className="flex -space-x-2">
              {["#a855f7", "#3b82f6", "#06b6d4", "#ec4899"].map((c, i) => (
                <div
                  key={i}
                  className="h-7 w-7 rounded-full border-2 border-background"
                  style={{ background: c }}
                />
              ))}
            </div>
            <span>Trusted by users in 80+ countries</span>
          </motion.div>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto h-[520px] w-full max-w-[520px] sm:h-[600px]">
          {/* Glow ring */}
          <motion.div
            className="absolute inset-10 rounded-full opacity-70 blur-3xl"
            style={{ background: "conic-gradient(from 0deg, var(--brand-purple), var(--brand-blue), var(--brand-cyan), var(--brand-pink), var(--brand-purple))" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Central logo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2.5rem] sm:h-64 sm:w-64"
          >
            <div className="glass-strong relative flex h-full w-full items-center justify-center rounded-[2.5rem] shadow-glow">
              <div
                className="absolute inset-0 rounded-[2.5rem] opacity-80"
                style={{ background: "linear-gradient(135deg, oklch(0.68 0.24 305 / 0.3), oklch(0.66 0.22 260 / 0.2), transparent)" }}
              />
              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative"
              >
                <div className="font-display text-7xl font-bold text-gradient sm:text-8xl">Q</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating product cards */}
          {floatingCards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -12, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.5 + i * 0.15 },
                y: { duration: 5 + c.delay, repeat: Infinity, ease: "easeInOut", delay: c.delay },
              }}
              className={`glass-strong absolute flex items-center gap-3 rounded-2xl px-4 py-3 shadow-card ${c.className}`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand">
                <c.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold">{c.label}</div>
                <div className="text-xs text-muted-foreground">{c.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
