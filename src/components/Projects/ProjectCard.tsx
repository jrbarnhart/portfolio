import { ProjectCardProps } from "./types";

const ProjectCard = ({
  title,
  description,
  skills,
  demoUrl,
  codeUrl,
  src,
  alt,
}: ProjectCardProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={src} alt={alt} />
      <a href={demoUrl} target="_blank" rel="noreferrer">
        Demo
      </a>
      <a href={codeUrl} target="_blank" rel="noreferrer">
        Code
      </a>
      {skills.map((skill) => {
        return <p key={skill}>{skill}</p>;
      })}
    </div>
  );
};

export default ProjectCard;
