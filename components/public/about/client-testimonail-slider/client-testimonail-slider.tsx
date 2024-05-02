"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { ClientTestimonailCard } from "@/features/about/components/client-testimonail-card/client-testimonail-card";
import { CLIENT_TESTIMONAIL_BREAKPOINTS } from "@/features/about/configs/client-testimonail-breakpoints";
import { ClientTestimonail } from "@/features/about/shared/interfaces/client-testimonail";

interface Props {
  list: ClientTestimonail[];
}

export const ClientTestimonailSlider = ({ list }: Props): JSX.Element => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={24}
      pagination={{
        clickable: true,
        el: ".pagination-client-testimonail",
        type: "bullets",
      }}
      breakpoints={CLIENT_TESTIMONAIL_BREAKPOINTS}
      modules={[Pagination, Navigation]}
      navigation={{
        prevEl: ".prev-slide",
        nextEl: ".next-slide",
      }}
    >
      {list.map(({ id, feedback, stars, imageSrc, name, role }) => (
        <SwiperSlide key={id}>
          <ClientTestimonailCard
            feedback={feedback}
            stars={stars}
            imageSrc={imageSrc}
            name={name}
            role={role}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
