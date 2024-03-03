import { ProjectCardProps } from "./types";

// Project screenshots
import memoryCardsScreen from "../../assets/memoryCardsSplashLQ.jpg";

const projectInfo: ProjectCardProps[] = [
  {
    title: "Memory Cards",
    description:
      "Test your memory by selecting unique cards for as long as possible.",
    skills: ["React", "API Fetching", "Javascript"],
    url: "https://memory-cards-xi.vercel.app/",
    src: memoryCardsScreen,
    alt: "Screenshot of Memory Cards application",
  },
];

export default projectInfo;
