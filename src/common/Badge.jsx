const VARIANTS = {
  neutral: "border-border bg-bg-overlay text-text-muted",
  cyan: "border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan",
  amber: "border-accent-amber/30 bg-accent-amber/10 text-accent-amber",
  green: "border-accent-green/30 bg-accent-green/10 text-accent-green",
};

function Badge({ children, icon, variant = "neutral", pulse = false, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs ${VARIANTS[variant]} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
        </span>
      )}
      {icon && <span className="text-sm leading-none">{icon}</span>}
      {children}
    </span>
  );
}

export default Badge;
