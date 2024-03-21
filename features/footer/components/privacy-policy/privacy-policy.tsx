import Image from "next/image";

import applePayIcon from "@/public/images/footer/icons/apple-pay.svg";
import visaPayIcon from "@/public/images/footer/icons/visa-logo.svg";
import discoverIcon from "@/public/images/footer/icons/discover.svg";
import masterCardIcon from "@/public/images/footer/icons/mastercard.svg";
import lockIcon from "@/public/images/footer/icons/lock-icon.svg";

export const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900">
      <div className="container py-6 flex gap-4 flex-col md:flex-row justify-between md:items-center">
        <a href="#" className="text-small text-gray-500">
          Ecobazar eCommerce © 2021. All Rights Reserved
        </a>

        <div className="flex gap-4">
          <a
            href="#"
            className="flex justify-center items-center border border-gray-500 p-2 rounded-md hover:border-primary transition-colors duration-200"
          >
            <Image src={applePayIcon} alt="apple pay logo" />
          </a>

          <a
            href="#"
            className="flex justify-center items-center border border-gray-500 p-2 rounded-md hover:border-primary transition-colors duration-200"
          >
            <Image src={visaPayIcon} alt="visa pay logo" />
          </a>

          <a
            href="#"
            className="overflow-hidden flex justify-center items-end border border-gray-500 pl-1 pt-2 rounded-md hover:border-primary transition-colors duration-200"
          >
            <Image src={discoverIcon} alt="discover logo" />
          </a>

          <a
            href="#"
            className="flex justify-center items-center border border-gray-500 p-2 rounded-md hover:border-primary transition-colors duration-200"
          >
            <Image src={masterCardIcon} alt="master card logo" />
          </a>

          <a
            href="#"
            className="max-w-16 flex flex-col justify-center items-center border border-gray-500 px-1 py-[1px] rounded-md hover:border-primary transition-colors duration-200 text-white"
          >
            <div className="flex gap-[2px]">
              <Image src={lockIcon} alt="visa pay logo" />
              <span className="text-[8px]">Secure</span>
            </div>
            <span className="text-[9px] font-semibold">Payment</span>
          </a>
        </div>
      </div>
    </div>
  );
};
