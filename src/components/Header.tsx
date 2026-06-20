import { DotGridSpotlight } from "@/components/dot-grid-spotlight";

import profileImg from "./../assets/profile.jpg";
import Badge from "./Badge";
import Container from "./Container";

const amber400 = "oklch(.828 .189 84.429)";

const DOT_COLOR = {
    light: {
        default: amber400,
        active: amber400,
    },
    dark: {
        default: "rgba(255, 255, 255, 0.06)",
        active: "rgba(255, 255, 255, 0.12)",
    },
} as const;

export default function Header() {
    const theme = "light";
    return (
        <div>
            <div className="relative h-40 w-full">
                <DotGridSpotlight
                    dotColor={DOT_COLOR[theme]?.default}
                    activeDotColor={DOT_COLOR[theme]?.active}
                    className="cursor-pointer border-b-2 border-amber-200/30 bg-transparent"
                />

                <div className="pointer-events-none absolute -bottom-8 left-1/2 z-1000 w-260 max-w-full -translate-x-1/2 rounded-full bg-transparent p-2 px-10">
                    <div className="w-fit rounded-full bg-background p-2">
                        <div className="w-fit rounded-full border bg-background p-1">
                            <img src={profileImg} className="aspect-square w-20 rounded-full" />
                        </div>
                    </div>
                </div>

                <div className="pointer-events-none absolute bottom-0 h-20 w-full bg-[linear-gradient(0deg,var(--background)_0%,transparent_50%)]" />
            </div>

            <Container>
                <div className="pointer-events-none">
                    <h1 className="mt-8 font-sans text-2xl font-semibold">
                        Hey <span className="font-emoji">👋</span> , I am Arpit
                    </h1>
                </div>
            </Container>

            <Container>
                <div className="mt-4 font-mono text-foreground/70">
                    <p>
                        A frontend Developer based in Kolkata, <span>🇮🇳</span> India.
                        <br />
                        Passionate about turning ideas into polished web applications with{" "}
                        <Badge name="React" className="translate-y-0.5 bg-cyan-50" /> and{" "}
                        <Badge name="NextJS" className="translate-y-0.5 bg-stone-100" />.
                    </p>
                </div>
            </Container>

            {/*<Container>

            </Container>*/}
        </div>
    );
}
