import type { ProfileCard } from "@/lib/types";
import Image from "next/image";
import { FC } from "react";

interface Props {
  member: ProfileCard;
}

const ProfileCard: FC<Props> = function ({ member }) {
  return (
    <div className="group flex w-56 flex-col items-center justify-start rounded-lg border bg-dominant p-2 text-center">
      <div className="h-48 w-48 overflow-hidden rounded-md">
        <Image
          src={member.image}
          alt={member.name}
          height="150"
          className="h-full w-full  object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {member.href ? (
        <a
          className="mt-5 font-bold text-heading transition-colors duration-300 hover:text-dominant"
          href={member.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {member.name}
        </a>
      ) : (
        <h3 className="mt-5 font-bold text-heading">{member.name}</h3>
      )}

      <div className="mt-2 h-1 w-12 rounded-3xl bg-accent"></div>
      <p className="mt-2 text-muted">{member.description}</p>
    </div>
  );
};

export { ProfileCard };
