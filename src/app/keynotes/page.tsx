import { Main } from "@ui/Main";
import { speakers } from "./data";
import { ProfileCard } from "@/components/ui/ProfileCard";
import { Cover } from "@ui/Cover.Heading";

export default function Page() {
  return (
    <>
      <Cover heading="Tentative Keynote Speakers" />
      <Main className="pt-0">
        <div className="flex h-max flex-wrap items-stretch justify-center gap-5">
          {speakers.map((member) => {
            return <ProfileCard member={member} key={member.name} />;
          })}
        </div>
      </Main>
    </>
  );
}
