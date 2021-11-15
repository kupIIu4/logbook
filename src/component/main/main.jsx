import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import axios from "axios";

import Menu from "./menu/menu";
import Content from "./content/content";

import './main.css';



const Main = () => {
    useEffect(() => {
        axios
            .get("https://sweb.ru/export/turbojournal/", {
                "Content-Type": "application/xml; charset=utf-8"
            })
            .then(function(response) {
                console.log(response.data);
                console.log('hook done');

            })
            .catch(function(error) {
                console.log(error);
            });
    }, []);

    return (
        <section className='main'>
            <div className='main__container'>
                <Menu/>
                <Content/>
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