import portraitImage from "../assets/cartoonMe.jpg";

const About = () => {
  return (
    <div className="grid grid-cols-2">
      <p>This is some information about me.</p>
      <img
        src={portraitImage}
        alt="A cartoon portrait of Joshua Barnhart"
        className="h-96"
      />
    </div>
  );
};

export default About;
