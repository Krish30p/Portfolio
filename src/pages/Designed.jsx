import React from "react";

const Designed = () => {
  return (
    <div className="bg-black text-white px-22 py-6 border-t border-[#2a2a2a] text-center">
      <div>
        <div>
          <span className="text-[#2a2a2a] ">// </span>
          <span className="text-[#5a5a5a]">git commit -m{"   "}</span>
          <span className="text-[#2a2a2a]">"</span>
          <span className="text-[#5a5a5a]">designed and devloped by </span>

          <a
            href="https://www.linkedin.com/in/krishna-patel-0ba60132a/"
            target="_blank"
            rel="noopener noreferrer"
            className=" items-center gap-1 text-white cursor-pointer hover:text-gray-400"
          >
            <span>Krishna Patel</span>
          </a>

          <span className="text-[#2a2a2a]">"</span>
        </div>
      </div>
      
    </div>
  );
};

export default Designed;
