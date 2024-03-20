import Image from "next/image";

import breadcrumbsBackground from "@/public/images/header/images/breadcrumbs-background.jpg";
import homeIcon from "@/public/images/header/icons/home-icon.svg";

export const Breadcrumbs = () => {
  return (
    <div className="relative py-6 md:py-12">
      <div className="absolute z-0 inset-0 aspect-ratio-[1920/120]">
        <Image
          className="w-full h-full object-cover object-center"
          src={breadcrumbsBackground}
          alt="breadcrumbs background"
        />
      </div>
      <ul className="container relative z-10 flex items-center gap-3 text-gray-500">
        <li>
          <Image src={homeIcon} alt="home icon" width={16} height={17} />
        </li>
        <li>&gt;</li>
        <li className="text-medium">Home</li>
      </ul>
    </div>
  );
};
