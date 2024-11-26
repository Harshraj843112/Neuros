const NavList = [
    {
      id: "1",
      list: "HOME",
      dropdown: [
        {
          title: "Artificial Intelligence",
          items: [
            "Neural Networks",
            "AI Agency",
            "Image Generator",
            "Voice Generator",
            "Chatbot",
            "AI Solutions",
          ],
        },
        {
          title: "AI Services",
          items: [
            "AI Marketing",
            "AI Startup",
            "Vision",
            "AI Consulting",
            "Video Voiceover",
            "AI Software / SAAS",
            "Science Lab",
          ],
        },
        {
          title: "Creative Bureau",
          items: [
            "IT Services",
            "Business",
            "Gadget",
            "Application",
            "Intro",
            "Dark Version",
          ],
        },
        {
          image: require("../../img/NavbarImg.jpg"), // Adjust the path as needed
        },
      ],
    },
    {
      id: "2",
      list: "PAGES",
      dropdown: [
        {
          items: [
            "IT Services",
            "Business",
            "Gadget",
            "Application",
            "Intro",
            "Dark Version",
          ],
        },
      ],
    },
    {
      id: "3",
      list: "SERVICES",
      dropdown: [
        {
          items: ["Service Page", "Service Single"],
        },
      ],
    },
    {
      id: "4",
      list: "SHOP",
      dropdown: [
        {
          items: ["Products List", "Product Single", "Cart", "Checkout", "Account"],
        },
      ],
    },
    {
      id: "5",
      list: "BLOG",
      dropdown: [
        {
          items: ["Blog Classic", "Blog Grid", "Blog Single"],
        },
      ],
    },
    { id: "6", list: "CONTACTS" },
  ];
  
  export default NavList;
  