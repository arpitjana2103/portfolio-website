import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Reveal from "./components/Reveal";
import TechStack from "./components/TechStack";

function App() {
    return (
        <>
            <Reveal>
                <Hero />
            </Reveal>

            <Reveal>
                <TechStack />
            </Reveal>

            <Reveal>
                <Projects />
            </Reveal>
        </>
    );
}

export default App;
