const About = () => {
  return (
    <div
      id="about"
      className="justify-self-center grid items-start gap-y-4 md:gap-y-8 px-5 py-3 rounded-3xl mt-20 mb-4 md:mb-8"
    >
      <h2 className="col-span-full justify-self-center w-full border-b-2 border-t-2 border-green-500 text-center text-3xl md:text-4xl font-bold">
        About
      </h2>
      <p className="text-xl md:text-2xl">
        I am a web developer who creates interactive applications with modern
        tools. I see education as a lifelong process and I am always learning
        something new.
      </p>
      <p className="text-xl md:text-2xl">
        Outside of web development my interests include storytelling and world
        creation, math and physics, game development, and machine learning.
      </p>
    </div>
  );
};

export default About;
