"use client";

import { linkVariants } from "@/components/ui/Link";
import { cn } from "@/lib/utils";
import Play from "@components/svg/Play";
import { useEffect, useState } from "react";

export default function Player() {
  const [video, setVideo] = useState(false);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const modal = (e.target as HTMLElement).closest("#video");
      const modalBtn = (e.target as HTMLElement).closest("#video-btn");
      if (video && !modal && !modalBtn) {
        setVideo(false);
      }
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [video]);
  return (
    <>
      <button
        id="video-btn"
        className={cn(linkVariants(), "bg-zinc-300 text-black")}
        onClick={() => setVideo(true)}
      >
        IIITDM Campus Tour
      </button>
      {video ? (
        <>
          <div className="fixed inset-0 z-30 h-screen w-screen bg-black/40 backdrop-blur-lg" />
          <div
            className="fixed left-1/2 top-1/2 z-40 flex w-[50%] -translate-x-1/2 -translate-y-1/2 items-center justify-center -lg:w-[75%] -sm:w-[95%]"
            id="video"
          >
            <div className="flex w-[600px] items-center justify-center">
              <iframe
                className="h-[300px] w-[500px] rounded-md -sm:h-[200px] -sm:w-[300px]"
                src="https://www.youtube.com/embed/ujtUyW30P60"
                title="Campus Tour Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
