import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo">Meu Portfólio</Link>
        
        <button 
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projetos</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contato</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;