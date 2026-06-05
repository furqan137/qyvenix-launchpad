import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/landing/Background";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { About } from "@/components/landing/About";
import { Features } from "@/components/landing/Features";
import { Values } from "@/components/landing/Values";
import { Process } from "@/components/landing/Process";
import { TechStack } from "@/components/landing/TechStack";
import { Stores } from "@/components/landing/Stores";
import { FAQ } from "@/components/landing/FAQ";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qyvenix — Innovative Apps. Exceptional Experiences." },
      {
        name: "description",
        content:
          "Qyvenix is a modern software studio building premium Android & iOS apps, privacy-focused tools, productivity software, and mobile games.",
      },
      { property: "og:title", content: "Qyvenix — Innovative Apps. Exceptional Experiences." },
      {
        property: "og:description",
        content:
          "Premium mobile apps, privacy tools, productivity software, and games crafted by Qyvenix.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Nav />
      <Hero />
      <TrustBar />
      <About />
      <Features />
      <Values />
      <Process />
      <TechStack />
      <Stores />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
