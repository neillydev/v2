import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";

const Homepage = () => {
    return (
        <ContainerBlock
        title="Vernon Neilly - Developer, Scientist, Creator"
        description="Collection displaying the works of Vernon Neilly"
        >
            <Hero />
            <About />
            <Experience />
        </ContainerBlock>
    )
};

export default Homepage;