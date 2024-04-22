import { useEffect, useState } from "react";

const NavLink = ({
  children,
  id,
  offset,
}: {
  children: React.ReactNode;
  id: string;
  offset: number;
}) => {
  const [mainElement, setMainElement] = useState<HTMLElement | null>(null);
  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setMainElement(document.getElementById("main"));
    setAnchorTarget(document.getElementById(id));
  }, [id]);

  const scrollIntoViewWithOffset = (offset: number) => {
    if (anchorTarget && mainElement) {
      const targetTop = anchorTarget.getBoundingClientRect().top;
      const mainTop = mainElement.getBoundingClientRect().top;
      const scrollPosition = mainElement.scrollTop;

      mainElement.scrollTo({
        behavior: "smooth",
        top: targetTop - mainTop - offset + scrollPosition,
      });
    }
  };

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    scrollIntoViewWithOffset(offset);
  };

  return (
    <div className="relative group">
      <a
        href={id}
        onClick={(e) => {
          handleClick(e);
        }}
        className="text-xl"
      >
        {children}
      </a>
      <div className="group-hover:opacity-100 absolute top-0 -z-10 h-full w-full scale-150 border-b-2 border-blue-500 opacity-0" />
    </div>
  );
};

export default NavLink;
