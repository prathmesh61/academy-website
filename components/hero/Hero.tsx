import React from "react";
import FormLayout from "../form/FormLayout";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-[1344px] flex justify-between items-center  flex-wrap gap-4 pt-20 px-4">
      <div className="flex flex-col gap-y-3 text-white ">
        <h1 className="font-extrabold text-6xl text-white">
          Welcome to सह्याद्री अकॅडमी
        </h1>
        <div className="flex flex-wrap gap-2 ">
          <span className="w-fit font-semibold text-base text-center bg-purple-600 text-white p-2">
            मैदानी व लेखी परीक्षेची संपूर्ण तयारी 🏃!!
          </span>
          <span className="w-fit font-semibold text-base text-center bg-purple-600 text-white p-2">
            पोलिस होण्याचा सर्वोत्तम पर्याय 💯
          </span>
          <span className="w-fit font-semibold text-base text-center bg-purple-600 text-white p-2">
            उत्तम मैदानी प्रशिक्षक व शिक्षक 💪
          </span>
        </div>
      </div>
      <FormLayout />
    </div>
  );
};

export default Hero;
