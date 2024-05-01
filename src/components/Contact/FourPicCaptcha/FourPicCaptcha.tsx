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
  onVerify,
  onReject,
}: {
  setShowCaptcha: React.Dispatch<SetStateAction<boolean>>;
  onVerify: () => void;
  onReject: () => void;
}) => {
  const [pictures, setPictures] = useState<string[]>([
    "cat",
    "apple",
    "umbrella",
    "key",
  ]);
  const hasShuffled = useRef<boolean>(false);

  const [answer, setAnswer] = useState<string>("");
  const [tries, setTries] = useState<number>(0);

  const componentMap: Record<string, React.ReactNode> = {
    cat: <Icons.cat />,
    apple: <Icons.apple />,
    umbrella: <Icons.umbrella />,
    key: <Icons.key />,
  };

  const handleCloseButton = () => {
    setShowCaptcha(false);
  };

  const setRandomAnswer = useCallback(() => {
    const randIndex = Math.floor(Math.random() * 4);
    setAnswer(pictures[randIndex]);
  }, [pictures]);

  const shufflePictures = useCallback(() => {
    if (hasShuffled.current) return;

    const shuffledPictures = pictures
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setPictures(shuffledPictures);
    hasShuffled.current = true;
  }, [pictures]);

  const handleChoiceButton = (key: string) => {
    if (key === answer) {
      onVerify();
    } else if (tries > 3) {
      onReject();
    } else {
      setTries((prev) => prev + 1);
      hasShuffled.current = false;
      shufflePictures();
      setRandomAnswer();
    }
  };

  useEffect(() => {
    shufflePictures();
    setRandomAnswer();
  }, [setRandomAnswer, shufflePictures]);

  return (
    <div className="fixed z-50 top-0 left-0 grid items-center justify-items-center w-screen h-screen bg-zinc-900 bg-opacity-80">
      <div className="relative grid gap-y-3 w-[300px] bg-zinc-100 dark:bg-zinc-800 rounded-lg p-5 border-2 border-zinc-950">
        <div className="border-b-2 border-zinc-950">
          <p className="text-xl">
            {tries === 0 ? (
              "Human verification:"
            ) : (
              <span className="text-red-500">Incorrect choice.</span>
            )}
          </p>
          <p className="text-3xl font-bold">Select the {answer}</p>
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
              <button
                className="p-3 bg-zinc-600 border-2 border-green-500 rounded-md hover:bg-green-900 active:bg-green-900"
                key={name}
                onClick={() => {
                  handleChoiceButton(name);
                }}
              >
                {componentMap[name]}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FourPicCaptcha;
