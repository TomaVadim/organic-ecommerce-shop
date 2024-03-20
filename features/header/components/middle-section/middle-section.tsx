import Image from "next/image";

import brandLogo from "@/public/images/header/icons/brand-logo.svg";
import searchLogo from "@/public/images/header/icons/search-icon.svg";
import likeIcon from "@/public/images/header/icons/like-icon.svg";
import bagIcon from "@/public/images/header/icons/bag-icon.svg";

export const MiddleSection = () => {
  return (
    <section className="container gap-4 flex flex-col md:flex-row  md:justify-between py-7 tracking-wide">
      <h3 className="flex items-center gap-2 text-gray-900 text-h5">
        <Image src={brandLogo} alt="brand logo" width={32} height={29.06} />
        <span>Ecobazar</span>
      </h3>

      <div className="flex items-center h-[45px]">
        <div className="flex items-center gap-[10.5px] h-full px-4 border border-gray-500 border-r-0 rounded-l-md md:w-[400px]">
          <Image src={searchLogo} alt="search logo" width={15} height={15} />
          <input
            className="bg-transparent w-full focus:outline-none placeholder:text-small"
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
        </div>
        <button className="bg-primary h-full px-6 rounded-r-md text-small font-semibold text-white hover:bg-primary/80 transition-colors duration-100">
          Search
        </button>
      </div>

      <div className="flex items-center gap-4">
        <button>
          <Image src={likeIcon} alt="like icon" width={27.67} height={23.8} />
        </button>

        <div className="bg-gray-700 h-6 w-[1px]"></div>

        <button className="relative">
          <Image src={bagIcon} alt="bag icon" width={25.5} height={25.5} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] font-medium flex items-center justify-center rounded-full">
            2
          </span>
        </button>
        <div className="flex flex-col gap-[7px]">
          <span className="text-gray-700 text-tiny">Shopping cart:</span>
          <span className="font-medium">$57.00</span>
        </div>
      </div>
    </section>
  );
};
