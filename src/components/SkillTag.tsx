const SkillTag = ({
  link,
  skillName,
}: {
  link: string;
  skillName: string;
  bgLight?: boolean | undefined;
}) => {
  return (
    <div className="w-min h-min p-2 px-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-bold">
      <a href={link}>{skillName}</a>
    </div>
  );
};

export default SkillTag;
