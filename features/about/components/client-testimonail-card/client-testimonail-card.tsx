import Image, { StaticImageData } from "next/image";

import { BrasketsIcon } from "@/public/images/about/icons/braskets";
import { StarIcon } from "@/public/images/about/icons/star-icon";

interface Props {
  feedback: string;
  stars: number;
  imageSrc: StaticImageData;
  name: string;
  role: string;
}
export const ClientTestimonailCard = ({
  feedback,
  stars,
  imageSrc,
  name,
  role,
}: Props): JSX.Element => {
  const starsLength = Array.from({ length: stars }, (_, i) => i + 1);

  return (
    <article className="flex flex-col gap-4 p-6 rounded-md drop-shadow bg-white">
      <BrasketsIcon />
      <p className="text-gray-700 text-small">{feedback}</p>

      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <Image src={imageSrc} alt={`${name} photo`} />
          </div>
          <div>
            <span className="block text-small md:text-medium font-semibold text-gray-900">
              {name}
            </span>
            <span className="block text-small text-gray-500">{role}</span>
          </div>
        </div>

        <div className="flex gap-[2px]">
          {starsLength.map(() => (
            <StarIcon />
          ))}
        </div>
      </div>
    </article>
  );
};
