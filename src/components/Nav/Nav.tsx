import { useState, useEffect } from "react";
import NavLink from "./NavLink";
import DarkModeButton from "./DarkModeButton";

const Nav = () => {
  const [contentElement, setContentElement] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    setContentElement(document.getElementById("content"));
  }, []);

  return (
    <div className="fixed bottom-12 w-full">
      <nav className="mx-4 grid h-20 grid-cols-[1fr_5fr_1fr] items-center text-neutral-50 bg-zinc-600 rounded-full shadow-lg">
        <div className="w-full h-full grid justify-items-center items-center">
          <NavLink targetId="lander" offset={1} contentElement={contentElement}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 -960 960 960"
              width="28px"
              fill="#e8eaed"
            >
              <path d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z" />
            </svg>
          </NavLink>
        </div>
        <ul className="md:col-start-2 justify-self-center flex justify-between w-full max-w-[768px] p-5">
          <li>
            <NavLink
              targetId="about"
              offset={85}
              contentElement={contentElement}
            >
              <p>About</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              targetId="projects"
              offset={75}
              contentElement={contentElement}
            >
              <p>Projects</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              targetId="contact"
              offset={95}
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
