import { FC } from "react";

interface Props {
  heading: string;
}

const Cover: FC<Props> = function ({ heading }) {
  return (
    <div className="bg-waves mb-10 flex min-h-[30vh] items-center justify-center gap-10 bg-cover bg-center bg-no-repeat px-3 py-10 -sm:px-1">
      <h1 className="text-center text-4xl font-bold">{heading}</h1>
    </div>
  );
};

export { Cover };
