import Footer from "./components/Footer";
import GithubContributions from "./components/GithubContributions";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Reveal from "./components/Reveal";
import TechStack from "./components/TechStack";
import WorkExperience from "./components/WorkExperience";

function App() {
    return (
        <main className="relative h-dvh">
            <div className="lgxl:block absolute bottom-0 z-1000 h-10 w-dvw bg-[linear-gradient(180deg,transparent_1%,var(--background)_100%)]"></div>
            <div className="h-full overflow-y-auto">
                <Reveal>
                    <Hero />
                </Reveal>
                <Reveal>
                    <TechStack />
                </Reveal>

                <Projects />

                <WorkExperience />

                <GithubContributions />

                <Reveal>
                    <Footer />
                </Reveal>
            </div>
        </main>
    );
}

export default App;
