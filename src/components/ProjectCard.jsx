import { useState, useEffect } from 'react';

function ProjectCard({ name, description, url, liveUrl, screenshot, language, isCollab }) {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    if (!isCollab) return;

    async function fetchContributors() {
      try {
        const response = await fetch(`https://api.github.com/repos/krhdev/${name}/contributors`);
        if (!response.ok) return;
        const data = await response.json();
        setContributors(data);
      } catch {
        // fail silently, contributors just won't show
      }
    }

    fetchContributors();
  }, [isCollab, name]);

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

        {isCollab && contributors.length > 0 && (
          <div className="contributors">
            <span className="contributors-label">Contributors:</span>
            <div className="contributors-list">
              {contributors.map((c) => (
                <a
                  key={c.id}
                  href={c.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contributor"
                  title={c.login}
                >
                  <img src={c.avatar_url} alt={c.login} className="contributor-avatar" />
                  <span>{c.login}</span>
                </a>
              ))}
            </div>
          </div>
        )}

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