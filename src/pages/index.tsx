import Head from "next/head";
import ContainerBlock from "../components/ContainerBlock";
import NavBar from "../components/NavBar";

const Homepage = () => {
    return (
        <ContainerBlock
        title="Vernon Neilly - Developer, Scientist, Creator"
        description="Collection displaying the works of Vernon Neilly"
        >
            <NavBar />
        </ContainerBlock>
    )
};

export default Homepage;