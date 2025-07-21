import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    velocis,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Cyber Security",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Community Manager",
      company_name: "Twowaits Private Ltd.",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Nov 2021 - Dec 2021",
      points: [
        "Building and Engaging the Community.",
        "Advocacy and brand representation.",
        "Collaboration with cross-functional teams.",
        "Monitoring and analyzing community metrics.",
      ],
    },
    {
      title: "Cyber Security Intership",
      company_name: "SISTMR Australia",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Mar 2022",
      points: [
        "I have acquired a comprehensive understanding of various techniques commonly used in cybersecurity.",
        "I have gained knowledge and practical experience in areas such as SQL injection.",
        "I have familiarity with Server-Side Request Forgery (SSRF) and the associated methods of preventing unauthorized access and securing outbound connections.",
        "Moreover, I have a strong grasp of Web Cross-Site Scripting (XSS) and the importance of implementing robust input validation and output encoding practices to mitigate the risk of unauthorized script injection.",
      ],
    },
    {
      title: "Backend Developer Internship",
      company_name: "Blue Planet",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2022 - Nov 2022",
      points: [
        "I gained hands-on experience with Node.js, a powerful runtime environment for server-side applications.",
        "I worked on developing server-side logic, handling HTTP requests, and building RESTful APIs using Node.js.",
        "I had the chance to work with SQL, a popular relational database management system (RDBMS) and perform database operations such as CRUD (Create, Read, Update, Delete) operations.",
        "I you worked with MongoDB, a NoSQL database that uses a flexible document model.",
      ],
    },
    {
      title: "Associate Software Developer",
      company_name: "Techugo Pvt. Ltd.",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Dec 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
     {
      title: "Software Developer",
      company_name: "Velocis System Pvt. Ltd.",
      icon: velocis,
      iconBg: "#E6DEDD",
      date: "Dec 2023 - Present",
      points: [
        "Developed modular and reusable React components using TypeScript, enhancing code maintainability and reusability.",
        "Reduced page load time by 30% across multiple browsers by implementing optimized React.js code, improving user experience and SEO.",
        "Modernized legacy projects with functional React components and hooks, increasing code readability and reducing complexity",
        "Integrated Redux Toolkit to improve state management, resulting in a 20% reduction in state-related bugs.",
        "Collaborated with back-end teams to integrate REST APIs using Axios and handled async state with custom hooks.",
        "Streamlined development workflows using agile methodologies and React.js best practices, reducing delivery time by 15%.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };