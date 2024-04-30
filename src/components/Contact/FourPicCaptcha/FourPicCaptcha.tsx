import {
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Icons from "./Icons";

const FourPicCaptcha = ({
  setShowCaptcha,
}: {
  setShowCaptcha: React.Dispatch<SetStateAction<boolean>>;
}) => {
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

  const handleCloseButton = () => {
    setShowCaptcha(false);
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
    <div className="fixed z-50 top-0 left-0 grid items-center justify-items-center w-screen h-screen bg-zinc-900 bg-opacity-80">
      <div className="relative grid gap-y-3 w-[300px] bg-zinc-100 dark:bg-zinc-800 rounded-lg p-5 border-2 border-zinc-950">
        <div className="border-b-2 border-zinc-950">
          <p className="text-xl">Human verification:</p>
          <p className="text-3xl font-bold">Select the cat</p>
          <button
            onClick={handleCloseButton}
            className="absolute top-0 right-0 py-5 px-6 font-bold text-xl text-red-500"
          >
            X
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {pictures.map((name) => {
            return (
              <div
                className="p-3 bg-zinc-600 border-2 border-green-500 rounded-md"
                key={name}
              >
                {componentMap[name]}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FourPicCaptcha;
