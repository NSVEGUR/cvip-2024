import Image from "next/image";
import IAPR from "@images/logos/iapr.png";
import Institute from "@images/logo.webp";
import Springer from "@images/logos/springer.png";
import CCIS from "@images/logos/ccis.png";

export function Endorsers() {
  return (
    <div className="flex w-full flex-col items-center rounded-md bg-zinc-50 p-5 pb-10">
      <h1 className="text-center text-3xl font-bold">Endorsed By</h1>
      <div className="mb-3 h-[2px] w-20 bg-accent"></div>
      <div className="flex w-full items-center justify-evenly gap-10 -md:flex-wrap">
        <a
          href="https://iapr.org/"
          className="h-full rounded-lg bg-zinc-200 p-5 transition-transform duration-300 hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={IAPR} alt="IAPR Logo" width="150" className="w-36" />
        </a>
        <a
          href="https://iiitdm.ac.in/"
          className="h-full rounded-lg bg-zinc-200 p-5 transition-transform duration-300 hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={Institute}
            alt="Institute Logo"
            width="150"
            className="w-32"
          />
        </a>
        <a
          href="http://www.springer.com/series/7899"
          className="h-full rounded-lg bg-zinc-200 p-5 transition-transform duration-300 hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={Springer}
            alt="Springer Logo"
            width="250"
            className="h-24"
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
  );
}
