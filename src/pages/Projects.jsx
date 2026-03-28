import React from "react";
import { Github, ExternalLink } from "lucide-react";
import GlareHover from "@/components/GlareHover";

const projects = [
  {
    id: 1,
    name: "EasyResume",
    tagline: "Online Resume Builder",
    description:
      "EasyResume is a web-based resume builder that converts user input into a professional, downloadable resume with real-time preview and easy customization.",
    github: "https://github.com/Krish30p/Resume-Builder",
    live: "https://easy-resume-aja3wdjh9-krish30ps-projects.vercel.app/",
    stack: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vercel"],
  },
  {
    id: 2,
    name: "Check My AQI",
    tagline: "Air Quality Index Monitor",
    description:
      "Check My AQI is a web-based application that displays real-time Air Quality Index (AQI) data for different locations, helping users quickly understand current air quality conditions.",
    github: "https://github.com/Krish30p/AQI",
    live: "https://aqi-sage.vercel.app/",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vercel", "API Ninjas"],
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-22 py-6 border-t border-[#2a2a2a]">
      <div>
        <div className="text-lg sm:text-xl">
          <span className="text-[#4a4a4a]">//</span>
          <span>projects</span>
        </div>

        {projects.map((project) => (
          <div key={project.id} className="py-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-2xl sm:text-3xl lg:text-4xl py-2">
              <span className="text-[#4a4a4a]">{project.name}</span>
              <span>– {project.tagline}</span>

              <div className="flex gap-3 sm:gap-0 space-x-1">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} source code on GitHub`}
                  className="hover:text-[#4a4a4a] text-[#8a8a8a] transition"
                >
                  <Github size={26} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} live demo`}
                  className="hover:text-[#4a4a4a] text-[#8a8a8a] transition"
                >
                  <ExternalLink size={26} />
                </a>
              </div>
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl py-2 text-[#d0d0d0]">
              {project.description}
            </p>

            <div className="flex items-center gap-2 flex-wrap py-2 text-[#8a8a8a]">
              {project.stack.map((tech) => (
                <GlareHover
                  key={tech}
                  glareColor="#ffffff"
                  glareOpacity={0.3}
                  glareAngle={-30}
                  glareSize={200}
                  transitionDuration={800}
                  playOnce={false}
                >
                  {tech}
                </GlareHover>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;