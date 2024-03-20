import Image from "next/image";

import mapIcon from "@/public/images/header/icons/map-pin.svg";

export const TopSection = () => {
  return (
    <div className="bg-gray-800">
      <div className="container py-3 flex justify-end md:justify-between items-center">
        <a
          href="#"
          className="hidden md:flex items-center gap-2 text-gray-300 text-tiny"
        >
          <Image src={mapIcon} alt="map icon" width={15} height={18} />
          <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
        </a>

        <div className="flex gap-5 items-center">
          <select
            defaultValue="Eng"
            className="bg-transparent text-gray-300 text-tiny cursor-pointer focus:outline-none"
          >
            <option value="Eng">Eng</option>
            <option value="Ua">Ua</option>
          </select>

          <select
            defaultValue="USD"
            className="bg-transparent text-gray-300 text-tiny cursor-pointer focus:outline-none"
          >
            <option value="USD">USD</option>
            <option value="UAH">UAH</option>
          </select>

          <div className="bg-gray-700 h-4 w-[1px]"></div>

          <div className="flex gap-1 text-gray-300 text-tiny">
            <button>Sign In</button>
            <span>/</span>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};
