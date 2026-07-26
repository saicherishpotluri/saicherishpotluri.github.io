import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiGithub, FiChevronDown } from "react-icons/fi";
import Badge from "./Badge";

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const panelId = `${project.id}-case-study`;

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-bg-elevated transition-transform hover:-translate-y-1">
      <div className="flex items-center gap-2 border-b border-border bg-bg-overlay px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 font-mono text-xs text-text-muted">{project.name}.md</span>
      </div>

      <div className="p-5">
        <h3 className="font-sans text-lg font-semibold text-text">{project.name}</h3>
        <p className="mt-1 font-mono text-sm text-accent-cyan">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map(({ label, icon: Icon }) => (
            <Badge key={label} variant="neutral" icon={Icon ? <Icon /> : null}>
              {label}
            </Badge>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          aria-controls={panelId}
          className="mt-4 flex items-center gap-1.5 font-mono text-sm text-text-muted transition-colors hover:text-text"
        >
          <motion.span
            animate={prefersReducedMotion ? undefined : { rotate: expanded ? 180 : 0 }}
            className="inline-flex"
          >
            <FiChevronDown />
          </motion.span>
          {expanded ? "hide case study" : "view case study"}
        </button>

        {expanded && (
          <div id={panelId} className="mt-4 space-y-3 border-t border-border pt-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-text-muted">Problem</p>
              <p className="mt-1 font-sans text-sm text-text">{project.problem}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-text-muted">Role</p>
              <p className="mt-1 font-sans text-sm text-text">{project.role}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-text-muted">Outcome</p>
              <p className="mt-1 font-sans text-sm text-text">{project.outcome}</p>
            </div>
          </div>
        )}

        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-text-muted transition-colors hover:text-accent-cyan"
        >
          <FiGithub /> View repo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
