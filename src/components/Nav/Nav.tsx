import { useState, useEffect } from "react";
import NavLink from "./NavLink";
import DarkModeButton from "./DarkModeButton";

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowDimensions;
};

const Nav = () => {
  const [contentElement, setContentElement] = useState<HTMLElement | null>(
    null
  );

  const windowDimensions = useWindowDimensions();

  useEffect(() => {
    setContentElement(document.getElementById("content"));
  }, []);

  return (
    <div className="fixed bottom-5 lg:bottom-auto lg:top-0 w-full flex justify-center z-20">
      <nav className="mx-4 w-full max-w-4xl grid h-16 grid-cols-[1fr_5fr_1fr] items-center text-neutral-950 dark:text-zinc-50 bg-zinc-200 dark:bg-zinc-800 rounded-full lg:rounded-lg shadow-lg border border-green-500">
        <div className="w-full h-full grid justify-items-center items-center">
          <NavLink
            targetId="title"
            offset={150}
            contentElement={contentElement}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 -960 960 960"
              width="28px"
              className="fill-zinc-950 dark:fill-zinc-50"
            >
              <path d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z" />
            </svg>
          </NavLink>
        </div>
        <ul className="md:col-start-2 justify-self-center flex justify-between w-full max-w-xl p-3 gap-1">
          <li>
            <NavLink
              targetId="about"
              offset={windowDimensions.width >= 768 ? 70 : 20}
              contentElement={contentElement}
            >
              <p>About</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              targetId="projects"
              offset={windowDimensions.width >= 768 ? 70 : 20}
              contentElement={contentElement}
            >
              <p>Projects</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              targetId="contact"
              offset={windowDimensions.width >= 768 ? 70 : 20}
              contentElement={contentElement}
            >
              <p>Contact</p>
            </NavLink>
          </li>
        </ul>
        <DarkModeButton />
      </nav>
    </div>
  );
};

export default Nav;
