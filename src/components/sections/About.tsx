import imgUrl from "../../assets/me.png";

export default function About() {
  return (
    <section
      id="about"
      className="text-slate-950 dark:text-violet-50 px-3 md:px-6 mx-2 py-4 max-w-6xl justify-self-center bg-white/20 dark:bg-white/10 backdrop-blur-lg backdrop-saturate-150 rounded-2xl shadow-lg grid gap-2 md:grid-cols-[2fr_1fr] md:grid-rows-[repeat(3,min-content)]"
    >
      <h2 className="[text-shadow:_2px_2px_5px_var(--tw-shadow-color)] shadow-slate-500/50 dark:shadow-indigo-950 text-3xl md:text-5xl font-semibold">
        About Me
      </h2>
      <p className="[text-shadow:_1px_1px_2px_var(--tw-shadow-color)] shadow-slate-500/50 dark:shadow-indigo-950 mt-4 text-xl md:text-2xl">
        I’m a self-taught developer who enjoys solving real-world problems with
        modern web tech. I have a genuine love for learning and am always
        exploring something new.
      </p>
      <p className="[text-shadow:_1px_1px_2px_var(--tw-shadow-color)] shadow-slate-500/50 dark:shadow-indigo-950 mt-4 text-xl md:text-2xl md:row-start-3">
        Outside of web development my interests include storytelling and world
        creation, game development, and machine learning.
      </p>
      <img
        src={imgUrl}
        className="my-4 ring-4 ring-white/10  rounded-full shadow-md shadow-violet-950 dark:shadow-violet-800 justify-self-center self-center md:row-span-full"
      />
    </section>
  );
}
