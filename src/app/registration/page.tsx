import { Cover } from "@/components/ui/Cover.Heading";
import { Main } from "@/components/ui/Main";

export default function Page() {
  return (
    <>
      <Cover heading="Registration" />
      <Main>
        <ol className="mb-5 font-bold text-complement">
          <li>
            Registration and camera-ready submission portals open (Round 1):{" "}
            <span className="text-red-500">July 01, 2024</span>
          </li>
          <li>
            Deadline for camera-ready submission (Round 1):{" "}
            <span className="text-red-500">August 01, 2024</span>
          </li>
          <li>
            Deadline for early bird registration (Round 1):{" "}
            <span className="text-red-500">August 01, 2024</span>
          </li>
        </ol>
        <p className="mb-2 text-xl font-bold text-black">
          Registration Instructions, Follow these four steps:
        </p>
        <ul className="  list-disc  px-5 pb-5">
          <li className="ml-2 p-1 text-black">
            Registration fees is to be paid at the following link:{" "}
            <a
              href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=634626"
              className="text-blue-500 hover:text-blue-800"
            >
              Payment Link
            </a>{" "}
          </li>
          <li className="ml-2 p-1 text-black">
            {" "}
            Please select payment category as{" "}
            <span className="text-red-500">CVIP 2024</span> as enter your{" "}
            <span className="text-red-500">paper ID</span> in remarks column.
          </li>
          <li className="ml-2 p-1 text-black">
            After making payment kindly take print/screenshot of your
            registration receipt.
          </li>
          <li className="ml-2 p-1 text-black">
            Once the registration fee is paid, enter the details in the{" "}
            <a
              href="https://forms.gle/xCVQfJffPz1yw9Rh9"
              className="text-blue-500 hover:text-blue-800"
            >
              Registration form
            </a>{" "}
            and upload the receipt.
          </li>
        </ul>
        <p className="mb-2 text-xl font-bold text-black">
          Single conference registration includes the access to the following:
        </p>
        <ul className="  list-disc  px-5 pb-5">
          <li className="ml-2 p-1 text-black">
            All CVIP 2024 conference sessions
          </li>
          <li className="ml-2 p-1 text-black">All keynote and invited talks</li>
          <li className="ml-2 p-1 text-black">
            Refreshments and lunch (December 19-21, 2024)
          </li>
          <li className="ml-2 p-1 text-black">Conference dinner</li>
          <li className="ml-2 p-1 text-black">
            Conference kit containing bag and stationery items
          </li>
        </ul>
        <p className="mb-2 text-xl font-bold text-black">
          Please note the following conditions before registering:
        </p>
        <ul className=" list-disc px-5  pb-5 text-black">
          <li className="ml-2 p-1 text-black">
            Registration form is available at{" "}
            <a
              href="https://forms.gle/xCVQfJffPz1yw9Rh9"
              className="text-blue-500"
            >
              Registration Form
            </a>
          </li>
          <li className="ml-2 p-1 text-black">
            At least one author for an accepted paper is compulsory to register
            and present the paper to be included in the conference proceedings.
          </li>
          <li className="ml-2 p-1 text-black">
            In case of Student Author, he/she is required to upload a valid
            proof of being a student during the registration.
          </li>
          <li className="ml-2 p-1 text-black">
            In case of IAPR or IUPRAI Members, a valid proof is required to
            upload during the registration process.
          </li>
          <li className="ml-2 p-1 text-black">
            An author can present another paper at the reduced fee @ 50% of the
            original registration fee, i.e. the total registration fee will be
            1.5 times of registration fee of 01 paper. This discount is
            applicable only for additional papers to be presented by the same
            author.
          </li>
          <li className="ml-2 p-1 text-black">
            If the final manuscript in Springer format exceeds 15 pages, the
            additional INR 2400 or USD 30 will be charged for each extra page.
          </li>
          <li className="ml-2 p-1 text-black">
            Onsite registration will be available on the days of the conference
            December 19-21, 2024 starting from 8:30 A.M. at the conference
            venue.
          </li>
        </ul>
        <div className="flex flex-col gap-5">
          <p className="text-black">
            The registration categories and the corresponding charges are shown
            in the table below
          </p>
        </div>
        <div className="flex flex-col gap-8 pb-5 pt-7">
          <div className="relative mt-3 w-full overflow-x-scroll rounded-lg border border-accent text-heading shadow-lg">
            <table className="w-full text-left text-base">
              <thead className="border-b border-accent bg-accent-soft text-heading">
                <tr>
                  <th className="border-r border-accent px-6 py-3 font-bold">
                    Duration
                  </th>
                  <th className="border-r border-accent px-6 py-3 font-bold">
                    Category
                  </th>
                  <th className="border-r border-accent px-6 py-3 font-bold">
                    Indian Delegates
                  </th>
                  <th className=" border-accent px-6 py-3 font-bold">
                    Foreign Delegates
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-accent">
                  <td
                    scope="row"
                    className="border-r border-accent px-6 py-4 "
                    rowSpan={7}
                  >
                    Round 1 Registration (Till August 01, 2024)
                  </td>
                  <td className="border-r border-accent px-6 py-4">
                    Student Author Registration Fee - IAPR/IUPRAI Member
                  </td>
                  <td className="border-r border-accent px-6 py-4">INR 9440</td>
                  <td className=" border-accent px-6 py-4">USD 250</td>
                </tr>
                <tr className="border-b border-accent">
                  <td className="border-r border-accent px-6 py-4">
                    Student Author Registration Fee - Non IAPR/IUPRAI Member
                  </td>
                  <td className="border-r border-accent px-6 py-4">
                    INR 10620
                  </td>
                  <td className=" border-accent px-6 py-4">USD 300</td>
                </tr>
                <tr className="border-b border-accent">
                  <td className="border-r border-accent px-6 py-4">
                    Author Registration Fee (Academic) - IAPR/IUPRAI Member
                  </td>
                  <td className="border-r border-accent px-6 py-4">
                    INR 11800
                  </td>
                  <td className=" border-accent px-6 py-4">USD 350</td>
                </tr>
                <tr className="border-b border-accent">
                  <td className="border-r border-accent px-6 py-4">
                    Author Registration Fee (Academic) - Non IAPR/IUPRAI Member
                  </td>
                  <td className="border-r border-accent px-6 py-4">
                    INR 12980
                  </td>
                  <td className=" border-accent px-6 py-4">USD 400</td>
                </tr>
                <tr className="border-b border-accent">
                  <td className="border-r border-accent px-6 py-4">
                    Author Registration Fee (Industry) - IAPR/IUPRAI Member
                  </td>
                  <td className="border-r border-accent px-6 py-4">
                    INR 12980
                  </td>
                  <td className=" border-accent px-6 py-4">USD 400</td>
                </tr>
                <tr className="border-b border-accent">
                  <td className="border-r border-accent px-6 py-4">
                    Author Registration Fee (Industry) - Non IAPR/IUPRAI Member
                  </td>
                  <td className="border-r border-accent px-6 py-4">
                    INR 14160
                  </td>
                  <td className=" border-accent px-6 py-4">USD 450</td>
                </tr>
                <tr className="border-b border-accent">
                  <td className="border-r border-accent px-6 py-4">
                    Non-Author Registration Fee
                  </td>
                  <td className="border-r border-accent px-6 py-4">INR 5900</td>
                  <td className=" border-accent px-6 py-4">USD 200</td>
                </tr>

                {/* <tr className="border-b border-accent">
                  <td
                    scope="row"
                    className="border-r border-accent px-6 py-4 "
                    rowSpan={7}
                  >
                    After October 15, 2022
                  </td>
                  <td className="border-r border-accent px-6 py-4">
                    Student Author Registration Fee - IAPR/IUPRAI Member
                  </td>
                  <td className="border-r border-accent px-6 py-4">
                    INR 10620
                  </td>
                  <td className=" border-accent px-6 py-4">USD 300</td>
                </tr>
                <tr className="border-b border-accent">
                  <td className="border-r border-accent px-6 py-4">
                    Student Author Registration Fee - Non IAPR/IUPRAI Member
                  </td>
                  <td className="border-r border-accent px-6 py-4">
                    INR 11800
                  </td>
                  <td className=" border-accent px-6 py-4">USD 350</td>
                </tr>
                <tr className="border-b border-accent">
                  <td className="border-r border-accent px-6 py-4">
                    Author Registration Fee (Academic) - IAPR/IUPRAI Member
                  </td>
                  <td className="border-r border-accent px-6 py-4">
                    INR 12980
                  </td>
                  <td className=" border-accent px-6 py-4">USD 400</td>
                </tr>
                <tr className="border-b border-accent">
                  <td className="border-r border-accent px-6 py-4">
                    Author Registration Fee (Academic) - Non IAPR/IUPRAI Member
                  </td>
                  <td className="border-r border-accent px-6 py-4">
                    INR 14160
                  </td>
                  <td className=" border-accent px-6 py-4">USD 450</td>
                </tr>
                <tr className="border-b border-accent">
                  <td className="border-r border-accent px-6 py-4">
                    Author Registration Fee (Industry) - IAPR/IUPRAI Member
                  </td>
                  <td className="border-r border-accent px-6 py-4">
                    INR 14160
                  </td>
                  <td className=" border-accent px-6 py-4">USD 450</td>
                </tr>
                <tr className="border-b border-accent">
                  <td className="border-r border-accent px-6 py-4">
                    Author Registration Fee (Industry) - Non IAPR/IUPRAI Member
                  </td>
                  <td className="border-r border-accent px-6 py-4">
                    INR 15340
                  </td>
                  <td className=" border-accent px-6 py-4">USD 500</td>
                </tr>
                <tr className="border-b border-accent">
                  <td className="border-r border-accent px-6 py-4">
                    Non-Author Registration Fee
                  </td>
                  <td className="border-r border-accent px-6 py-4">INR 7080</td>
                  <td className=" border-accent px-6 py-4">USD 250</td>
                </tr> */}
                <tr className="border-b border-accent">
                  <td className="border-r border-accent px-6 py-4">
                    Onsite Registration
                  </td>
                  <td className="border-r border-accent px-6 py-4">
                    Author/Non-Author Registration Fee
                  </td>
                  <td className="border-r border-accent px-6 py-4">
                    INR 15340
                  </td>
                  <td className=" border-accent px-6 py-4">USD 500</td>
                </tr>
                <tr className="border-b border-accent">
                  <td
                    scope="row"
                    className="border-r border-accent px-6 py-4 "
                    colSpan={2}
                  >
                    Charges for Additional Pages (per page)
                  </td>
                  <td className="border-r border-accent px-6 py-4">INR 2400</td>
                  <td className=" border-accent px-6 py-4">USD 30</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-bold text-black ">Note:</h3>
          <ol className=" ml-11 list-decimal pb-3  text-black">
            <li className="pb-3 pl-7">
              18% GST is included in the registration fee given above.
            </li>
            <li className="pb-3 pl-7">
              USD conversion rate is considered at INR 83 for the payment of
              registration fees.
            </li>
            <li className="pb-3 pl-7">
              You must upload the final camera-ready submission before you
              register your paper and pay the registration fee.
            </li>
            <li className="pb-3 pl-7">
              Camera-ready paper submission details can be found at the link
              below
              <br />
              <a
                href="/submission/camera-ready-submission"
                className="text-blue-400"
              >
                Camera Ready Submission
              </a>
            </li>
            <li className="pb-3 pl-7">
              The final camera-ready manuscript submission (Round 1) deadline is
              August 01, 2024.
            </li>
            <li className="pb-3 pl-7">
              For accommodation details, please see the
              <a
                href="/venue-and-travel/accommodation"
                className=" hover:text-green-400"
              >
                <span className=" text-blue-400"> accommodation </span>
              </a>
              section.
            </li>
            <li className="pb-3 pl-7">
              Please note that we do not entertain cancellation of
              registrations, and no refunds will be provided.
            </li>
          </ol>
        </div>
      </Main>
    </>
  );
}
