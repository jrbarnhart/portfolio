import { twMerge } from "tailwind-merge";

type SectionName =
  | "Hero"
  | "About"
  | "Contact"
  | "Projects"
  | "More Projects"
  | "Skills";

type SectionLinkProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "type"
> & {
  section: SectionName;
};

export default function SectionLink({ ...props }: SectionLinkProps) {
  const { section, className, ...rest } = props;
  const handleClick = () => {
    // Jump to section
    return true;
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={twMerge(
        "text-lg md:text-xl font-bold h-12 md:h-16 w-32 md:w-40 rounded-md text-violet-50 bg-violet-600 hover:bg-violet-800 cursor-pointer transition-all ease-in",
        className
      )}
      {...rest}
    >
      {section}
    </button>
  );
}
