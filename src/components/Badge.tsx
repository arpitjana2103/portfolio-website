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
        <span className={cn("inline-block shadow-xs rounded-sm px-1.5 py-0.5", className)}>
            <span className="flex items-center gap-1">
                <span className="h-4">
                    <img className="aspect-square h-4" src={Icons[name]} alt={name} />
                </span>
                <span>{name}</span>
            </span>
        </span>
    );
}
