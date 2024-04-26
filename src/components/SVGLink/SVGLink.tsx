import React from "react";

const SVGLink = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <a className="max-h-12 max-w-12" href={link}>
      {children}
    </a>
  );
};

export default SVGLink;
