import { Project } from "../types";
// @ts-ignore
import matchaImg from "../assets/Matcha.png";
// @ts-ignore
import thorImg from "../assets/Thor.png";
// import matchaLink from "../proj/build/index.html";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Matcha.com",
    description:
      "A modern dating app with matchmaking, chat, and location-based features. This product is no longer actively maintained, but you can check out the code on GitHub.",
    category: "Web",
    tags: ["React", "Node.js", "MySQL"],
    image: matchaImg,
    // link: matchaLink,
    github: "https://github.com/sibo-dev/matcha",
  },
  {
    id: "2",
    title: "Gap Brewer",
    description:
      "Gap Draught is a company that has its roots in the IoT space and was established in 2015. This app is for Brewery sales reps to retrieve live sales and pour data for all their registered customers",
    category: "Mobile",
    tags: ["React Native", "Android", "iOS"],
    image:
      "https://play-lh.googleusercontent.com/tytYryo_a2mnKSq2Vp6jcnGyFJzXU-LksNBpw73Hq66x6_ugF6FkqqNsCPuyRuPQMSk=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.gapdraught.repapp",
  },
  {
    id: "3",
    title: "Gap Bar",
    description:
      "Gap Bar is a mobile app for bar owners and managers to monitor their sales and pour data in real-time. It allows them to track inventory, manage staff and view detailed reports and analytics to optimize their operations and increase profitability.",
    category: "Mobile",
    tags: ["React Native", "Android", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.gapdraught.barapp",
    image:
      "https://play-lh.googleusercontent.com/MovB_hAFZ1CSk49r_-4Z1xI3D1GGHCikYotnbeO2cFDdSjsXIkG1jKjhHxi1Mj77NrI=w240-h480-rw",
  },
  {
    id: "4",
    title: "Gap Portal UK (Thor)",
    description:
      "A greenfields project that required building a custom made portal to replace a legacy PHP system. This React project uses many modern practices such as using the Context API over Redux. State management and other modern React practices were implemented to ensure a smooth user experience and efficient data handling.",
    category: "Web",
    tags: ["React", "API", "Unit Testing"],
    image: thorImg,
    link: "https://thor.gap-draught.com/",
  },
];
