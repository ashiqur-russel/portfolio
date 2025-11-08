import { Github, Linkedin, Mail } from "lucide-react";

const data = {
  home: {
    name: "Ashiqur Rahman",
    description:
      "I fix, optimize, and build #Angular, #Next_js, and #React apps powered by #AI.",
    // # -> for css style, _ -> create space, __ -> creates dash
    cvLink: "/files/CV_Mohammad_Ashiqur_Rahman.pdf",
  },
  sidebar: {
    links: [
      {
        name: "github",
        link: "https://github.com/ashiqur-russel",
        icon: Github,
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/ashiq-dev/",
        icon: Linkedin,
      },
      {
        name: "email",
        link: "mailto:rahman.tuc@gmail.com",
        icon: Mail,
      },
    ],
  },

  projects: {
    projects: [
      {
        id: 1,
        title: "OnBook E-commerce",
        description:
          "A full-stack online bookstore with role-based dashboards, secure payments, and robust inventory management.\n\n Technologies Used: Next.js, Express.js, MongoDB, Stripe, Tailwind CSS.",
        image: "/projects-imgs/project_1_landing.png",
        previewLink: "https://book-on-client.vercel.app/",
        githubLink: "https://github.com/ashiqur-russel/On.Book-Client",
      },
      {
        id: 2,
        title: "Link Tutor Platform",
        description:
          "An online tutoring marketplace with student, tutor, and admin workspaces including scheduling, payments, and analytics.\n\n Technologies Used: Next.js, Node.js, MongoDB, Stripe, Tailwind CSS.",
        image: "/projects-imgs/project_2_landing.png",
        previewLink: "https://linktutor.vercel.app/",
        githubLink: "https://github.com/ashiqur-russel/LinkTutor",
      },
      {
        id: 3,
        title: "Taskify Project Management",
        description:
          "A Trello-inspired productivity tool supporting drag-and-drop boards, team collaboration, and project analytics.\n\n Technologies Used: Next.js, React, Prisma, PostgreSQL, Tailwind CSS.",
        image: "/projects-imgs/proejct_3_dashbaord.png",
        previewLink: "https://taskify-client-two.vercel.app/projects/1",
        githubLink: "https://github.com/ashiqur-russel/Taskify",
      },
    ],
  },
  experience: {
    timeline: [
      {
        role: "Full Stack Developer",
        company: "AFQ I Service gGmbH",
        type: "Full-Time",
        location: "Karlsruhe, Germany",
        period: "Aug 2024 – Present",
        stack: [
          "Next.js",
          "Angular",
          "NestJS",
          "Tailwind",
          "Figma",
          "DevOps Automation",
        ],
        highlights: [
          "Leading modernization of legacy operational platforms with Angular, NestJS, MongoDB, Tailwind, and fully automated CI/CD pipelines.",
          "Scaled infrastructure and tooling to cut deployment time by 60% and improve release stability.",
          "Automating staging, testing, and production rollouts while mentoring teams on clean architecture and DevOps best practices.",
        ],
      },
      {
        role: "Full Stack Developer",
        company: "Bidi Bildung Digital GmbH",
        type: "Full-Time",
        location: "Dresden, Germany",
        period: "May 2023 – Jul 2024",
        stack: ["Angular", "NestJS", "Next.js", "MongoDB", "Stripe"],
        highlights: [
          "Built ed-tech features across Angular, NestJS, and Next.js to boost learner engagement.",
          "Integrated HubSpot and Contentful, enabling non-technical teams to ship content faster.",
          "Achieved ~80% test coverage across front-end and back-end services using Jest and Jasmine.",
        ],
      },
      {
        role: "Full Stack Developer",
        company: "Bosch Rexroth AG",
        type: "Werkstudent",
        location: "Ulm, Germany",
        period: "Oct 2022 – Apr 2023",
        stack: ["React", "Node.js", "PostgreSQL", "Azure"],
        highlights: [
          "Delivered partner tooling used by 500+ stakeholders across the Bosch ecosystem.",
          "Implemented secure session-based authentication with SSO and improved API performance.",
          "Automated dashboards and reporting pipelines to improve operational visibility.",
        ],
      },
      {
        role: "Full Stack Developer",
        company: "Bosch Rexroth AG",
        type: "Internship",
        location: "Ulm, Germany",
        period: "Apr 2022 – Sep 2022",
        stack: ["Angular", "NestJS", "GitLab CI", "Docker"],
        highlights: [
          "Developed and implemented an admin dashboard that streamlined operations within the e-commerce CMS.",
          "Introduced GitLab CI/CD workflows to automate builds, testing, and deployments.",
          "Collaborated with UX and product teams to design responsive, accessible experiences.",
        ],
      },
    ],
  },
  education: {
    items: [
      {
        degree: "Automotive Software Engineering",
        type: "Master's Degree",
        field: "Computer Science & Engineering",
        institution: "Technische Universität Chemnitz",
        period: "2021 – 2024",
        location: "Chemnitz, Germany",
        gpa: "2.5 / 1.0",
        achievements: [
          "Thesis project implemented a web-based testbed UI for automated configuration generation in research evaluations.",
          "Focused on software engineering architecture & design, multicore programming, database design, and Java engineering.",
        ],
      },
      {
        degree: "Software Engineering with Multimedia",
        type: "Bachelor's Degree",
        field: "Computer Science & Engineering",
        institution: "Limkokwing University of Creative Technology",
        period: "2015 – 2018",
        location: "Cyberjaya, Malaysia",
        gpa: "3.84 / 4.00",
        achievements: [
          "Dean's List recipient across multiple semesters.",
          "Capstone project delivered predictive analytics for intelligent logistics planning.",
        ],
      },
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: "html",
        src: "/skills/html.svg",
        link: "https://en.wikipedia.org/wiki/HTML",
      },
      {
        id: 2,
        name: "css",
        src: "/skills/css.svg",
        link: "https://en.wikipedia.org/wiki/CSS",
      },
      {
        id: 3,
        name: "javascript",
        src: "/skills/javascript.svg",
        link: "https://en.wikipedia.org/wiki/JavaScript",
      },
      {
        id: 4,
        name: "typescript",
        src: "/skills/typescript.svg",
        link: "https://en.wikipedia.org/wiki/TypeScript",
      },
      {
        id: 5,
        name: "react",
        src: "/skills/react.svg",
        link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
      {
        id: 6,
        name: "tailwind",
        src: "/skills/tailwind.svg",
        link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
      },
      {
        id: 7,
        name: "nextJS",
        src: "/skills/nextJS.svg",
        link: "https://en.wikipedia.org/wiki/Next.js",
      },
      {
        id: 8,
        name: "postgresql",
        src: "/skills/postgresql.svg",
        link: "https://en.wikipedia.org/wiki/PostgreSQL",
      },
      {
        id: 9,
        name: "vitejs",
        src: "/skills/vitejs.svg",
        link: "https://en.wikipedia.org/wiki/Vite_(software)",
      },
      {
        id: 10,
        name: "git",
        src: "/skills/git.svg",
        link: "https://en.wikipedia.org/wiki/Git",
      },
      {
        id: 11,
        name: "docker",
        src: "/skills/docker.svg",
        link: "https://en.wikipedia.org/wiki/Docker_(software)",
      },
      {
        id: 12,
        name: "figma",
        src: "/skills/figma.svg",
        link: "https://en.wikipedia.org/wiki/Figma",
      },
      {
        id: 13,
        name: "firebase",
        src: "/skills/firebase.svg",
        link: "https://en.wikipedia.org/wiki/Firebase",
      },
      {
        id: 14,
        name: "markdown",
        src: "/skills/markdown.svg",
        link: "https://en.wikipedia.org/wiki/Markdown",
      },
      {
        id: 15,
        name: "mongoDB",
        src: "/skills/mongoDB.svg",
        link: "https://en.wikipedia.org/wiki/MongoDB",
      },
    ],
  },
  contact: {
    email: "rahman.tuc@gmail.com",
  },
};

export default data;
