import { Cover } from "@ui/Cover.Heading";
import { Main } from "@ui/Main";
import ImportantDates from "@/components/ImportantDates";

export default function Page() {
  return (
    <>
      <Cover heading="Important Dates" />
      <Main>
        <section className="my-10 flex flex-col items-center justify-center px-3">
          <ImportantDates/>
        </section>
      </Main>
    </>
  );
}
