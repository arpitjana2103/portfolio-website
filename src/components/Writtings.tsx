import { ArrowUpRight01Icon, MediumIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import Container from "./Container";
import Reveal from "./Reveal";

export interface BlogProps {
    title: string;
    link: string;
    date: string;
}

export function Blog({ title, link, date }: BlogProps) {
    return (
        <Reveal>
            <div className="mt-6">
                <div className="flex items-center gap-3">
                    <HugeiconsIcon icon={MediumIcon} />
                    <span className="text-sm">{date}</span>
                </div>
                <div className="mt-1 flex items-center gap-2 hover:opacity-70">
                    <a href={link} target="_blank" rel="noreferrer" className="">
                        <h2 className="text-foreground/60">{title}</h2>
                    </a>
                    <HugeiconsIcon className="text-foreground/60" icon={ArrowUpRight01Icon} />
                </div>
            </div>
        </Reveal>
    );
}

const WRITTINGS_DATA: BlogProps[] = [
    {
        title: "Build a Production-Ready Auto-Suggestion Search using React Query",
        link: "https://blog.stackademic.com/building-a-bulletproof-search-debounce-caching-race-conditions-with-react-query-82d4d775245e",
        date: "Jun 27, 2026",
    },
    {
        title: "'this' Keyword in JavaScript - A Complete guide",
        link: "https://medium.com/stackademic/this-keyword-in-javascript-a-complete-guide-ac054d52ae79",
        date: "Jun 29, 2026",
    },
];

export default function Writtings() {
    return (
        <div className="mt-18">
            <Container>
                <Reveal>
                    <h1 className="font-sans text-foreground/50">WRITTINGS</h1>
                </Reveal>

                <div className="flex flex-col gap-2">
                    {WRITTINGS_DATA.map((writing, index) => (
                        <Blog key={index} {...writing} />
                    ))}
                </div>
            </Container>
        </div>
    );
}
