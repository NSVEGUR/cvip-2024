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
    children: null,
  },
  Committee: {
    title: "Committee",
    children: {
      "Organizing Committee": {
        title: "Organizing Committee",
        href: "/committee/organizing-committee",
        children: null,
      },
      "Advisory Committee": {
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
        },
      },
    },
  },
  Keynotes: {
    title: "Keynotes",
    href: "/keynotes",
    children: null,
  },
  Awards: {
    title: "Awards",
    href: "/awards",
    children: null,
  },
  Calls: {
    title: "Calls",
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
        children: {
          "Call for Papers": {
            title: "Call for Papers",
            href: "/submission/author-guidelines/call-for-papers",
            children: null,
          },
          "Submission Guidelines": {
            title: "Submission Guidelines",
            href: "/submission/author-guidelines/submission-guidelines",
            children: null,
          },
          "Author's CMT Registration": {
            title: "Author's CMT Registration",
            href: "/submission/author-guidelines/authors-cmt-registration",
            children: null,
          },
          "Camera Ready Submission": {
            title: "Camera Ready Submission",
            href: "/submission/author-guidelines/camera-ready-submission",
            children: null,
          },
        },
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
    },
  },
  Registration: {
    title: "Registration",
    href: "/registration",
    children: null,
  },
  Expo: {
    title: "Expo",
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
    children: {
      "CVIP 2023": {
        title: "CVIP 2023",
        href: "/years/cvip-2023",
        children: null,
      },
      "CVIP 2022": {
        title: "CVIP 2022",
        href: "/years/cvip-2022",
        children: null,
      },
      "CVIP 2021": {
        title: "CVIP 2021",
        href: "/years/cvip-2021",
        children: null,
      },
      "CVIP 2020": {
        title: "CVIP 2020",
        href: "/years/cvip-2020",
        children: null,
      },
      "CVIP 2019": {
        title: "CVIP 2019",
        href: "/years/cvip-2019",
        children: null,
      },
      "CVIP 2018": {
        title: "CVIP 2018",
        href: "/years/cvip-2018",
        children: null,
      },
      "CVIP 2017": {
        title: "CVIP 2017",
        href: "/years/cvip-2017",
        children: null,
      },
      "CVIP 2016": {
        title: "CVIP 2016",
        href: "/years/cvip-2016",
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
