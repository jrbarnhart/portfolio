import React from "react";

const SVGLink = ({
  children,
  link,
  skillName,
  bgLight,
}: {
  children: React.ReactNode;
  link: string;
  skillName: string;
  bgLight?: boolean | undefined;
}) => {
  return (
    <a
      className="grid grid-rows-[80px_min-content] md:grid-rows-[96px_min-content] grid-cols-[80px] md:grid-cols-[96px] items-center justify-items-center border-2 border-green-500 rounded-lg"
      href={link}
    >
      <div
        className={`grid items-center justify-items-center p-1 w-full h-full rounded-t-md ${
          bgLight ? "bg-zinc-100" : "bg-zinc-950"
        }`}
      >
        {children}
      </div>
      <p className="self-end h-full w-full bg-zinc-950 rounded-b-lg text-center align-bottom">
        {skillName}
      </p>
    </a>
  );
};

export default SVGLink;
