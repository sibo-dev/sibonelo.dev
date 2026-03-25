import { Project } from "../types";
// @ts-ignore
import matchaImg from "../assets/Matcha.png";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Matcha",
    description:
      "A modern dating app with matchmaking, chat, and location-based features.",
    category: "Web",
    tags: ["React", "Node.js", "MySQL"],
    image: matchaImg,
    // link: "https://matcha.sibonelo.dev/",
    link: "https://github.com/sibo-dev/matcha",
  },
  // {
  //   id: "2",
  //   title: "Nexus OS",
  //   description:
  //     "A cross-platform desktop environment built with Flutter and Rust, focusing on performance and modularity.",
  //   category: "Desktop",
  //   tags: ["Flutter", "Rust", "gRPC"],
  //   image: "https://picsum.photos/seed/nexus/800/600",
  // },
  // {
  //   id: "3",
  //   title: "Vibe Mobile",
  //   description:
  //     "Social networking app with real-time audio streaming and collaborative playlists.",
  //   category: "Mobile",
  //   tags: ["Flutter", "Firebase", "WebRTC"],
  //   image: "https://picsum.photos/seed/vibe/800/600",
  // },
  // {
  //   id: "4",
  //   title: "Lumina Web",
  //   description:
  //     "High-performance e-commerce engine with 3D product visualization and instant checkout.",
  //   category: "Web",
  //   tags: ["React", "Three.js", "Next.js"],
  //   image: "https://picsum.photos/seed/lumina/800/600",
  // },
];
