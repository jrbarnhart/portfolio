import React from "react";

const SVGLink = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <a className="h-12 w-12" href={link}>
      {children}
    </a>
  );
};

export default SVGLink;
