export type Link = {
  title: string;
  href?: string;
  children: null | {
    [key: string]: {
      title: string;
      href?: string;
      children: null;
    };
  };
};

export type Hyperlink = {
  href?: string;
  title: string;
  base: string;
  children: null | {
    [key: string]: Link;
  };
};

export const header: {
  [key: string]: Hyperlink;
} = {
  Home: {
    href: "/",
    title: "Home",
    base: "/",
    children: null,
  },
  Committee: {
    title: "Committee",
    base: "/committee",
    children: {
      "Organizing Committee": {
        title: "Organizing Committee",
        href: "/committee/organizing-committee",
        children: null,
      },
     "Advisory Committe": {
      title: "Advisory Committee",
      children: {
        "International Advisory Committee": {
          title: "International Advisory Committee",
          href: "/committee/international-advisory-committee",
          children: null,
        },
        "National Advisory Committee": {
          title: "National Advisory Committee",
          href: "/committee/national-advisory-committee",
          children: null,
        },
      }
     }
    },
  },
  Keynotes: {
    title: "Keynotes",
    href: "/keynotes",
    base: "/keynotes",
    children: null,
  },
  Awards: {
    title: "Awards",
    href: "/awards",
    base: "/awards",
    children: null,
  },
  Calls: {
    title: "Calls",
    base: "/calls",
    children: {
      "Call for Papers": {
        title: "Call for Papers",
        href: "/calls/call-for-papers",
        children: null,
      },
      "Call for Special Sessions": {
        title: "Call for Special Sessions",
        href: "/calls/call-for-special-sessions",
        children: null,
      },
    },
  },
  Submission: {
    title: "Submission",
    base: "/submission",
    children: {
      "Program Schedule & Oral Presentation": {
        title: "Program Schedule & Oral Presentation",
        href: "/submission/program-schedule-and-oral-presentation",
        children: null,
      },
      "Important Dates": {
        title: "Important Dates",
        href: "/submission/important-dates",
        children: null,
      },
      "Author Guidelines": {
        title: "Author Guidelines",
        href: "/submission/author-guidelines",
        children: null,
      },
      "Accepted Paper List": {
        title: "Accepted Paper List",
        href: "/submission/accepted-paper-list",
        children: null,
      },
      "Registered Paper List": {
        title: "Registered Paper List",
        href: "/submission/registered-paper-list",
        children: null,
      },
    },
  },
  "Venue & Travel": {
    title: "Venue & Travel",
    base: "/venue-and-travel",
    children: {
      "Conference Venue": {
        title: "Conference Venue",
        href: "/venue-and-travel/conference-venue",
        children: null,
      },
      Accommodation: {
        title: "Accommodation",
        href: "/venue-and-travel/accommodation",
        children: null,
      },
      "Travel Information": {
        title: "Travel Information",
        href: "/venue-and-travel/travel-information",
        children: null,
      },
      "Chennai Tours Information": {
        title: "Chennai Tours Information",
        href: "/venue-and-travel/chennai-tours-information",
        children: null,
      },
    },
  },
  Registration: {
    title: "Registration",
    href: "/registration",
    base: "/registration",
    children: null,
  },
  Expo: {
    title: "Expo",
    base: "/expo",
    children: {
      Sponsorship: {
        title: "Sponsorship",
        href: "/expo/sponsorship",
        children: null,
      },
    },
  },
  Years: {
    title: "Years",
    base: "/years",
    children: {
      "CVIP 2023": {
        title: "CVIP 2023",
        href: "https://iitjammu.ac.in/cvip2023/index.html",
        children: null,
      },
      "CVIP 2022": {
        title: "CVIP 2022",
        href: "https://vnit.ac.in/cvip2022/",
        children: null,
      },
      "CVIP 2021": {
        title: "CVIP 2021",
        href: "https://iitrpr.cvip2021.com/",
        children: null,
      },
      "CVIP 2020": {
        title: "CVIP 2020",
        href: "https://cvip2020.iiita.ac.in/",
        children: null,
      },
      "CVIP 2019": {
        title: "CVIP 2019",
        href: "https://mnit.ac.in/",
        children: null,
      },
      "CVIP 2018": {
        title: "CVIP 2018",
        href: "https://www.iiitdmj.ac.in/CVIP-2018/",
        children: null,
      },
      "CVIP 2017": {
        title: "CVIP 2017",
        href: "https://www.iitr.ac.in/cvip2017/index.html",
        children: null,
      },
      "CVIP 2016": {
        title: "CVIP 2016",
        href: "https://www.iitr.ac.in/cvip2016/",
        children: null,
      },
    },
  },
};

export const footer = {
  "Useful Links": {
    title: "Useful Links",
    children: {
      Home: {
        title: "Home",
        href: "/",
        children: null,
      },
      "Author Guidelines": {
        title: "Author Guidelines",
        href: "/submission/author-guidelines/submission-guideline",
        children: null,
      },
      Registration: {
        title: "Registration",
        href: "/registration",
        children: null,
      },
      "IIITDMK Website": {
        title: "IIITDMK Website",
        href: "https://www.iiitdm.ac.in/",
        children: null,
      },
    },
  },
  "Important Links": {
    title: "Important Links",
    children: {
      "Organizing Committee": {
        title: "Organizing Committee",
        href: "/committee/organizing-committee",
        children: null,
      },
      "Conference Venue": {
        title: "Conference Venue",
        href: "/venue-and-travel/conference-venue",
        children: null,
      },
      Accommodation: {
        title: "Accommodation",
        href: "/venue-and-travel/accommodation",
        children: null,
      },
      "Travel Information": {
        title: "Travel Information",
        href: "/venue-and-travel/travel-information",
        children: null,
      },
    },
  },
};
