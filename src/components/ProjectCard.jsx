function ProjectCard({ name, description, url, screenshot, language }) {
  return (
    <div className="project-card">
      <img
        src={screenshot}
        alt={`Screenshot of ${name}`}
        className="project-screenshot"
      />
      <div className="project-card-content">
        <h3>{name}</h3>
        <p>{description || 'No description provided.'}</p>
        {language && <span className="project-language">{language}</span>}
        <a href={url} target="_blank" rel="noopener noreferrer" className="project-link">
          View on GitHub →
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;