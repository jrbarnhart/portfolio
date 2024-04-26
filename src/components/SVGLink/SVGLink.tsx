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
      className="grid grid-rows-[90px_min-content] grid-cols-[80px] items-center justify-items-center border-2 border-green-500 rounded-lg"
      href={link}
    >
      <div
        className={`grid items-center justify-items-center p-1 w-full h-full rounded-t-lg ${
          bgLight ? "bg-zinc-50" : "bg-zinc-950"
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
