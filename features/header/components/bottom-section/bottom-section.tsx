import Image from "next/image";

import { Navigation } from "@/features/header/components/navigation/navigation";
import { navigation } from "@/features/header/constants/navigation";
import phoneIcon from "@/public/images/header/icons/phone-icon.svg";

export const BottomSection = () => {
  return (
    <div className="border-t border-gray-300">
      <div className="container py-5 flex justify-between items-center">
        <Navigation navigation={navigation} />

        <a href="tel:+2195550114" className="hidden md:flex items-center gap-2">
          <Image
            src={phoneIcon}
            alt="phone icon"
            width={20.09}
            height={20.09}
          />
          <span className="text-gray-900 text-small font-medium">
            (219) 555-0114
          </span>
        </a>
      </div>
    </div>
  );
};
