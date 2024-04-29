import Image, { StaticImageData } from "next/image";

export const BackgroundImage = ({
  image,
}: {
  image: StaticImageData;
}): JSX.Element => {
  return (
    <div className="hidden aspect-auto lg:block absolute inset-0">
      <Image
        style={{ width: "auto", height: "100%" }}
        src={image}
        alt="Image where is field with wheats"
      />
    </div>
  );
};
