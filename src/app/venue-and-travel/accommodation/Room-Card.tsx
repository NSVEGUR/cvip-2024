"use client";

import React from "react";

export function RoomCard({
  title,
  details,
}: {
  title: string;
  details: { title: string; description: string }[];
}) {
  return (
    <div className="w-80 rounded-md border border-muted p-4 shadow-inner">
      <div className="group flex h-full transform flex-col items-center justify-start gap-5 rounded-lg bg-white px-5 py-10 transition-all duration-500 ease-in-out hover:-translate-y-8 hover:bg-gradient-to-r hover:from-violet-600 hover:to-purple-600">
        <div className="text-center text-xl font-bold group-hover:text-white">
          {title}
        </div>
        <div className="flex flex-col gap-10">
          {details.map(({ title, description }, index) => (
            <div className="text-center group-hover:text-white" key={index}>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className=" text-sm ">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
