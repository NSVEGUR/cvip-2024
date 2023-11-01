import type { ProfileCard } from "@/lib/types";
import Image from "next/image";
import { FC } from "react";

interface Props {
  member: ProfileCard;
}

const ProfileCard: FC<Props> = function ({ member }) {
  return (
    <div className="group flex w-64 flex-col items-center justify-start rounded-lg border bg-dominant p-2 text-center">
      <div className="h-56 w-56 overflow-hidden rounded-md">
        <Image
          src={member.image}
          alt={member.name}
          height="225"
          className="h-full w-full  object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="mt-5 font-medium">{member.name}</h3>
      <p className="mt-2 text-muted">{member.description}</p>
    </div>
  );
};

export { ProfileCard };
