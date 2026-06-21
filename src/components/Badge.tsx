import { cn } from "@/lib/utils";

import antiGravityLogo from "./../assets/antiGravity.png";
import reactLogo from "./../assets/atom.png";
import awsLogo from "./../assets/aws.png";
import chatGPT from "./../assets/chatgpt.png";
import claude from "./../assets/claude.png";
import dockerLogo from "./../assets/docker.png";
import expressLogo from "./../assets/express.png";
import git from "./../assets/git.png";
import gitHubLogo from "./../assets/github.png";
import githubActions from "./../assets/githubActions.png";
import jsLogo from "./../assets/javascript.png";
import mongoLogo from "./../assets/mongo.png";
import nextLogo from "./../assets/next.png";
import nextAuth from "./../assets/nextAuth.png";
import nodeLogo from "./../assets/nodejs.png";
import notionLogo from "./../assets/notion.png";
import postgreLogo from "./../assets/postgre.png";
import prizmaLogo from "./../assets/prizma.png";
import shadcnLogo from "./../assets/shadcn.png";
import tailwindLogo from "./../assets/tailwind.png";
import tsLogo from "./../assets/typescript.png";
import vsCodeLogo from "./../assets/vsCode.png";
import zedLogo from "./../assets/zed.png";

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
        <span className={cn("inline-block shadow-xs rounded-md px-2 py-0.5", className)}>
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
