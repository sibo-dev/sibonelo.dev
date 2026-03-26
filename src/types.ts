export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Web" | "Mobile" | "Desktop";
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export const Heading = ["Projects", "Skills", "About", "Contact"];
export const Heading2 = ["Projects", "Skills", "About", "Contact", "Call Me"];
