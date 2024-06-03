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
      link: "https://www.tripadvisor.in/Hotels-g4093423-Kelambakkam_Kanchipuram_District_Tamil_Nadu-Hotels.html",
    },
    {
      img: Goibibo,
      link: "https://www.goibibo.com/hotels/hotels-in-chennai/kelambakkam-ah/",
    },
    {
      img: Trivago,
      link: "https://www.trivago.in/en-IN/oar/hotel-oyo-rooms-kelambakkam-chennai?search=100-7323266",
    },
    {
      img: ClearTrip,
      link: "https://www.cleartrip.com/hotels/india/chennai/landmark/tambaram-mofussil-bus-stand?/",
    },
    {
      img: Yatra,
      link: "https://www.yatra.com/hotels/hotels-at-kelambakkam-in-chennai",
    },
    {
      img: EasyMyTrip,
      link: "https://www.easemytrip.com/hotels/hotels-in-vandalur/?e=202463184736&city=Vandalur,%20Chennai,%20Tamil%20Nadu,%20India&cin=03/07/2024&cOut=04/07/2024&Hotel=NA&Rooms=1&pax=2",
    },
    {
      img: MakeMyTrip,
      link: "https://www.makemytrip.com/hotels/hotels-in-vandalur-chennai.html",
    },
    {
      img: Expedia,
      link: "https://www.expedia.co.in/Chennai-Vandalur-Station-Hotels.d6251041.Travel-Guide-Hotels",
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
