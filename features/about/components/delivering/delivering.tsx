import Image from "next/image";

import { DeliveringBenefits } from "@/features/about/components/delivering-benefits/delivering-benefits";
import { deliveringBenefitsList } from "@/features/about/constants/delivering-benefits-list";
import arrowPointerIcon from "@/public/images/about/icons/arrow-pointer-icon.svg";

export const Delivering = (): JSX.Element => {
  return (
    <article>
      <h2 className="mb-6 text-xxl lg:text-h2 font-semibold max-w-[550px] text-gray-900">
        We Delivered, You Enjoy Your Order.
      </h2>
      <p className="mb-5 block text-gray-500 text-medium lg:text-large max-w-[590px]">
        Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices
        consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac
        mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget
        elementum.
      </p>
      <div className="mb-8">
        <DeliveringBenefits list={deliveringBenefitsList} />
      </div>

      <button className="bg-primary text-white rounded-full px-10 py-4 flex items-center gap-4 hover:bg-primary/90 transition-colors duration-200">
        <span className="text-medium font-medium">Shop Now</span>
        <Image src={arrowPointerIcon} alt="Pointer icon" />
      </button>
    </article>
  );
};
