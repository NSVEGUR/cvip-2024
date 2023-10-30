import { AnchorHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm",
  {
    variants: {
      intent: {
        primary: "bg-inverted text-inverted hover:bg-muted hover:text-dominant",
      },
      size: {
        primary: "py-2 px-4",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "primary",
    },
  }
);

interface Props
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {}

const Link: FC<Props> = function ({ className, size, intent, ...props }) {
  return (
    <a className={cn(linkVariants({ className, intent, size }))} {...props}></a>
  );
};

export { Link, linkVariants };
