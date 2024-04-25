import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="grid justify-items-center p-4 md:p-6 w-full bg-zinc-800">
      <div className="w-full max-w-[1024px]">
        <Link
          className="hover:text-green-500 md:text-lg lg:text-xl font-bold w-min"
          to="credits"
        >
          Credits
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
