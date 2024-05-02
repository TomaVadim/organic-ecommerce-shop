import { StaticImageData } from "next/image";

export interface ClientTestimonail {
  id: number;
  feedback: string;
  name: string;
  role: string;
  imageSrc: StaticImageData;
  stars: number;
}
