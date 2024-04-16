import {
  Facebook,
  InstagramIcon,
  LocateIcon,
  Phone,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
export const TopNav = () => {
  return (
    <div className="w-full flex justify-center md:justify-between items-center flex-wrap gap-3 px-4 py-4 bg-purple-600 text-white">
      <span className=" text-xs xl:text-sm font-bold flex items-center gap-2">
        <LocateIcon size={15} />
        सह्याद्री करीअर अकॅडमी भिवंडी
      </span>
      <div className="flex items-center gap-4">
        <Facebook size={20} />
        <InstagramIcon size={20} />
        <YoutubeIcon size={20} />
      </div>
      <span className="text-xs xl:text-sm font-medium flex items-center gap-2">
        <b className="flex items-center gap-1">
          <Phone size={15} />
          Phone -
        </b>
        7744889100
      </span>
    </div>
  );
};
const Header = () => {
  return (
    <React.Fragment>
      <TopNav />
      <div className="w-full max-w-[1344px] max-h-[80px] text-white flex items-center justify-between gap-4 px-12 py-3 ">
        <h2 className="font-bold text-lg md:text-2xl whitespace-nowrap">
          सह्याद्री अकॅडमी
        </h2>
        <nav className="flex gap-3 md:gap-6">
          <Link
            href={"/"}
            className="font-medium text-sm md:text-base hover:bg-purple-400 px-2"
          >
            About
          </Link>
          <Link
            href={"/"}
            className="font-medium text-sm md:text-base hover:bg-purple-400 px-2"
          >
            Contact
          </Link>
          <Link
            href={"/"}
            className="font-medium text-sm md:text-base hover:bg-purple-400 px-2"
          >
            Gallery
          </Link>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;
