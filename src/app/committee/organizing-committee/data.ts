import ProfBBChaudhuri from "@images/people/ProfBBChaudhuri.jpeg";
import ProfMVKarthikeyan from "@images/people/ProfMVKartikeyan.webp";
import ProfPKBiswas from "@images/people/ProfPKBiswas.jpeg";
import ProfUmapadaPal from "@images/people/ProfUmapadaPal.jpeg";
import DrJagadeeshKakarla from "@images/people/DrJagadeeshKakarla.jpeg";
import DrSubramanyamMurala from "@images/people/DrSubrahmanyamMurala.jpeg";
import ProfRBalasubramanian from "@images/people/ProfRBalasubramanian.jpeg";
import DrRamPrasadPadhy from "@images/people/DrRamPrasadPadhy.webp";
import DrPriyankaKokil from "@images/people/DrPriyankaKokil.webp";
import DrSantoshVipparthi from "@images/people/DrSantoshVipparthi.jpeg";
import ProfGauravBhatnagar from "@images/people/ProfGauravBhatnagar.jpeg";
import DrAparajitaOjha from "@images/people/DrAparajithaOjha.jpeg";
import DrMasilamaniV from "@images/people/DrMasilamaniV.webp";
import DrShivRamDubey from "@images/people/DrShivRamDubey.jpeg";
import DrPuneetGoyal from "@images/people/DrPuneetGoyal.png";
import DrParthaPratimRoy from "@images/people/DrParthaPratimRoy.jpeg";
import ProfPriteeKhanna from "@images/people/ProfPriteeKhanna.jpg";
import DrDeepGupta from "@images/people/DrDeepGupta.jpeg";
import DrNoorMahammad from "@images/people/DrNoorMahammad.jpeg";
import DrUmaraniJayaraman from "@images/people/DrUmaraniJayaraman.jpeg";
import DrSanjeethKumarNayak from "@images/people/DrSanjeetKumarNayak.webp";
import DrPreethR from "@images/people/DrPreethR.webp";
import DrJaishreeMayank from "@images/people/DrJaishreeMayank.webp";
import DrRahulRaman from "@images/people/DrRahulRaman.webp";
import DrSadagopanN from "@images/people/DrSadagopanN.webp";
import DrBChittiBabu from "@images/people/DrBChittiBabu.webp";
import DrBhukyaKrishnaPriya from "@images/people/DrBhukyaKrishnaPriya.webp";
import DrSambitBakshi from "@images/people/DrSambitBakshi.png";
import DrManishaVerma from "@images/people/DrManishaVerma.webp";
import DrPrashantPatil from "@images/people/DrPrashantPatil.jpg";
import DrPUmaMaheswari from "@images/people/DrPUmaMaheswari.png";
import DrYogameena from "@images/people/DrYogameena.jpg";
import DrUSrinivasuluReddy from "@images/people/DrUSrinivasuluReddy.jpeg";
import DrSurendrianB from "@images/people/DrSurendiranB.png";
import DrPankajPratapSingh from "@images/people/DrPankajPratapSingh.jpg";
import DrDeepakMishra from "@images/people/DrDeepakMishra.jpg";
import DrAnandaSChowdhury from "@images/people/DrAnandaSChowdhury.jpg";
import ProfNidhiGoel from "@images/people/ProfNidhiGoel.jpg";
import DrVinitJakhetiya from "@images/people/DrVinitJakhetiya.png";
import DrShitalaPrasad from "@images/people/DrShitalaPrasad.jpg";
import ProfSanjeevMalik from "@images/people/ProfSanjeevMalik.png";
import DrSuryaPrakash from "@images/people/DrSuryaPrakash.jpg";
import DrHarkeeratKaur from "@images/people/DrHarkeeratKaur.jpg";
import DrRamakrishnaGorti from "@images/people/DrRamakrishnaGorti.jpeg";
import DrMaheshKumar from "@images/people/DrMaheshkumarHKolekar.jpg";
import DrVivekKanhangad from "@images/people/DrVivekKanhangad.jpg";
import DrAnilBGonde from "@images/people/DrAnilBGonde.jpg";
import Vivekraj from "@images/people/DrVivekrajVK.jpg";
import DrAmiteshRajput from "@images/people/DrAmiteshSinghRajput.jpg";
import RVenkateshBabu from "@images/people/RVenkateshBabu.jpg";
import DrPushpendraKumar from "@images/people/DrPushpendraKumar.jpeg";
import type { ProfileCard } from "@/lib/types";

export const members: {
  [key: string]: ProfileCard[];
} = {
  Patron: [
    {
      name: "Prof. B. B. Chaudhuri",
      image: ProfBBChaudhuri,
      description: "Indian Statistical Institute, Kolkata, India",
      href: "https://www.isical.ac.in/~bbc/",
    },
  ],
  "General Chairs": [
    {
      name: "Prof. M. V. Kartikeyan",
      image: ProfMVKarthikeyan,
      description: "Director, IIITDM Kancheepuram, India",
      href: "http://iiitdm.ac.in/administration/director",
    },
    {
      name: "Prof. P. K. Biswas",
      image: ProfPKBiswas,
      description: "IIT Khargpur, India",
      href: "https://www.iitkgp.ac.in/department/EC/faculty/ec-pkb",
    },
    {
      name: "Prof Umapada Pal",
      image: ProfUmapadaPal,
      description: "Indian Statistical Institute, KolKata",
      href: "https://www.isical.ac.in/~umapada/",
    },
    // {
    //   name: "Prof. B. S. Manjunath",
    //   image: ProfBSManjunath,
    //   description: "Distinguished Professor, University of California",
    // },
  ],
  "General Co-chairs": [
    {
      name: "Prof. R. Balasubramanian",
      image: ProfRBalasubramanian,
      description: "IIT Roorkee, India",
      href: "https://faculty.iitr.ac.in/cs/bala/",
    },
    {
      name: "Prof. R. Venkatesh Babu",
      description: "Indian Institute of Science, Bangalore, India",
      href: "https://cds.iisc.ac.in/faculty/venky/",
      image: RVenkateshBabu,
    },
  ],
  "Conference Chairs": [
    {
      name: "Dr. Jagadeesh Kakarla",
      image: DrJagadeeshKakarla,
      description: "IIITDM Kancheepuram, India",
      href: "https://www.iiitdm.ac.in/people/faculty/jagadeeshk@iiitdm.ac.in",
    },
    {
      name: "Dr. Subrahmanyam Murala",
      image: DrSubramanyamMurala,
      description: "Trinity College Dubin, Ireland",
      href: "https://www.scss.tcd.ie/~muralas/",
    },
    {
      name: "Prof. Sanjeev Kumar",
      image: ProfSanjeevMalik,
      description: "IIT Roorkee, India",
      href: "https://www.iitr.ac.in/~MA/Malikfma",
    },
  ],
  "Conference Co-chair": [
    {
      name: "Dr. Ram Prasad Padhy",
      image: DrRamPrasadPadhy,
      description: "IIITDM Kancheepuram, India",
      href: "https://www.iiitdm.ac.in/people/faculty/rampadhy@iiitdm.ac.in",
    },
    {
      name: "Dr. Priyanka Kokil",
      image: DrPriyankaKokil,
      description: "IIITDM Kancheepuram, India",
      href: "https://www.iiitdm.ac.in/people/faculty/priyanka@iiitdm.ac.in",
    },
    {
      name: "Dr. Santosh Vipparthi",
      image: DrSantoshVipparthi,
      description: "IIT Ropar, India",
      href: "https://skvipparthi.github.io/",
    },
    {
      name: "Prof. Gaurav Bhatnagar",
      image: ProfGauravBhatnagar,
      description: "IIT Jodhpur, India",
      href: "http://home.iitj.ac.in/~goravb/",
    },
    {
      name: "Dr. Puneet Goyal",
      image: DrPuneetGoyal,
      description: "IIT Ropar, India",
      href: "https://www.iitrpr.ac.in/hi/node/2045",
    },
  ],
  "Conference Convener": [
    {
      name: "Prof. Aparajita Ojha",
      image: DrAparajitaOjha,
      description: "IIITDM Jabalpur, India",
      href: "https://cse-iiitdmj-ac-in.translate.goog/faculty_page.php?id=aojha@iiitdmj.ac.in&_x_tr_sch=http&_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc",
    },
    {
      name: "Dr. Masilamani V",
      image: DrMasilamaniV,
      description: "IIITDM Kancheepuram, India",
      href: "https://www.iiitdm.ac.in/administration/department-heads/computer-science",
    },
    {
      name: "Dr. Shiv Ram Dubey",
      image: DrShivRamDubey,
      description: "IIIT Allahabad, India",
      href: "https://it.iiita.ac.in/?pg=facultypage&uid=srdubey",
    },
    {
      name: "Prof. Pritee Khanna",
      image: ProfPriteeKhanna,
      description: "IIITDM Jabalpur, India",
      href: "http://cse.iiitdmj.ac.in/faculty_page.php?id=pkhanna@iiitdmj.ac.in",
    },
    {
      name: "Dr. Deep Gupta",
      image: DrDeepGupta,
      description: "VNIT Nagpur, India",
      href: "https://ece.vnit.ac.in/people/deepgupta/",
    },
    {
      name: "Dr. Partha Pratim Roy",
      image: DrParthaPratimRoy,
      description: "IIT Roorkee, India",
      href: "https://iitr.ac.in/Departments/Computer%20Science%20and%20Engineering%20Department/People/Faculty/100681.html",
    },
    {
      name: "Dr. Harkeerat Kaur",
      image: DrHarkeeratKaur,
      description: "IIT Jammu, India",
      href: "https://iitjammu.ac.in/computer_science_engineering/faculty-list/~harkeeratkaur",
    },
  ],
  "Sponsorship Chairs": [
    {
      name: "Dr. Sadagopan N",
      image: DrSadagopanN,
      description: "IIITDM Kancheepuram, India",
      href: "https://www.iiitdm.ac.in/people/faculty/sadagopan@iiitdm.ac.in",
    },
    {
      name: "Dr. B. Chitti Babu",
      image: DrBChittiBabu,
      description: "IIITDM Kancheepuram, India",
      href: "https://www.iiitdm.ac.in/people/faculty/bcbabu@iiitdm.ac.in",
    },
    {
      name: "Dr. Krishna Priya",
      image: DrBhukyaKrishnaPriya,
      description: "IIITDM Kancheepuram, India",
      href: "https://www.iiitdm.ac.in/people/faculty/krishnapriya@iiitdm.ac.in",
    },
  ],
  "Publicity Chairs": [
    {
      name: "Dr. Sambit Bakshi",
      image: DrSambitBakshi,
      description: "NIT Rourkela, India",
      href: "https://website.nitrkl.ac.in/FProfile.aspx?e=bakshisambit",
    },
    {
      name: "Dr. Noor Mahammad",
      image: DrNoorMahammad,
      description: "IIITDM Kancheepuram, India",
      href: "https://www.iiitdm.ac.in/people/faculty/noor@iiitdm.ac.in",
    },
    {
      name: "Dr. Manisha Verma",
      image: DrManishaVerma,
      description: "IIT Dhanbad, India",
      href: "https://sites.google.com/site/manishaverma89/",
    },
    {
      name: "Dr. Prashant Patil",
      image: DrPrashantPatil,
      description: "IIT Guwahati, India",
      href: "https://www.iitg.ac.in/iitg_faculty_details?name=Prashant%20W-Patil&fac=R0kwb0VGbHFQQmxGait5bEs4U3UyZz09",
    },
    {
      name: "Dr. Pankaj Pratap Singh",
      image: DrPankajPratapSingh,
      description: "Central Institute of Technology, Kokrajhar, India",
      href: "https://www.cit.ac.in/profile-cse-dr-pankaj-pratap-singh",
    },
    {
      name: "Dr. Surendiran . B",
      image: DrSurendrianB,
      description: "NIT Puducherry, India",
      href: "https://sites.google.com/view/surendiran/home",
    },
    {
      name: "Dr. U.Srinivasulu Reddy",
      image: DrUSrinivasuluReddy,
      description: "NIT Trichy, India",
      href: "https://www.nitt.edu/home/academics/departments/ca/facultymca/dr_u_srinivasulu_reddy/",
    },
    {
      name: "Dr. Yogameena",
      image: DrYogameena,
      description: "Thiagarajar College of Engineering, India",
      href: "https://www.tce.edu/staff_profile/faculty/BEECE/ymece.html",
    },
    {
      name: "Dr. P. Uma Maheswari",
      image: DrPUmaMaheswari,
      description: "Anna University, India",
      href: "https://annauniv.irins.org/profile/117747",
    },
  ],
  "TPC Chairs": [
    {
      name: "Prof. Deepak Mishra",
      image: DrDeepakMishra,
      description: "IIST Trivanduram, India",
      href: "https://www.iist.ac.in/avionics/deepak.mishra",
    },
    {
      name: "Prof. Ananda S. Chowdhury",
      image: DrAnandaSChowdhury,
      description: "Jadavpur University, India",
      href: "https://sites.google.com/site/anandachowdhury/",
    },
    {
      name: "Prof. Nidhi Goel",
      image: ProfNidhiGoel,
      description: "Indira Gandhi Delhi Technical University for Women, India",
      href: "https://www.igdtuw.ac.in/ece.php?name=nidhigoel",
    },
    {
      name: "Dr. Vinit Jakhetiya",
      image: DrVinitJakhetiya,
      description: "IIT Jammu, India",
      href: "https://www.iitjammu.ac.in/faculty/~vinitjakhetiya",
    },
    {
      name: "Dr. Shitala Prasad",
      image: DrShitalaPrasad,
      description: "IIT Goa, India",
      href: "https://iitgoa.ac.in/cs-faculty-profile/?uid=shitala&exp=CS",
    },
    {
      name: "Dr. Surya Prakash",
      image: DrSuryaPrakash,
      description: "IIT Indore, India",
      href: "https://iiti.irins.org/profile/89889",
    },
    {
      name: "Dr. Rama Krishna Sai Gorthi",
      image: DrRamakrishnaGorti,
      description: "IIT Tirupati, India",
      href: "https://iittp.ac.in/dr-rama-krishna-sai-subrahmanyam-gorthi",
    },
    {
      name: "Dr. Maheshkumar H. Kolekar",
      image: DrMaheshKumar,
      description: "IIT Patna, India",
      href: "https://www.iitp.ac.in/index.php/2-uncategorised/193-view-profile-7",
    },
    {
      name: "Dr. Vivek Kanhangad",
      image: DrVivekKanhangad,
      description: "IIT Indore, India",
      href: "https://www.iiti.ac.in/people/~kvivek/",
    },
    {
      name: "Dr. Anil B. Gonde",
      image: DrAnilBGonde,
      description:
        "Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded, India",
      href: "https://www.sggs.ac.in/home/page/electronics-and-telecommunication-engineering",
    },
    {
      name: "Dr. Vivekraj V K",
      image: Vivekraj,
      description: "IIIT Dharwad, India",
      href: "https://www.iiitdwd.ac.in/Dr.vivekraj.php",
    },
    {
      name: "Dr. Amitesh Singh Rajput",
      image: DrAmiteshRajput,
      description: "BITS Pilani, India",
      href: "https://www.bits-pilani.ac.in/pilani/amitesh-singh-rajput/",
    },
    {
      name: "Dr. Pushpendra Kumar",
      image: DrPushpendraKumar,
      description:
        "Maulana Azad National Institute of Technology, Bhopal, India",
      href: "http://www.manit.ac.in/content/dr-pushpendra-kumar",
    },
  ],
  "Local Organizing Committee": [
    {
      name: "Dr. Umarani Jayaraman",
      image: DrUmaraniJayaraman,
      description: "IIITDM Kancheepuram, India",
      href: "https://www.iiitdm.ac.in/people/faculty/umarani@iiitdm.ac.in",
    },
    {
      name: "Dr. Rahul Raman",
      image: DrRahulRaman,
      description: "IIITDM Kancheepuram, India",
      href: "https://www.iiitdm.ac.in/people/faculty/rahul@iiitdm.ac.in",
    },
    {
      name: "Dr. Jaishree Mayank",
      image: DrJaishreeMayank,
      description: "IIITDM Kancheepuram, India",
      href: "https://www.iiitdm.ac.in/people/faculty/jaishree@iiitdm.ac.in",
    },
    {
      name: "Dr. Sanjeet Kumar Nayak",
      image: DrSanjeethKumarNayak,
      description: "IIITDM Kancheepuram, India",
      href: "https://www.iiitdm.ac.in/people/faculty/sanjeetn@iiitdm.ac.in",
    },
    // {
    //   name: "Dr. Santhanam Raghavan",
    //   image: DrRaghavanS,
    //   description: "IIITDM Kancheepuram, India",
    // },
    {
      name: "Dr. Preeth R",
      image: DrPreethR,
      description: "IIITDM Kancheepuram, India",
      href: "https://www.iiitdm.ac.in/people/faculty/preeth@iiitdm.ac.in",
    },
    // {
    //   name: "Dr. Pandiri Venkatesh",
    //   image: DrPandiriVenkatesh,
    //   description: "IIITDM Kancheepuram, India",
    // },
  ],
};
