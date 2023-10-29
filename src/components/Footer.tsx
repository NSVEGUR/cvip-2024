import { footer } from "@/lib/navigation";
import Logo from "@images/logo-reversed.webp";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-complement p-5">
      <section className="flex flex-wrap items-start justify-center gap-20">
        <div className="text-right">
          <div className="flex flex-row-reverse items-center gap-1">
            <Image src={Logo} alt="logo" width="60" height="60" />
            <div>
              <h1 className="text-3xl font-bold">IIITDM</h1>
              <p>Kancheepuram</p>
            </div>
          </div>
          <div className="mt-2 text-complement">
            <p>Off Vandalur-Kelambakkam Road</p>
            <p>Chennai-600127</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-10">
          {Object.values(footer).map(({ title, children }, index) => {
            return (
              <div key={index}>
                <h1 className="mb-3 font-medium">{title}</h1>
                <ul>
                  {Object.values(children).map(({ title, href }, index) => {
                    return (
                      <li key={index}>
                        <a
                          href={href}
                          className="text-complement hover:text-accent"
                        >
                          {title}
                        </a>
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
        Developed by{" "}
        <span className="text-accent">Automation Web Team IIITDM</span>
      </h1>
    </footer>
  );
}
