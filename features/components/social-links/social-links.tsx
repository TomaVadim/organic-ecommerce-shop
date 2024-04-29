import { FacebookIcon } from "@/public/images/footer/icons/facebook";
import { InstagramIcon } from "@/public/images/footer/icons/instagram";
import { TwitterIcon } from "@/public/images/footer/icons/twitter";
import { PinterestIcon } from "@/public/images/footer/icons/pinterest";

interface Props {
  defaultIconColor: string;
  hoverIconColor?: string;
}

export const SocialLinks = ({
  defaultIconColor,
  hoverIconColor,
}: Props): JSX.Element => {
  const hoverColor = hoverIconColor ? hoverIconColor : defaultIconColor;

  return (
    <div className="flex gap-2 col-start-11 col-span-2 place-content-end place-items-center">
      <a
        href="#"
        className={`w-10 h-10 flex text-${defaultIconColor} hover:text-${hoverColor} items-center justify-center rounded-full hover:bg-primary transition-colors duration-300`}
      >
        <FacebookIcon />
      </a>
      <a
        href="#"
        className={`w-10 h-10 flex text-${defaultIconColor} hover:text-${hoverColor} items-center justify-center rounded-full hover:bg-primary transition-colors duration-300`}
      >
        <TwitterIcon />
      </a>
      <a
        href="#"
        className={`w-10 h-10 flex text-${defaultIconColor} hover:text-${hoverColor} items-center justify-center rounded-full hover:bg-primary transition-colors duration-300`}
      >
        <PinterestIcon />
      </a>
      <a
        href="#"
        className={`w-10 h-10 flex text-${defaultIconColor} hover:text-${hoverColor} items-center justify-center rounded-full hover:bg-primary transition-colors duration-300`}
      >
        <InstagramIcon />
      </a>
    </div>
  );
};
