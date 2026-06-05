import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Career CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-strong relative mb-12 overflow-hidden rounded-3xl p-10 text-center shadow-card sm:p-14"
        >
          <div
            className="absolute inset-0 opacity-60"
            style={{ background: "radial-gradient(ellipse at center, oklch(0.68 0.24 305 / 0.3), transparent 70%)" }}
          />
          <div className="relative">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand-cyan)]">
              Join The Future
            </div>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Let's build something <span className="text-gradient-brand">extraordinary</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Interested in collaborating or working with Qyvenix? We're always open to ambitious
              partners, talented engineers, and curious creatives.
            </p>
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 lg:grid-cols-5"
        >
          <div className="lg:col-span-2">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand-cyan)]">
              Get In Touch
            </div>
            <h3 className="mt-3 text-3xl font-bold tracking-tight">Tell us about your project.</h3>
            <p className="mt-4 text-muted-foreground">
              Whether it's a partnership, press inquiry, or a wild idea — drop us a message and
              we'll get back to you.
            </p>
            <div className="glass mt-8 flex items-center gap-3 rounded-2xl p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm font-semibold">hello@qyvenix.com</div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              setTimeout(() => setSubmitted(false), 3000);
            }}
            className="glass-strong space-y-4 rounded-3xl p-7 shadow-card lg:col-span-3"
          >
            <div>
              <label className="text-xs font-medium text-muted-foreground">Name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-[var(--brand-purple)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-purple)]/30"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Email</label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-[var(--brand-purple)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-purple)]/30"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell us what you're building..."
                className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-[var(--brand-purple)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-purple)]/30"
              />
            </div>
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
            >
              {submitted ? "Message Sent ✓" : (
                <>
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
