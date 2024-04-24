import { useState, useEffect } from "react";
import NavLink from "./NavLink";
import DarkModeButton from "./DarkModeButton";

const Nav = () => {
  const [contentElement, setContentElement] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    setContentElement(document.getElementById("root"));
  }, []);

  return (
    <nav className="sticky z-[999] top-0 grid h-20 mt-[-20px] md:mt-[-32px] lg:mt-[-48px] grid-cols-[1fr_min-content] md:grid-cols-[1fr_5fr_1fr] items-center text-neutral-50 bg-zinc-800 shadow-lg">
      <ul className="md:col-start-2 justify-self-center flex justify-between w-full max-w-[768px] p-5">
        <li>
          <NavLink targetId="about" offset={85} contentElement={contentElement}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            targetId="projects"
            offset={85}
            contentElement={contentElement}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            targetId="contact"
            offset={10}
            contentElement={contentElement}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <DarkModeButton />
    </nav>
  );
};

export default Nav;
