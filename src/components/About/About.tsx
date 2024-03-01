import Portrait from "./Portrait";

const About = () => {
  return (
    <div className="grid grid-cols-2 w-[700px]">
      <p>
        I create interactive web applications with modern tools like React,
        Next.js, Express, Mongoose/MongoDB and more.
      </p>
      <Portrait />
    </div>
  );
};

export default About;
