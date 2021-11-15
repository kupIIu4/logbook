import React from "react";

import Breadcrumbs from "./breadcrumbs/breadcrumbs";
import News from "./news/news";

import './content.css';

const Content = () => (
    <div className='content'>
        <Breadcrumbs />
        <h1 className="content__title">Бортовой журнал</h1>
        <News />
    </div>
)

export default Content;