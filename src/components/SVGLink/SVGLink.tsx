import React from "react";

const SVGLink = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  return <a href={link}>{children}</a>;
};

export default SVGLink;
