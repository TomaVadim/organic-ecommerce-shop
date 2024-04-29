import checkMarkIcon from "@/public/images/about/icons/check-mark-icon.svg";
import Image from "next/image";

interface Props {
  list: string[];
}

export const DeliveringBenefits = ({ list }: Props): JSX.Element => {
  return (
    <ul className="flex flex-col gap-4">
      {list.map((benefitText) => (
        <li className="flex gap-x-2 items-center">
          <div className="aspect-auto p-2 rounded-full bg-primary/10 w-fit">
            <Image src={checkMarkIcon} alt="Check mark icon" />
          </div>
          <span className="text-gray-500 text-small">{benefitText}</span>
        </li>
      ))}
    </ul>
  );
};
