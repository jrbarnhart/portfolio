import NavLink from "./NavLink";
import DarkModeButton from "./DarkModeButton";

const Nav = () => {
  return (
    <nav className="sticky z-[999] top-0 grid grid-cols-[1fr_min-content] md:grid-cols-[1fr_min-content_1fr] items-center bg-neutral-50 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-50 ">
      <ul className="md:col-start-2 justify-self-center flex justify-between w-full md:w-[768px] p-5">
        <li>
          <NavLink id="about" offset={75}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink id="projects" offset={75}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink id="contact" offset={10}>
            Contact
          </NavLink>
        </li>
      </ul>
      <DarkModeButton />
    </nav>
  );
};

export default Nav;
