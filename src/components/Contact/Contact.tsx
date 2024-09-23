const Contact = () => {
  return (
    <div id="contact" className="grid gap-y-4 md:gap-y-8 mb-36">
      <h2 className="col-span-full w-full text-3xl md:text-4xl font-bold">
        Contact Me
      </h2>
      <p>
        If you would like to contact me please send a message on{" "}
        <a
          className="text-green-500"
          href="https://www.linkedin.com/in/joshuarbarnhart/"
        >
          LinkedIn
        </a>{" "}
        and I will respond ASAP.
      </p>
    </div>
  );
};

export default Contact;
