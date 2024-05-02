import { StaticImageData } from "next/image";

export interface TeamPlayer {
  id: number;
  imageSrc: StaticImageData;
  alt: string;
  teamPlayerName: string;
  role: string;
}
