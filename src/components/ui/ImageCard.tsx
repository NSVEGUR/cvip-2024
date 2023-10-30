import type { ImageCard } from "@/lib/types";
import Image from "next/image";
import { FC } from "react";

interface Props {
  member: ImageCard;
}

const ImageCard: FC<Props> = function ({ member }) {
  return (
    <div className="flex w-64 flex-col items-center justify-start rounded-lg border p-2 text-center shadow">
      <Image
        src={member.image}
        alt={member.name}
        height="225"
        className="rounded-md object-cover"
      />
      <h3 className="mt-5 font-medium">{member.name}</h3>
      <p className="mt-2 text-muted">{member.description}</p>
    </div>
  );
};

export { ImageCard };
