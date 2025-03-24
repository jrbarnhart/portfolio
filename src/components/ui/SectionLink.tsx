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
        "text-xl font-bold h-16 w-40 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer transition-all ease-in",
        className
      )}
      {...rest}
    >
      {section}
    </button>
  );
}
