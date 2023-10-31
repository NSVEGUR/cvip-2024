import { Main } from "@ui/Main";
import { Link } from "@ui/Link";
import InstitutePoster from "@images/institute.webp";
import Image from "next/image";
import DateCounter from "@/app/DateCounter";
import Video from "@/app/Video";

export default function Home() {
  return (
    <Main>
      <section className="flex min-h-container flex-col justify-evenly">
        <div className="flex min-h-[50vh] items-center justify-evenly gap-5 -lg:flex-col-reverse -sm:min-h-container">
          <div className="flex flex-col items-start gap-1 text-left -lg:items-center -lg:text-center">
            <p className="text-muted">9th International Conference on</p>
            <h1 className="text-4xl font-bold -sm:text-2xl">
              Computer Vision & Image Processing
            </h1>
            <p className="font-bold text-accent">
              20-22 December, 2024{" "}
              <span className="font-normal text-muted">
                | IIITDM Kancheepuram, Chennai - 600127, India
              </span>
            </p>
            <Link href="#about" className="mt-4">
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
            <DateCounter />
          </div>
        </div>
      </section>
    </Main>
  );
}
