import React from "react";
import RotatingText from "@/components/RotatingText";

const Main = () => {
  return (
    <div className="text-8xl text-white bg-black">
      <div className="px-22 py-21">
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
  <div className="leading-none mt-8">
    Into Experiences
  </div>
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
