import { useState } from "react";

export type ProjectCardProps = {
  title: string;
  date: string;
  description: string;
  skills: string[];
  demoUrl: string;
  codeUrl: string;
  src: string;
  alt: string;
  thumbSrc: string;
};

const ProjectCard = ({
  title,
  date,
  description,
  skills,
  demoUrl,
  codeUrl,
  src,
  thumbSrc,
  alt,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="grid grid-rows-[min-content_min-content] border border-zinc-300 dark:border-zinc-600 shadow-sm dark:shadow-zinc-950 rounded-md z-10">
      <div className="relative rounded-t-md w-320 aspect-video">
        <img
          src={isHovered ? src : thumbSrc}
          alt={alt}
          className="object-cover size-full rounded-t-md"
          onClick={() => {
            setIsHovered((prev) => !prev);
          }}
        />
        {isHovered ? null : (
          <>
            <p className="hidden md:block absolute bottom-0 right-0 text-neutral-50 bg-zinc-800 bg-opacity-80 px-1 m-1 rounded-sm">
              Click to Play
            </p>
            <p className="md:hidden absolute bottom-0 right-0 text-neutral-50 bg-zinc-800 bg-opacity-80 px-1 m-1 rounded-sm">
              Tap to Play
            </p>
          </>
        )}
      </div>
      <div className="p-1 md:p-2 grid">
        <h2 className="font-bold">{title}</h2>
        <p className="text-sm">{date}</p>
        <p className="pb-2">{description}</p>
        <div className="flex gap-2 flex-wrap font-bold text-lg md:text-xl">
          {skills.map((skill, index) => {
            return (
              <p
                className="p-1 px-2 bg-zinc-200 dark:bg-zinc-600 text-black dark:text-white rounded-md text-sm text-nowrap"
                key={index}
              >
                {skill}
              </p>
            );
          })}
          <div className="flex gap-3">
            <a
              className="w-min h-min p-2 px-4 bg-black dark:bg-white hover:bg-green-500 text-white dark:text-black rounded-lg font-bold flex gap-1"
              href={demoUrl}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                className="dark:fill-zinc-800 fill-zinc-100 size-6"
              >
                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z" />
              </svg>
              Website
            </a>
            <a
              className="w-min h-min p-2 bg-black dark:bg-white hover:bg-green-500 text-white dark:text-black rounded-lg font-bold text-nowrap flex gap-1"
              href={codeUrl}
            >
              <svg
                viewBox="0 0 98 96"
                className="fill-zinc-100 dark:fill-zinc-900 size-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                />
              </svg>
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
