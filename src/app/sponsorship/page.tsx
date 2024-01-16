import { Cover } from "@/components/ui/Cover.Heading";
import { Main } from "@/components/ui/Main";
import { Table } from "@/components/ui/Table";

export default function Page() {
  const reasons = [
    {
      title: "GROW YOUR AUDIENCE",
      description:
        "Grow your targeted leads and cultivate new business with your presence at a prestigious event, expanding your reach.",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-9 w-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
          />
        </svg>
      ),
    },
    {
      title: "NETWORKING",
      description:
        "Meet new people and build on existing relationships with people who will help you and your business grow.",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-9 w-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"
          />
        </svg>
      ),
    },
    {
      title: "INCREASE BRAND AWARENESS",
      description:
        "Position your company as a leader in the expanding and encompassing fields of computer vision.",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-9 w-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
          />
        </svg>
      ),
    },
  ];
  return (
    <>
      <Cover heading="Become A Sponsor" className="flex-col gap-2">
        <div className="flex flex-col">
          <p className="mb-10 text-lg text-zinc-100">
            EXHIBIT AND SPONSOR CVIP 2024
          </p>
        </div>
      </Cover>
      <Main className="space-y-5 text-center  text-lg">
        <h1 className="border-b pb-2 text-2xl font-bold text-accent">
          Exhibitor and Sponsorship Opportunities
        </h1>
        <p>
          Whether you are showcasing new products and services or recruiting new
          talent, CVIP 2024 is where the international computing and
          applications community convenes – providing an opportunity to
          highlight what your company has to offer and reach decision-makers
          with real buying power.
        </p>
        <section className="space-y-5">
          <h1 className="my-20 border-b pb-2 text-2xl font-bold text-accent">
            Reasons Why You Should Take Part In CVIP 2024
          </h1>
          <div className="flex flex-wrap justify-evenly space-x-3 text-base">
            {reasons.map(({ title, description, icon }, index) => (
              <div
                key={index}
                className="flex w-80 flex-col items-center space-y-3 rounded-md bg-muted p-5"
              >
                {icon()}
                <h1 className="py-3 text-lg font-bold text-accent">{title}</h1>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <h2 className="rounded-md bg-accent-soft px-3 py-2 font-bold text-heading shadow-md">
            Platinum, Gold, Silver, and Bronze level packages are available now.
            <span className="font-black text-accent">*</span>
          </h2>
          <div className="py-10">
            <Table
              headings={[
                "Type of Sponsorship",
                "Fund (₹)",
                "Complimentary Stall",
                "Table/Stall",
                "Website/Branding",
                "Brochure Branding",
                "Participation in industry session",
                "Branding during breaks",
              ]}
              rows={[
                [
                  "Platinum",
                  "5 Lacs",
                  "7",
                  "Stall",
                  "Yes",
                  "Yes",
                  "Yes",
                  "Yes",
                ],
                ["Diamond", "3 Lacs", "4", "Stall", "Yes", "Yes", "Yes", "No"],
                ["Gold", "2 Lacs", "3", "Table", "Yes", "Yes", "Yes", "No"],
                ["Silver", "1 Lacs", "2", "Table", "Yes", "No", "No", "No"],
                ["Bronze", "50 K", "1", "No", "Yes", "No", "No", "No"],
                [
                  "Awards and Session Sponsorship",
                  "Discussion with organizers",
                  "1",
                  "No",
                  "Yes",
                  "No",
                  "No",
                  "No",
                ],
              ]}
            />
          </div>
          <p>
            CVIP 2024 attracts decision-makers looking for the next generation
            of products, solutions, networking, and advanced-industry
            perspectives. Put yourself in the position to meet them by
            supporting CVIP 2024!
          </p>
          <h2>Secure your sponsorship today.</h2>
        </section>
        <section className="flex w-full items-center justify-center">
          <div className=" min-w-max space-y-3 rounded-md border bg-zinc-50 p-5 shadow-md">
            <h1 className="text-xl font-bold text-accent">Contact</h1>
            <p className="text-heading">
              Dr. Jagadeesh Kakarla | Conference Chair{" "}
            </p>
            <div className="flex items-center space-x-2">
              <a
                href="mailto:jagadeeshk@iiitdm.ac.in"
                className="hover:underline"
              >
                jagadeeshk@iiitdm.ac.in
              </a>
              <span className="text-heading">or</span>
              <a
                href="mailto:cvip2024@iiitdm.ac.in"
                className="hover:underline"
              >
                cvip2024@iiitdm.ac.in
              </a>
            </div>
          </div>
        </section>
      </Main>
    </>
  );
}
