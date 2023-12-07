import { header, footer } from "@/lib/navigation";

export const getLinks = function () {
  const links = [];
  for (const { title, children, href } of Object.values(header)) {
    if (children) {
      for (const { title, href, children: items } of Object.values(children)) {
        if (items) {
          for (const { title, href } of Object.values(items)) {
            links.push({ title, href });
          }
        } else {
          links.push({ title, href });
        }
      }
    } else {
      links.push({ title, href });
    }
  }
  for (const { children } of Object.values(footer)) {
    for (const { title, href } of Object.values(children)) {
      links.push({ title, href });
    }
  }
  return links;
};

export const getMetadata = function (pathname: string) {
  const links = getLinks();
  const link = links.find((link) => link.href === pathname);
  if (!link || link.href === "/") {
    return {
      name: "Home",
      title: "CVIP 2024 | IIITDM",
      description:
        "9th International Conference on Computer Vision & Image Processing, 2024",
    };
  }
  return {
    name: link.title,
    title: link.title + " | CVIP 2024",
    description:
      "9th International Conference on Computer Vision & Image Processing, 2024",
  };
};
