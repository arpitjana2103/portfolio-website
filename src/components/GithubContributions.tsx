import {
    fetchGitHubContributions,
    GitHubContributionChart,
    type ContributionCalendar,
} from "@achrekarom/github-contribution-chart";
import { useEffect, useState } from "react";

import { useTheme } from "@/contexts/theme.context";

import Container from "./Container";
import Reveal from "./Reveal";

const GITHUB_USERNAME = "arpitjana2103";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_PAT_TOKEN as string | undefined;

/** Amber-toned custom colors that complement the portfolio's amber accent palette */
const DARK_COLORS = {
    0: "oklch(0.25 0.02 85)", // near-black, slightly warm
    1: "oklch(0.38 0.08 85)", // dim amber
    2: "oklch(0.55 0.14 75)", // medium amber
    3: "oklch(0.72 0.18 70)", // bright amber
    4: "oklch(0.85 0.19 65)", // vivid amber-gold
} as const;

const LIGHT_COLORS = {
    0: "oklch(0.93 0.02 85)", // very light warm grey
    1: "oklch(0.85 0.08 85)", // pale amber
    2: "oklch(0.75 0.14 78)", // mid amber
    3: "oklch(0.65 0.17 72)", // deeper amber
    4: "oklch(0.55 0.20 68)", // rich amber
} as const;

export default function GithubContributions() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const [calendar, setCalendar] = useState<ContributionCalendar | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(false);

        fetchGitHubContributions(GITHUB_USERNAME, { token: GITHUB_TOKEN })
            .then((data) => {
                if (!cancelled) {
                    setCalendar(data);
                    setLoading(false);
                }
            })
            .catch(() => {
                if (!cancelled) {
                    setError(true);
                    setLoading(false);
                }
            });

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <section className="mt-22">
            <Container>
                <Reveal>
                    <h1 className="font-sans text-foreground/50">GITHUB CONTRIBUTIONS</h1>
                </Reveal>

                <Reveal>
                    <div className="overflow-x-auto">
                        <div className="mt-4 w-240 rounded-xl border border-border/40 bg-foreground/2 p-4 dark:border-border/20">
                            {/* Header row */}
                            <div className="mb-3 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <a
                                        href={`https://github.com/${GITHUB_USERNAME}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground/90"
                                    >
                                        @{GITHUB_USERNAME}
                                    </a>
                                    {!loading && !error && calendar && (
                                        <span className="rounded-full bg-foreground/8 px-2 py-0.5 text-xs text-foreground/50">
                                            {calendar.totalContributions.toLocaleString()}{" "}
                                            contributions this year
                                        </span>
                                    )}
                                </div>

                                {/* Legend */}
                                <div className="flex items-center gap-1.5 text-xs text-foreground/40">
                                    <span>Less</span>
                                    {[0, 1, 2, 3, 4].map((level) => (
                                        <span
                                            key={level}
                                            className="inline-block h-3 w-3 rounded-full"
                                            style={{
                                                backgroundColor: isDark
                                                    ? DARK_COLORS[level as keyof typeof DARK_COLORS]
                                                    : LIGHT_COLORS[
                                                          level as keyof typeof LIGHT_COLORS
                                                      ],
                                            }}
                                        />
                                    ))}
                                    <span>More</span>
                                </div>
                            </div>

                            {/* Chart area */}
                            {loading && <ChartSkeleton />}

                            {error && !loading && (
                                <div className="flex h-20 items-center justify-center text-sm text-foreground/40">
                                    Could not load contributions. Check your token or network.
                                </div>
                            )}

                            {!loading && !error && (
                                <GitHubContributionChart
                                    calendar={calendar}
                                    colorScheme={isDark ? "dark" : "light"}
                                    months={12}
                                    colors={isDark ? DARK_COLORS : LIGHT_COLORS}
                                    gap={3}
                                    cellRadius={100}
                                    style={{ width: "100%" }}
                                />
                            )}
                        </div>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}

/** Animated skeleton shown while data is loading */
function ChartSkeleton() {
    return (
        <div className="flex h-30 w-full animate-pulse gap-0.75 overflow-hidden rounded-md">
            {Array.from({ length: 52 }).map((_, wi) => (
                <div key={wi} className="flex flex-1 flex-col gap-0.75">
                    {Array.from({ length: 7 }).map((_d, di) => (
                        <div
                            key={di}
                            className="flex-1 rounded-full bg-foreground/8"
                            style={{ animationDelay: `${(wi * 7 + di) * 5}ms` }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
