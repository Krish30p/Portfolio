import ClickSpark from "@/components/ClickSpark";
import GlareHover from "@/components/GlareHover";
import { Mail, Linkedin, Github } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-black pointer-events-auto ">
    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div >
        <div className="px-22">
          <div className="flex items-start justify-between py-2">
            {/* Left side */}
            <div className="text-center">
              <div className="text-white text-3xl">{"<Krishna Patel />"}</div>
              <div className="text-gray-400 text-xl">Full Stack Developer</div>
            </div>

            {/* Right side */}
            <div className="flex gap-6 p-3">
              {/* remove p-3 while removing Full Stack Developer so that both can be equal */}
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
    </ClickSpark></div>
  );
};

export default Header;
