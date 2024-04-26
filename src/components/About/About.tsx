import Portrait from "./Portrait";

const About = () => {
  return (
    <div
      id="about"
      className="justify-self-center grid gap-y-3 md:gap-y-6 px-5 py-3 rounded-3xl mt-12 md:grid-cols-2"
    >
      <h2 className="col-span-full justify-self-center w-full border-b-2 border-t-2 border-green-500 text-center text-3xl md:text-4xl font-bold">
        About
      </h2>
      <Portrait />
      <p className="self-center text-center md:text-left text-xl md:text-2xl">
        I am a web developer who creates interactive applications with modern
        tools. I see education as a lifelong process and I am always learning
        something new.
      </p>
      <p className="self-center text-center md:text-left text-xl md:text-2xl">
        Outside of web dev my interests include game development, storytelling
        and world creation, math and physics, and more recently machine
        learning.
      </p>
    </div>
  );
};

export default About;
