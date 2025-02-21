export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Expriences",
    href: "#expriences",
  },

  // {
  //   id: 5,
  //   name: "Contact",
  //   href: "#contact",
  // },
];

export const myProjects = [
  {
    title: "CityNexus - Meet Me in the City!",
    desc: "A smart experience lifestyle platform that connects every aspect of your day-to-day life seamlessly from workplace to home to play.Integrated with our partners to create Singapore’s first true experience ecosystem, harmonising customers’ activities with our physical spaces to enrich personal-work balance.Exclusively for registered users, the app is built to handle ad-hoc tasks with just a few taps so that you can truly focus on what matters most; connect to the bigger CDL community, and be delighted with a unique experience that evokes joy for those returning to the City!",
    subdesc:
      "Built with Vue.js, Nuxt.js, Tailwind CSS, TypeScript, CityNexus ensures a smooth and enjoyable experience, tailored to meet the needs of modern consumers.",
    href: "https://citynexus.app/",
    texture: "/textures/desk/monitor.png",
    logo: "/assets/citynexus.svg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Vue.js",
        path: "/assets/vue.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Nuxt.js",
        path: "/assets/nuxt.svg",
      },
    ],
  },
  {
    title: "Optimistic - Human resource management program",
    desc: "HR management program that helps manage organization data, HRM, working hours, and automatic salary management. Easy to use anywhere, anytime, making HR work easier and more efficient.Work anywhere, anytime with an efficient management system accessible through a web browser, requiring only an internet connection and no program installation. Monitor working hours in real-time and scale the system according to the number of employees suitable for your organization. Your data remains secure, as it is stored on a reliable cloud service.",
    subdesc: "Built with Vue.js, Vuetify, ASP.NET Core",
    href: "https://www.optimistic-app.com/",
    texture: "/textures/desk/monitor.png",
    logo: "/assets/optimistic.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Vue.js",
        path: "/assets/vue.svg",
      },
      {
        id: 2,
        name: "Vuetify",
        path: "assets/vuetify.svg",
      },
    ],
  },
  {
    title: "Jarviz - Working time recording program",
    desc: "Clock in online, anytime, anywhere—simply check in from wherever you are, no need for time-consuming calls or manual processes.Easily manage withdrawals with a seamless, essential feature for employees. Submit a withdrawal request and get updates directly through the system, eliminating the need to call and confirm receipt.Don't miss out on the convenient leave management feature. Everyone needs time off occasionally. Select your leave date and type, then hit 'Request Leave' for a hassle-free experience.",
    subdesc:
      "Built with Vue.js, Vuetify, ASP.NET Core and MySQL, Jarviz the Mobile Application designed for eco-conscious employees who value efficiency and sustainability. Embrace a smarter way of working with Jarviz Software, making tasks easier, more convenient, and enhancing productivity.",
    href: "https://www.jarvizapp.com/",
    texture: "/textures/desk/monitor.png",
    logo: "/assets/jarviz.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Vue.js",
        path: "/assets/vue.svg",
      },
      {
        id: 2,
        name: "Vuetify",
        path: "assets/vuetify.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 1.5 : isMobile ? 2.4 : 2.4,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [-1.2, -5.8, 1.0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Codigo - The Mobile App Company",
    pos: "Senior Front-end Developer",
    duration: "April 2024 - January 2025",
    title: `• Led the migration of a large-scale web application, ensuring smooth functionality and minimal disruption to the user experience during the transition.
• Enhanced user experience by optimizing web applications for maximum speed and scalability.
• Developed and maintained code for client-facing websites, resulting in streamlined user experiences and increased customer satisfaction.
• Troubleshot technical issues related to front-end development, ensuring prompt resolution to maintain project timelines.
• Utilized testing frameworks like Jest for front-end unit testing.
• Collaborated with back-end developers to improve website functionality and integrate new features.
• Worked closely with UX/UI designers to translate their designs into functional web applications.`,
    icon: "/assets/Codigo.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "Fusion Solution Co., Ltd - Thetys",
    pos: "Full-Stack Developer",
    duration: "March 2019 - September 2024",
    title: `• Implemented responsive designs and optimized user experience across devices using modern front-end technologies.
  • Streamlined project delivery by integrating front-end and back-end technologies seamlessly.
  • Developed RESTful APIs and web services, ensuring efficient data handling and seamless communication with the front-end.
  • Developed responsive web designs, ensuring compatibility across various devices and browsers.
  • Implemented security best practices, including authentication and authorization mechanisms to protect user data and control access.
  • Participated in the estimation, planning, and prioritization of development tasks.
  • Collaborated effectively with cross-functional teams to ensure timely delivery of projects.
  • Developed unit test cases for testing and automation.
  • Optimized application performance and database queries for efficiency and scalability.
  • Reviewed code, debugged problems, and corrected issues.
  • Maintained clear documentation of system architectures, workflows, and coding standards for reference by other team members.
  • In addition to hands-on development, I was responsible for overseeing team tasks, ensuring efficient workflows, and maintaining project timelines.`,
    icon: "/assets/FS.jpg",
    animation: "clapping",
  },

  {
    id: 3,
    name: "Acroquest Myanmar Technology",
    pos: "Internship",
    duration: "May 2018 - Jul 2018",
    title: "",
    icon: "/assets/Acro.png",
    animation: "salute",
  },
];
