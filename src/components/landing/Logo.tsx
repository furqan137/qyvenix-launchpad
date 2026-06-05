import logoAsset from "@/assets/qyvenix-logo.png.asset.json";

export function Logo({ className = "h-9 w-9", glow = true }: { className?: string; glow?: boolean }) {
  return (
    <img
      src={logoAsset.url}
      alt="Qyvenix"
      className={`${className} object-contain ${glow ? "drop-shadow-[0_0_18px_oklch(0.68_0.24_305/0.55)]" : ""}`}
    />
  );
}
