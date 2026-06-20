import { cn } from "@/lib/utils";

type Props = {
    children: React.ReactNode;
    className?: string;
};

export default function Container({ children, className }: Props) {
    return <div className={cn("mx-auto max-w-260 px-10", className)}>{children}</div>;
}
