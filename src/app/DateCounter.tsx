"use client";

import { useEffect, useState } from "react";

export default function Counter() {
  const target = new Date("12/20/2024");
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((diff % (1000 * 60)) / 1000);
      setTime({ days, hours, min, sec });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <ul className="mt-3 flex gap-3">
      {Object.entries(time).map(([key, value]) => {
        return (
          <li
            key={key}
            className="flex h-16 w-16 flex-col items-center justify-center overflow-hidden rounded-md bg-inverted p-2"
          >
            <p className="text-inverted">{value}</p>
            <p className="text-muted">{key}</p>
          </li>
        );
      })}
    </ul>
  );
}
