import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/krhdev.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Link to="/" className="logo-link" onClick={() => setMenuOpen(false)}>
        <img src={logo} alt="KRHDev logo" className="logo" />
      </Link>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
      </nav>
    </header>
  );
}

export default Header;