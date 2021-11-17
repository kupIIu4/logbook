import React, {useEffect, useState} from "react";

import {getArticlesXml} from "../../../services/axiosXml";
import Article from "./article";
import Preloader from "../../../preloader/preloader";

import './articles.css'

const Articles = () => {
    const [articles, setArticles] = useState('');

    useEffect(() => {
        getArticlesXml().then( (articles) => setArticles(articles));
    }, []);

    return (
        <div className='articles'>
            {articles.length
                ? articles.map(article => <Article articles={article}/>)
                : <Preloader text='Пожалуйста подождите, загрузка ...' className='preloader articles__preloader'/>
            }
        </div>
    )
}

export default Articles;