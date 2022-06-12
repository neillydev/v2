import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import About from "../components/About";

const Homepage = () => {
    return (
        <ContainerBlock
        title="Vernon Neilly - Developer, Scientist, Creator"
        description="Collection displaying the works of Vernon Neilly"
        >
            <Hero />
            <About />
        </ContainerBlock>
    )
};

export default Homepage;