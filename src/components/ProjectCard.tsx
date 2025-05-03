import { FC } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies?: string[]; // Prop opcional
}

const ProjectCard: FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  link,
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
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="project-link"
      >
        Ver Projeto
      </a>
    </div>
  );
};

export default ProjectCard;