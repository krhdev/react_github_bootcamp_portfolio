function ProjectCard({ name, description, url, liveUrl, screenshot, language }) {
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
        <div className="project-links">
          <a href={url} target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub →
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              Live Preview →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;