import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import FourPicCaptcha from "./FourPicCaptcha/FourPicCaptcha";

interface EmailJSResponse {
  status: string;
  text: string;
}

const Contact = () => {
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = () => {
    if (!form.current) {
      console.log("React useRef form not found.");
      return;
    }

    emailjs
      .sendForm("service_5yfhcpc", "contact_form", form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error: EmailJSResponse) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    setShowCaptcha(true);
  };

  return (
    <div
      id="contact"
      className="grid justify-items-center gap-y-4 md:gap-y-8 px-5 mb-36"
    >
      <h2 className="col-span-full justify-self-center w-full border-b-2 border-t-2 border-green-500 text-center text-3xl md:text-4xl font-bold">
        Contact Me (NYI)
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid gap-y-2 w-full max-w-[512px]"
        ref={form}
      >
        <label htmlFor="user_name" className="px-1 md:px-2 text-xl md:text-2xl">
          Name:
        </label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          required
          className="h-10 md:h-12 px-1 md:px-2 bg-zinc-200 border-2 border-green-500 rounded-md text-lg md:text-xl text-neutral-950"
        />
        <label
          htmlFor="user_company"
          className="px-1 md:px-2 text-xl md:text-2xl"
        >
          Company/Org: <span className="text-sm md:text-base">(Optional)</span>
        </label>
        <input
          type="text"
          name="user_company"
          id="user_company"
          className="h-10 md:h-12 px-1 md:px-2 bg-zinc-200 border-2 border-green-500 rounded-md text-lg md:text-xl text-neutral-950"
        />
        <label
          htmlFor="user_email"
          className="px-1 md:px-2 text-xl md:text-2xl"
        >
          Email
        </label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          required
          className="h-10 md:h-12 px-1 md:px-2 bg-zinc-200 border-2 border-green-500 rounded-md text-lg md:text-xl text-neutral-950"
        />
        <label
          htmlFor="user_message"
          className="px-1 md:px-2 text-xl md:text-2xl"
        >
          Message
        </label>
        <textarea
          name="user_message"
          id="user_message"
          required
          className="h-20 px-1 md:px-2 bg-zinc-200 border-2 border-green-500 rounded-md text-lg md:text-xl text-neutral-950"
        />
        <input
          type="submit"
          value="Submit Message"
          className="justify-self-center h-14 w-48 mt-5 bg-green-400 dark:bg-green-800 hover:bg-green-600 active:bg-green-600 border-2 border-zinc-950 dark:border-zinc-300 rounded-md text-xl font-bold"
        />
      </form>
      {showCaptcha && (
        <FourPicCaptcha setShowCaptcha={setShowCaptcha} onVerify={sendEmail} />
      )}
    </div>
  );
};

export default Contact;
