import { ImageResponse } from "next/og";
import Favicon from "@/components/marginals/Favicon";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<Favicon />, {
    ...size,
  });
}
