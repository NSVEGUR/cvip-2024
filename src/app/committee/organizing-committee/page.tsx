import { Main } from "@ui/Main";
import { members } from "./data";
import { ProfileCard } from "@/components/ui/ProfileCard";
import { Cover } from "@ui/Cover.Heading";

export default function Page() {
  return (
    <>
      <Cover heading="Organizing Committee" />
      <Main className="mb-10">
        <ul className="flex flex-col items-center gap-20">
          {Object.entries(members).map(([heading, members], index) => {
            return (
              <li key={index}>
                <h2 className="mb-5 text-center text-2xl font-bold text-accent">
                  {heading}
                </h2>
                <div className="flex h-max flex-wrap items-stretch justify-center gap-5">
                  {members.map((member) => {
                    return <ProfileCard member={member} key={member.name} />;
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      </Main>
    </>
  );
}
