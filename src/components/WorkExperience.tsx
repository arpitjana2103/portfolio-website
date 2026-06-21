import ddugkyLogo from "./../assets/ddugkyLogo.png";
import trackxLogo from "./../assets/tracxn_logo.jpg";
import Badge from "./Badge";
import Container from "./Container";
import Reveal from "./Reveal";

export default function WorkExperience() {
    return (
        <section className="mt-12">
            <Container>
                <Reveal>
                    <h1 className="font-sans text-foreground/50">WORK EXPERIENCE</h1>
                </Reveal>

                <div className="mt-4 flex flex-col gap-6">
                    <Reveal>
                        <WorkCard1 />
                    </Reveal>
                    <Reveal>
                        <WorkCard2 />
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}

function WorkCard1() {
    return (
        <div className="flex items-start gap-3 border-l-2 border-foreground/50 pl-2.5">
            <div className="h-8 w-8 shrink-0 rounded-full border-2 border-foreground/50">
                <img className="rounded-full" src={ddugkyLogo} alt="" />
            </div>
            <div>
                <span className="text-lg font-semibold text-foreground/70">
                    Lead Web Development Domain Trainer
                </span>

                <div className="text-sm text-foreground/70">
                    <span>
                        Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY), Ministry of Rural
                        Development{" "}
                    </span>
                </div>
                <div className="mt-1.5 text-sm text-foreground/50">
                    <span>Full-Time • Dec 2024 - Oct 2025 • 11 mos</span>
                </div>
                <div className="text-sm text-foreground/50">
                    <span>Bhopal • India • On-Site</span>
                </div>
                <div className="mt-2">
                    <p className="text-foreground/60">
                        Delivered structured full-stack web development training as a Lead Web Dev
                        Instructor, mentoring 200+ students across BIA-05, BIA-06, BIA-07, BIA-08,
                        and BIA-09 batches. Conducted ~1750+ total training hours, covering modern
                        web technologies and industry practices.
                    </p>

                    <ul className="mt-2 text-foreground/60">
                        <li>
                            • Conducted live coding sessions, assessments, and doubt-clearing
                            sessions
                        </li>
                        <li>
                            • Designed course materials and hands-on projects for practical learning
                        </li>
                        <li>• Provided career guidance and placement support to students</li>
                    </ul>

                    <div className="mt-3 flex flex-wrap items-center gap-2 text-foreground/60">
                        <Badge
                            name="JavaScript"
                            className="bg-yellow-400/10 px-1.5 py-0.5 text-sm"
                        />{" "}
                        <Badge name="TypeScript" className="bg-blue-500/10 px-1.5 py-0.5 text-sm" />
                        <Badge name="React" className="bg-sky-500/10 px-1.5 py-0.5 text-sm" />
                        <Badge name="Shadcn" className="bg-stone-500/10 px-1.5 py-0.5 text-sm" />
                        <Badge
                            name="Tailwindcss"
                            className="bg-cyan-500/10 px-1.5 py-0.5 text-sm"
                        />
                        <Badge name="NodeJS" className="bg-green-500/10 px-1.5 py-0.5 text-sm" />
                        <Badge name="ExpressJS" className="bg-stone-500/10 px-1.5 py-0.5 text-sm" />
                        <Badge name="MongoDB" className="bg-green-500/10 px-1.5 py-0.5 text-sm" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function WorkCard2() {
    return (
        <div className="flex items-start gap-3 border-l-2 border-foreground/50 pl-2.5">
            <div className="h-8 w-8 shrink-0 rounded-full border-2 border-foreground/50">
                <img className="rounded-full" src={trackxLogo} alt="" />
            </div>
            <div>
                <span className="text-lg font-semibold text-foreground/70">Software Engineer</span>

                <div className="text-sm text-foreground/70">
                    <span>Tracxn </span>
                </div>
                <div className="mt-1.5 text-sm text-foreground/50">
                    <span>Full-Time • Jan 2024 - Aug 2025 • 8 mos</span>
                </div>
                <div className="text-sm text-foreground/50">
                    <span>Bengaluru • India • On-Site</span>
                </div>
                <div className="mt-2">
                    <ul className="text-foreground/60">
                        <li>
                            • Built and maintained reusable React components, improving UI
                            consistency
                        </li>
                        <li>
                            • Contributed to JavaScript → TypeScript migration, enhancing type
                            safety and reducing runtime errors
                        </li>
                        <li>
                            • Identified and fixed UI/UX and performance issues across the
                            application
                        </li>
                        <li>
                            • Collaborated with designers and backend engineers to deliver
                            production-ready features
                        </li>
                        <li>
                            • Improved code quality through refactoring and adherence to best
                            practices
                        </li>
                    </ul>

                    <div className="mt-3 flex flex-wrap items-center gap-2 text-foreground/60">
                        <Badge name="TypeScript" className="bg-blue-500/10 px-1.5 py-0.5 text-sm" />
                        <Badge name="React" className="bg-sky-500/10 px-1.5 py-0.5 text-sm" />
                        <Badge
                            name="Tailwindcss"
                            className="bg-cyan-500/10 px-1.5 py-0.5 text-sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
