import Project from "./ProjectCard";
import projects from "../assets/projects";
import About from "./About";

function Content() {
  return (
    <div>
      <p className="content-header">
        <b>About</b>
      </p>
      <About />
      <p className="content-header">
        <b>Projects</b>
      </p>
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
}

export default Content;
