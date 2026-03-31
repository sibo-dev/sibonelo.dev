import { Project } from "../types";
// @ts-ignore
import matchaImg from "../assets/Matcha.png";
// @ts-ignore
import thorImg from "../assets/Thor.png";
// import matchaLink from "../proj/build/index.html";
// @ts-ignore
import toDoImg from "../assets/ToDo.png";
// @ts-ignore
import cloudStorageImg from "../assets/SiboCloudStorage2.png";
// @ts-ignore
import adminImg from "../assets/admin.png";
// @ts-ignore
import blogImg from "../assets/blog.png";
// @ts-ignore
import ecommerceImg from "../assets/ecommerce.png";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Laravel Task Manager",
    description:
      "A very powerful task management application built with Laravel. It uses github to track issues you may be facing. UAC allows users to independantly manage their tasks. It allows users to create, update, and delete tasks, as well as mark them as completed.",
    category: "Web",
    tags: ["Laravel", "PHP", "MySQL"],
    image: toDoImg,
    link: "https://todo.sibonelo.dev/",
    github: "https://github.com/sibo-dev/lara_task",
  },
  {
    id: "2",
    title: "Laravel Cloud Storage",
    description:
      "A cloud storage application built with Laravel. It allows users to upload, download, and manage their files in the cloud. It also has a feature that allows users to share their files with others. You can link it to an AWS Bucket for additional storage. This is one of the most complex project I have built and I update it from time to time with new features and improvements. \nUsername: demo@demo.com Password: Demo123!",
    category: "Web",
    tags: ["Laravel", "PHP", "MySQL", "Vue.js"],
    image: cloudStorageImg,
    link: "https://cloud.sibonelo.dev/",
    github: "https://github.com/sibo-dev/laravel-cloud-storage",
  },
  {
    id: "3",
    title: "Blog [Medium Clone] (Laravel)",
    description:
      "A simple yet powerful blog application built with Laravel. It allows users to create, update, and delete blog posts, as well as manage comments and categories.",
    category: "Web",
    tags: ["Laravel", "PHP", "MySQL"],
    image: blogImg,
    link: "https://blog.sibonelo.dev/",
    github: "https://github.com/sibo-dev/laravel-blog",
  },
  {
    id: "4",
    title: "E-commerce Platform (Laravel)",
    description:
      "A fully functional e-commerce application built with Laravel. It allows users to browse products, add them to their cart, and checkout using a variety of payment methods. Username: demo@demo.com Password: Demo123!",
    category: "Web",
    tags: ["Laravel", "PHP", "MySQL"],
    image: ecommerceImg,
    link: "https://ecommerce.sibonelo.dev/",
    github: "https://github.com/sibo-dev/laravel-ecommerce",
  },
  {
    id: "5",
    title: "E-commerce Admin Panel (Laravel)",
    description:
      "A comprehensive admin panel for managing an e-commerce website built with Laravel. It provides a user-friendly interface for handling products, orders, customers, and other essential aspects of running an online store. Username: admin@admin.com Password: admin123",
    category: "Web",
    tags: ["Laravel", "PHP", "MySQL"],
    image: adminImg,
    link: "https://ecommerce-admin.sibonelo.dev/",
    github: "https://github.com/sibo-dev/laravel-ecommerce",
  },
  {
    id: "6",
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
    id: "7",
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
    id: "8",
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
    id: "9",
    title: "Gap Portal UK (Thor)",
    description:
      "A greenfields project that required building a custom made portal to replace a legacy PHP system. This React project uses many modern practices such as using the Context API over Redux. State management and other modern React practices were implemented to ensure a smooth user experience and efficient data handling.",
    category: "Web",
    tags: ["React", "API", "Unit Testing"],
    image: thorImg,
    link: "https://thor.gap-draught.com/",
  },
];
