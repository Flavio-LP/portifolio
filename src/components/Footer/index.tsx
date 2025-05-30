import { FC } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <nav className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projetos</Link>
            <Link to="/contact">Contato</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <div className="social-links">
            
            <a href="https://github.com/Flavio-LP" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/flavio-pirola/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/flavio.pirola/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Meu Portfólio. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;