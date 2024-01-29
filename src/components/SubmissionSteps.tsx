interface SubmissionStepsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Publication({ className }: SubmissionStepsProps) {
  return (
    <section className={className}>
      <p>
        All accepted and presented papers will be submitted for publication with
        Springer in Communications in Computer and Information Science (CCIS).
        All previous editions of CVIP have been successfully published in the
        Springer Book Series. Successfully presented papers are indexed by ISI
        Proceedings, DBLP, Google Scholar, EI-Compendex, Mathematical Reviews,
        SCImago, Scopus and Springer link, etc.
      </p>
      <p>
        The authors of selected papers presented at the CVIP-2022 conference
        will be invited to submit the extended version of their work in the
        Special Issue of SN Computer Science (Scopus Indexed Journal).s
      </p>
    </section>
  );
}

export function PaperSubmission({ className }: SubmissionStepsProps) {
  return (
    <section className={className}>
      <p>
        Prospective authors are invited to submit full-length original research
        papers. In submitting a manuscript to CVIP 2024, authors acknowledge
        that no paper substantially similar in content has been or will be
        submitted to another journal, conference or workshop during the review
        period. In such a case, the paper will be rejected without review.
      </p>
      <p>
        Papers must be electronically submitted to the Microsoft Research paper
        submission portal before the deadline expires without exception.
      </p>
      <p>
        Authors should prepare their manuscripts of 12-15 pages (including all
        text, figures, and references). The manuscript must be submitted in pdf
        format only and the file size of your manuscript should not exceed 10 MB
        as per guidelines of Springer-CCIS Series{" "}
        <a
          href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
          className="font-bold text-accent underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          (Click)
        </a>
        .
      </p>
      <p>
        Use a proper tool to convert the resulting source into a pdf document
        that has only scalable fonts with all fonts embedded.
      </p>
      <p>
        The images embedded in the paper must not contain transparent pixels
        (i.e., an alpha-channel of a transparent color) since this could lead to
        problems when displaying or printing the pdf.
      </p>
      <p>
        The pdf manuscript must not have Adobe Document Protection or Document
        Security enabled.
      </p>
      <h2 className="py-5 text-xl font-bold text-heading">Proceedings:</h2>
      <p>
        The proceedings of the conference will be published by Scopus Indexed ‐
        Springer in{" "}
        <a
          href="https://www.springer.com/series/7899"
          className="font-bold text-accent underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Communications in Computer and Information Science series
        </a>
        . CCIS is abstracted/ indexed in DBLP, Google Scholar, EI-Compendex,
        Mathematical Reviews, SCImago, Scopus. CCIS volumes are also submitted
        for the inclusion in ISI Proceedings.
      </p>
      <h2 className="py-5 text-xl font-bold text-heading">
        Preparing Your Proceedings Paper:
      </h2>
      <p>
        For your convenience, we have summarized in the “Author Guidelines”
        document how a proceedings paper should be structured, how elements
        (headings, figures, references) should be formatted using our predefined
        styles, etc. We also give some insight on how your paper will be typeset
        at CVIP. The PDF of the Authors Guidelines can be downloaded here{" "}
        <a
          href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
          className="font-bold text-accent underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Proceedings Guidelines for Authors
        </a>
        .
      </p>
      <h2 className="py-5 text-xl font-bold text-heading">
        Proceedings Guidelines for Authors
      </h2>
      <p>
        Authors must use the manuscript template specified here. The LaTeX and
        Word templates can be downloaded from the following links:
      </p>
      <ul className="ml-5 list-disc">
        <li>
          <a
            href="/docs/LaTeX2e_CVIP-2024.zip"
            className="font-bold text-accent underline"
            download={true}
          >
            Latex Template
          </a>
        </li>
        <li>
          <a
            href="/docs/Microsoft_Word_CVIP-2024.zip"
            className="font-bold text-accent underline"
            download={true}
          >
            Word Template
          </a>
        </li>
      </ul>
      <p>
        Authors can use the{" "}
        <a
          href="https://www.overleaf.com/latex/templates/springer-lecture-notes-in-computer-science/kzwwpvhwnvfj#.WuA4JS5uZpi"
          className="font-bold text-accent underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LaTeX2e Proceedings Templates
        </a>{" "}
        available in the scientific authoring platform Overleaf.
      </p>
    </section>
  );
}

export function Manuscript({ className }: SubmissionStepsProps) {
  return (
    <section className={className}>
      <p>
        The manuscript has to be uploaded online at the CVIP 2024 Microsoft
        Research paper submission portal at the following link:{" "}
      </p>
      <a
        href="https://cmt3.research.microsoft.com/CVIP2024"
        className="font-bold text-accent underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://cmt3.research.microsoft.com/CVIP2024
      </a>
    </section>
  );
}
