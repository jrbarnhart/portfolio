const SkillTag = ({
  link,
  skillName,
}: {
  link: string;
  skillName: string;
  bgLight?: boolean | undefined;
}) => {
  return (
    <div className="w-min h-min p-2 px-4 bg-black dark:bg-white hover:bg-green-500 text-white dark:text-black rounded-lg font-bold text-nowrap">
      <a href={link}>{skillName}</a>
    </div>
  );
};

export default SkillTag;
