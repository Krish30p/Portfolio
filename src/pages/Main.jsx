import RotatingText from "@/components/RotatingText";
import React from "react";

// Mock component for demonstration
// const RotatingText = ({ texts, mainClassName, staggerFrom, initial, animate, exit, staggerDuration, splitLevelClassName, transition, rotationInterval }) => {
//   return <span className={mainClassName}>{texts[0]}</span>;
// };

const Main = () => {
  return (
    <div className="px-4 sm:px-22 text-white bg-black ">
      <div className="py-7 sm:py-17 text-4xl sm:text-6xl lg:text-8xl ">
        {/* Line 1 */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 leading-none">
          <span className="leading-none text-rubik text-[#e0e0e0]">Turning</span>

          <RotatingText
            texts={["Code", "Logic", "Ideas"]}
            mainClassName="text-[#6a6a6a] leading-none text-rubik"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-110%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden leading-none "
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>

        {/* Line 2 */}
        <div className="leading-none mt-4 sm:mt-8 text-[#e0e0e0]">Into Experiences</div>
      </div>



      {/* What? */}
      <div className="text-lg sm:text-xl">
        <span className="text-[#4a4a4a]">//</span>
        <span>about</span>
      </div>


      {/* myself */}
      <div className="py-4 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
        <p>
          <span className="text-[#4a4a4a]">Full-stack developer</span>{" "}
          <span className="text-[#d0d0d0]">focused on building scalable,</span>
        </p>
        <p>
          <span className="text-[#d0d0d0]">performant web applications with{" "}</span>
          <span className="text-[#4a4a4a]">clean architecture.</span>
        </p>
      </div>
      

      <div>
        
      </div>
    </div>
  );
};

export default Main;