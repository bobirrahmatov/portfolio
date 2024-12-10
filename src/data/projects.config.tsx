import { Icons } from "@/components/icons";

export const PROJECTS = [
  {
    title: "OnT Agency: Innovating Operations and Tech",
    href: "",
    // dates: "Mar 2024 - May 2024",
    featured: true,
    active: true,
    description:
      "OnT Agency is a comprehensive SaaS platform empowering businesses to bring their creative and technical visions to life. From cutting-edge Web3 solutions and dynamic web applications to captivating art projects, data analysis, and interactive dashboards, we deliver tailored, high-impact results that elevate your operations and technology.",
    technologies: [
      "Next.js",
      "Typescript",
      "React",
      "Shadcn UI",
      "Resend",
      "Tailwind CSS",
      "Vercel ai sdk",
      "Framer Motion",
    ],
    links: [
      {
        type: "Website",
        href: "",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-e69c5.firebasestorage.app/o/OnT.png?alt=media&token=19aec3ff-25fd-447a-97cc-58c1587e9ade",
    video: "",
  },
  {
    title: "",
    // href: "https://github.com/SkidGod4444/TeleGram-Member-Adder",
    dates: "",
    featured: false,
    archived: true,
    description:
      "",
    technologies: [],
    links: [
      {
        type: "Source",
        href: "",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
];
