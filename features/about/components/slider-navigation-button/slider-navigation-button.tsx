import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const SliderNavigationButton = ({
  children,
  className,
}: Props): JSX.Element => {
  return (
    <button
      className={`${className} hidden md:flex w-10 h-10 items-center justify-center border border-gray-400 rounded-full hover:cursor-pointer hover:bg-primary hover:text-white transition-colors duration-200`}
      type="button"
      aria-label={className}
    >
      {children}
    </button>
  );
};
