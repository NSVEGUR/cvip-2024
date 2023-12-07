import { header, type Hyperlink, type Link } from "@/lib/navigation";
import ChevronDown from "@components/svg/ChevronDown";
import ChevronLeft from "@/components/svg/ChevronLeft";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation({ toggleMenu }: { toggleMenu: boolean }) {
  const path = usePathname();
  return (
    <nav
      className={`bg-dominant mobile:fixed mobile:-right-0 mobile:top-16 mobile:h-container mobile:w-screen mobile:overflow-scroll mobile:py-10 mobile:pl-10 mobile:transition-transform mobile:duration-300 -xs:pl-2 ${
        toggleMenu ? "mobile:-translate-x-0" : "mobile:translate-x-full"
      }`}
    >
      <ul className="flex items-end gap-3 pr-3 mobile:h-full mobile:flex-col mobile:items-end mobile:text-right">
        {Object.values(header).map((link, index) => {
          return <Hyperlink {...{ link, path, index }} key={index} />;
        })}
      </ul>
    </nav>
  );
}

function Hyperlink({
  link: { title, href, children, base },
  path,
  index,
}: {
  link: Hyperlink;
  path: string;
  index: number;
}) {
  const active = href == "/" ? href == path : path.includes(base);
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <li>
      {children ? (
        <menu className="group relative mobile:flex mobile:flex-col mobile:items-end">
          <button
            className={`flex cursor-pointer items-center  gap-[2px] rounded-md px-2 py-1 ${
              active
                ? "bg-inverted text-inverted"
                : "text-muted group-hover:bg-inverted group-hover:text-inverted"
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
            } ${index < 7 ? "left-auto" : "-left-8"}`}
          >
            <ul className="flex min-w-max flex-col gap-2 rounded-md bg-inverted p-1 text-inverted mobile:min-w-min mobile:items-end">
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
              : "text-muted hover:bg-inverted hover:text-inverted"
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
    <li className="relative">
      {children ? (
        <menu className="group/sub overflow-hidden mobile:flex mobile:flex-col mobile:items-end mobile:rounded-md">
          <button
            className="flex w-full cursor-pointer items-center gap-1 rounded-md px-2 py-1 group-hover/sub:bg-dominant group-hover/sub:text-muted mobile:justify-end mobile:rounded-none"
            onClick={() => setToggleMenu((previous) => !previous)}
          >
            {title}{" "}
            <span>
              <ChevronLeft />
            </span>
          </button>
          <div
            className={`hidden origin-top-left bg-transparent pl-3 group-hover/sub:block -mobile:group-hover/sub:animate-slide-right mobile:origin-top mobile:pl-0 mobile:group-hover/sub:animate-slide-down -mobile:absolute -mobile:-top-3 -mobile:left-full ${
              toggleMenu ? "block" : "hidden"
            }`}
          >
            <ul className="flex min-w-max flex-col gap-2 rounded-md bg-inverted p-1 mobile:rounded-none mobile:bg-dominant mobile:text-dominant">
              {Object.values(children).map((link, index) => {
                return (
                  <li key={`sub-${index}`}>
                    <a
                      href={link.href}
                      className="m-0 block h-full w-full rounded-md px-2 py-1 hover:bg-dominant hover:text-muted"
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
          className="m-0 block h-full w-full rounded-md px-2 py-1 hover:bg-dominant hover:text-muted"
        >
          {title}
        </a>
      )}
    </li>
  );
}
