import { ArrowUpRight03Icon, GithubIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import mistCastLogo from "./../assets/mistcast.png";
import Container from "./Container";
import Reveal from "./Reveal";

export default function Projects() {
    return (
        <section className="mt-18">
            <Container>
                <Reveal>
                    <h1 className="font-sans text-foreground/50">PROJECT</h1>
                </Reveal>
                <Reveal>
                    <div className="mt-4">
                        <div className="max-w-100 rounded-2xl border border-border/40 bg-card/40 p-4 shadow-sm dark:border-border/20">
                            <div className="flex items-center gap-2">
                                <span>
                                    <img
                                        src={mistCastLogo}
                                        className="aspect-square h-4 w-4"
                                        alt="mistCast"
                                    />
                                </span>
                                <span className="font-semibold">MistCast</span>
                                <span className="ml-auto flex items-center gap-3">
                                    <a
                                        href="https://github.com/arpitjana2103/grow-14-mistcast-weatherdashboard"
                                        target="_blank"
                                    >
                                        <HugeiconsIcon icon={GithubIcon} size={20} />
                                    </a>
                                    <a
                                        href="https://mistcast-weather.netlify.app/forecast"
                                        target="_blank"
                                    >
                                        <HugeiconsIcon icon={ArrowUpRight03Icon} size={20} />
                                    </a>
                                </span>
                            </div>
                            <div className="mt-3">
                                <p className="text-foreground/70">
                                    Modern, responsive weather dashboard built with React, Leaflet,
                                    OpenWeatherMap API & Geocoding API.
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>

                <div className="mt-4 hidden flex-col gap-2">
                    <Reveal>
                        <img
                            src="https://i.imghippo.com/files/GKoF3905HAU.webp"
                            className="rounded-2xl"
                            alt="ProjectIMG 01"
                        />{" "}
                    </Reveal>
                    <Reveal>
                        <img
                            src="https://i.imghippo.com/files/eNbe6901w.webp"
                            className="rounded-2xl"
                            alt="ProjectIMG 01"
                        />
                    </Reveal>
                    <Reveal>
                        <img
                            src="https://i.imghippo.com/files/oj7680PXs.webp"
                            className="rounded-2xl"
                            alt="ProjectIMG 01"
                        />
                    </Reveal>
                    <Reveal>
                        <img
                            src="https://i.imghippo.com/files/cDZ6318lBg.webp"
                            className="rounded-2xl"
                            alt="ProjectIMG 01"
                        />
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}
