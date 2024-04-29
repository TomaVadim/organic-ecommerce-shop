"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { TeamPlayer } from "@/features/about/types/team-player";
import { TeamCard } from "@/features/about/components/team-card/team-card";
import { ArrowNextSlide } from "@/public/images/about/icons/arrow-next-slide";
import { ArrowPrevSlide } from "@/public/images/about/icons/arrow-prev-slide";
import { BREAKPOINTS } from "@/features/about/components/our-team/breakpoints";
import { SliderNavigationButton } from "@/features/about/components/slider-navigation-button/slider-navigation-button";

import "swiper/css";
import "swiper/css/pagination";

interface Props {
  list: TeamPlayer[];
}

export const OurTeam = ({ list }: Props): JSX.Element => {
  return (
    <div className="container flex flex-col gap-5 md:flex-row items-center">
      <SliderNavigationButton className="prev">
        <ArrowPrevSlide />
      </SliderNavigationButton>

      <Swiper
        className="w-[88%]"
        pagination={{
          clickable: true,
          el: ".pagination",
          type: "bullets",
        }}
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        breakpoints={BREAKPOINTS}
      >
        {list.map(({ id, imageSrc, alt, teamPlayerName, role }) => (
          <SwiperSlide key={id}>
            <TeamCard
              imageSrc={imageSrc}
              alt={alt}
              teamPlayerName={teamPlayerName}
              role={role}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pagination flex gap-2 justify-center [&>.swiper-pagination-bullet-active]:bg-primary md:hidden"></div>

      <SliderNavigationButton className="next">
        <ArrowNextSlide />
      </SliderNavigationButton>
    </div>
  );
};
