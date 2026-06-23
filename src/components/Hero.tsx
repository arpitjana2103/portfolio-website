import { GithubIcon, Linkedin02FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { DotGridSpotlight } from "@/components/ui/dot-grid-spotlight";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useTheme } from "@/contexts/theme.context";
import { cn } from "@/lib/utils";

import profileImg from "./../assets/profile.jpg";
import Badge from "./Badge";
import Container from "./Container";
import LinkBtn from "./LinkBtn";
import ThemeToggle from "./ThemeToggle";

const amber400 = "oklch(.828 .189 84.429)";
const amber500 = "oklch(.769 .188 70.08)";

const DOT_COLOR = {
    light: {
        default: amber400,
        active: amber400,
    },
    dark: {
        default: amber500,
        active: amber500,
    },
} as const;

export default function Hero() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (
        <section>
            <TooltipProvider>
                <div className="relative h-40 w-full">
                    <DotGridSpotlight
                        dotColor={DOT_COLOR[theme]?.default}
                        activeDotColor={DOT_COLOR[theme]?.active}
                        className="cursor-pointer bg-transparent"
                    />

                    <div className="pointer-events-none absolute -bottom-10 left-1/2 z-1000 flex w-260 max-w-full -translate-x-1/2 items-end justify-between rounded-full p-2 px-6 sm:px-10">
                        <div className="relative aspect-square w-30">
                            <div className="absolute right-0 bottom-4 z-1001 animate-fade-out-loop hover:animate-none hover:opacity-100">
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div
                                            className={cn(
                                                "flex pointer-events-auto cursor-pointer aspect-square h-6 w-6 items-center justify-center rounded-full",
                                                isDark &&
                                                    "bg-[radial-gradient(circle,#008236_0%,transparent_60%)] ",
                                                !isDark &&
                                                    "bg-[radial-gradient(circle,#7bf1a8_0%,transparent_60%)]",
                                                " hover:bg-[radial-gradient(circle,transparent_0%,transparent_60%)]",
                                            )}
                                        >
                                            <span className="inline-block h-2 w-2 rounded-full bg-green-500 transition-colors"></span>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent className="px-2 py-0.5" side="right">
                                        <p>Open to Work</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>

                            <div className="absolute inset-0 rounded-full bg-background/90 blur-sm" />
                            <div className="absolute top-1/2 left-1/2 aspect-square w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-border/60 bg-background p-1">
                                <img
                                    src={profileImg}
                                    className="aspect-square w-full rounded-full dark:brightness-85"
                                    alt="arpit"
                                />
                            </div>
                        </div>

                        <div className="pointer-events-auto flex items-center gap-4">
                            <a href="https://www.linkedin.com/in/arpitjana2103/" target="_blank">
                                <HugeiconsIcon size={21} icon={Linkedin02FreeIcons} />
                            </a>
                            <a href="https://github.com/arpitjana2103" target="_blank">
                                <HugeiconsIcon icon={GithubIcon} size={20} />
                            </a>
                            <ThemeToggle />
                        </div>
                    </div>

                    <div className="pointer-events-none absolute bottom-0 h-20 w-full bg-[linear-gradient(0deg,var(--background)_0%,transparent_50%)]" />
                </div>
                <Container>
                    <div className="pointer-events-none">
                        <h1 className="mt-8 text-3xl tracking-wide text-foreground/80">
                            Hi <span className="font-emoji">👋</span> , I am Arpit !
                        </h1>
                    </div>
                </Container>
                <Container>
                    <div className="mt-4 text-foreground/70">
                        <p>
                            A frontend developer based in Kolkata, <span>🇮🇳</span> India. Love to
                            build polished web applications with{" "}
                            <Badge
                                name="React"
                                className="translate-y-0.5 bg-cyan-500/15 px-2.5 py-0"
                            />{" "}
                            and{" "}
                            <Badge
                                name="NextJS"
                                className="translate-y-0.5 bg-stone-500/15 px-2.5 py-0"
                            />{" "}
                            ecosystem, with 2+ years of industry experience and 1 year of experience
                            teaching web development.
                        </p>
                    </div>
                </Container>
                <Container className="mt-4 flex items-center gap-2">
                    <LinkBtn
                        icon="CV"
                        href="#"
                        text="See Resume"
                        className1="border-foreground/30 hover:border-foreground/0"
                        className2="bg-foreground/90 hover:bg-foreground text-background"
                    />
                    <LinkBtn
                        icon="Gmail"
                        href="mailto:arpitjana2103@gmail.com"
                        text="Email Me"
                        className1="border-foreground/30 hover:border-foreground/0"
                        className2="bg-transparent hover:bg-transparent border-2 text-foreground border-foreground/70"
                    />
                </Container>
            </TooltipProvider>
        </section>
    );
}
