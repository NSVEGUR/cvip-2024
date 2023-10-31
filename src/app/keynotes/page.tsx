import { Main } from "@ui/Main";
import { speakers } from "./data";
import { ImageCard } from "@ui/ImageCard";
import { Cover } from "@ui/Cover.Heading";

export default function Page() {
  return (
    <>
      <Cover heading="Tentative Keynote Speakers" />
      <Main className="pt-0">
        <div className="flex h-max flex-wrap items-stretch justify-center gap-5">
          {speakers.map((member) => {
            return <ImageCard member={member} key={member.name} />;
          })}
        </div>
      </Main>
    </>
  );
}
