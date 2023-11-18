import { Main } from "@ui/Main";
import { Link } from "@ui/Link";
import InstitutePoster from "@images/institute.webp";
import Image from "next/image";
import DateCounter from "@/app/DateCounter";
import Video from "@/app/Video";

export default function Home() {
  return (
    <Main className="scroll-smooth">
      <section className="flex min-h-container flex-col justify-evenly">
        <div className="flex min-h-[50vh] items-center justify-evenly gap-5 -lg:flex-col-reverse -sm:min-h-container">
          <div className="flex flex-col items-start gap-1 text-left text-lg -lg:items-center -lg:text-center">
            <p className="text-3xl text-muted">
              9th International Conference on
            </p>
            <h1 className="text-5xl font-bold -sm:text-2xl">
              Computer Vision & Image Processing
            </h1>
            <div className="font-bold text-accent">
              06-08 December, 2024{" "}
              <p className="font-normal text-muted">
                | <span className="font-bold text-heading">IIITDM</span>{" "}
                Kancheepuram,{" "}
                <span className="font-bold text-heading">Chennai</span> -
                600127, India
              </p>
            </div>
            <Link href="#more" className="mt-4">
              Explore More
            </Link>
          </div>
          <div className="group relative">
            <Image
              src={InstitutePoster}
              alt="institute-image"
              height="350"
              className="rounded-lg object-cover shadow-lg -sm:h-80"
            />
            <Video />
          </div>
        </div>
        <div className=" my-10 grid grid-cols-2 gap-5 rounded-lg bg-accent-soft p-5 text-center shadow-md -md:grid-cols-1">
          <div className="flex flex-col items-center">
            <h1 className="mb-1 text-xl font-medium">About CVIP 2024</h1>
            <div className="mb-3 h-[2px] w-20 bg-accent"></div>
            <p>
              CVIP is a premier annual conference focused on Computer Vision and
              Image Processing, with its high quality; it provides a great
              platform to students, academia, researchers and industry persons.
              CVIP 2024 is endorsed by the International Association for Pattern
              Recognition "IAPR".
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="mb-1 text-xl font-medium">Venue</h1>
            <div className="mb-3 h-[2px] w-8 bg-accent"></div>
            <p className="font-bold text-heading">
              <span className="text-accent">IIITDM Kancheepuram,</span> Chennai
              <span className="font-normal text-dominant">
                {" "}
                - 600127, India
              </span>
            </p>
            <p className="mt-2 font-bold text-heading">06-08 December, 2024</p>
            <DateCounter />
          </div>
        </div>
      </section>
      <section className="my-3">
        <h1 className="mb-10 text-center text-3xl font-bold">Introduction</h1>
        <p className="text-justify text-lg text-dominant">
          CVIP 2024, the 9th International Conference on Computer Vision & Image
          Processing will be held at Indian Institute of Information Technology
          Design and Manufacturing ( IIITDM), Chennai, Tamilnadu, INDIA from
          December 06-08, 2024. CVIP is a premier annual conference focused on
          Computer Vision and Image Processing, with its high quality; it
          provides a great platform to students, academia, researchers and
          industry persons. Previous editions of CVIP were held at IIT Jammu
          (2023), VNIT Nagpur ( 2022), IIT Ropar (CVIP 2021), IIIT Allahabad
          (CVIP 2020), MNIT Jaipur (CVIP 2019), IIIT Jabalpur (CVIP 2018), and
          IIT Roorkee (CVIP 2017 and CVIP 2016). Papers in the main technical
          program must describe high-quality original research. Prospective
          authors are invited to submit their original research contribution in
          the following tracks:
        </p>
      </section>
      <section className="mt-10 rounded-lg bg-muted p-5 shadow-md">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-2xl font-bold text-accent">
            Conference Talks
          </h1>
        </div>
        <div className="my-6 grid grid-cols-2 text-lg -sm:grid-cols-1">
          <ul className=" ml-5 list-disc space-y-2">
            <li>Biometrics, Forensics, Content Protection</li>
            <li>Medical Image Analysis</li>
            <li>3D Image/ Video Processing</li>
            <li>Image Enhancement /Super Resolution / Restoration</li>
            <li>Image/ Video Processing for Autonomous Vehicles</li>
            <li>Activity Detection/ Recognition</li>
            <li>Segmentation and Shape Representation</li>
            <li>Human Computer Interaction</li>
            <li>Computational Imaging</li>
            <li>Visual Sensor Hardware</li>
          </ul>
          <ul className=" ml-5 list-disc space-y-2">
            <li>Document Image Analysis</li>
            <li>Motion and Tracking</li>
            <li>Image/ Video Scene Understanding</li>
            <li>Image/ Video Retrieval</li>
            <li>Image/ Video Security</li>
            <li>Vision based Human GAIT Analysis</li>
            <li>Document and Synthetic Visual Processing</li>
            <li>Remote Sensing, Hyperspectral Image Processing</li>
            <li>Datasets and Evaluation</li>
            <li>Compressed Image/ Video Analytics</li>
            <li>Face, Iris, Emotion, Sign Language and Gesture Recognition</li>
          </ul>
        </div>
      </section>
      <section
        className="my-10 flex flex-col items-center justify-center"
        id="more"
      >
        <h1 className="mb-10 text-center text-3xl font-bold text-accent">
          Important Dates
        </h1>
        <div className="relative mt-3 max-w-[600px] overflow-x-auto rounded-lg border border-accent text-heading shadow-lg">
          <table className="w-full text-left text-base">
            <thead className="border-b border-accent bg-accent-soft text-heading">
              <tr>
                <th
                  scope="col"
                  className="border-r border-accent px-6 py-3 font-normal"
                  colSpan={2}
                >
                  Paper Submission Starts
                </th>
                <th scope="col" className="px-6 py-3 font-bold">
                  February 1st, 2024
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-accent">
                <th
                  scope="row"
                  className="whitespace-nowrap border-r border-accent px-6 py-4 font-medium"
                  rowSpan={2}
                >
                  First Round
                </th>
                <td className="border-r border-accent px-6 py-4">
                  Paper Submission Deadline
                </td>
                <td className="px-6 py-4 font-bold">April 1st, 2024</td>
              </tr>
              <tr className="border-b border-accent">
                <td className="border-r border-accent px-6 py-4">
                  Notification of Paper Acceptance
                </td>
                <td className="px-6 py-4 font-bold">June 1st, 2024</td>
              </tr>
              <tr className="border-b border-accent bg-accent-soft">
                <th
                  scope="row"
                  className="whitespace-nowrap border-r border-accent px-6 py-4 font-medium"
                  rowSpan={2}
                >
                  Second Round
                </th>
                <td className="border-r border-accent px-6 py-4">
                  Paper Submission Deadline
                </td>
                <td className="px-6 py-4 font-bold">August 1st, 2024</td>
              </tr>
              <tr className="border-b border-accent bg-accent-soft">
                <td className="border-r border-accent px-6 py-4">
                  Notification of Paper Acceptance
                </td>
                <td className="px-6 py-4 font-bold">October 15, 2024</td>
              </tr>
              <tr className="border-b border-accent">
                <td className="border-r border-accent px-6 py-4" colSpan={2}>
                  Camera Ready Submission Deadline
                </td>
                <td className="px-6 py-4 font-bold">October 30, 2024</td>
              </tr>
              <tr className="border-b border-accent bg-accent-soft">
                <td className="border-r border-accent px-6 py-4" colSpan={2}>
                  Early Bird Registration Deadline
                </td>
                <td className="px-6 py-4 font-bold">November 15, 2024</td>
              </tr>
              <tr>
                <td className="border-r border-accent px-6 py-4" colSpan={2}>
                  Conference Dates
                </td>
                <td className="px-6 py-4 font-bold">December 06-08, 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Main>
  );
}
