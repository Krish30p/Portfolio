import ClickSpark from "@/components/ClickSpark";
import GlareHover from "@/components/GlareHover";
import { Mail, Linkedin, Github } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="p-22 pt-0">
        <div className="p-5 bg-black sticky top-0 z-50">
          <div className="flex items-start justify-between">
            {/* Left side */}
            <div className="text-center">
              <div className="text-white text-3xl">{"<Krishna Patel />"}</div>
              <div className="text-gray-400 text-xl">Full Stack Developer</div>
            </div>

            {/* Right side */}
            <div className="flex gap-6 p-3">
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
                    className="flex items-center gap-2 text-white cursor-pointer hover:text-gray-400"
                  >
                    <Github color="gray" size={22} />
                    <span>GitHub</span>
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
                    className="flex items-center gap-2 text-white cursor-pointer hover:text-gray-400"
                  >
                    <Linkedin color="gray" size={22} />
                    <span>LinkedIn</span>
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
                    className="flex items-center gap-2 text-white cursor-pointer hover:text-gray-400"
                  >
                    <Mail color="gray" size={22} />
                    <span>Email</span>
                  </a>
                </GlareHover>
              </div>
            </div>
          </div>
        </div>

        {/* here */}
      </div>
    </ClickSpark>
  );
};

export default Header;
