import { Linkedin01Icon, TwitterIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import ThemeToggle from "./ThemeToggle";

export default function Footer() {
    return (
        <div className="mt-18 p-10">
            <div className="mb-4 flex items-center justify-center gap-3">
                <ThemeToggle />
            </div>
            <p className="text-center font-cursive text-4xl text-foreground/70">Arpit Jana</p>
            <div className="mt-6 flex items-center justify-center gap-3">
                <a href="https://www.linkedin.com/in/arpitjana2103/" target="_blank">
                    <div className="w-fit rounded-full border border-foreground/20 p-1 hover:border-foreground/0">
                        <div className="flex w-fit items-center gap-2 rounded-full border border-foreground/50 px-2.5 py-1 text-sm text-foreground">
                            <span>
                                <HugeiconsIcon size={21} icon={Linkedin01Icon} />
                            </span>
                            <span className="">LinkedIn</span>
                        </div>
                    </div>
                </a>
                <a href="https://x.com/ArpitJana21" target="_blank">
                    <div className="w-fit rounded-full border border-foreground/20 p-1 hover:border-foreground/0">
                        <div className="flex w-fit items-center gap-2 rounded-full border border-foreground/50 px-2.5 py-1 text-sm text-foreground">
                            <span>
                                <HugeiconsIcon icon={TwitterIcon} size={20} />
                            </span>
                            <span className="">Twitter</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
