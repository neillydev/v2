import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { NavProvider } from "../context/NavContext";

const Homepage = () => {

    return (
        <NavProvider>
            <ContainerBlock
                title="Vernon Neilly - Developer, Scientist, Creator"
                description="Collection displaying the works of Vernon Neilly"
            >
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </ContainerBlock>
        </NavProvider>
    )
};

export default Homepage;