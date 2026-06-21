import Badge from "./Badge";
import Container from "./Container";

export default function TechStack() {
    return (
        <section className="mt-10">
            <Container>
                <h1 className="font-sans font-semibold text-foreground/50">TECH STACK</h1>
                <div className="mt-4">
                    {/*<p className="font-mono text-foreground/50">Tech Stack I mosty use - </p>*/}
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-foreground/70">
                        <Badge name="JavaScript" className="bg-yellow-400/10" />
                        <Badge name="TypeScript" className="bg-blue-500/10" />
                        <Badge name="React" className="bg-sky-500/10" />
                        <Badge name="Tailwindcss" className="bg-cyan-500/10" />
                        <Badge name="Shadcn" className="bg-stone-500/10" />
                        <Badge name="NextJS" className="bg-stone-500/10" />
                        <Badge name="NextAuth" className="bg-violet-500/10" />
                        <Badge name="Prizma" className="bg-teal-500/10" />
                        <Badge name="PostgreSQL" className="bg-blue-500/10" />
                        <Badge name="NodeJS" className="bg-green-500/10" />
                        <Badge name="ExpressJS" className="bg-stone-500/10" />
                        <Badge name="MongoDB" className="bg-green-500/10" />
                        <Badge name="Docker" className="bg-sky-500/10" />
                        <Badge name="AWS" className="bg-orange-500/10" />
                        {/*<Badge name="GitHubActions" className="bg-cyan-500/10" />*/}
                    </div>

                    {/*<p className="pt-4 font-mono text-foreground/50">Tools I mosty use -</p>*/}
                    <div className="mt-6 flex flex-wrap items-center gap-3 text-foreground/70">
                        <Badge name="Git" className="bg-orange-500/10" />
                        <Badge name="GitHub" className="bg-stone-500/10" />
                        <Badge name="ChatGPT" className="bg-teal-500/10" />
                        <Badge name="Claude" className="bg-orange-500/10" />
                        <Badge name="AntiGravity" className="bg-sky-500/10" />
                        <Badge name="Zed" className="bg-blue-500/10" />
                        <Badge name="Notion" className="bg-stone-500/10" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
