import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import axios from "axios";

import Menu from "./menu/menu";
import Content from "./content/content";

import './main.css';


const Main = () => {
    return (
        <section className='main'>
            <div className='main__container'>
                <Menu/>
                <Content />
            </div>
        </section>
    )
}

Main.propTypes = {
    title: PropTypes.string,
}

Main.defaultProp = {
    title: 'List Task',
}

export default Main;