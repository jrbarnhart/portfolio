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
  const { section, ...rest } = props;
  const handleClick = () => {
    // Jump to section
    return true;
  };

  return (
    <button type="button" onClick={handleClick} {...rest}>
      {section}
    </button>
  );
}
