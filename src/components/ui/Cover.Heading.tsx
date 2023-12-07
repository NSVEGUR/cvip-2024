import { FC } from "react";

interface Props {
  heading: string;
}

const Cover: FC<Props> = function ({ heading }) {
  return (
    <div className="mb-10 flex min-h-[40vh] items-center justify-center gap-10 bg-poster bg-cover bg-center bg-no-repeat px-3 py-10 -sm:px-1">
      <h1 className="text-center text-4xl font-bold text-inverted">{heading}</h1>
    </div>
  );
};

export { Cover };
