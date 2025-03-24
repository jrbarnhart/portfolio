import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

type DarkModeButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "onClick"
> & {
  isDarkmode: boolean;
  setIsDarkmode: React.Dispatch<SetStateAction<boolean>>;
};

export default function DarkmodeButton({ ...props }: DarkModeButtonProps) {
  const { isDarkmode, setIsDarkmode } = props;
  const { children, className, ...rest } = props;
  return (
    <button
      type="button"
      onClick={() => {
        setIsDarkmode((prev) => !prev);
      }}
      className={twMerge(
        "h-14 w-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-sm cursor-pointer flex justify-center items-center transition-all ease-in",
        className
      )}
      {...rest}
    >
      {isDarkmode ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
      {children}
    </button>
  );
}
