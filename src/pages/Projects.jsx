import React from "react";
import { Github, ExternalLink } from "lucide-react";
import GlareHover from "@/components/GlareHover";
import { projects } from "@/data/projects";
import { navigate } from "@/lib/router";

const Projects = ({ isFullPage = false }) => {
  const displayedProjects = isFullPage ? projects : projects.slice(0, 3);

  return (
    <section className="bg-black text-white px-4 sm:px-22 py-6 border-t border-[#2a2a2a]">
      <div>
        {isFullPage && (
          <div className="mb-8">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-[#8a8a8a] hover:text-white transition cursor-pointer text-base sm:text-lg"
            >
              <span>← Back to Home</span>
            </button>
          </div>
        )}

        <div className="text-lg sm:text-xl mb-4">
          <span className="text-[#4a4a4a]">// </span>
          <span>{isFullPage ? "all projects" : "projects"}</span>
        </div>

        {displayedProjects.map((project) => (
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

        {!isFullPage && (
          <div className="mt-10 mb-4">
            <GlareHover
              width="auto"
              height="auto"
              background="transparent"
              borderColor="transparent"
              borderRadius="0.5rem"
              glareColor="#ffffff"
              glareOpacity={0.4}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
              playOnce={false}
              className="border-none hover:scale-105 active:scale-95 transition-all duration-300 inline-block"
            >
              <button
                onClick={() => navigate("/projects")}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#4a4a4a] rounded-lg text-white cursor-pointer text-base sm:text-lg font-medium transition-all duration-300"
              >
                <span>View All Projects</span>
                <span className="text-xl">→</span>
              </button>
            </GlareHover>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;