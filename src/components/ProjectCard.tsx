import { FC } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link_projeto: string;
  link_codigo: string;
  technologies?: string[]; // Prop opcional
}

const ProjectCard: FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  link_projeto,
  link_codigo,
  technologies = []
}) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{}</h3>
      <p>{description}</p>
      {technologies.length > 0 && (
        <div className="tech-stack">
          {technologies.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      )}
      <div>
        <a 
          href={link_projeto} 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-link"
        >
          Ver Projeto
        </a>

        <a 
        href={link_codigo} 
        target="_blank" 
        rel="noopener noreferrer"
        className="project-link"
        >
          Ver Código
        </a>

      </div>
    </div>
  );
};

export default ProjectCard;