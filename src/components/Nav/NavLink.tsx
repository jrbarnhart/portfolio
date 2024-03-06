import { useEffect, useState } from "react";

const NavLink = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(id));
  }, [id]);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    anchorTarget?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <a
      href={`#${id}`}
      onClick={(e) => {
        handleClick(e);
      }}
    >
      {children}
    </a>
  );
};

export default NavLink;
