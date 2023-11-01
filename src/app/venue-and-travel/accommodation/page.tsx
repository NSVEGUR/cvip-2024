import { Table } from "@ui/Table";
import { Main } from "@ui/Main";
import { Cover } from "@ui/Cover.Heading";
import { hostel } from "./data";
import Hotels from "./Hotels";

export default function Page() {
  return (
    <>
      <Cover heading="Accommodation Details" />
      <Main className="pt-0">
        <h2 className="my-5 text-center text-xl font-medium text-accent">
          Available facilities in the institute
        </h2>
        <Table headings={hostel.headings} rows={hostel.rows} />
        <h2 className="my-5 text-center text-xl font-medium text-accent">
          Guest House Facility in the institute
        </h2>
        <div className="relative overflow-x-auto rounded-lg border shadow">
          <table className="w-full text-left text-sm text-muted">
            <thead className="bg-muted text-xs uppercase text-dominant">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Guest House
                </th>
                <th scope="col" className="px-6 py-3">
                  Number of Rooms
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-dominant"
                >
                  Jasmine (Girls Hostel)
                </th>
                <td className="px-6 py-4">Non AC: 10</td>
              </tr>
              <tr className="border-b bg-white">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-dominant"
                  rowSpan={4}
                >
                  Ashwatha Guest House
                </th>
                <td className="px-6 py-4">VIP Rooms: 3</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="px-6 py-4">A/C Rooms: 5</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="px-6 py-4">Non A/C Rooms: 8</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="px-6 py-4">Dining Hall: 1</td>
              </tr>
              <tr className="border-b bg-white">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-dominant"
                >
                  Gulmohar Enclave
                </th>
                <td className="px-6 py-4">2 ( 2 BHK Houses)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="my-5 text-center text-xl font-medium text-accent">
          Near by hotels
        </h2>
        <Hotels />
        <h1 className="my-10 text-center text-xl font-bold">
          <sup className="text-accent">*</sup>Please note that prices may
          slightly vary.
        </h1>
      </Main>
    </>
  );
}
