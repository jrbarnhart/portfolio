import Portrait from "./Portrait";

const About = () => {
  return (
    <div
      id="about"
      className="justify-self-center grid gap-y-2 md:grid-cols-2 p-5 bg-neutral-400 dark:bg-neutral-800 rounded-3xl mt-12"
    >
      <p className="self-center text-center md:text-left text-2xl font-semibold">
        I create interactive web applications with modern tools like React,
        Next.js, Express, Mongoose / MongoDB and more.
      </p>
      <Portrait />
    </div>
  );
};

export default About;
