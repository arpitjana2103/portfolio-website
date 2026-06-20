import { cn } from "@/lib/utils";

type Props = {
    children: React.ReactNode;
    className?: string;
};

export default function Container({ children, className }: Props) {
    return <div className={cn("mx-auto max-w-260 sm:px-10 px-6", className)}>{children}</div>;
}
