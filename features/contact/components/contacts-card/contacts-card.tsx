import Image from "next/image";

import locationIcon from "@/public/images/contact/icons/location.svg";
import messageIcon from "@/public/images/contact/icons/message.svg";
import phoneIcon from "@/public/images/contact/icons/phone.svg";

export const ContactsCard = () => {
  return (
    <article className="w-full shadow px-5 lg:max-w-[300px] flex flex-col rounded">
      <div className="py-6 flex flex-col items-center text-center border-b border-gray-200">
        <Image className="mb-4" src={locationIcon} alt="Location Icon" />
        <a className="text-medium text-gray-800" href="#">
          2715 Ash Dr. San Jose, South Dakota 83475
        </a>
      </div>
      <div className="py-6 flex flex-col items-center text-center border-b border-gray-200">
        <Image
          className="mb-4"
          src={messageIcon}
          alt="Send message to mail icon"
        />
        <a className="text-medium text-gray-800" href="mailto:proxy@gmail.com">
          Proxy@gmail.com
        </a>
        <a
          className="text-medium text-gray-800"
          href="mailto:help.proxy@gmail.com"
        >
          Help.proxy@gmail.com
        </a>
      </div>
      <div className="py-6 flex flex-col items-center text-center">
        <Image src={phoneIcon} alt="Icon call by phone" className="mb-4" />
        <a className="text-medium text-gray-800" href="tel:+2195550114">
          (219) 555-0114
        </a>
        <a className="text-medium text-gray-800" href="tel:+1643330487">
          (164) 333-0487
        </a>
      </div>
    </article>
  );
};
