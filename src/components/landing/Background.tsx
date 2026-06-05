import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Background() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.3 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-background" />

      {/* Grid pattern */}
      <div className="grid-pattern absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Floating orbs */}
      <motion.div
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand-purple), transparent 70%)" }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand-blue), transparent 70%)" }}
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full opacity-35 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand-pink), transparent 70%)" }}
        animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-2/3 left-1/2 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand-cyan), transparent 70%)" }}
        animate={{ x: [0, -60, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Mouse follow glow */}
      <div
        className="absolute h-[500px] w-[500px] rounded-full opacity-25 blur-3xl transition-all duration-300 ease-out"
        style={{
          background: "radial-gradient(circle, var(--brand-purple), transparent 60%)",
          left: `${mouse.x * 100}%`,
          top: `${mouse.y * 100}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
