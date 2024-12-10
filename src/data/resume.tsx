import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Bob (Bobir) Rahmatov",
  initials: "BR",
  url: "https://bobirrahmatov.dev",
  location: "Global, Remote-Friendly",
  newprojects: "Open for Projects",
  collaborate: "Let's Collaborate",
  locationLink: "",
  description:
    "Full-stack developer with a Web3 obsession. I turn ideas into code, make sense of data, and build dashboards with a touch of magic. Builder, learner, and open-source contributor.",
  summary:
    "I'm Bobir (Bob) Rahmatov, a developer with a passion for problem-solving and innovation. With experience in full-stack development and Web3, I specialize in creating scalable applications and insightful dashboards powered by data. Whether it’s building responsive user interfaces or integrating blockchain solutions, I enjoy tackling challenges that push the boundaries of technology. When I’m not coding, I’m exploring new trends in tech or contributing to open-source projects.",
  avatarUrl: "/avatar-main.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "VBA",
    "SQL",
    "MongoDB",
    "Web3.js",
    "Solidity",
    "Tableau",
    "Tableau Prep",
    "ETL",
    "Power BI",
    "Dataiku",
    "Selenium",
    "Figma",
    "Git"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "bobirrahmatof@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bobirrahmatov",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/bobirrahmatov",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/bobrahmatov",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@bobrahmatov",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:bobirrahmatof@gmail.com?subject=Potential%20Project%20Request&body=Hello%20Bob,%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%20potential%20project%20with%20you.%20Here%20are%20the%20details:%0D%0A%0D%0A[Add%20your%20project%20details%20here]%0D%0A%0D%0AThank%20you,%0D%0A[Your%20Name]",
        icon: Icons.email,

        navbar: true,
      },
    },
  },
} as const;
