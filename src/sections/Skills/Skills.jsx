import skills from "../../data/skills";
import SkillPill from "../../common/SkillPill";
import SectionHeading from "../../common/SectionHeading";
import Reveal from "../../common/Reveal";

function Skills() {
  return (
    <section id="skills">
      <SectionHeading index="04" title="Skills" subtitle="cat skills.json" />
      <div className="space-y-8">
        {skills.map((group, index) => (
          <Reveal key={group.category} delay={index * 0.05}>
            <p className="mb-3 font-mono text-xs uppercase tracking-wide text-text-muted">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <SkillPill key={item.label} label={item.label} icon={item.icon} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
