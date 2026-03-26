import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Smartphone,
  Monitor,
  Layout,
  Code2,
  Layers,
  Cpu,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { DeviceFrame } from "./components/DeviceFrame";
import { PROJECTS } from "./utils/projects";
import { SKILLS } from "./utils/skills";
import { Heading } from "./types";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<
    "All" | "Web" | "Mobile" | "Desktop"
  >("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen grid-pattern">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-line bg-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a
              href="https://sibonelo.dev"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-ink rounded flex items-center justify-center">
                <span className="text-bg font-bold text-lg">S</span>
              </div>
              <span className="font-mono text-sm font-medium tracking-tighter uppercase">
                Sibonelo.Dev
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {Heading.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-mono uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
              >
                {item}
              </a>
            ))}

            <button className="bg-ink text-bg px-4 py-2 rounded text-xs font-mono uppercase tracking-widest hover:invert transition-all">
              <a
                href="mailto:sibonelo.dev@gmail.com"
                className="hidden md:block"
              >
                Hire Me
              </a>
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {Heading.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-serif italic border-b border-line pb-4"
                >
                  {item}
                </a>
              ))}

              <a
                href="tel:+27836963183"
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-serif italic border-b border-line pb-4"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-ink/5 rounded-full text-[10px] font-mono uppercase tracking-widest mb-6">
                Full-Stack Engineer & Designer
              </span>
              <h1 className="text-6xl md:text-8xl font-serif italic leading-[0.9] mb-8">
                Crafting <br />
                <span className="not-italic font-sans font-bold tracking-tighter">
                  Digital
                </span>{" "}
                <br />
                Experiences.
              </h1>
              <p className="text-lg opacity-70 max-w-md mb-10 leading-relaxed">
                Specialising in high-performance applications across Web,
                Mobile, and Desktop. Bridging the gap between complex
                engineering and elegant design.
              </p>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-ink text-bg px-6 py-3 rounded-full font-mono text-sm uppercase tracking-widest hover:scale-105 transition-transform">
                  <a href="#projects" className="flex items-center gap-2">
                    View Work <ChevronRight size={16} />
                  </a>
                </button>
                <div className="flex items-center gap-4 px-4">
                  <a
                    href="https://github.com/sibo-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github
                      className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity"
                      size={20}
                    />
                  </a>
                  <a
                    href="https://linkedin.com/in/sibonelonkosi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin
                      className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity"
                      size={20}
                    />
                  </a>
                  <a href="mailto:sibonelo.dev@gmail.com">
                    <Mail
                      className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity"
                      size={20}
                    />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <DeviceFrame type="desktop" title="sibonelo_nkosi.exe">
                <div className="p-8 h-full bg-slate-900 text-white font-mono text-xs">
                  <div className="flex items-center gap-2 mb-8 opacity-50">
                    <Cpu size={14} />
                    <span>System Status: Optimal</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border border-white/10 rounded-lg bg-white/5">
                      <div className="mb-2 opacity-50">CPU LOAD</div>
                      <div className="text-2xl font-bold">12.4%</div>
                    </div>
                    <div className="p-4 border border-white/10 rounded-lg bg-white/5">
                      <div className="mb-2 opacity-50">MEMORY</div>
                      <div className="text-2xl font-bold">4.2 GB</div>
                    </div>
                  </div>
                  <div className="mt-8 p-4 border border-white/10 rounded-lg bg-white/5">
                    <div className="mb-4 opacity-50">ACTIVE PROCESSES</div>
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex justify-between py-2 border-b border-white/5 last:border-0"
                      >
                        <span>Process_{i}.PHP</span>
                        <span className="text-emerald-400">RUNNING</span>
                      </div>
                    ))}
                  </div>
                </div>
              </DeviceFrame>

              <div className="absolute -bottom-12 -left-12 scale-75">
                <DeviceFrame type="mobile">
                  <div className="h-full bg-gradient-to-br from-indigo-600 to-violet-700 p-6 flex flex-col justify-end text-white">
                    <div className="mb-auto">
                      <div className="w-10 h-10 bg-white/20 rounded-xl backdrop-blur-md mb-4 flex items-center justify-center">
                        <Layers size={20} />
                      </div>
                      <h2 className="text-lg font-bold mb-1">
                        Potentially Your App
                      </h2>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">SIBONELO NKOSI</h3>
                    <p className="text-sm opacity-80 mb-6">
                      Contact me to discuss how I can help bring your ideas to
                      life.
                    </p>
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-white"></div>
                    </div>
                  </div>
                </DeviceFrame>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl font-serif italic mb-4">
                Selected Works
              </h2>
              <p className="opacity-60 font-mono text-xs uppercase tracking-widest">
                Quality across platforms
              </p>
              <p className="text-sm opacity-70 max-w-md mt-4 leading-relaxed">
                NOTE: Not all projects will have a running backend or public
                repository.
              </p>
            </div>

            <div className="flex gap-2 p-1 bg-ink/5 rounded-lg">
              {["All", "Web", "Mobile", "Desktop"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={cn(
                    "px-4 py-2 rounded text-[10px] font-mono uppercase tracking-widest transition-all",
                    activeCategory === cat
                      ? "bg-ink text-bg shadow-sm"
                      : "hover:bg-ink/5 opacity-60",
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative bg-white border border-line rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <a
                      href={project?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </a>
                  </div>
                  <div className="p-6">
                    <a
                      href={project?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        {project.category === "Web" && (
                          <Layout size={14} className="opacity-40" />
                        )}
                        {project.category === "Mobile" && (
                          <Smartphone size={14} className="opacity-40" />
                        )}
                        {project.category === "Desktop" && (
                          <Monitor size={14} className="opacity-40" />
                        )}
                        <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                        {project.title}
                        <ExternalLink
                          size={16}
                          className="opacity-0 group-hover:opacity-40 transition-opacity"
                        />
                      </h3>
                    </a>
                    <p className="text-sm opacity-60 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-auto pt-6">
                      {" "}
                      <a
                        href={project?.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-end justify-between w-full group/github"
                      >
                        {/* Tags Container */}
                        <div className="flex flex-wrap gap-2 max-w-[85%]">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-ink/5 rounded text-[9px] font-mono opacity-60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* OctoCat / GitHub Icon */}
                        <div className="transition-all duration-300 transform group-hover/github:scale-110">
                          <Github
                            size={20}
                            className="text-ink opacity-20 group-hover/github:opacity-100 transition-opacity duration-300"
                            aria-hidden="true"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl font-serif italic mb-8">
                Technical Skills
              </h2>
              <p className="text-lg opacity-70 mb-12 leading-relaxed">
                I build with a focus on type-safety, performance, and
                maintainability. My workflow is centered around modern tools
                that allow for rapid iteration without compromising quality.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 bg-white border border-line rounded-2xl">
                  <Monitor className="mb-4 text-ink" size={24} />
                  <h4 className="font-bold mb-2">Frontend</h4>
                  <p className="text-xs opacity-60">
                    React, React-Native, Next.js, Tailwind, Bootstrap
                  </p>
                </div>
                <div className="p-6 bg-white border border-line rounded-2xl">
                  <Code2 className="mb-4 text-ink" size={24} />
                  <h4 className="font-bold mb-2">Backend</h4>
                  <p className="text-xs opacity-60">
                    Node.js, PHP, Python, MySQL, PostgreSQL, C++
                  </p>
                </div>
                <div className="p-6 bg-white border border-line rounded-2xl">
                  <Cpu className="mb-4 text-ink" size={24} />
                  <h4 className="font-bold mb-2">DevOps</h4>
                  <p className="text-xs opacity-60">
                    Terraform, Docker, Github Actions, AWS, Azure, Digital Ocean
                  </p>
                </div>
                <div className="p-6 bg-white border border-line rounded-2xl">
                  <Layers className="mb-4 text-ink" size={24} />
                  <h4 className="font-bold mb-2">Testing & Design</h4>
                  <p className="text-xs opacity-60">
                    Jest, Cypress, LaTex, Markdown, Figma, FlutterFlow
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {SKILLS.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest opacity-40 block mb-1">
                        {skill.category}
                      </span>
                      <span className="font-bold">{skill.name}</span>
                    </div>
                    <span className="text-xs font-mono opacity-40">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-ink/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-ink"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="relative p-12 md:p-24 bg-ink text-bg rounded-[3rem] overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-serif italic mb-8">
              Let's build something <br /> remarkable.
            </h2>
            <p className="text-lg opacity-60 mb-12">
              Currently accepting new projects and work opportunities. I'd love
              to hear from you and discuss the vision you would like to achieve.
            </p>

            <div className="flex flex-col md:flex-row gap-6">
              <a
                href="mailto:sibonelo.dev@gmail.com"
                className="inline-flex items-center justify-center gap-3 bg-bg text-ink px-8 py-4 rounded-full font-mono text-sm uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Send an Email <Mail size={18} />
              </a>
              <div className="flex items-center gap-6 px-4">
                <a
                  href="https://linkedin.com/in/sibonelonkosi"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/CboNkosi"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  Twitter
                </a>
                <a
                  href="https://github.com/sibo-dev"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-line">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-ink rounded flex items-center justify-center">
              <span className="text-bg font-bold text-xs">S</span>
            </div>
            <span className="font-mono text-[10px] font-medium tracking-tighter uppercase">
              Sibonelo © 2026
            </span>
          </div>

          <div className="text-[10px] font-mono uppercase tracking-widest opacity-40">
            Built with React, Tailwind & Motion
          </div>

          {/* <div className="flex gap-6">
            <a
              href="#"
              className="text-[10px] font-mono uppercase tracking-widest opacity-40 hover:opacity-100"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[10px] font-mono uppercase tracking-widest opacity-40 hover:opacity-100"
            >
              Terms
            </a>
          </div> */}
        </div>
      </footer>
    </div>
  );
}
