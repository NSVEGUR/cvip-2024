import { StaticImageData } from "next/image";

export type ProfileCard = {
  name: string;
  image: StaticImageData;
  description: string;
  href?: string;
};
