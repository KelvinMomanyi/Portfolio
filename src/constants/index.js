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
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    hotel,
    Law,
    Yard
  } from "../assets/assets";
  
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
      title: "Fullstack Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Graphic Designer",
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "PRO Customs",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Cloudy Solutions",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2021 - Dec 2023",
      points: [
        "Building intuitive, efficient, and scalable mobile applications for both iOS and Android using React Native.",  
        "Working closely with UX/UI designers, product owners, and backend engineers to ensure seamless integration of features.",
        "Optimizing mobile applications for maximum speed, responsiveness, and performance across a wide range of devices and screen sizes.",
        "Debugging and troubleshooting mobile application issues across different environments, devices, and operating systems."
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Brandefy Creative Studio",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "March 2024 - Present",
      points: [
        "Designing, developing, and maintaining robust applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) with a focus on scalability and performance.",
        "Collaborating closely with frontend and backend teams to create seamless user experiences and effective API integrations.",
        "Managing database operations, including data modeling, queries, and optimization, to support application functionality and improve efficiency.",
        "Building and implementing RESTful APIs to support frontend needs and ensure efficient data handling across the application.",
        "Performing thorough testing and debugging across the stack, ensuring cross-platform functionality and optimal performance."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Kelvin proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Kelvin does.",
      name: "Chris Brown",
      designation: "COO",
      company: "PRO Customs",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Kelvin optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "Cloudy Solutions",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Hotel Booking App",
      description:
        "A hotel booking system is a software platform designed to streamline the reservation process for hotels, resorts, and similar accommodations. It allows guests to book rooms directly through the hotel's website or app, providing real-time availability, pricing, and secure payment options.",
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
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
      ],
      image: hotel,
      source_code_link: "https://github.com/KelvinMomanyi/Finance-Dashboard",
    },
    {
      name: "Finance Dashboard",
      description:
      "Introducing our comprehensive Finance Dashboard, a powerful tool designed to provide a real-time overview of your financial landscape With intuitive visualizations and interactive charts, this dashboard offers a holistic view of your assets, liabilities, income, and expenses.",
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
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/KelvinMomanyi/Finance-Dashboard",
    },
    {
      name: "Elegance Looks",
      description:
        'Our online marketplace brings you a curated selection of high-quality products, from the latest trends to timeless classics. Browse through intuitive categories, explore detailed product descriptions, and enjoy a seamless checkout experience.',
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
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
      source_code_link: "https://classyelegance.netlify.app",
    },
    {
      name: "Law Firm Consultancy App",
      description:
        "Law firms guide clients through legal processes, advocate on their behalf in court, and provide counsel to help them navigate complex legal issues. Dedicated to upholding justice and protecting clients' rights, law firms strive to achieve favorable outcomes and deliver ethical, effective legal solutions",
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
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
      ],
      image: Law,
      source_code_link: "https://kinyakiokeyo.com/",
    },
    {
      name: "Car Selling App",
      description:
        "A car selling app is a digital platform that connects buyers and sellers of new and used vehicles, offering a convenient and efficient way to explore, compare, and purchase cars. With a comprehensive listing of cars from various makes, models, and price ranges, the app allows users to filter by preferences, view high-quality images, and access detailed car specification",
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
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
      ],
      image: Yard,
      source_code_link: "https://riftcars.netlify.app/",
    },
    {
      name: "Travel App",
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
      source_code_link: "https://travel-landing-page-livid.vercel.app/",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };