export default function ImportantDates() {
  return (
    <div className="relative mt-3 w-full overflow-x-scroll rounded-lg border border-accent text-heading shadow-lg">
      <table className="w-full text-left text-base">
        <thead className="border-b border-accent bg-accent-soft text-heading">
          <tr>
            <th
              scope="col"
              className="border-r border-accent px-6 py-3 font-normal"
              colSpan={2}
            >
              Paper Submission Starts
            </th>
            <th scope="col" className="whitespace-nowrap px-6 py-3 font-bold">
              February 1st, 2024
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-accent">
            <th
              scope="row"
              className="border-r border-accent px-6 py-4 font-medium"
              rowSpan={2}
            >
              First Round
            </th>
            <td className="border-r border-accent px-6 py-4">
              Paper Submission Deadline
            </td>
            <td className="whitespace-nowrap px-6 py-4 font-bold">
              <span className="mr-2 text-sm font-normal text-muted line-through">
                April 15, 2024
              </span>
              <span>April 30, 2024</span>
            </td>
          </tr>
          <tr className="border-b border-accent">
            <td className="border-r border-accent px-6 py-4">
              Notification of Paper Acceptance
            </td>
            <td className="whitespace-nowrap px-6 py-4 font-bold">
              June 15, 2024
            </td>
          </tr>
          <tr className="border-b border-accent bg-accent-soft">
            <th
              scope="row"
              className="border-r border-accent px-6 py-4 font-medium"
              rowSpan={2}
            >
              Second Round
            </th>
            <td className="border-r border-accent px-6 py-4">
              Paper Submission Deadline
            </td>
            <td className="whitespace-nowrap px-6 py-4 font-bold">
              August 15, 2024
            </td>
          </tr>
          <tr className="border-b border-accent bg-accent-soft">
            <td className="border-r border-accent px-6 py-4">
              Notification of Paper Acceptance
            </td>
            <td className="whitespace-nowrap px-6 py-4 font-bold">
              October 15, 2024
            </td>
          </tr>
          <tr className="border-b border-accent">
            <td className="border-r border-accent px-6 py-4" colSpan={2}>
              Camera Ready Submission Deadline
            </td>
            <td className="whitespace-nowrap px-6 py-4 font-bold">
              October 30, 2024
            </td>
          </tr>
          <tr className="border-b border-accent bg-accent-soft">
            <td className="border-r border-accent px-6 py-4" colSpan={2}>
              Early Bird Registration Deadline
            </td>
            <td className="whitespace-nowrap px-6 py-4 font-bold">
              November 15, 2024
            </td>
          </tr>
          <tr>
            <td className="border-r border-accent px-6 py-4" colSpan={2}>
              Conference Dates
            </td>
            <td className="whitespace-nowrap px-6 py-4 font-bold">
              December 19-21, 2024
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
