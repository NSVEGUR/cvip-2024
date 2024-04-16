"use client";

import {
  Publication,
  PaperSubmission,
  Manuscript,
} from "@/components/SubmissionSteps";
import { useState } from "react";

const steps = [
  {
    title: "Publication",
    Component: Publication,
  },
  {
    title: "Paper Submission",
    Component: PaperSubmission,
  },
  {
    title: "Instruction for Manuscript Submission",
    Component: Manuscript,
  },
];

export function Submission() {
  const [state, setState] = useState(steps.map(() => false));
  return (
    <div className="my-10">
      <h1 className="mb-10 text-center text-3xl font-bold text-accent">
        Submission Steps
      </h1>
      <div className="flex flex-col space-y-3">
        {steps.map(({ title, Component }, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setState((prev) =>
                  prev.map((_, i) => (i === index ? !state[index] : false))
                );
              }}
              className="border-base w-full rounded-md border-[1px] bg-dominant p-2 shadow"
            >
              <div className="flex items-center justify-start space-x-3 text-left text-lg font-medium">
                <span>
                  {state[index] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  )}
                </span>
                <h2>
                  {index + 1}. {title}{" "}
                </h2>
              </div>
              <div
                className={`grid pl-5 ${
                  state[index] ? "grid-rows-[1fr] py-5" : "grid-rows-[0fr]"
                } transition-all duration-200`}
              >
                <Component className="space-y-2 overflow-hidden text-left" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
