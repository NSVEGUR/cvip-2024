import Image from "next/image";
import IAPR from "@images/logos/iapr.png";
import Springer from "@images/logos/springer.png";
import CCIS from "@images/logos/ccis.png";

export function Endorsers() {
  return (
    <div className="flex w-full flex-col items-center rounded-md bg-zinc-50 p-5 pb-10">
      <div className="my-5 flex w-full items-center justify-evenly gap-10 -lg:flex-col">
        <div className="flex flex-col items-center gap-3">
          <h1 className="mb-3 text-center text-3xl font-bold">Endorsed By</h1>
          <a
            href="https://iapr.org/"
            className="h-full rounded-lg bg-zinc-200 p-5 transition-transform duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={IAPR}
              alt="IAPR Logo"
              width="180"
              className="h-28 w-52"
            />
          </a>
        </div>
        <div className="flex flex-col items-start justify-center gap-3 ">
          <h1 className="mb-3 w-full text-center text-3xl font-bold">
            Proceedings By
          </h1>
          <div className="flex items-center justify-center gap-10 -md:flex-wrap ">
            <a
              href="http://www.springer.com/series/7899"
              className="h-full rounded-lg bg-zinc-200 p-5 transition-transform duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={Springer}
                alt="Springer Logo"
                width="280"
                className="h-28"
              />
            </a>
            <a
              href="http://www.springer.com/series/7899"
              className="h-full rounded-lg bg-zinc-200 p-5 transition-transform duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={CCIS} alt="CCIS Logo" width="150" className="w-32" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
