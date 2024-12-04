import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { Timeline } from "./magicui/timeline";
import BlurFadeText from "./magicui/blur-fade-text";

import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.4;

const CitiTech: String[] = [
    "Python",
    "VBA",
    "SQL",
    "ETL",
    "RPA",
    "Figma",
    "Tableau",
    "Power BI",
    "Advanced MS Accesss",
];

const FreelanceTech: String[] = [
    "Typescript",
    "Javascript",
    "React.js",
    "Next.js",
    "Solidity",
    "Tailwind CSS",
    "Framer Motion",
    "PostgreSQL",
    "Vercel",
    "Python",
    "Tableau",
    "Framer",
    "Figma",
    "Git",
    "Github",
];

export function Experience() {
    const data = [
        {
            title: "Citibank",
            subtitle: "Process Re-Engineering and Tableau Developer",
            content: (
                <div>
                    <div>
                        <BlurFadeText
                            text="Driving innovation in data analytics and automation at Citi using Python, VBA, SQL, RPA, and Tableau to design custom workflows, build interactive dashboards, and develop ETL pipelines. Leveraging tools like Tableau Prep, Selenium, and Oracle Apex to streamline operations, enhance efficiency, and deliver actionable insights across global teams."
                            className="text-neutral-800 dark:text-neutral-200 mb-2 text-xs md:text-sm font-normal"
                        />
                        <BlurFadeText
                            className="max-w-[600px] md:text-xl mb-4"
                            delay={BLUR_FADE_DELAY}
                            text="July 2017 - Present"
                        />
                    </div>
                    <div className="flex min-h-0 flex-col gap-y-3">
                        <div className="flex flex-wrap gap-1">
                            {CitiTech.map((tech, id) => (
                                <BlurFade
                                    key={id}
                                    delay={BLUR_FADE_DELAY + id * 0.05}
                                >
                                    <Badge key={id}>{tech}</Badge>
                                </BlurFade>
                            ))}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Self-Employed",
            subtitle: "Freelance Software Developer",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8"></p>
                    <div>
                        <BlurFadeText
                            text="Developed custom web applications, Tableau dashboards, VBA tools, and Python automation solutions for clients. Delivered projects like interactive dashboards, booking systems, and data-driven apps to enhance performance and user experience."
                            className="text-neutral-800 dark:text-neutral-200 mb-2 text-xs md:text-sm font-normal"
                        />
                        <BlurFadeText
                            className="max-w-[600px] md:text-xl mb-4"
                            delay={BLUR_FADE_DELAY}
                            text="May 2019 - Present"
                        />
                        <div className="flex min-h-0 flex-col gap-y-3">
                            <div className="flex flex-wrap gap-1">
                                {FreelanceTech.map((tech, id) => (
                                    <BlurFade
                                        key={id}
                                        delay={BLUR_FADE_DELAY + id * 0.05}
                                    >
                                        <Badge key={id}>{tech}</Badge>
                                    </BlurFade>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}