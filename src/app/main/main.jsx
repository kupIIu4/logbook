import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import axios from "axios";

import Menu from "./menu/menu";
import Content from "./content/content";

import './main.css';


const Main = () => {

    //const [newsList, setNewsList] = useState([]);
    // useEffect(() => {
    //     axios
    //         .get("https://sweb.ru/export/turbojournal/", {
    //             "Content-Type": "application/xml; charset=utf-8"
    //         })
    //         .then(function(response) {
    //             const parser = new DOMParser();
    //             const doc = parser.parseFromString(response.data, 'text/xml');
    //             const newsList = doc.getElementsByTagName('item');
    //
    //             console.log(newsList);
    //
    //             let result = [];
    //
    //             for (let i = 0; i < newsList.length; i++) {
    //                 let item = newsList[i];
    //                 result.push({
    //                     title: item.getElementsByTagName('turbo:topic')[0].innerHTML,
    //                     content: item.getElementsByTagName('turbo:content')[0].lastChild.data
    //                 });
    //             }
    //
    //             console.log(result);
    //             setNewsList(result);
    //         })
    //         .catch(function(error) {
    //             console.log(error);
    //         });
    // }, []);

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