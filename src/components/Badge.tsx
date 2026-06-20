import { cn } from "@/lib/utils";

import reactLogo from "./../assets/atom.png";
import nextLogo from "./../assets/next.png";

type TIcons = "React" | "NextJS";

type Props = {
    name: TIcons;
    className?: string;
};

const Icons = {
    React: reactLogo,
    NextJS: nextLogo,
} as const satisfies Record<string, string>;

export default function Badge({ name, className }: Props) {
    return (
        <span className={cn("inline-block shadow-xs rounded-md px-1.5", className)}>
            <span className="flex items-center gap-1">
                <span className="">
                    <img className="z-10 aspect-square h-4" src={Icons[name]} alt={name} />
                </span>
                <span>{name}</span>
            </span>
        </span>
    );
}
