function TerminalWindow({ title, tabs, activeTab, onTabChange, children, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-border bg-bg-elevated shadow-2xl shadow-black/20 overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-bg-overlay px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />

        {tabs ? (
          <div className="ml-3 flex items-center gap-1 font-mono text-xs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange?.(tab.id)}
                aria-pressed={activeTab === tab.id}
                className={`rounded-md px-2.5 py-1 transition-colors ${
                  activeTab === tab.id
                    ? "bg-bg text-text"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        ) : title ? (
          <span className="ml-3 font-mono text-xs text-text-muted">{title}</span>
        ) : null}
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

export default TerminalWindow;
