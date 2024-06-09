import { Table } from "@ui/Table";
import { Main } from "@ui/Main";
import { Cover } from "@ui/Cover.Heading";
import { hostel } from "./data";
import Hotels from "./Hotels";
import { RoomCard } from "./Room-Card";
import { HotelsWithImages } from "./Hotels-With-Images";

export default function Page() {
  return (
    <>
      <Cover heading="Accommodation Details" />
      <Main className="pt-0">
        <p>
          Dear delegate, as far as accommodation is concerned, we shall try to
          accommodate out-station participants at IIITDM Hostel/Guest Rooms
          after payment as per rules of the Institute. These shall be available
          at "First Come First Served" basis.
        </p>
        {/* <h2 className="my-5">
          To reserve your accommodation, please fill the{" "}
          <a href="" className="font-medium text-accent">
            ACCOMMODATION FORM
          </a>
          . Payment can be made in advance/onsite.
        </h2> */}
        <h1>
          Rooms at IIITDM Hostel/ Guest Rooms (if available) are available as
          per following rates:
        </h1>
        <div className="flex flex-wrap justify-center gap-5 p-10">
          <RoomCard
            title="Hostel"
            details={[
              {
                title: "Boys and Girls Hostels for student participants",
                description: "INR 300 per day per person",
              },
            ]}
          />
          <RoomCard
            title="Guest House"
            details={[
              {
                title: "AC attached bathroom",
                description: "(INR 1500 per day)",
              },
              {
                title: "AC non attached bathroom",
                description: "(INR 1000 per day)",
              },
              {
                title: "Non-AC non attached bathroom",
                description: "(INR 600 per day)",
              },
            ]}
          />
        </div>
        <h1 className="my-10 text-xl font-bold">
          <sup className="text-accent">*</sup>Please note that prices may
          slightly vary.
        </h1>
        <p>
          If you wish to stay outside, then please make your own accommodation
          and conveyance arrangements.
        </p>
        <HotelsWithImages />
      </Main>
    </>
  );
}
