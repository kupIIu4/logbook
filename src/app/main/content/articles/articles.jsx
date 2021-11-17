import React, {useEffect, useState} from "react";

import {getArticlesXml} from "../../../../service/axiosXml";
import Article from "./article";
import Preloader from "../../../preloader/preloader";

import './articles.css'

const Articles = () => {
    const [articles, setArticles] = useState('');

    useEffect(() => {
        async function fetchData() {
            const articlesList = await getArticlesXml();
            setArticles(articlesList);
        }

        fetchData();
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