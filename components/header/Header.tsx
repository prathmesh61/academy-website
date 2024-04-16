import { LocateIcon, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
export const TopNav = () => {
  return (
    <div className="w-full flex justify-between items-center flex-wrap gap-3 px-4 bg-purple-600 text-white">
      <span className="text-sm font-bold flex items-center gap-2">
        <LocateIcon size={15} />
        सह्याद्री करीअर अकॅडमी भिवंडी
      </span>
      <span className="text-sm font-medium flex items-center gap-2">
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
      <div className="w-full max-w-[1344px] max-h-[80px] text-white flex items-center justify-between gap-2 px-12 py-3 ">
        <h2 className="font-bold text-2xl whitespace-nowrap">
          सह्याद्री अकॅडमी
        </h2>
        <nav className="flex gap-6">
          <Link
            href={"/"}
            className="font-medium text-base hover:bg-orange-400 px-2"
          >
            About Us
          </Link>
          <Link
            href={"/"}
            className="font-medium text-base hover:bg-orange-400 px-2"
          >
            Contact
          </Link>
          <Link
            href={"/"}
            className="font-medium text-base hover:bg-orange-400 px-2"
          >
            Gallery
          </Link>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;
