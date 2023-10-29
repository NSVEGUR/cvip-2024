import { header, type Hyperlink, type Link } from "@/lib/navigation";
import ChevronDown from "@components/svg/ChevronDown";
import ChevronLeft from "@/components/svg/ChevronLeft";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation({ toggleMenu }: { toggleMenu: boolean }) {
  const path = usePathname();
  return (
    <nav
      className={`mobile:fixed mobile:w-screen mobile:transition-transform mobile:duration-300 mobile:py-10 mobile:h-screen mobile:overflow-scroll mobile:top-20 mobile:-right-0 -xs:pl-2 mobile:pl-10 bg-dominant ${
        toggleMenu ? "mobile:-translate-x-0" : "mobile:translate-x-full"
      }`}
    >
      <ul className="mobile:flex-col mobile:items-start mobile:h-full flex items-end gap-3">
        {Object.values(header).map((link, index) => {
          return <Hyperlink link={link} path={path} key={index} />;
        })}
      </ul>
    </nav>
  );
}

function Hyperlink({
  link: { title, href, children },
  path,
}: {
  link: Hyperlink;
  path: string;
}) {
  const active = href == "/" ? path.includes(href) : path == href;
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <li>
      {children ? (
        <menu className="group relative">
          <button
            className={`flex cursor-pointer items-center gap-[2px] rounded-md px-2 py-1 ${
              active ? "bg-complement text-accent" : "hover:bg-complement"
            }`}
            onClick={() => setToggleMenu((previous) => !previous)}
          >
            {title}
            <span>
              <ChevronDown />
            </span>
          </button>
          <div
            className={`group-hover:animate-slide-down -mobile:absolute -mobile:top-8 hidden origin-top bg-transparent pt-3 group-hover:block ${
              toggleMenu ? "block" : "hidden"
            }`}
          >
            <ul className="flex min-w-max flex-col gap-2 rounded-md bg-complement p-1">
              {Object.values(children).map((link, index) => {
                return <Link link={link} key={`main-${index}`} />;
              })}
            </ul>
          </div>
        </menu>
      ) : (
        <a
          href={href}
          className={`flex items-center rounded-md px-2 py-1 ${
            active ? "bg-complement" : "hover:bg-complement"
          }`}
        >
          {title}
        </a>
      )}
    </li>
  );
}

function Link({ link: { title, href, children } }: { link: Link }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <li>
      {children ? (
        <menu className="group/sub relative">
          <button
            className="flex w-full cursor-pointer items-center gap-1 rounded-md px-2 py-1 hover:bg-dominant hover:text-accent"
            onClick={() => setToggleMenu((previous) => !previous)}
          >
            {title}{" "}
            <span>
              <ChevronLeft />
            </span>
          </button>
          <div
            className={`group-hover/sub:animate-slide-right mobile:group-hover/sub:animate-slide-down mobile:origin-top -mobile:absolute -mobile:left-full -mobile:-top-3 hidden origin-top-left bg-transparent pl-3 group-hover/sub:block ${
              toggleMenu ? "block" : "hidden"
            }`}
          >
            <ul className="flex min-w-max flex-col gap-2 rounded-md bg-complement p-1">
              {Object.values(children).map((link, index) => {
                return (
                  <li key={`sub-${index}`}>
                    <a
                      href={link.href}
                      className="m-0 block h-full w-full rounded-md px-2 py-1 hover:bg-dominant hover:text-accent"
                    >
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </menu>
      ) : (
        <a
          href={href}
          className="m-0 block h-full w-full rounded-md px-2 py-1 hover:bg-dominant hover:text-accent"
        >
          {title}
        </a>
      )}
    </li>
  );
}
