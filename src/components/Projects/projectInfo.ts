import { ProjectCardProps } from "./types";

// Project screenshots
import memoryCardsScreen from "../../assets/memoryCardsSplashLQ.jpg";
import battleshipScreen from "../../assets/battleshipSplashLQ.jpg";
import cvScreen from "../../assets/cvCreatorSplashLQ.jpg";

const projectInfo: ProjectCardProps[] = [
  {
    title: "Memory Cards",
    description:
      "Test your memory by selecting unique cards for as long as possible.",
    skills: ["React", "API Fetching", "Javascript"],
    demoUrl: "https://memory-cards-xi.vercel.app/",
    codeUrl: "https://github.com/xincryptedx/memory-cards",
    src: memoryCardsScreen,
    alt: "Screenshot of Memory Cards application",
  },
  {
    title: "Battle-Mech",
    description:
      "Play a Battleship-styled game against an intelligent AI opponent.",
    skills: ["React", "Jest", "Javascript", "Test Driven Design"],
    demoUrl: "https://xincryptedx.github.io/battleship/",
    codeUrl: "https://github.com/xincryptedx/battleship",
    src: battleshipScreen,
    alt: "Screenshot of Battle-Mech application",
  },
  {
    title: "CV Creator",
    description:
      "Add your information to a form to have a CV automatically generated for saving or printing.",
    skills: ["React", "React State & Props", "Vite"],
    demoUrl: "https://cv-creator-git-main-xincryptedx.vercel.app/",
    codeUrl: "https://github.com/xincryptedx/cv-creator",
    src: cvScreen,
    alt: "Screenshot of Battle-Mech application",
  },
];

export default projectInfo;
