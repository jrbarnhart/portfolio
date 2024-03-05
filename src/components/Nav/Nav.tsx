const Nav = () => {
  return (
    <nav className="grid w-full ">
      <ul className="justify-self-center flex justify-between w-full max-w-[768px]">
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
    </nav>
  );
};

export default Nav;
