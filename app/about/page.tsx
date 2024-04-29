import Image from "next/image";

import farmerImage from "@/public/images/about/images/farmer.jpg";
import wheatImageBackground from "@/public/images/about/images/backgroun-wheat.png";
import oldFarmerImage from "@/public/images/about/images/old-farmer.png";
import { OurBenefits } from "@/features/about/components/our-benefits/our-benefits";
import { ourBenefitsList } from "@/features/about/constants/our-benefits-list";
import { BackgroundImage } from "@/features/about/components/background-image/background-image";
import { Introducing } from "@/features/about/components/introducing/introducing";
import { AboutOurBenefits } from "@/features/about/components/about-our-benefits/about-our-benefits";

import delivererImage from "@/public/images/about/images/deliverer.png";
import { Delivering } from "@/features/about/components/delivering/delivering";
import { OurTeam } from "@/features/about/components/our-team/our-team";
import { teamPlayersList } from "@/features/about/constants/team-players-list";

export default function About() {
  return (
    <div>
      <section className="container my-10 lg:my-20 flex">
        <Introducing image={farmerImage} />
      </section>
      <section className="relative my-10 lg:my-0">
        <BackgroundImage image={wheatImageBackground} />

        <div className="relative z-50 container flex gap-6">
          <div className="hidden lg:block">
            <Image
              className="h-full"
              src={oldFarmerImage}
              alt="There is a farmer on the picture which is keeping the full basket of vegetables"
            />
          </div>
          <article className="flex-[50%] flex flex-col justify-center">
            <AboutOurBenefits />

            <OurBenefits list={ourBenefitsList} />
          </article>
        </div>
      </section>
      <section className="container my-10 lg:mt-20 lg:mb-0 flex items-center gap-11">
        <Delivering />

        <div className="hidden lg:inline-flex aspect-[896px/606px]">
          <Image src={delivererImage} alt="There is develiverer on the image" />
        </div>
      </section>
      <section className="py-8 lg:py-20 bg-gradient-to-r from-[#f2f2f2] to-white">
        <div className="container flex flex-col items-center">
          <h2 className="text-center mb-3 text-xxl lg:text-h2 font-semibold max-w-[550px] text-gray-900">
            Our Awesome Team
          </h2>
          <p className="mb-12 text-center block text-gray-500 text-medium lg:text-large max-w-[640px]">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi.
          </p>

          <OurTeam list={teamPlayersList} />
        </div>
      </section>
    </div>
  );
}
