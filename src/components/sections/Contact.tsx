import { GitHubLogoIcon } from "@radix-ui/react-icons";
import LinkedInIcon from "../ui/LinkedInIcon";

export default function Contact() {
  return (
    <div className="px-2 w-full justify-self-center flex flex-col items-center">
      <section className="text-slate-950 dark:text-violet-50 px-3 md:px-6 mx-2 mb-64 py-4 w-full max-w-6xl justify-self-center bg-white/20 dark:bg-white/10 backdrop-blur-lg backdrop-saturate-150 rounded-2xl shadow-lg grid gap-4">
        <h2 className="[text-shadow:_2px_2px_5px_var(--tw-shadow-color)] shadow-slate-500/50 dark:shadow-indigo-950 text-3xl md:text-5xl font-semibold">
          Let’s Connect
        </h2>
        <p className="[text-shadow:_1px_1px_2px_var(--tw-shadow-color)] shadow-slate-500/50 dark:shadow-indigo-950 text-xl md:text-2xl">
          Feel free to reach out on LinkedIn or check out my projects on GitHub!
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/joshuarbarnhart"
            target="_blank"
            rel="noopener noreferrer"
            className="grow px-3 py-1 font-semibold bg-violet-500 hover:bg-violet-600 text-white rounded-lg transition flex justify-between items-center cursor-pointer"
          >
            LinkedIn
            <LinkedInIcon className="fill-white" />
          </a>
          <a
            href="https://github.com/jrbarnhart"
            target="_blank"
            rel="noopener noreferrer"
            className="grow px-3 py-1 font-semibold bg-violet-500 hover:bg-violet-600 text-white rounded-lg transition flex justify-between items-center cursor-pointer"
          >
            GitHub
            <GitHubLogoIcon className="h-6 w-6" />
          </a>
        </div>
      </section>
    </div>
  );
}
