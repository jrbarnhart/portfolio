import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="grid justify-items-center p-4 md:p-6 w-full bg-zinc-800">
      <div className="grid grid-flow-col justify-items-center w-full max-w-[1024px]">
        <Link
          className="w-min hover:text-green-500 md:text-lg lg:text-xl font-bold underline"
          to="credits"
        >
          Credits
        </Link>
        <a
          className="w-min hover:text-green-500 md:text-lg lg:text-xl font-bold underline"
          href="https://github.com/jrbarnhart"
        >
          GitHub
        </a>
        <p className="w-min hover:text-green-500 md:text-lg lg:text-xl font-bold underline">
          LinkedIn(NYI)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
