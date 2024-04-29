import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: "next" | "prev";
}

export const SliderNavigationButton = ({
  children,
  className,
}: Props): JSX.Element => {
  return (
    <button
      className={`${className} hidden md:flex w-10 h-10 items-center justify-center border border-gray-400 rounded-full hover:cursor-pointer hover:bg-primary hover:text-white transition-colors duration-200`}
    >
      {children}
    </button>
  );
};
