import { Main } from "@ui/Main";
import { Cover } from "@ui/Cover.Heading";
import InstitutePoster from "@images/institute.webp";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Cover heading="Conference Venue" />
      <Main className="pt-0">
        <h1 className="mb-5 text-xl font-bold text-accent">
          Indian Institute of Information Technology Design and Manufacturing,
          Kancheepuram
        </h1>
        <article className="space-y-5 text-justify text-lg">
          <p>
            Indian Institute of Information Technology Design and Manufacturing
            Kancheepuram (IIITDM Kancheepuram) is a Centre of Excellence for
            technical education and research established in 2007 by the Ministry
            of Education, Government of India to pursue design and manufacturing
            oriented engineering education and research and to promote the
            competitive advantage of Indian products in global markets.
          </p>
          <p>
            It is one of the three IIITDMs, the other two are being located in
            Jabalpur and Kurnool. The institute, which was operating from its temporary
            campus within the Indian Institute of Technology Madras, which was
            also its mentor institute, has moved to its permanent campus at
            Kelambakkam-Vandalur road near Chennai in 2011. The institute offers
            academic and research programs that integrate engineering design,
            manufacturing and management with information technology. The
            institute offers undergraduate and postgraduate programs which focus
            on IT, design and manufacturing in engineering sectors. The
            institute is located on a 51 acre campus on the outskirts of
            Chennai, off the Vandalur-Kelambakkam road. It is a fully
            residential campus with all students residing within the campus. The
            campus houses the academic block, the administrative block, lecture
            hall complex and laboratory block.
          </p>
        </article>
        <section className="my-10">
          <h1 className="mb-10 text-center text-2xl font-bold">
            Department of Computer Science & Engineering
          </h1>
          <div className="flex h-[400px] items-center justify-center gap-5 -md:h-auto -md:flex-col-reverse">
            {/* <div className="w-1/2 -md:h-[350px] -md:w-full">
              <iframe
                className="h-full w-full rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.082669873115!2d80.13515541485613!3d12.837934290943645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525851fbcd3b6b%3A0x9f1067aa71e3898e!2sIndian%20Institute%20of%20Information%20Technology%2C%20Design%20and%20Manufacturing%2C%20Kancheepuram!5e0!3m2!1sen!2sin!4v1680886526323!5m2!1sen!2sin"
                frameBorder="0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IIITDM Institute Map"
                allowFullScreen
              />
            </div> */}
            <div className="w-1/2 -md:w-full">
              <Image
                src={InstitutePoster}
                alt="institute-image"
                height="350"
                className="h-[400px] rounded-lg object-cover shadow-lg -sm:h-80"
              />
            </div>
          </div>
          <article className="my-10 space-y-5 text-justify text-lg">
            <p>
              Computer Science and Engineering stream started in 2009. IIITDM
              Kancheepuram’s Computer Science and Engineering curriculum is
              modeled on the ACM (Association for Computing Machinery)
              recommendations and is the first of its kind engineering program
              offered in India. This program is aimed at producing engineers
              equipped with skills required for efficient hardware-software
              interaction. In addition to courses offered by the conventional
              Computer Science curriculum, this novel program offers core
              courses such as Embedded Systems, Human-Computer Interaction,
              Signals and Systems, Product Design etc., that equip the students
              with both computing and electronics engineering skills that are
              very much required for the successful creation of products
              requiring hardware - software interactions. Our graduates would
              find wide scope in VLSI, Embedded Systems and Electronics Product
              Manufacturing related industries in addition to application
              development avenues and higher studies that are open to
              conventional Computer Science engineers. The laboratories are
              equipped with powerful Deep Learning Engine, HP Workstations,
              FUJITSU Windows Server, IBM Debian Linux server and network
              infrastructure such as the ISDN equipment, network distribution
              switches, fire- wall and redundant wireless access controller to
              cater to the computing needs of the institute practice courses.
              The Institute is also equipped with a personal Super Computer
              employing 4 Tesla cards giving a peak performance of 4.12 Tflops
              to assist in the advanced courses on Computer Architecture,
              Advanced Structure/Algorithms, Database Data Management/Knowledge
              Engineering and Image Processing. The HCI laboratory houses a
              powerful image processing workstation with intel x5690 6 core
              processor with dual monitor support.
            </p>
            <p>
              Department of Computer Science and Engineering (CSE) offers design
              centric programmes such as B.Tech (CSE), B.Tech(CSE with Major in
              AI), Dual Degree (DD) programmes (B.Tech in CSE and M.Tech in
              CSE), M.Tech.(CSE with Specialization in Data Science and
              Artificial Intelligence) and Ph.D in various research areas in
              computer science. The department has enthusiastic students
              numbering around 550 which includes B.Tech, DD students, M.Tech
              and Ph.D scholars. There are 14 faculty members who are actively
              involved in research in areas such as knowledge engineering,
              machine learning, wireless sensor networks, membrane computing,
              cyber-physical systems, IOT, high performance computing, VLSI
              architectures, biometrics, machine learning, image processing,
              soft computing and theoretical computer science.
            </p>
          </article>
        </section>
      </Main>
    </>
  );
}
