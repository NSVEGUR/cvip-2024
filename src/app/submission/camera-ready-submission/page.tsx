import { Cover } from "@/components/ui/Cover.Heading";
import { Main } from "@/components/ui/Main";

export default function Page() {
  return (
    <>
      <Cover heading="Camera Ready Submission" />
      <Main className="min-h-max space-y-5">
        <ol className="mb-5 font-bold text-complement">
          <li>
            Registration and camera-ready submission portals open (Round 1):{" "}
            <span className="text-red-500">July 05, 2024</span>
          </li>
          <li>
            Deadline for camera-ready submission (Round 1):{" "}
            <span className="text-red-500">August 01, 2024</span>
          </li>
          <li>
            Deadline for early bird registration (Round 1):{" "}
            <span className="text-red-500">August 01, 2024</span>
          </li>
        </ol>
        <p>
          Each accepted paper must be accompanied by the author's registration.
          Papers that are not accompanied by the author registration will not be
          included in the conference proceedings and will not appear in the
          Springer CCIS series
        </p>
        <ol className="mb-5 font-medium text-blue-500 ">
          <li>
            <a href="/registration" className="hover:text-blue-800">
              Registration webpage
            </a>
          </li>
          <li>
            <a href="#paper" className="hover:text-blue-800">
              Instructions for preparing the final camera-ready paper
            </a>
          </li>
          <li>
            <a href="#copyright" className="hover:text-blue-800">
              Instructions for preparing the copyright form
            </a>
          </li>
          <li>
            <a href="#steps" className="hover:text-blue-800">
              Step-by-step procedure for uploading the camera-ready submission
            </a>
          </li>
        </ol>
        <p>
          Read these instructions carefully and follow them exactly to minimize
          the problems and delays with the production of the conference
          proceedings.
        </p>
      </Main>
      <section
        className="flex flex-col items-center justify-center space-y-5 bg-muted px-20 py-10"
        id="paper"
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="text-xl font-bold">
            Instructions for preparing the final camera-ready paper
          </h1>
          <div className="h-[3px] w-20 bg-accent"></div>
        </div>
        <ol className="mx-auto max-w-7xl list-decimal space-y-2 pl-10">
          <li>
            The deadline for camera-ready (Round 1) submission is{" "}
            <span className="text-red-500">
              August 01, 2024, at 11:59 P.M. Pacific Time .
            </span>{" "}
            This deadline will not be extended. Papers submitted after the
            deadline may not be included in the conference proceedings.
          </li>
          <li>
            Authors should submit their accepted manuscript as per{" "}
            <a
              href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
              className="text-blue-500 hover:text-blue-800"
            >
              Springer CCIS
            </a>{" "}
            format (
            <a
              href="/docs/Microsoft_Word_CVIP-2024.zip"
              className="text-blue-500 hover:text-blue-800"
            >
              Word
            </a>{" "}
            /{" "}
            <a
              href="/docs/LaTeX2e_CVIP-2024.zip"
              className="text-blue-500 hover:text-blue-800"
            >
              LaTeX
            </a>{" "}
            ).
          </li>
          <li>
            Please make sure that the{" "}
            <span className="text-red-500">similarity index</span> of your
            camera-ready submission is{" "}
            <span className="text-red-500">below 20%</span> (excluding the
            bibliography/references) and{" "}
            <span className="text-red-500">below 15%</span> for single source
            similarities, using standard plagiarism checking software (e.g.,
            Turnitin, etc.), before submitting the camera-ready paper. Papers
            with a similarity score greater than 20% in total and/or greater
            than 15% for a single source will not be included in the conference
            proceedings.
          </li>
          <li>
            Please include all authors' details{" "}
            <span className="text-red-500">
              (Name, Affiliation, and Email address)
            </span>{" "}
            in the final manuscript as mentioned in your initial submission.
          </li>
          <li>
            The page limit for all papers is{" "}
            <span className="text-red-500">15 pages</span> including figures,
            tables, equations, references, acknowledgments, etc. Note that there
            are extra-page charges if the page limit exceeds 15 pages. If the
            final manuscript in Springer provided format{" "}
            <span className="text-red-500">exceeds 15 pages,</span> INR 2400 or
            USD 30 per extra page will be charged.
          </li>
        </ol>
      </section>
      <Main className="min-h-max space-y-5" id="copyright">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="text-xl font-bold">
            Instructions for preparing the copyright form
          </h1>
          <div className="h-[3px] w-20 bg-accent"></div>
        </div>
        <ol className="mx-auto max-w-7xl list-decimal space-y-2 pl-5">
          <li>
            Copyright form can be downloaded here ({" "}
            <a
              href="/docs/camera-ready-copy-right.docx"
              className="text-blue-500 hover:text-blue-800"
            >
              Word
            </a>
            {" / "}
            <a
              href="/docs/camera-ready-copy-right.pdf"
              className="text-blue-500 hover:text-blue-800"
            >
              PDF
            </a>{" "}
            ).
          </li>
          <li>
            Fill the following details as per the information submitted earlier
            to CVIP 2024. Any changes in the paper title and name of authors
            will not be entertained.
            <ol className="mt-2 list-decimal space-y-2 pl-4">
              <li>Proposed title of the contribution</li>
              <li>Author(s) Full Name(s)</li>
              <li>Corresponding Author Name</li>
            </ol>
          </li>
          <li>
            Sign the copyright form and fill the other details such as date,
            address, E-mail id, name, etc.
          </li>
          <li>
            Please don't change any pre-filled information in the copyright
            form.
          </li>
        </ol>
      </Main>
      <section
        className="flex flex-col items-center justify-center space-y-5 bg-muted px-20 py-10"
        id="paper"
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="text-xl font-bold">
            Step-by-step procedure for uploading the camera-ready submission
          </h1>
          <div className="h-[3px] w-20 bg-accent"></div>
        </div>
        <ol className="mx-auto max-w-7xl list-decimal space-y-2 pl-10">
          <li>
            Followings files need to be submitted by{" "}
            <span className="text-red-500">August 01, 2024.</span>
            <ol className="mt-2 list-decimal space-y-2 pl-4">
              <li>
                Final Camera Ready Copy{" "}
                <span className="text-red-500">(in PDF format)</span> of
                accepted manuscript as per Springer CCIS format
              </li>
              <li>
                Source Editable{" "}
                <span className="text-red-500">(Word/LaTeX format)</span> file
                of Camera Ready Copy (in Zip folder) with all supporting files
              </li>
              <li>
                Filled and Signed Copyright Form{" "}
                <span className="text-red-500">(in PDF format)</span>
              </li>
            </ol>
          </li>
          <li>
            The name of your final Camera Ready Copy must be in the form{" "}
            <span className="text-red-500">xxx.pdf</span> where xxx is the
            three-digit paper ID (zero-padded if necessary). For example, if
            your <span className="text-red-500">paper ID is 24</span>, the
            filename must be <span className="text-red-500">024.pdf.</span>
          </li>
          <li>
            Similarly, Source Editable Manuscript with all supporting files in
            ZIP folder must be in the form{" "}
            <span className="text-red-500">xxx.zip</span> where xxx is the
            three-digit paper ID (zero-padded if necessary). For example, if
            your <span className="text-red-500">paper ID is 24</span>, the
            filename must be <span className="text-red-500">024.zip.</span>
          </li>
          <li>
            Similarly, the name of Copyright Form must be in the form{" "}
            <span className="text-red-500">CRF_xxx.pdf</span> where xxx is the
            three-digit paper ID (zero-padded if necessary). For example, if
            your <span className="text-red-500">paper ID is 24</span>, the
            filename must be <span className="text-red-500">CRF_024.pdf.</span>
          </li>
          <li>
            Login to the CMT site:{" "}
            <a
              className="text-blue-500 hover:text-blue-800"
              href="https://cmt3.research.microsoft.com/CVIP2024"
            >
              https://cmt3.research.microsoft.com/CVIP2024
            </a>
          </li>
          <li>
            In the CMT “<span className="text-red-500">Author Console</span>”,
            your accepted paper(s) will appear with a “
            <span className="text-red-500">Create Camera Ready Submission</span>
            ” link. Click on the “
            <span className="text-red-500">Create Camera Ready Submission</span>
            ” link to take you to the camera-ready submission page for your
            accepted paper.
          </li>
          <li>
            After reading the “Welcome” message on the camera-ready submission
            page, verify that the paper title and abstract are correct in the “
            <span className="text-red-500">Title and Abstract</span>” section.
          </li>
          <li>
            Please verify that you{" "}
            <span className="font-bold text-heading">
              upload the final camera-ready paper PDF, Zip folder of source
              files (in Word or LaTeX) and signed Copyright form PDF.
            </span>
          </li>
          <li>
            Click the “<span className="text-red-500">Submit</span>” button or “
            <span className="text-red-500">Save changes</span>” button if you're
            editing a previous submission—at the bottom of the page to save all
            your changes. Unless you press the “Submit”/“Save changes” button,
            any changes you've made to the camera-ready submission (including
            file uploads and changes to the title, abstract, and author list)
            will not be saved.
          </li>
        </ol>
      </section>
    </>
  );
}
