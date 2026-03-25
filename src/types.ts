export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Web" | "Mobile" | "Desktop";
  tags: string[];
  image: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}
