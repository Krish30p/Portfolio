import React from "react";
import RotatingText from "@/components/RotatingText";

const Main = () => {
  return (
    <div className="px-22 text-white bg-black">
      <div className=" py-21 text-8xl ">
        {/* Line 1 */}
        <div className="flex items-center gap-6 leading-none">
          <span className="leading-none text-rubik">Turning</span>

          <RotatingText
            texts={["Code", "Logic", "Ideas"]}
            mainClassName="text-gray-500 leading-none text-rubik"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-110%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden leading-none"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>

        {/* Line 2 */}
        <div className="leading-none mt-8">Into Experiences</div>
      </div>

      {/* myself */}
      <div className=" text-3xl leading-relaxed">
        <p>
          <span className="text-gray-500">Full-stack developer</span>{" "}
          <span>focused on building scalable,</span>
        </p>
        <p>
          performant web applications with{" "}
          <span className="text-gray-500">clean architecture.</span>
        </p>
      </div>

      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Main;
