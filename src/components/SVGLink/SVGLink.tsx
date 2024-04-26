import React from "react";

const SVGLink = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <a className="size-20" href={link}>
      {children}
    </a>
  );
};

export default SVGLink;
