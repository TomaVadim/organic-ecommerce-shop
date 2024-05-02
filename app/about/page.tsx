import Image from "next/image";

import farmerImage from "@/public/images/about/images/farmer.jpg";
import wheatImageBackground from "@/public/images/about/images/backgroun-wheat.png";
import oldFarmerImage from "@/public/images/about/images/old-farmer.png";
import { OurBenefits } from "@/features/about/components/our-benefits/our-benefits";
import { ourBenefitsList } from "@/features/about/constants/our-benefits-list";
import { BackgroundImage } from "@/features/about/components/background-image/background-image";
import { Introducing } from "@/components/public/about/introducing/introducing";
import { AboutOurBenefits } from "@/components/public/about/about-our-benefits/about-our-benefits";

import delivererImage from "@/public/images/about/images/deliverer.png";
import { Delivering } from "@/components/public/about/delivering/delivering";
import { OurTeamSlider } from "@/components/public/about/our-team-slider/our-team-slider";
import { teamPlayersList } from "@/features/about/constants/team-players-list";
import { ClientTestimonailSlider } from "@/components/public/about/client-testimonail-slider/client-testimonail-slider";
import { SliderNavigationButton } from "@/features/about/components/slider-navigation-button/slider-navigation-button";
import { ArrowPrevSlide } from "@/public/images/about/icons/arrow-prev-slide";
import { ArrowNextSlide } from "@/public/images/about/icons/arrow-next-slide";
import { Partners } from "@/components/public/about/partners/partners";
import { clientTestimonailList } from "@/features/about/constants/client-testimonail-list";

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

          <OurTeamSlider list={teamPlayersList} />
        </div>
      </section>

      <section className="bg-gray-100 w-full py-8 lg:py-24 tracking-wide">
        <div className="mb-6 lg:mb-12 container flex justify-between items-center">
          <h2 className="text-xxl lg:text-h2 font-semibold text-dark">
            Client Testimonail
          </h2>

          <div className="flex gap-3">
            <SliderNavigationButton className="prev-slide bg-white">
              <ArrowPrevSlide />
            </SliderNavigationButton>

            <SliderNavigationButton className="next-slide bg-white">
              <ArrowNextSlide />
            </SliderNavigationButton>
          </div>
        </div>

        <div className="container">
          <ClientTestimonailSlider list={clientTestimonailList} />

          <div className="mt-5 pagination-client-testimonail flex gap-2 justify-center [&>.swiper-pagination-bullet-active]:bg-primary md:hidden"></div>
        </div>
      </section>

      <section className="hidden lg:block container py-20">
        <Partners />
      </section>
    </div>
  );
}
