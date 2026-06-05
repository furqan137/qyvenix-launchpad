import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What kind of apps does Qyvenix build?",
    a: "We build native and cross-platform mobile applications for Android and iOS — including productivity tools, privacy-focused utilities, and mobile games.",
  },
  {
    q: "Do you take on client or partnership projects?",
    a: "Yes. We're open to collaboration with founders, startups, and established companies who share our standard of quality. Reach out via the contact form to start a conversation.",
  },
  {
    q: "Which platforms do you publish on?",
    a: "Our apps are distributed across Google Play, the Apple App Store, APKPure, F-Droid, and GitHub Releases depending on the product.",
  },
  {
    q: "How do you approach privacy and user data?",
    a: "Privacy is a first-class concern. We follow minimal-data principles, prefer on-device processing where possible, and are transparent about every permission we ask for.",
  },
  {
    q: "Can I suggest a feature or report a bug?",
    a: "Absolutely. Feedback drives our roadmap. Use the contact form or reach out through our social channels and we'll get back to you.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative px-4 py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand-cyan)]">
            FAQ
          </div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Questions, <span className="text-gradient-brand">answered</span>.
          </h2>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass overflow-hidden rounded-2xl"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-base font-semibold">{f.q}</span>
                <Plus
                  className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
