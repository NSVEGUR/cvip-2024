import Main from "@ui/Main";
import { Link } from "@ui/Link";
import InstitutePoster from "@images/institute.webp";
import Image from "next/image";
import IAPR from "@images/logos/iapr.png";
import IIITDM from "@images/logo.webp";
import Springer from "@images/logos/springer.png";
import CCIS from "@images/logos/ccis.png";
import Counter from "@components/landing/Counter";

const endorsers = [
  {
    src: IAPR,
    alt: "IAPR",
    href: "https://iapr.org/",
  },
  {
    src: IIITDM,
    alt: "IIITDM",
    href: "https://www.iiitdm.ac.in/",
  },
  {
    src: Springer,
    alt: "Springer",
    href: "http://www.springer.com/series/7899",
  },
  {
    src: CCIS,
    alt: "CCIS",
    href: "http://www.springer.com/series/7899",
  },
];

export default function Home() {
  return (
    <Main>
      {/* Landing */}
      <section className="min-h-container flex flex-col justify-evenly">
        <div className="-sm:min-h-container flex min-h-[50vh] items-center justify-evenly gap-5 -lg:flex-col-reverse">
          <div className="flex flex-col items-start gap-1 text-left -lg:items-center -lg:text-center">
            <p className="text-muted">9th International Conference on</p>
            <h1 className="text-4xl font-bold -sm:text-2xl">
              Computer Vision & Image Processing
            </h1>
            <p className="font-medium text-accent">
              20-22 December, 2024 | IIITDM Kancheepuram, Chennai - 600127,
              India
            </p>
            <Link href="#about" className="mt-4">
              Explore More
            </Link>
          </div>
          <div>
            <Image
              src={InstitutePoster}
              alt="institute-image"
              height="350"
              className="rounded-lg object-cover shadow-lg -sm:h-80"
            />
          </div>
        </div>
        <div className="my-10 grid grid-cols-2 gap-5 rounded-lg bg-muted p-5 text-center shadow-md -md:grid-cols-1">
          <div className="flex flex-col items-center">
            <h1 className="mb-1 text-xl font-medium">About CVIP 2024</h1>
            <div className="mb-3 h-[2px] w-20 bg-accent"></div>
            <p className="text-muted">
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
            <p className="text-muted">
              IIITDM Kancheepuram, Chennai - 600127, India
            </p>
            <p className="mt-2">20-22 December, 2024</p>
            <Counter />
          </div>
        </div>
      </section>
      {/* Endorsers */}
      <section>
        <h1 className="text-center text-4xl font-medium text-muted">
          Endorsed by
        </h1>
        <div className="flex w-full flex-wrap items-center justify-center gap-20 py-10">
          {endorsers.map(({ alt, src, href }, index) => {
            return (
              <a
                key={index}
                href={href}
                className="transition-transform duration-300 hover:scale-110"
              >
                <Image src={src} alt={alt} height="100" className="-sm:w-40" />
              </a>
            );
          })}
        </div>
      </section>
    </Main>
  );
}
