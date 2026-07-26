import { useEffect, useState, useCallback } from "react";
import { Command } from "cmdk";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiSun,
  FiMoon,
  FiHash,
} from "react-icons/fi";
import resume from "../assets/Sai-Cherish-Potluri-Resume.pdf";
import { useTheme } from "./ThemeContext";

const EMAIL = "saicherishpotluri1@outlook.com";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const runAndClose = useCallback((action) => {
    action();
    setOpen(false);
  }, []);

  const jumpTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command palette"
      className="fixed inset-0 z-50"
      shouldFilter
    >
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div className="relative mx-auto mt-24 w-[min(560px,92vw)] overflow-hidden rounded-xl border border-border bg-bg-elevated font-mono shadow-2xl">
        <div className="flex items-center gap-2 border-b border-border px-4">
          <span className="text-accent-green">$</span>
          <Command.Input
            autoFocus
            placeholder="Type a command or search…"
            className="w-full bg-transparent py-3 text-sm text-text outline-none placeholder:text-text-muted"
          />
        </div>
        <Command.List className="max-h-80 overflow-y-auto p-2">
          <Command.Empty className="px-3 py-6 text-center text-sm text-text-muted">
            No results found.
          </Command.Empty>

          <Command.Group
            heading="Navigate"
            className="px-2 pb-2 pt-2 [&_[cmdk-group-heading]]:mb-1 [&_[cmdk-group-heading]]:block [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-text-muted"
          >
            {SECTIONS.map((section) => (
              <Command.Item
                key={section.id}
                onSelect={() => runAndClose(() => jumpTo(section.id))}
                className="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 text-sm text-text data-[selected=true]:bg-bg-overlay"
              >
                <FiHash className="text-text-muted" /> {section.label}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Separator className="my-1 h-px bg-border" />

          <Command.Group
            heading="Actions"
            className="px-2 pb-2 pt-2 [&_[cmdk-group-heading]]:mb-1 [&_[cmdk-group-heading]]:block [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-text-muted"
          >
            <Command.Item
              onSelect={() =>
                runAndClose(() => window.open("https://github.com/saicherishpotluri", "_blank"))
              }
              className="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 text-sm text-text data-[selected=true]:bg-bg-overlay"
            >
              <FiGithub className="text-text-muted" /> Open GitHub
            </Command.Item>
            <Command.Item
              onSelect={() =>
                runAndClose(() => window.open("https://www.linkedin.com/in/spotluri", "_blank"))
              }
              className="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 text-sm text-text data-[selected=true]:bg-bg-overlay"
            >
              <FiLinkedin className="text-text-muted" /> Open LinkedIn
            </Command.Item>
            <Command.Item
              onSelect={() => copyEmail()}
              className="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 text-sm text-text data-[selected=true]:bg-bg-overlay"
            >
              <FiMail className="text-text-muted" /> {copied ? "Copied!" : "Copy email address"}
            </Command.Item>
            <Command.Item
              onSelect={() => {
                const link = document.createElement("a");
                link.href = resume;
                link.download = "Sai-Cherish-Potluri-Resume.pdf";
                link.click();
                setOpen(false);
              }}
              className="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 text-sm text-text data-[selected=true]:bg-bg-overlay"
            >
              <FiDownload className="text-text-muted" /> Download resume
            </Command.Item>
            <Command.Item
              onSelect={() => runAndClose(toggleTheme)}
              className="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 text-sm text-text data-[selected=true]:bg-bg-overlay"
            >
              {theme === "dark" ? (
                <FiSun className="text-text-muted" />
              ) : (
                <FiMoon className="text-text-muted" />
              )}
              Switch to {theme === "dark" ? "light" : "dark"} theme
            </Command.Item>
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  );
}

export default CommandPalette;
