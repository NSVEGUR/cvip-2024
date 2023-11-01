import { Cover } from "@ui/Cover.Heading";
import { Main } from "@ui/Main";
import Image from "next/image";
import MarinaBeach from "@images/tours/marina.jpeg";
import VandaloorZoo from "@images/tours/vandaloorzoo.jpeg";
import Kancheepuram from "@images/tours/kancheepuram.jpeg";
import Mahabalipuram from "@images/tours/mahabalipuram.jpeg";
import VGPAquaKingdom from "@images/tours/vgpaqua.jpg";
import DizzieWorld from "@images/tours/dizzieworld.jpeg";

const tours = [
  {
    name: "Marina Beach",
    image: MarinaBeach,
    description: "60 Mins Journey",
  },
  {
    name: "Vandalur Zoo",
    image: VandaloorZoo,
    description: "10 Mins Journey",
  },
  {
    name: "Kancheepuram",
    image: Kancheepuram,
    description: "90 Mins Journey",
  },
  {
    name: "Mahabalipuram",
    image: Mahabalipuram,
    description: "39 Mins Journey",
  },
  {
    name: "VGP Aqua kingdom",
    image: VGPAquaKingdom,
    description: "31 Mins Journey",
  },
  {
    name: "MGM Dizzee World",
    image: DizzieWorld,
    description: "28 Mins Journey",
  },
];

export default function Page() {
  return (
    <>
      <Cover heading="Tourist Places Near By" />
      <Main>
        <ul className="flex flex-wrap items-center justify-center gap-10">
          {tours.map(({ name, description, image }, index) => (
            <li
              key={index}
              className="flex h-80 w-96 flex-col items-center justify-center gap-3 rounded-md border p-5 text-center"
            >
              <Image
                src={image}
                alt={name}
                height="100"
                className="h-48 w-full rounded-lg object-cover"
              />
              <div>
                <h1 className="text-xl font-bold">{name}</h1>
                <p className="text-muted">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Main>
    </>
  );
}
