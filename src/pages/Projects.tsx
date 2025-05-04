import { FC } from 'react';
import ProjectCard from '../components/ProjectCard';


interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies?: string[];
}

const Projects: FC = () => {
  const projects: Project[] = [
    {
      title: "Pokedex",
      description: "Web app de pokedex utilizando a API do Pokemon.",
      image: "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png",
      link: "https://pokedex-ror.up.railway.app/",
      technologies: ["Ruby on Rails", "Graphql", "HTML", "CSS"],
    },

    {
      title: "Reservas de Restaurante",
      description: "Web app para realizar reservas em um restaurante",
      image: "",
      link: "/",
      technologies: ["Ruby on Rails", "HTML", "CSS"],
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