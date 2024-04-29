import { SocialLinks } from "@/features/components/social-links/social-links";
import Image, { StaticImageData } from "next/image";

interface Props {
  imageSrc: StaticImageData;
  alt: string;
  teamPlayerName: string;
  role: string;
}

export const TeamCard = ({
  imageSrc,
  alt,
  teamPlayerName,
  role,
}: Props): JSX.Element => {
  return (
    <article className="rounded-md border w-fit shadow">
      <div className="group relative">
        <Image className="rounded-t-md h-full" src={imageSrc} alt={alt} />
        <div className="hidden group-hover:flex absolute top-0 left-0 w-full h-full bg-black/50 rounded-t-md justify-center items-center">
          <SocialLinks defaultIconColor="white" />
        </div>
      </div>
      <div className="px-5 pt-4 pb-5 flex flex-col gap-1">
        <span className="text-large font-medium text-gray-900">
          {teamPlayerName}
        </span>
        <span className="text-small text-gray-500">{role}</span>
      </div>
    </article>
  );
};
