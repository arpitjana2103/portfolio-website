import { ArrowUpRight03Icon, GithubIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";

import cvLensLogo from "./../assets/cvLens.png";
import mistCastLogo from "./../assets/mistcast.webp";
import Container from "./Container";
import Reveal from "./Reveal";

// 1. Define Props interface for the Project component
export interface ProjectProps {
    title: string;
    logo: string;
    logoAlt?: string;
    description: string;
    githubUrl?: string;
    liveUrl?: string;
    logoSize?: string;
}

// 2. Reusable <Project /> component
export function Project({
    title,
    logo,
    logoAlt,
    description,
    githubUrl,
    liveUrl,
    logoSize,
}: ProjectProps) {
    return (
        <Reveal>
            <div className="h-full w-100 rounded-2xl border border-border/40 bg-card/40 p-4 shadow-sm dark:border-border/20">
                <div className="flex items-center gap-2">
                    <span>
                        <img
                            src={logo}
                            className={cn("aspect-square h-4 w-4", logoSize)}
                            alt={logoAlt ?? title}
                        />
                    </span>
                    <span className="font-semibold">{title}</span>
                    <span className="ml-auto flex items-center gap-3">
                        {githubUrl && (
                            <a href={githubUrl} target="_blank" rel="noreferrer">
                                <HugeiconsIcon icon={GithubIcon} size={20} />
                            </a>
                        )}
                        {liveUrl && (
                            <a href={liveUrl} target="_blank" rel="noreferrer">
                                <HugeiconsIcon icon={ArrowUpRight03Icon} size={20} />
                            </a>
                        )}
                    </span>
                </div>
                <div className="mt-3">
                    <p className="text-foreground/70">{description}</p>
                </div>
            </div>
        </Reveal>
    );
}

const PROJECTS_DATA: ProjectProps[] = [
    {
        title: "MistCast",
        logo: mistCastLogo,
        logoAlt: "mistCast",
        description:
            "Modern, responsive weather dashboard built with React, Leaflet, OpenWeatherMap API & Geocoding API.",
        githubUrl: "https://github.com/arpitjana2103/grow-14-mistcast-weatherdashboard",
        liveUrl: "https://mistcast-weather.netlify.app/forecast",
    },
    {
        title: "CVLens",
        logo: cvLensLogo,
        logoAlt: "mistCast",
        logoSize: "h-5 w-5",
        description:
            "AI-powered career assistant that analyzes your current resume, personal bio, and a target job description to generate a detailed gap-analysis report.",
        githubUrl: "https://github.com/arpitjana2103/grow-19-CVLens",
        liveUrl: "https://cv-lens-prod.netlify.app/",
    },
];

export default function Projects() {
    return (
        <section className="mt-18">
            <Container>
                <Reveal>
                    <h1 className="font-sans text-foreground/50">PROJECT</h1>
                </Reveal>

                <div className="mt-6 flex flex-wrap items-stretch gap-3">
                    {PROJECTS_DATA.map((project, index) => (
                        <Project key={index} {...project} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
