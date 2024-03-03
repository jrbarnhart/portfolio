const ProjectCard = ({
  title,
  description,
  skills,
  url,
  src,
  alt,
}: {
  title: string;
  description: string;
  skills: string[];
  url: string;
  src: string;
  alt: string;
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={url}>
        <img src={src} alt={alt} />
      </a>
      {skills.map((skill) => {
        return <p key={skill}>{skill}</p>;
      })}
    </div>
  );
};

export default ProjectCard;
