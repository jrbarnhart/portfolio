import { twMerge } from "tailwind-merge";

type SectionName =
  | "Hero"
  | "About"
  | "Contact"
  | "Projects"
  | "More Projects"
  | "Skills";

type SectionId =
  | "hero"
  | "about"
  | "contact"
  | "featured-projects"
  | "more-projects"
  | "skills";

type SectionLinkProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "type"
> & {
  section: SectionName;
  sectionId: SectionId;
};

export default function SectionLink({ ...props }: SectionLinkProps) {
  const { section, sectionId, className, ...rest } = props;
  const handleClick = () => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={twMerge(
        "text-lg md:text-2xl font-bold h-12 md:h-16 w-32 md:w-40 rounded-md text-violet-50 bg-violet-600 hover:bg-violet-800 hover:scale-95 cursor-pointer transition-all ease-in",
        className
      )}
      {...rest}
    >
      {section}
    </button>
  );
}
