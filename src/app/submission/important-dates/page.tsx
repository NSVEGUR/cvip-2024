import { Cover } from "@ui/Cover.Heading";
import { Main } from "@ui/Main";
import ImportantDates from "@/components/ImportantDates";

export default function Page() {
  return (
    <>
      <Cover heading="Important Dates" />
      <Main>
        <section className="my-10 flex flex-col items-center justify-center px-3">
          <ImportantDates />
        </section>
        <section className="my-3 text-justify text-lg">
          <p>
            As in previous years, CVIP 2024 will employ a two-round review
            process. New papers can be submitted in either the first or the
            second round. The primary benefit of submitting in First round is
            that submissions which are not accepted early in the first round can
            be revised and resubmitted along with a rebuttal, enabling authors
            to address reviewer concerns. Second round submissions will not have
            a rebuttal.
          </p>
        </section>
      </Main>
    </>
  );
}
