import Image from "next/image";

import facebook from "@/public/images/footer/icons/facebook.svg";
import twitter from "@/public/images/footer/icons/twitter.svg";
import pinterest from "@/public/images/footer/icons/pinterest.svg";
import instagram from "@/public/images/footer/icons/instagram.svg";

export const SocialLinks = () => {
  return (
    <div className="flex gap-2 col-start-11 col-span-2 place-content-end place-items-center">
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary transition-colors duration-300"
      >
        <Image src={facebook} alt="facebook" />
      </a>
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary transition-colors duration-300"
      >
        <Image src={twitter} alt="twitter" />
      </a>
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary transition-colors duration-300"
      >
        <Image src={pinterest} alt="pinterest" />
      </a>
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary transition-colors duration-300"
      >
        <Image src={instagram} alt="instagram" />
      </a>
    </div>
  );
};
