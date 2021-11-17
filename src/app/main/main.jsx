import React from "react";

import Menu from "./menu/menu";
import Content from "./content/content";

import './main.css';


const Main = () => {
    return (
        <section className='main'>
            <div className='main__container'>
                <Menu/>
                <Content/>
            </div>
        </section>
    )
}

export default Main;