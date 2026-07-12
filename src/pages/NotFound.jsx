import React from "react";
import { navigate } from "@/lib/router";

const NotFound = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-22 py-20 border-t border-[#2a2a2a] flex-grow flex flex-col justify-center">
      <div>
        <div className="text-lg sm:text-xl mb-4">
          <span className="text-[#4a4a4a]">// </span>
          <span>404</span>
        </div>

        <div className="border border-[#2a2a2a] rounded-lg p-6 bg-[#0a0a0a] font-mono text-sm sm:text-base md:text-lg mb-8 max-w-2xl">
          <div className="flex items-center gap-2 mb-4 border-b border-[#2a2a2a] pb-3 text-[#5a5a5a]">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]/80"></span>
            <span className="w-3 h-3 rounded-full bg-[#eab308]/80"></span>
            <span className="w-3 h-3 rounded-full bg-[#22c55e]/80"></span>
            <span className="ml-2 text-xs select-none">terminal — bash</span>
          </div>
          <div className="text-[#ef4444] font-medium">
            <span>console.error("Route not found");</span>
          </div>
          <div className="text-[#8a8a8a] mt-2 text-xs sm:text-sm">
            <span>&gt; The requested path does not exist on this portfolio.</span>
          </div>
        </div>

        <div>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-[#8a8a8a] hover:text-white transition cursor-pointer text-base sm:text-lg"
          >
            <span>← Back to Home</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
