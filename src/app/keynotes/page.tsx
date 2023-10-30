import { Main } from "@ui/Main";
import { speakers } from "./data";
import { ImageCard } from "@ui/ImageCard";

export default function Page() {
  return (
    <Main>
      <h1 className="mb-10 text-center text-4xl font-bold">
        Tentative Keynote Speakers
      </h1>
      <div className="flex h-max flex-wrap items-stretch justify-center gap-5">
        {speakers.map((member) => {
          return <ImageCard member={member} key={member.name} />;
        })}
      </div>
    </Main>
  );
}
