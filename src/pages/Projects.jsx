import React from "react";
import { Github, ExternalLink } from "lucide-react";
import GlareHover from "@/components/GlareHover";

// Mock component for demonstration
// const GlareHover = ({ children, glareColor, glareOpacity, glareAngle, glareSize, transitionDuration, playOnce }) => {
//   return <div>{children}</div>;
// };

const Projects = () => {
  return (
    <div className="bg-black text-white px-4 sm:px-22 py-6 border-t border-[#2a2a2a]">
      <div>
        {/* what? */}
        <div className="text-lg sm:text-xl">
          <span className="text-gray-600">//</span>
          <span>projects</span>
        </div>

        {/* 1 */}
        <div className="py-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-2xl sm:text-3xl lg:text-4xl py-2">
            <span className="text-gray-500">EasyResume</span>
            <span>– Online Resume Builder</span>

            {/* Icons */}
            <div className="flex gap-2 sm:gap-0">
              <a
                href="https://github.com/Krish30p/Resume-Builder"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition"
              >
                <Github size={26} />
              </a>

              <a
                href="https://easy-resume-aja3wdjh9-krish30ps-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition"
              >
                <ExternalLink size={26} />
              </a>
            </div>
          </div>

          <div className="text-lg sm:text-xl lg:text-2xl py-2">
            EasyResume is a web-based resume builder that converts user input
            into a professional, downloadable resume with real-time preview and
            easy customization.
          </div>
          {/* stacks */}
          <div className="flex items-center gap-2 flex-wrap py-2">
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
              playOnce={false}
            >
              Javascript
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
              playOnce={false}
            >
              React
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
              playOnce={false}
            >
              Node.js
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
              playOnce={false}
            >
              Express
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
              playOnce={false}
            >
              MongoDB
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
              playOnce={false}
            >
              Tailwind CSS
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
              playOnce={false}
            >
              Vercel
            </GlareHover>
          </div>
        </div>

        {/* 2 */}
        <div className="py-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-2xl sm:text-3xl lg:text-4xl py-2">
            <span className="text-gray-500">Check My AQI</span>
            <span>– Air Quality Index Monitor</span>

            {/* Icons */}
            <div className="flex gap-2 sm:gap-0">
              <a
                href="https://github.com/Krish30p/AQI"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition"
              >
                <Github size={26} />
              </a>

              <a
                href="https://aqi-sage.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition "
              >
                <ExternalLink size={26} />
              </a>
            </div>
          </div>

          <div className="text-lg sm:text-xl lg:text-2xl py-2">
            Check My AQI is a web-based application that displays real-time Air
            Quality Index (AQI) data for different locations, helping users
            quickly understand current air quality conditions.
          </div>
          {/* stacks */}
          <div className="flex items-center gap-2 flex-wrap py-2">
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
              playOnce={false}
            >
              React
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
              playOnce={false}
            >
              Node.js
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
              playOnce={false}
            >
              Express
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
              playOnce={false}
            >
              MongoDB
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
              playOnce={false}
            >
              Tailwind CSS
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
              playOnce={false}
            >
              Vercel
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
              playOnce={false}
            >
              API Ninjas
            </GlareHover>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Projects;