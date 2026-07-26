function SkillPill({ label, icon: Icon }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-border bg-bg-elevated px-3 py-1.5 font-mono text-sm text-text">
      {Icon && <Icon className="text-accent-cyan" aria-hidden="true" />}
      {label}
    </span>
  );
}

export default SkillPill;
