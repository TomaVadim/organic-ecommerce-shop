import Image from "next/image";

import mapIcon from "@/public/images/header/icons/map-pin.svg";
import { Select } from "@/features/components/select/select";

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
          <Select option="Eng" />

          <Select option="USD" />

          <div className="bg-gray-700 h-4 w-[1px]"></div>

          <div className="flex gap-1 text-gray-300 text-tiny">
            <button className="hover:text-primary transition-colors duration-100">
              Sign In
            </button>
            <span>/</span>
            <button className="hover:text-primary transition-colors duration-100">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
