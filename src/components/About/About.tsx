import Portrait from "./Portrait";

const About = () => {
  return (
    <div className="justify-self-center grid grid-cols-2 w-[768px] py-10 px-5 bg-neutral-400 dark:bg-neutral-800 rounded-3xl mt-5">
      <p className="self-center text-2xl px-2 font-semibold">
        I create interactive web applications with modern tools like React,
        Next.js, Express, Mongoose / MongoDB and more.
      </p>
      <Portrait />
    </div>
  );
};

export default About;
