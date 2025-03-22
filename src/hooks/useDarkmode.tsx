import { useState } from "react";

export default function useDarkmode() {
  const [isDarkmode, setIsDarkmode] = useState(
    window.matchMedia("(prefers-color-scheme: light)").matches ? false : true
  );

  const DarkmodeButton = ({
    ...props
  }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    // Private props destructured to prevent override
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children, type: _type, onClick: _onClick, ...rest } = props;
    return (
      <button
        type="button"
        onClick={() => {
          setIsDarkmode((prev) => !prev);
        }}
        {...rest}
      >
        {isDarkmode ? "Lightmode" : "Darkmode"}
        {children}
      </button>
    );
  };

  return { isDarkmode, DarkmodeButton };
}
