import experience from "../../data/experience";
import SectionHeading from "../../common/SectionHeading";
import Badge from "../../common/Badge";
import Reveal from "../../common/Reveal";

function commitHash(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return hash.toString(16).slice(0, 7).padEnd(7, "0");
}

function Experience() {
  return (
    <section id="experience">
      <SectionHeading index="02" title="Experience" subtitle="git log --oneline --graph" />

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[9px]"
        />

        <ol className="space-y-10">
          {experience.map((role, index) => (
            <Reveal key={role.id} as="li" delay={index * 0.05} className="relative pl-8 sm:pl-10">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent-green bg-bg sm:h-4 sm:w-4"
              />

              <p className="font-mono text-xs text-text-muted">
                <span className="text-accent-amber">commit</span> {commitHash(role.id)}
              </p>
              <p className="font-mono text-xs text-text-muted">
                Author: {role.company} &lt;{role.location}&gt;
              </p>
              <p className="mb-3 font-mono text-xs text-text-muted">Date: {role.dates}</p>

              <h3 className="font-sans text-xl font-semibold text-text">{role.title}</h3>
              <p className="mb-3 font-mono text-sm text-accent-cyan">{role.company}</p>

              <ul className="mb-4 space-y-1.5">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="font-sans text-sm text-text-muted">
                    <span className="mr-2 text-accent-green">+</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <Badge key={tag} variant="neutral">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
