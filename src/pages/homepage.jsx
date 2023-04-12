import React from "react";
import { Intro } from "../components/intro/intro.component";
import { About } from "../components/About/about.component";

export const Homepage =()=>{
    // const handleClickScroll = (name) => {
    //     const element = document.getElementsByName(name);
    //     if(element){
    //         element.scrollIntoView({behavior:'smooth'});
    //     }
    // }
    return(
    <div className="portfolio">
        <Intro/>
        <About/>
    </div>
    )
    }