import Hero from "./components/Hero";
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
        </>
    );
}

export default App;
