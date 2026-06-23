import { HeartIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import LinkBtn from "./LinkBtn";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
    return (
        <div className="mt-18 p-10">
            <div className="mb-4 flex items-center justify-center gap-3">
                <ThemeToggle />
            </div>
            <div className="mb-3 flex items-center justify-center gap-2 text-foreground/70">
                <span>Coded with </span>
                <span>
                    <HugeiconsIcon
                        size={18}
                        fill="currentColor"
                        strokeWidth={1.5}
                        icon={HeartIcon}
                        className="text-rose-400 opacity-100"
                    />{" "}
                </span>
                <span>by</span>
            </div>
            <p className="text-center font-cursive text-4xl text-foreground/70">Arpit Jana</p>
            <div className="mt-6 flex items-center justify-center gap-3">
                <LinkBtn
                    icon="LinkedIn"
                    href="https://www.linkedin.com/in/arpitjana2103/"
                    text="LinkedIn"
                    className1="border-foreground/30 hover:border-foreground/0"
                    className2="bg-transparent hover:bg-transparent border-2 text-foreground border-foreground/70"
                />
                <LinkBtn
                    icon="Twitter"
                    href="https://x.com/ArpitJana21"
                    text="Twitter"
                    className1="border-foreground/30 hover:border-foreground/0"
                    className2="bg-transparent hover:bg-transparent border-2 text-foreground border-foreground/70"
                />
            </div>
        </div>
    );
}
