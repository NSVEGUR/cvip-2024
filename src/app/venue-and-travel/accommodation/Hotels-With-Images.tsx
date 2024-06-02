import TripAdvisor from "@images/hotels/tripadvisor.png";
import Goibibo from "@images/hotels/goibibo.png";
import Trivago from "@images/hotels/trivago.png";
import ClearTrip from "@images/hotels/cleartrip.png";
import Yatra from "@images/hotels/yatra.png";
import EasyMyTrip from "@images/hotels/easymytrip.png";
import MakeMyTrip from "@images/hotels/makemytrip.png";
import Expedia from "@images/hotels/expedia.png";
import Image from "next/image";

export function HotelsWithImages() {
  const data = [
    {
      img: TripAdvisor,
      link: "",
    },
    {
      img: Goibibo,
      link: "",
    },
    {
      img: Trivago,
      link: "",
    },
    {
      img: ClearTrip,
      link: "",
    },
    {
      img: Yatra,
      link: "",
    },
    {
      img: EasyMyTrip,
      link: "",
    },
    {
      img: MakeMyTrip,
      link: "",
    },
    {
      img: Expedia,
      link: "",
    },
  ];
  return (
    <div className="grid grid-cols-4 justify-center pt-10">
      {data.map(({ img, link }) => (
        <div className="h-40 border border-muted bg-white p-4">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex h-full w-full items-center justify-center"
          >
            <Image
              src={img}
              alt="hotel"
              height={100}
              className="h-10 object-contain transition-all duration-500 ease-in-out hover:scale-110"
            />
          </a>
        </div>
      ))}
    </div>
  );
}
