import React, { useRef } from "react";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { NavProvider } from "../context/NavContext";

const Homepage = () => {
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <NavProvider>
            <ContainerBlock
                title="Vernon Neilly - Developer, Scientist, Creator"
                description="Collection displaying the works of Vernon Neilly"
                refs={{aboutRef, experienceRef, projectsRef, contactRef}}
            >
                <Hero />
                <About ref={aboutRef} />
                <Experience ref={experienceRef} />
                <Projects ref={projectsRef} />
                <Contact ref={contactRef} />
            </ContainerBlock>
        </NavProvider>
    )
};

export default Homepage;