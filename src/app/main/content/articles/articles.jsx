import React from "react";

import {getArticlesXml} from "../../../../service/axiosXml";
import Article from "./article";

import './articles.css'

const testfd = () => {
    const articles = getArticlesXml()
    console.log(articles)
    return articles
}

const Articles =  () => {
    // const articles = await getArticlesXml()
    const articles = testfd()
    setTimeout(
        () => console.log('setTimeout',articles),
        3000
    );
    console.log(articles.response);

    console.log(articles)
    return (
        <div className='articles'>
            {<Article  />}
            {<Article  />}
            {<Article  />}
            {<Article  />}
            {<Article  />}
            {<Article  />}
        </div>
    )
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