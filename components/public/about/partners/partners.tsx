import { StepsIcon } from "@/public/images/about/icons/steps";
import { BookOffIcon } from "@/public/images/about/icons/book-off";
import { FoodNetworksIcon } from "@/public/images/about/icons/food-networks";
import { MangoIcon } from "@/public/images/about/icons/mango";
import { FoodIcon } from "@/public/images/about/icons/food";
import { SeriesIcon } from "@/public/images/about/icons/series";
import { Fragment } from "react";

export const Partners = (): JSX.Element => {
  const partnerIcons = [
    <StepsIcon />,
    <MangoIcon />,
    <FoodNetworksIcon />,
    <FoodIcon />,
    <BookOffIcon />,
    <SeriesIcon />,
  ];

  return (
    <div className="flex justify-between items-center">
      {partnerIcons.map((icon, index) => (
        <Fragment key={index}>
          <div className="text-gray-400 hover:text-[#D8259B] transition-colors duration-200">
            {icon}
          </div>
          {index < partnerIcons.length - 1 && (
            <span className="bg-gray-300 w-[1px] h-8"></span>
          )}
        </Fragment>
      ))}
    </div>
  );
};
