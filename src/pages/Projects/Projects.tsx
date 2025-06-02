import { FC } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './index.css'


interface Project {
  title: string;
  description: string;
  image: string;
  link_projeto: string;
  link_codigo: string;
  technologies?: string[];
}

const Projects: FC = () => {
  const projects: Project[] = [

    {
      title: "Monitor de Cotação de Moedas",
      description: "Web app de gráficos de monitoramento cotação de moedas nos últimos 30 dias.",
      image: "/portifolio/public/assets/03c333ba-d9e5-4b81-ae4e-368a115f9f28.png",
      link_projeto: "https://realtimecoinmonitor-production.up.railway.app/",
      link_codigo: "https://github.com/Flavio-LP/realtime_coin_monitor",
      technologies: ["Ruby on Rails", "HTML", "CSS", "Chartkick"],
    },

    {
      title: "Carros - CRUD",
      description: "Web app para gerenciar carros, com funcionalidades de CRUD.",
      image: "/portifolio/public/assets/302fa030-72c3-4c3b-89f3-da9224ba5355.png",
      link_projeto: "https://carscrud-production.up.railway.app/",
      link_codigo: "https://github.com/Flavio-LP/cars_crud",
      technologies: ["Ruby on Rails", "HTML", "CSS", "Bootstrap", "PostgreSQL"],
    },

    {
      title: "Pokedex",
      description: "Web app de pokedex utilizando a API do Pokemon.",
      image: "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png",
      link_projeto: "https://pokedex-ror.up.railway.app/",
      link_codigo: "https://github.com/Flavio-LP/pokedex_ROR",
      technologies: ["Ruby on Rails", "Graphql", "HTML", "CSS"],
    },

    {
      title: "Blog de Leitura de livros",
      description: "Web app para gerenciar livros, com funcionalidades de CRUD.",
      image: "/portifolio/public/assets/302fa030-72c3-4c3b-89f3-da9224ba5355.png",
      link_projeto: "/portifolio/projects",
      link_codigo: "https://github.com/Flavio-LP/library_blog",
      technologies: ["Ruby on Rails", "HTML", "CSS", "SQLite"],
    },

    {
      title: "SPA - Api viewer",
      description: "SPA para visualizar as APIs públicas disponíveis.",
      image: "/portifolio/public/assets/301418905_519807193481468_1412506637321039011_n.png",
      link_projeto: "https://vm-dev.vps-kinghost.net/spa_stimulus",
      link_codigo: "https://github.com/Flavio-LP/spa_stimulus",
      technologies: ["ROR", "HTML", "JS", "Bootstrap", "PostgreSQL"],
    },
    
    {
      title: "API - Ruby on rails ",
      description: "Api básica construída com Ruby on Rails para consumo no projeto SPA - Api viewer.",
      image: "/portifolio/public/assets/3234207.png",
      link_projeto: "https://vm-dev.vps-kinghost.net/api/",
      link_codigo: "https://github.com/Flavio-LP/api_stimulus",
      technologies: ["Ruby on Rails", "HTML", "PostgreSQL"],
    },

    {
      title: "Reservas de Restaurante",
      description: "Web app para realizar reservas em um restaurante",
      image: "/portifolio/public/assets/c26016c9-87b4-4cf1-a6fd-8333ee38a00e.png",
      link_projeto: "/portifolio/projects",
      link_codigo: "https://github.com/Flavio-LP/app_reservations",
      technologies: ["Ruby on Rails", "HTML", "CSS", "PostreSQL"],
    },


    // Adicione mais projetos
  ];

  return (
    <section className="projects-container">
      <h2>Meus Projetos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;