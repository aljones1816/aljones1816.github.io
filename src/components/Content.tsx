import Project from "./ProjectCard";
import projects from "../assets/projects";
import About from "./About";

function Content() {
  return (
    <div className="content">
      <p className="content-header">
        <b>About</b>
      </p>
      <About />
      <p className="content-header">
        <b>Projects</b>
      </p>
      <div className="projects">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Content;
