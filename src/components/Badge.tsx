import { cn } from "@/lib/utils";

import antiGravityLogo from "./../assets/antiGravity.webp";
import reactLogo from "./../assets/atom.webp";
import awsLogo from "./../assets/aws.webp";
import chatGPT from "./../assets/chatgpt.webp";
import claude from "./../assets/claude.webp";
import dockerLogo from "./../assets/docker.webp";
import expressLogo from "./../assets/express.webp";
import git from "./../assets/git.webp";
import gitHubLogo from "./../assets/github.webp";
import githubActions from "./../assets/githubActions.webp";
import jsLogo from "./../assets/javascript.webp";
import mongoLogo from "./../assets/mongo.webp";
import nextLogo from "./../assets/next.webp";
import nextAuth from "./../assets/nextAuth.webp";
import nodeLogo from "./../assets/nodejs.webp";
import notionLogo from "./../assets/notion.webp";
import postgreLogo from "./../assets/postgre.webp";
import prizmaLogo from "./../assets/prizma.webp";
import shadcnLogo from "./../assets/shadcn.webp";
import tailwindLogo from "./../assets/tailwind.webp";
import tsLogo from "./../assets/typescript.webp";
import vsCodeLogo from "./../assets/vsCode.webp";
import zedLogo from "./../assets/zed.webp";

type TIcons =
    | "React"
    | "NextJS"
    | "TypeScript"
    | "JavaScript"
    | "NodeJS"
    | "Tailwindcss"
    | "ExpressJS"
    | "MongoDB"
    | "Shadcn"
    | "AWS"
    | "NextAuth"
    | "PostgreSQL"
    | "Prizma"
    | "GitHubActions"
    | "Docker"
    | "GitHub"
    | "Claude"
    | "ChatGPT"
    | "Zed"
    | "VSCode"
    | "Git"
    | "AntiGravity"
    | "Notion";

type Props = {
    name: TIcons;
    className?: string;
};

const Icons = {
    React: reactLogo,
    NextJS: nextLogo,
    TypeScript: tsLogo,
    JavaScript: jsLogo,
    NodeJS: nodeLogo,
    Tailwindcss: tailwindLogo,
    ExpressJS: expressLogo,
    MongoDB: mongoLogo,
    Shadcn: shadcnLogo,
    AWS: awsLogo,
    NextAuth: nextAuth,
    PostgreSQL: postgreLogo,
    Prizma: prizmaLogo,
    GitHubActions: githubActions,
    Docker: dockerLogo,
    GitHub: gitHubLogo,
    Claude: claude,
    ChatGPT: chatGPT,
    Zed: zedLogo,
    VSCode: vsCodeLogo,
    Git: git,
    AntiGravity: antiGravityLogo,
    Notion: notionLogo,
} as const satisfies Record<TIcons, string>;

export default function Badge({ name, className }: Props) {
    return (
        <span className={cn("inline-block shadow-xs rounded-full px-3 py-0.5", className)}>
            <span className="flex items-center gap-1.5">
                <span className="">
                    <img
                        className="z-10 aspect-square h-4 rounded-sm"
                        src={Icons[name]}
                        alt={name}
                    />
                </span>
                <span>{name}</span>
            </span>
        </span>
    );
}
