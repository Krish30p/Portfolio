import GlareHover from "@/components/GlareHover";
import React from "react";

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "GitHub",
  "Java",
];

const Skills = () => {
  return (
    <section className="px-4 sm:px-22 text-white bg-black">
      <div className="py-6">
        <div className="text-[#2a2a2a] text-xs">// key_skills={"["}</div>
        <div className="py-2">
          <div className="flex items-center gap-2 flex-wrap text-[#8a8a8a]">
            {skills.map((skill) => (
              <GlareHover
                key={skill}
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={200}
                transitionDuration={800}
                playOnce={false}
              >
                {skill}
              </GlareHover>
            ))}
          </div>
        </div>
        <div className="text-[#2a2a2a] text-xs">// {"]"}</div>
      </div>
    </section>
  );
};

export default Skills;