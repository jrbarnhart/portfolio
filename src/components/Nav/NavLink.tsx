import { useEffect, useState } from "react";

const NavLink = ({
  children,
  targetId,
  offset,
}: {
  children: React.ReactNode;
  targetId: string;
  offset: number;
}) => {
  const [contentElement, setContentElement] = useState<HTMLElement | null>(
    null
  );
  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContentElement(document.getElementById("content"));
    setAnchorTarget(document.getElementById(targetId));
  }, [targetId]);

  const scrollIntoViewWithOffset = (offset: number) => {
    if (anchorTarget && contentElement) {
      const targetTop = anchorTarget.getBoundingClientRect().top;
      const mainTop = contentElement.getBoundingClientRect().top;
      const scrollPosition = contentElement.scrollTop;

      contentElement.scrollTo({
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
        href={targetId}
        onClick={(e) => {
          handleClick(e);
        }}
        className="text-xl lg:text-2xl"
      >
        {children}
      </a>
      <div className="group-hover:opacity-100 absolute top-0 -z-10 h-full w-full scale-150 border-b-2 border-green-500 opacity-0" />
    </div>
  );
};

export default NavLink;
