import Image, { StaticImageData } from "next/image";

export const Introducing = ({
  image,
}: {
  image: StaticImageData;
}): JSX.Element => {
  return (
    <>
      <article className="flex flex-col justify-center gap-4 lg:gap-8">
        <h2 className="text-h5 lg:text-h1 font-semibold max-w-[550px] text-gray-900">
          100% Trusted Organic Food Store
        </h2>
        <p className="text-gray-500 text-medium lg:text-large max-w-[590px]">
          Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
          laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
          Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a
          eros non massa vulputate ornare. Vivamus ornare commodo ante, at
          commodo felis congue vitae.
        </p>
      </article>
      <div className="hidden flex-[50%] lg:flex justify-end aspect-[716px/492px]">
        <Image
          src={image}
          alt="There is a farmer on the picture which is keeping the full basket of vegetables"
        />
      </div>
    </>
  );
};
