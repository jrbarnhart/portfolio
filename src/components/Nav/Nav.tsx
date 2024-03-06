import DarkModeButton from "./DarkModeButton";

const Nav = () => {
  return (
    <nav className="sticky z-[999] top-0 grid grid-cols-[1fr_min-content] md:grid-cols-[1fr_min-content_1fr] bg-neutral-50 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-50 ">
      <ul className="md:col-start-2 justify-self-center flex justify-between w-full md:w-[768px] p-5">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <DarkModeButton />
    </nav>
  );
};

export default Nav;
