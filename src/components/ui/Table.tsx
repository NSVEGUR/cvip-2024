import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

const tableVariants = cva("relative overflow-x-auto shadow rounded-lg border", {
  variants: {
    intent: {
      primary: "",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tableVariants> {
  headings: string[];
  rows: (string | number)[][];
}

const Table: FC<Props> = function ({
  className,
  intent,
  headings,
  rows,
  ...props
}) {
  return (
    <div className={cn(tableVariants({ className, intent }))} {...props}>
      <table className="w-full text-left text-sm text-muted">
        <thead className="bg-muted text-sm text-dominant">
          <tr>
            {headings.map((heading, index) => (
              <th scope="col" className="border-r px-6 py-3" key={index}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const last = rows.length - 1;
            return (
              <tr
                className={cn("bg-white", i != last ? "border-b" : "")}
                key={i}
              >
                {row.map((cell, j) =>
                  j == 0 ? (
                    <th
                      scope="row"
                      className="whitespace-nowrap border-r px-6 py-4 font-medium text-dominant"
                      key={j}
                    >
                      {cell}
                    </th>
                  ) : (
                    <td className="border-r px-6 py-4" key={j}>
                      {cell}
                    </td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { Table, tableVariants };
