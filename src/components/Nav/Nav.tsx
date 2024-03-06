import DarkModeButton from "./DarkModeButton";

const Nav = () => {
  return (
    <nav className="sticky z-[999] top-0 grid lg:grid-cols-3 w-full bg-neutral-50 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-50 ">
      <ul className="justify-self-center lg:col-start-2 flex justify-between md:w-[768px] p-5">
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
