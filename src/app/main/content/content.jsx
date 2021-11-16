import React from "react";

import Breadcrumbs from "./breadcrumbs/breadcrumbs";
import Articles from "./articles/articles";

import './content.css';

const Content = () => {
    return (
        <div className='content'>
            <Breadcrumbs />
            <h1 className="content__title">Бортовой журнал</h1>
            <Articles />
        </div>
    )
}

export default Content;