import { header, type Hyperlink, type Link } from "@/lib/navigation";
import ChevronDown from "@components/svg/ChevronDown";
import ChevronLeft from "@/components/svg/ChevronLeft";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation({ toggleMenu }: { toggleMenu: boolean }) {
  const path = usePathname();
  return (
    <nav
      className={`bg-dominant mobile:fixed mobile:-right-0 mobile:top-16 mobile:h-screen mobile:w-screen mobile:overflow-scroll mobile:py-10 mobile:pl-10 mobile:transition-transform mobile:duration-300 -xs:pl-2 ${
        toggleMenu ? "mobile:-translate-x-0" : "mobile:translate-x-full"
      }`}
    >
      <ul className="flex items-end gap-3 mobile:h-full mobile:flex-col mobile:items-start">
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
              active
                ? "bg-inverted text-inverted"
                : "group-hover:bg-inverted group-hover:text-inverted text-muted"
            }`}
            onClick={() => setToggleMenu((previous) => !previous)}
          >
            {title}
            <span>
              <ChevronDown />
            </span>
          </button>
          <div
            className={`hidden origin-top bg-transparent pt-3 group-hover:block group-hover:animate-slide-down -mobile:absolute -mobile:top-8 ${
              toggleMenu ? "block" : "hidden"
            }`}
          >
            <ul className="bg-inverted text-inverted flex min-w-max flex-col gap-2 rounded-md p-1">
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
            active
              ? "bg-inverted text-inverted"
              : "hover:bg-inverted hover:text-inverted text-muted"
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
            className="group-hover/sub:text-muted flex w-full cursor-pointer items-center gap-1 rounded-md px-2 py-1 group-hover/sub:bg-dominant"
            onClick={() => setToggleMenu((previous) => !previous)}
          >
            {title}{" "}
            <span>
              <ChevronLeft />
            </span>
          </button>
          <div
            className={`hidden origin-top-left bg-transparent pl-3 group-hover/sub:block group-hover/sub:animate-slide-right mobile:origin-top mobile:group-hover/sub:animate-slide-down -mobile:absolute -mobile:-top-3 -mobile:left-full ${
              toggleMenu ? "block" : "hidden"
            }`}
          >
            <ul className="bg-inverted flex min-w-max flex-col gap-2 rounded-md p-1">
              {Object.values(children).map((link, index) => {
                return (
                  <li key={`sub-${index}`}>
                    <a
                      href={link.href}
                      className="hover:text-muted m-0 block h-full w-full rounded-md px-2 py-1 hover:bg-dominant"
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
          className="hover:text-muted m-0 block h-full w-full rounded-md px-2 py-1 hover:bg-dominant"
        >
          {title}
        </a>
      )}
    </li>
  );
}
