import React from "react";

const Links = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-22 py-6 border-t border-[#2a2a2a]">
      <div className="space-y-4">
        <div className="text-lg sm:text-xl">
          <span className="text-[#4a4a4a]">//</span>
          <span>links</span>
        </div>

        <div className="space-y-4">
          <div className="py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xl sm:text-2xl lg:text-3xl">
            <span className="space-x-3">
              <span className="text-[#4a4a4a]">const{""}</span>
              <span>linkedIn{""}</span>
              <span className="text-[#4a4a4a]">=</span>
            </span>
            <a
              href="https://www.linkedin.com/in/krishna-patel-0ba60132a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Krishna's LinkedIn profile"
              className="flex items-center gap-1 text-white cursor-pointer hover:text-gray-400"
            >
              <span className="text-[#2a2a2a]">'</span>
              <span className="text-[#c0c0c0]">LinkedIn.com/in/krishna-patel..</span>
              <span className="text-[#2a2a2a]">'</span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xl sm:text-2xl lg:text-3xl">
            <span className="space-x-3">
              <span className="text-[#4a4a4a]">const{""}</span>
              <span>github{""}</span>
              <span className="text-[#4a4a4a]">=</span>
            </span>
            <a
              href="https://github.com/Krish30p"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Krishna's GitHub profile"
              className="flex items-center gap-1 text-white cursor-pointer hover:text-gray-400"
            >
              <span className="text-[#2a2a2a]">'</span>
              <span className="text-[#c0c0c0]">GitHub.com/Krish30p</span>
              <span className="text-[#2a2a2a]">'</span>
            </a>
          </div>

          <div className="py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xl sm:text-2xl lg:text-3xl">
            <span className="space-x-3">
              <span className="text-[#4a4a4a]">const{""}</span>
              <span>email{""}</span>
              <span className="text-[#4a4a4a]">=</span>
            </span>
            <a
              href="mailto:kp06krish@gmail.com"
              aria-label="Send email to Krishna"
              className="flex items-center gap-1 text-white cursor-pointer hover:text-gray-400"
            >
              <span className="text-[#2a2a2a]">'</span>
              <span className="text-[#c0c0c0]">kp06krish@gmail.com</span>
              <span className="text-[#2a2a2a]">'</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Links;