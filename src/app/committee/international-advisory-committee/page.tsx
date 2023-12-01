import { Main } from "@ui/Main";
import { members } from "./data";
import { ProfileCard } from "@/components/ui/ProfileCard";
import { Cover } from "@ui/Cover.Heading";

export default function Page() {
  return (
    <>
      <Cover heading="International Advisory Committee" />
      <Main className="mb-10">
        <ul className="flex flex-col items-center gap-20">
            <li className="flex h-max flex-wrap items-stretch justify-center gap-5">
                {members.map((member) => {
                return <ProfileCard member={member} key={member.name} />;
                })}
            </li>
        </ul>
      </Main>
    </>
  );
}
