import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const Homepage = () => {
    return (
        <ContainerBlock
        title="Vernon Neilly - Developer, Scientist, Creator"
        description="Collection displaying the works of Vernon Neilly"
        >
            <Hero />
            <About />
            <Experience />
            <Projects />
        </ContainerBlock>
    )
};

export default Homepage;