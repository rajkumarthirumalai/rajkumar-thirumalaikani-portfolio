import {
    animeLandingPage,
    maduraiMasterPlan,
    msquareProject,
  } from "../assets";


  
  export const navLinks = [
    {
      id: "hero",
      title: "Hero",
    },
    {
      id: "portfolio",
      title: "Portfolio",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Blaze Web Services Private Limited",
      date: "Oct 2022 - Present",
      details: [
        "Collaborated on developing a crypto exchange app using React, Express, and TypeORM.",
        "Gained expertise in essential React concepts such as Firebase authentication, JWT implementation, and Redux for state management.",
        "Utilized Swagger for API documentation and Plaid integration for financial services.",
        "Implemented cron jobs and Nodemailer for scheduling and email functionalities.",
        "Contributed to building a robust fiat-to-crypto trading platform, enhancing technical skills and understanding of secure trading platforms.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Blaze Web Services",
      date: "Jul 2022 - Sep 2022",
      details: [
        "Developed a React-based dashboard application for Sharkfin Ventures Team and created a Chrome extension for capturing DOM screenshots of intraday trading.",
        "Converted a Telegram bot stock price alert system from Firebase to Parse Cloud Code.",
        "Worked on the FocusRo Team’s work monitoring app, integrating new features in Angular, and maintaining legacy Express.js code, TypeORM query SQL, and React Native components.",
      ],
    },
    {
      title: "Freelancer",
      company_name: "Madurai Master Plan 2021 - 2041",
      date: "Freelance",
      details: [
        "Created a vibrant digital space for the Madurai Master Plan Government Project using HTML, CSS, Bootstrap, and PHP.",
        "Developed an engaging survey form and a visually appealing landing page to gather community feedback and present the city’s future development plans.",
        "Facilitated community engagement with the city's developmental goals.",
      ],
    },
  ];
  
  const portfolio = [
    {
      name: "Anime Themed Landing Page",
      description:
        "Developed using Next.js and Google authentication. A visually engaging landing page with an anime theme.",
      image: animeLandingPage,
    },
    {
      name: "Madurai Master Plan Survey Site",
      description:
        "Utilized HTML, CSS, Bootstrap. Created an online hub for community feedback on Madurai's future development.",
      image: maduraiMasterPlan,
    },
    {
      name: "MSquare Startup Project",
      description:
        "Developed using Next.js, Tailwind, and hosted on Vercel. A comprehensive platform offering data solutions and information management for tech startups.",
      image: msquareProject,
    },
  ];
  
  export { experiences, portfolio };
  