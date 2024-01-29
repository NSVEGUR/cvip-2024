import { Manuscript, PaperSubmission } from "@/components/SubmissionSteps";
import { Cover } from "@/components/ui/Cover.Heading";
import { Main } from "@/components/ui/Main";

export default function Page() {
  return (
    <>
      <Cover heading="Instructions for Preparing Manuscripts" />
      <Main>
        <article className="space-y-3 text-lg">
          <PaperSubmission className="space-y-3 " />
          <h2 className="py-5 text-xl font-bold text-heading">
            Instruction for Manuscript Submission
          </h2>
          <Manuscript />
        </article>
      </Main>
    </>
  );
}
