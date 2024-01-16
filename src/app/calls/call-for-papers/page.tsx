import { Cover } from "@/components/ui/Cover.Heading";
import { Main } from "@/components/ui/Main";
import ComingSoon from "@components/ComingSoon";

export default function Page() {
  const tracks = [
    "Activity Detection/ Recognition",
    "Biometrics, Forensics, Content Protection",
    "Compressed Image/ Video Analytics",
    "Computational Imaging",
    "Datasets and Evaluation",
    "Deep Learning for Computer Vision",
    "Document and Synthetic Visual Processing",
    "Document Image Analysis",
    "Explainable AI for Computer Vision",
    "Face, Iris, Emotion, Sign Language and Gesture Recognition",
    "Generative AI for Computer Vision",
    "Human Computer Interaction",
    "Image Enhancement /Super Resolution / Restoration",
    "Image/ Video Processing for Autonomous Vehicles",
    "Image/ Video Retrieval",
    "Image/ Video Scene Understanding",
    "Image/ Video Security and Quality Assessment",
    "Medical Image Analysis",
    "Motion and Tracking",
    "Remote Sensing, Hyperspectral Image Processing",
    "Segmentation and Shape Representation",
    "Vision based Human Gait Analysis",
    "Visual Sensor Hardware, Visual Surveillance",
    "3D Image/ Video Processing",
  ];
  return (
    <>
      <Cover heading="Call for Papers" />
      <Main className="min-h-fit text-lg">
        <p>
          CVIP 2024 welcomes the high-quality original research that represents
          methodological innovations in the area of artificial intelligence,
          computer vision and image processing and other allied areas.
          Prospective authors are invited to submit their original contribution.
          Tracks for CVIP 2024 include, but not limited to
        </p>
        <section className="my-5 grid grid-cols-2 gap-5 rounded-md bg-muted p-5 text-base">
          <ul className="ml-5 list-disc space-y-2">
            {tracks.slice(0, 11).map((track) => (
              <li key={track}>{track}</li>
            ))}
          </ul>
          <ul className="ml-5 list-disc space-y-2">
            {tracks.slice(11).map((track) => (
              <li key={track}>{track}</li>
            ))}
          </ul>
        </section>
        <p>
          All previous editions of CVIP have been successfully published in
          Springer, Communications in Computer and Information Science series
          (CCIS). Conference Proceedings will be abstracted and indexed in DBLP,
          Google Scholar, EI-Compendex, Mathematical Reviews, ISI Proceedings,
          SCImago, and Scopus.
        </p>
        <div className="mt-10">
          <a
            href="/docs/CFP_CVIP_2024.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent hover:underline"
          >
            Call for Paper can be found here (PDF)
          </a>
        </div>
      </Main>
    </>
  );
}
