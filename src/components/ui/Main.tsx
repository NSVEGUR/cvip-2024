import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

const mainVariants = cva("mx-auto min-h-[100vh] max-w-container", {
  variants: {
    size: {
      base: "px-20 py-10 -sm:px-3 -sm:py-5",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

interface Props
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof mainVariants> {}

const Main: FC<Props> = function ({ className, size, ...props }) {
  return (
    <main className={cn(mainVariants({ className, size }))} {...props}></main>
  );
};

export { Main, mainVariants };
