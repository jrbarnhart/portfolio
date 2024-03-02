const ProjectCard = ({
  src,
  alt,
  description,
}: {
  src: string;
  alt: string;
  description: string;
}) => {
  return (
    <div>
      <p>{description}</p>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ProjectCard;
