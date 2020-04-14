import React from "react";

import Navbar from "../../Common/Components/Navbar"
import HeroAnimation from "../../Common/Components/HeroAnimation"
import Services from "../../Common/Components/Services";
import Projects from "../../Common/Components/Projects";
import Contact from "../../Common/Components/Contact";
import Footer from "../../Common/Components/Footer";

import "../Styles/Home.scss"

export default function Home(){

    return [
        <React.Fragment>
            <Navbar />
            <HeroAnimation />
            <Services />
            <Projects />
            <Contact />
            <Footer />
        </React.Fragment>
    ]

}