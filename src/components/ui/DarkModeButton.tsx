import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

type DarkModeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isDarkmode: boolean;
  setIsDarkmode: React.Dispatch<SetStateAction<boolean>>;
};

export default function DarkmodeButton({ ...props }: DarkModeButtonProps) {
  const { isDarkmode, setIsDarkmode } = props;
  const {
    children,
    className,
    // Private props destructured to prevent override
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type: _type,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onClick: _onClick,
    ...rest
  } = props;
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
