import { useCallback, useEffect, useRef, useState } from "react";
import Icons from "./Icons";

const FourPicCaptcha = () => {
  const [pictures, setPictures] = useState<string[]>([
    "cat",
    "apple",
    "umbrella",
    "key",
  ]);
  const hasShuffled = useRef<boolean>(false);

  const componentMap: Record<string, React.ReactNode> = {
    cat: <Icons.cat />,
    apple: <Icons.apple />,
    umbrella: <Icons.umbrella />,
    key: <Icons.key />,
  };

  const shufflePictures = useCallback(() => {
    if (hasShuffled.current) return;

    const shuffledPictures = pictures
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setPictures(shuffledPictures);
    hasShuffled.current = true;
  }, [pictures]);

  useEffect(() => {
    shufflePictures();
  }, [shufflePictures]);

  return (
    <div>
      <p>Human verification.</p>
      <p>Select the cat.</p>
      <div>
        {pictures.map((name, index) => {
          return <div key={index}>{componentMap[name]}</div>;
        })}
      </div>
    </div>
  );
};

export default FourPicCaptcha;
