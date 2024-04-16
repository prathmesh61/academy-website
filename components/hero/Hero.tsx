import React from "react";
import FormLayout from "../form/FormLayout";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="max-w-[1344px] flex flex-wrap justify-between items-center gap-10 xl:gap-5 pt-32 px-4">
      <div className="flex flex-col items-center justify-center  gap-y-6 text-white ">
        <h1 className="font-extrabold text-4xl xl:text-5xl text-white text-center">
          Welcome to सह्याद्री अकॅडमी
        </h1>
        <div className="flex flex-wrap gap-2 ">
          <span className="w-fit font-semibold text-xs xl:text-base text-center bg-purple-600 text-white p-2">
            मैदानी व लेखी परीक्षेची संपूर्ण तयारी 🏃!!
          </span>
          <span className="w-fit font-semibold text-xs xl:text-base text-center bg-purple-600 text-white p-2">
            पोलिस होण्याचा सर्वोत्तम पर्याय 💯
          </span>
          <span className="w-fit font-semibold text-xs xl:text-base text-center bg-purple-600 text-white p-2">
            उत्तम मैदानी प्रशिक्षक व शिक्षक 💪
          </span>
        </div>
        <p className="hidden font-medium text-balance md:flex text-white text-center">
          सह्याद्री म्हणजे यश. सह्याद्री म्हणजे शिस्त. सह्याद्री म्हणजे भविष्य .
        </p>
      </div>
      <FormLayout />
    </div>
  );
};

export default Hero;
