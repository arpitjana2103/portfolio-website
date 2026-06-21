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

            <Projects />

            <div className="h-20 w-full"></div>
        </>
    );
}

export default App;
