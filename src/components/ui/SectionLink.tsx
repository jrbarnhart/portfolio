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
        "text-xl font-bold px-6 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 cursor-pointer transition-all ease-in",
        className
      )}
      {...rest}
    >
      {section}
    </button>
  );
}
