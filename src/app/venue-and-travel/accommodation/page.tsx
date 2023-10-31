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
          Near by hotels
        </h2>
        <Hotels />
      </Main>
    </>
  );
}
