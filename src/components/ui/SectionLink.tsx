type SectionName =
  | "Hero"
  | "About"
  | "Contact"
  | "Featured Projects"
  | "More Projects"
  | "Skills";

type SectionLinkProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
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
