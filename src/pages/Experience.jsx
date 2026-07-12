import React from "react";
import GlareHover from "@/components/GlareHover";
import { navigate } from "@/lib/router";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "Sahana Systems Limited",
    period: "June 2026 – July 2026",
    description:
      "Worked on cloud-focused development and infrastructure projects involving AWS services, Linux administration, and modern deployment workflows while building scalable web applications and exploring DevOps practices.",
    contributions: [
      "Designed and deployed cloud infrastructure using core AWS services including EC2, S3, IAM, Auto Scaling Groups, and Application Load Balancers.",
      "Configured Linux-based virtual machines, Nginx web servers, security groups, and networking components for cloud deployments.",
      "Built and tested scalable infrastructure capable of automatically handling increased traffic using AWS Auto Scaling and CloudWatch monitoring.",
      "Worked with Docker containers to understand application packaging, deployment, and environment consistency.",
      "Developed and maintained full-stack applications using React, Node.js, Express.js, and MongoDB.",
      "Collaborated on integrating cloud services into application workflows while following Git-based development practices.",
    ],
    stack: [
      "AWS",
      "EC2",
      "S3",
      "IAM",
      "Auto Scaling",
      "CloudWatch",
      "ALB",
      "Linux",
      "Nginx",
      "Docker",
      "React",
      "Node.js",
      "MongoDB",
      "Git",
    ],
  },
];

const Experience = ({ isFullPage = false }) => {
  const displayedExperiences = isFullPage ? experiences : experiences.slice(0, 2);

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
          <span>{isFullPage ? "all experience" : "experience"}</span>
        </div>

        {displayedExperiences.map((exp) => (
          <div key={exp.id} className="py-4 border-b border-[#141414] last:border-b-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3 py-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl">
                <span className="text-white">{exp.role}</span>
                <span className="text-[#8a8a8a]"> @ </span>
                <span className="text-[#4a4a4a]">{exp.company}</span>
              </div>
              <span className="text-base sm:text-lg lg:text-xl text-[#8a8a8a] sm:ml-auto">
                {exp.period}
              </span>
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl py-2 text-[#d0d0d0]">
              {exp.description}
            </p>

            {exp.contributions && (
              <ul className="list-disc list-outside space-y-2 text-[#a0a0a0] py-2 text-base sm:text-lg lg:text-xl pl-5">
                {exp.contributions.map((bullet, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex items-center gap-2 flex-wrap py-2 text-[#8a8a8a]">
              {exp.stack.map((tech) => (
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
                onClick={() => navigate("/experience")}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#4a4a4a] rounded-lg text-white cursor-pointer text-base sm:text-lg font-medium transition-all duration-300"
              >
                <span>View All Experience</span>
                <span className="text-xl">→</span>
              </button>
            </GlareHover>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
