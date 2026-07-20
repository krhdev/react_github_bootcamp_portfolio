import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import placeholder from '../assets/screenshots/placeholder.png';
import djwebsiteImg from '../assets/screenshots/djwebsite.png';
import notesImg from '../assets/screenshots/notes.png';
import portfolioImg from '../assets/screenshots/portfolio.png';
import readmeImg from '../assets/screenshots/readme.png';
import spacexImg from '../assets/screenshots/spacex.png';
import techBlogImg from '../assets/screenshots/tech_blog.png';
import todoImg from '../assets/screenshots/todo.png';
import weatherWearImg from '../assets/screenshots/weather_wear_collab.png';

// Add repo names here (exactly as they appear on GitHub) to hide them from the gallery
const excludedRepos = ['brackets', 'krhdev', 'gitstash', 'downloadsort', 'StarWarsFlix', 'todo', 'notes', 'bootcamp26', 'box-office', 'Python_to_do', 'react_github_bootcamp_portfolio'];

// Add repo names here to show contributors on their card
const collabRepos = ['Darkside_Coders_CollabApp'];

function ProjectGallery({ limit }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const screenshots = {
    'djwebsite': djwebsiteImg,
    'notes-app': notesImg,
    'bootcamp-portfolio': portfolioImg,
    'readme_generator': readmeImg,
    'spacex-rebuild': spacexImg,
    'blog': techBlogImg,
    'interactive_todo_list': todoImg,
    'Darkside_Coders_CollabApp': weatherWearImg,
  };

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
          liveUrl={repo.homepage}
          language={repo.language}
          screenshot={screenshots[repo.name] || placeholder}
          isCollab={collabRepos.includes(repo.name)}
        />
      ))}
    </div>
  );
}

export default ProjectGallery;