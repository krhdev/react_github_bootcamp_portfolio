import { Link } from 'react-router-dom';
import GithubBio from '../components/GithubBio';
import SkillsList from '../components/SkillsList';
import ProjectGallery from '../components/ProjectGallery';

function Home() {
  return (
    <div>
      <h1>Welcome to KRHDev's React GitHub Portfolio</h1>

      <GithubBio />

      <section className="skills-section">
        <h2>Skills</h2>
        <SkillsList />
      </section>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <ProjectGallery limit={3} />
      </section>

      <Link to="/projects" className="see-all-link">
        See all projects →
      </Link>
    </div>
  );
}

export default Home;