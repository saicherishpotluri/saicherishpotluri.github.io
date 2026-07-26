import projects from "../../data/projects";
import ProjectCard from "../../common/ProjectCard";
import SectionHeading from "../../common/SectionHeading";
import Reveal from "../../common/Reveal";

function Projects() {
  return (
    <section id="project">
      <SectionHeading index="03" title="Projects" subtitle="ls ./projects" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;
