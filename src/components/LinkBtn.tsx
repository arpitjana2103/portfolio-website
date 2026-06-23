import {
    Doc01Icon,
    Linkedin02FreeIcons,
    Mail02Icon,
    TwitterIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

type TIcons = "Gmail" | "CV" | "LinkedIn" | "Twitter";

type Props = {
    icon: TIcons;
    className1?: string;
    className2?: string;
    text: string;
    href: string;
};

const Icons = {
    Gmail: Mail02Icon,
    CV: Doc01Icon,
    LinkedIn: Linkedin02FreeIcons,
    Twitter: TwitterIcon,
} as const satisfies Record<TIcons, typeof Mail02Icon>;

export default function LinkBtn({ icon, text, href, className1, className2 }: Props) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <div className={cn("w-fit rounded-full border p-[0.2rem] transition-all", className1)}>
                <Button
                    className={cn(
                        "rounded-full font-normal flex gap-1.5 px-3 cursor-pointer ",
                        className2,
                    )}
                >
                    <span>
                        <HugeiconsIcon
                            strokeWidth={1.5}
                            icon={Icons[icon]}
                            className="opacity-100"
                        />
                    </span>
                    <span className="tracking-wide">{text}</span>
                </Button>
            </div>
        </a>
    );
}
