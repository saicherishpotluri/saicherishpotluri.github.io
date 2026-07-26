import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX, FiCommand } from "react-icons/fi";
import { useTheme } from "./ThemeContext";

const LINKS = [
  { id: "hero", label: "home" },
  { id: "experience", label: "experience" },
  { id: "project", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "contact", label: "contact" },
];

function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    setIsMac(/Mac|iPod|iPhone|iPad/.test(navigator.platform ?? navigator.userAgent));
  }, []);

  const jumpTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const openPalette = () => {
    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: isMac, ctrlKey: !isMac })
    );
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
        <button
          type="button"
          onClick={() => jumpTo("hero")}
          className="font-mono text-sm font-semibold text-text hover:text-accent-cyan"
        >
          ~/sai-potluri
        </button>

        <div className="hidden items-center gap-6 font-mono text-sm md:flex">
          {LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => jumpTo(link.id)}
              className="text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openPalette}
            aria-label="Open command palette"
            className="hidden items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 font-mono text-xs text-text-muted transition-colors hover:text-text sm:flex"
          >
            <FiCommand /> K
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="rounded-md border border-border p-2 text-text-muted transition-colors hover:text-text"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="rounded-md border border-border p-2 text-text-muted transition-colors hover:text-text md:hidden"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-bg px-5 py-3 font-mono text-sm md:hidden">
          {LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => jumpTo(link.id)}
              className="block w-full py-2 text-left text-text-muted hover:text-text"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export default Nav;
