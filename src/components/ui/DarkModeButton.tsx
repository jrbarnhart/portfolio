import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

type DarkModeButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "onClick"
> & {
  darkmode: boolean;
  setDarkmode: React.Dispatch<SetStateAction<boolean>>;
};

export default function DarkmodeButton({ ...props }: DarkModeButtonProps) {
  const { children, className, darkmode, setDarkmode, ...rest } = props;
  return (
    <button
      type="button"
      onClick={() => {
        setDarkmode((prev) => !prev);
      }}
      className={twMerge(
        "h-10 md:h-14 w-10 md:w-14 bg-violet-600 hover:bg-violet-800 text-violet-50 rounded-sm cursor-pointer flex justify-center items-center transition-all ease-in",
        className
      )}
      {...rest}
    >
      {darkmode ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
      {children}
    </button>
  );
}
