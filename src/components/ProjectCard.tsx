interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  techStack: string[];
}

function Project({
  title,
  description,
  imageUrl,
  liveUrl,
  techStack,
}: ProjectProps) {
  return (
    <a href={liveUrl} className="project-link">
      <div className="project-card">
        <div className="project-thumb">
          <img
            className="project-image"
            loading="lazy"
            src={imageUrl}
            alt={title}
          />
        </div>
        <div className="project-info">
          <h2>{title}</h2>
          <p>{description}</p>

          <div className="tech-icons">
            {techStack.map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

export default Project;
