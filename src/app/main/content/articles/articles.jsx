import React, {useEffect, useState} from "react";

import {getArticlesXml} from "../../../../service/axiosXml";
import Article from "./article";
import Preloader from "../../../preload/preloader";

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

    // }
    // for (const articlesKey in articles) {
    //     console.log('articlesKey', articlesKey)
    //     console.log('articles', articles)
    // }
    // articles.map(item => {
    //     return (
    //         <div className='articles'>
    //             {<Article article={item} />}
    //         </div>
    //     )
    // })
}

export default Articles;