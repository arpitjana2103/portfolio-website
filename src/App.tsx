import GithubContributions from "./components/GithubContributions";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Reveal from "./components/Reveal";
import TechStack from "./components/TechStack";
import WorkExperience from "./components/WorkExperience";

function App() {
    return (
        <main>
            <Reveal>
                <Hero />
            </Reveal>
            <Reveal>
                <TechStack />
            </Reveal>

            <Projects />

            <WorkExperience />

            <GithubContributions />

            <div className="h-20 w-full"></div>
        </main>
    );
}

export default App;
