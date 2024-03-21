import Image from "next/image";

import brandLogo from "@/public/images/header/icons/brand-logo.svg";

interface Props {
  color?: "dark" | "light";
}

export const BrandLogo = ({ color = "dark" }: Props) => {
  const colorClass = color === "dark" ? "text-gray-900" : "text-white";

  return (
    <h3 className={`flex items-center gap-2 ${colorClass} text-h5`}>
      <Image src={brandLogo} alt="brand logo" width={32} height={29.06} />
      <span>Ecobazar</span>
    </h3>
  );
};
