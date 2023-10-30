import { getMetadata } from "@/lib/utils/sitemap";
import { Main } from "@ui/Main";
import { headers } from "next/headers";

export default function Page() {
  const pathname = headers().get("x-next-pathname") || "/";
  const { name } = getMetadata(pathname);
  return (
    <Main className="flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl text-muted">
        We are still building the <span className="text-accent">{name}</span>{" "}
        page
      </h1>
      <p>It is coming soon...</p>
    </Main>
  );
}
