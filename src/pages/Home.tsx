import { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  return (
    <section className="home-container">
      <div className="hero-section">
        <h1>Bem-vindo ao Meu Portfólio</h1>
        <p>Desenvolvedor Full-Stack & Designer UI/UX</p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn btn-primary">Ver Projetos</Link>
          <Link to="/contact" className="btn btn-secondary">Contato</Link>
        </div>
      </div>

      <div className="about-section">
        <h2>Sobre Mim</h2>
        <p>
          Sou um desenvolvedor apaixonado por criar soluções inovadoras e funcionais.
          Com experiência em React, TypeScript e Node.js, busco sempre entregar
          projetos de alta qualidade.
        </p>
      </div>
    </section>
  );
};

export default Home;