import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import placeholder from '../assets/screenshots/placeholder.png';

// Add repo names here (exactly as they appear on GitHub) to hide them from the gallery
const excludedRepos = ['brackets', 'krhdev', 'gitstash', 'downloadsort', 'StarWarsFlix', 'todo', 'notes', 'bootcamp26', 'box-office', 'Python_to_do'];

function ProjectGallery({ limit }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('https://api.github.com/users/krhdev/repos?sort=updated');

        if (!response.ok) {
          throw new Error('Failed to fetch repos');
        }

        const data = await response.json();
        const filtered = data.filter((repo) => !excludedRepos.includes(repo.name));
        setProjects(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Something went wrong: {error}</p>;

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="project-gallery">
      {displayedProjects.map((repo) => (
        <ProjectCard
          key={repo.id}
          name={repo.name}
          description={repo.description}
          url={repo.html_url}
          language={repo.language}
          screenshot={placeholder}
        />
      ))}
    </div>
  );
}

export default ProjectGallery;