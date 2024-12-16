const NavList = [
  {
    id: "1",
    list: "ABOUT US",
    link: "/about", // Assuming "HOME" links to the homepage
    // dropdown: [
    //   {
    //     title: "Artificial Intelligence",
    //     items: [
    //       "Neural Networks",
    //       "AI Agency",
    //       "Image Generator",
    //       "Voice Generator",
    //       "Chatbot",
    //       "AI Solutions",
    //     ],
    //   },
    //   {
    //     title: "AI Services",
    //     items: [
    //       "AI Marketing",
    //       "AI Startup",
    //       "Vision",
    //       "AI Consulting",
    //       "Video Voiceover",
    //       "AI Software / SAAS",
    //       "Science Lab",
    //     ],
    //   },
    //   {
    //     title: "Creative Bureau",
    //     items: [
    //       "IT Services",
    //       "Business",
    //       "Gadget",
    //       "Application",
    //       "Intro",
    //       "Dark Version",
    //     ],
    //   },
    //   {
    //     image: require("../../img/NavbarImg.jpg"), // Adjust the path as needed
    //   },
    // ],
  },
  {
    id: "2",
    list: "Doctors",
    link: "/doctors", // Assuming this links to the doctors' page
  },
  {
    id: "3",
    list: "Hospital",
    link: "/hospital", // Linking to the hospital page
    dropdown: [
      {
       
        items: [
          { name: "IPD", link: "/hospital/ipd" }, // Link for IPD
          { name: "OPD", link: "/hospital/opd" }, // Link for OPD
        ],
      },
    ],
  },
  {
    id: "4",
    list: "Services",
    link: "/services", // Assuming a link to a services page
  },
  {
    id: "5",
    list: "TEAM",
    link: "/team", // Assuming a link to a team page
  },
  // {
  //   id: "6",
  //   list: "CONTACTS",
  //   link: "/contacts", // Assuming a link to a contact page
  // },
];

export default NavList;
