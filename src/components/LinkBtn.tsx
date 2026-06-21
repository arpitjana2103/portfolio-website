import { Doc01Icon, Mail02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

type TIcons = "Gmail" | "CV";

type Props = {
    name: TIcons;
    className1?: string;
    className2?: string;
    text: string;
    href: string;
};

const Icons = {
    Gmail: Mail02Icon,
    CV: Doc01Icon,
} as const satisfies Record<TIcons, typeof Mail02Icon>;

export default function LinkBtn({ name, text, href, className1, className2 }: Props) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <div className={cn("w-fit rounded-full border p-[0.1rem] transition-all", className1)}>
                <Button
                    className={cn(
                        "rounded-full font-normal flex gap-1.5 px-3 cursor-pointer ",
                        className2,
                    )}
                >
                    <span>
                        <HugeiconsIcon strokeWidth={2} icon={Icons[name]} />
                    </span>
                    <span className="tracking-wide">{text}</span>
                </Button>
            </div>
        </a>
    );
}
