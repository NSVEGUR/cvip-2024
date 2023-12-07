import { footer } from "@/lib/navigation";
import Logo from "@images/logo.webp";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t p-5">
      <section className="flex flex-wrap items-start justify-center gap-20 -md:flex-col-reverse -md:items-center -md:justify-center -md:gap-10">
        <div className=" text-right -md:text-center">
          <div className="flex flex-row-reverse items-center gap-1 -md:flex-col">
            <Image src={Logo} alt="logo" width="60" height="60" />
            <div>
              <h1 className="text-3xl font-bold text-accent">IIITDM</h1>
              <p>
                Kancheepuram,{" "}
                <span className="font-bold text-heading">Chennai</span>
              </p>
            </div>
          </div>
          <div className="mt-2 text-muted">
            <p>Off Vandalur-Kelambakkam Road</p>
            <p>Chennai-600127</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 -md:items-center -md:justify-center -md:text-center">
          {Object.values(footer).map(({ title, children }, index) => {
            return (
              <div key={index}>
                <h1 className="mb-3 text-lg font-medium">{title}</h1>
                <ul>
                  {Object.values(children).map(({ title, href }, index) => {
                    return (
                      <li
                        key={index}
                        className="text-muted transition-transform hover:scale-110 hover:text-dominant"
                      >
                        <a href={href}>{title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
      <h1 className="mt-3 text-center">
        Developed by <span className="text-accent">Web Team, CVIP 2024</span>
      </h1>
    </footer>
  );
}
