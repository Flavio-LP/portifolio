import { FC } from 'react';
import { Link } from 'react-router-dom';
import './index.css'; 

const Home: FC = () => {
  return (
    <section className="home-container">
      <div className="hero-section">
        <h1>Bem-vindo ao Meu Portfólio</h1>
        <p>Desenvolvedor Full-Stack & Especialista em Banco de Dados</p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn btn-primary">Ver Projetos</Link>
          <Link to="/contact" className="btn btn-secondary">Contato</Link>
        </div>
      </div>

      <div className="about-section">
        <h2>Sobre Mim</h2>

        <div className="about-content">
            <p>Desenvolvedor Full Stack, graduado em ciência da computação, especializado em Ruby on Rails e com experiência em PL/SQL(Oracle) e PostgreSQL. </p>

            <p>Trabalhando profissionalmente na área desde 2021, melhorando performance de aplicações, criação de novas funcionalidades, integrações, consultas complexas, otimização e melhora de performance. </p>

            <p>Eu sou apaixonado por criar novos processos, melhorar projetos, simplificar processos, trabalhar em equipe, estudar e aprender a todo o momento. </p>

            <p>Estou adquirindo conhecimento e e aprimorando minhas habilidades relacionadas a produção e melhorias de softwares. </p>
        </div>
      </div>
    </section>
  );
};

export default Home;