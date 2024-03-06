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
    anchorTarget?.scrollIntoView({ behavior: "smooth", block: "center" });
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
