import Image from "next/image";
import { Benefit } from "../../types/benefit";

interface Props {
  list: Benefit[];
}

export const OurBenefits = ({ list }: Props) => {
  return (
    <ul className="flex flex-wrap items-center gap-x-5 lg:grid lg:grid-rows-3 lg:grid-cols-2 gap-y-6">
      {list.map(({ id, image, alt, title, subtitle }) => (
        <li key={id} className="flex gap-4 items-center">
          <div className="p-4 rounded-full bg-primary/10 w-fit flex items-center justify-center">
            <Image src={image} alt={alt} />
          </div>

          <div>
            <h5 className="mb-1 text-gray-900 text-large font-medium">
              {title}
            </h5>
            <span className="text-gray-500 text-small">{subtitle}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
