import { Cover } from "@/components/ui/Cover.Heading";
import { Main } from "@/components/ui/Main";
import Image from "next/image";
import IHub from "@images/logos/iHub.png";

export default function Page() {
  return (
    <>
      <Cover heading="Sponsors" />
      <Main className="mb-10">
        <div className="flex flex-col items-center justify-center space-y-5 rounded-md bg-muted p-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-semibold">Gold Sponsors</h1>
            <div className="h-[2px] w-20 bg-accent"></div>
          </div>
          <div className="flex flex-wrap gap-5">
            <Image src={IHub} width="180" alt="IHub Drishti" className="w-72" />
          </div>
        </div>
      </Main>
    </>
  );
}
