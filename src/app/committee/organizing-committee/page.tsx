import { Main } from "@ui/Main";
import { members } from "./data";
import { ImageCard } from "@ui/ImageCard";

export default function Page() {
  return (
    <Main>
      <h1 className="mb-10 text-center text-4xl font-bold">
        Organizing Committee
      </h1>
      <ul className="flex flex-col items-center gap-10">
        {Object.entries(members).map(([heading, members], index) => {
          return (
            <li key={index}>
              <h2 className="mb-5 text-center text-xl font-bold text-accent">
                {heading}
              </h2>
              <div className="flex h-max flex-wrap items-stretch justify-center gap-5">
                {members.map((member) => {
                  return <ImageCard member={member} key={member.name} />;
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </Main>
  );
}
