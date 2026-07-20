import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function GithubBio() {
  const [readme, setReadme] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReadme() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/krhdev/krhdev/master/README.md');

        if (!response.ok) {
          throw new Error('Could not load README');
        }

        const text = await response.text();
        const cleaned = text.replace(/<!---[\s\S]*?--->/g, '').replace(/<!--[\s\S]*?-->/g, '');
        setReadme(cleaned);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchReadme();
  }, []);

  if (loading) return <p>Loading bio...</p>;
  if (error) return null; // fail silently, don't break the page if it's missing

  return (
    <div className="github-bio">
      <ReactMarkdown>{readme}</ReactMarkdown>
    </div>
  );
}

export default GithubBio;