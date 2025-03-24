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
        "px-4 py-2 bg-indigo-700 text-white rounded-sm w-16 flex justify-center",
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
