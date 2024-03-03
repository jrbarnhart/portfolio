const ProjectCard = ({
  src,
  alt,
  title,
  description,
  skills,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  skills: string[];
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
