import React from "react";
import GlareHover from "@/components/GlareHover";
import { Mail, Linkedin, Github } from "lucide-react";
import { navigate } from "@/lib/router";

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black pointer-events-auto border-b border-[#2a2a2a]">
      <div className="px-4 sm:px-22">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between py-2 gap-3 sm:gap-0">
          {/* Left side */}
          <div className="text-center select-none">
            <h1 
              onClick={() => navigate("/")}
              className="text-[#f0f0f0] text-2xl sm:text-3xl cursor-pointer hover:text-[#c0c0c0] transition"
            >
              {"<Krishna Patel />"}
            </h1>
            <p className="text-[#8a8a8a] text-lg sm:text-xl">Full Stack Developer</p>
          </div>

          {/* Right side */}
          <div className="flex gap-4 sm:gap-6 p-3">
            {/* GitHub */}
            <div className="relative">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={200}
                transitionDuration={800}
                playOnce={false}
              >
                <a
                  href="https://github.com/Krish30p"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Krishna's GitHub profile"
                  className="flex items-center gap-2 text-white cursor-pointer hover:text-gray-400"
                >
                  <Github color="gray" size={22} />
                  <span className="hidden sm:inline text-[#9a9a9a]">GitHub</span>
                </a>
              </GlareHover>
            </div>

            {/* LinkedIn */}
            <div className="relative">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={200}
                transitionDuration={800}
                playOnce={false}
              >
                <a
                  href="https://www.linkedin.com/in/krishna-patel-0ba60132a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Krishna's LinkedIn profile"
                  className="flex items-center gap-2 text-white cursor-pointer hover:text-gray-400"
                >
                  <Linkedin color="gray" size={22} />
                  <span className="hidden sm:inline text-[#9a9a9a]">LinkedIn</span>
                </a>
              </GlareHover>
            </div>

            {/* Email */}
            <div className="relative">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={200}
                transitionDuration={800}
                playOnce={false}
              >
                <a
                  href="mailto:kp06krish@gmail.com"
                  aria-label="Send email to Krishna"
                  className="flex items-center gap-2 text-white cursor-pointer hover:text-gray-400"
                >
                  <Mail color="gray" size={22} />
                  <span className="hidden sm:inline text-[#9a9a9a]">Email</span>
                </a>
              </GlareHover>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;