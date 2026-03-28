import React from "react";
import { ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    name: "SQL Basics",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/3abb6fb4a612",
  },
  {
    id: 2,
    name: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Skill Builder",
    link: "https://drive.google.com/file/d/1YAK_A_ogye8D1dg5mXUU0nHGEUnU7vZP/view?usp=sharing",
  },
];

const Certificates = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-22 py-6 border-t border-[#2a2a2a]">
      <div className="text-lg sm:text-xl">
        <span className="text-[#4a4a4a]">//</span>
        <span>certificates</span>
      </div>

      <div className="py-4">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-2xl sm:text-3xl lg:text-4xl py-2"
          >
            <span className="text-[#4a4a4a]">{cert.name}</span>
            <span>– {cert.issuer}</span>

            <div className="flex gap-3 sm:gap-0 space-x-1">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${cert.name} certificate`}
                className="hover:text-[#4a4a4a] text-[#8a8a8a] transition"
              >
                <ExternalLink size={26} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
