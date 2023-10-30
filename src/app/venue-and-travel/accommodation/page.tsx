import { Table } from "@ui/Table";
import { Main } from "@ui/Main";
import { hostel } from "./data";

export default function Page() {
  return (
    <Main>
      <h1 className="text-center text-4xl font-bold">Accommodation Details</h1>
      <Table headings={hostel.headings} rows={hostel.rows} className="mt-10" />
    </Main>
  );
}
