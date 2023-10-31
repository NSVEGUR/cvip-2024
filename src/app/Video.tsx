"use client";

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
        className="absolute inset-0 flex h-full w-full items-center justify-center rounded-lg bg-black/20 text-inverted"
        onClick={() => setVideo(true)}
      >
        <div className="rounded-full bg-white/30 p-2 transition-transform duration-300 group-hover:scale-125">
          <Play />
        </div>
      </button>
      {video ? (
        <>
          <div className="fixed inset-0 h-screen w-screen bg-black/40 backdrop-blur-lg" />
          <div
            className="fixed left-1/2 top-1/2 flex w-[50%] -translate-x-1/2 -translate-y-1/2 items-center justify-center -lg:w-[75%] -sm:w-[95%]"
            id="video"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="rounded-lg object-cover object-center"
            >
              <source src="/intro.mp4" />
            </video>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
