import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  children?: React.ReactNode;
}

const Cover: FC<Props> = function ({ heading, children, className }) {
  return (
    <div
      className={cn(
        "mb-10 flex min-h-[40vh] items-center justify-center gap-10 bg-poster bg-cover bg-center bg-no-repeat px-3 py-10 -sm:px-1",
        className
      )}
    >
      <h1 className="text-center text-4xl font-bold text-inverted">
        {heading}
      </h1>
      {children}
    </div>
  );
};

export { Cover };
