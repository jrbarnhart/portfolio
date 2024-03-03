const ProjectCard = ({
  title,
  description,
  skills,
  src,
  alt,
}: {
  title: string;
  description: string;
  skills: string[];
  src: string;
  alt: string;
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={src} alt={alt} />
      {skills.map((skill) => {
        return <p key={skill}>{skill}</p>;
      })}
    </div>
  );
};

export default ProjectCard;
