import { Code2, AtSign, Briefcase, MessageCircle } from "lucide-react";

const groups = [
  { title: "Company", links: ["Home", "About", "Products", "Contact"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

const socials = [
  { icon: Code2, label: "GitHub" },
  { icon: AtSign, label: "X" },
  { icon: Briefcase, label: "LinkedIn" },
  { icon: MessageCircle, label: "Discord" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="relative h-9 w-9 rounded-lg bg-gradient-brand shadow-glow">
                <div className="absolute inset-[2px] rounded-md bg-background/40 backdrop-blur" />
                <div className="absolute inset-0 flex items-center justify-center font-display text-base font-bold text-white">Q</div>
              </div>
              <span className="font-display text-xl font-semibold">Qyvenix</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Innovative Apps. Exceptional Experiences.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="glass flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-white/10"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <div className="text-sm font-semibold">{g.title}</div>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Qyvenix. All rights reserved.</div>
          <div>Designed and engineered with care.</div>
        </div>
      </div>
    </footer>
  );
}
