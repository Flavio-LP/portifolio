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
      title: "Portfólio",
      description: "Meu site pessoal desenvolvido com React e TypeScript",
      image: "/portfolio.jpg",
      link: "#",
      technologies: ["React", "TypeScript", "Vite"]
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