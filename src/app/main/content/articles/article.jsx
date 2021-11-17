import React, {useState} from "react";

const Article = ({articles}) => {
    const [showBlock, setShowBlock] = useState(false);


    return (
        <div
            key={articles.id}
            className={showBlock ? 'article__wrapper article__wrapper--active' : 'article__wrapper'}
            onClick={() => setShowBlock(!showBlock)}
        >
            <div className={showBlock ? "article__header up" : "article__header down"}>
            {/*<div className="article__header">*/}
                <span className="article__title">
                    {articles.title}
                </span>
            </div>
            <div className={showBlock ? 'article__text article__text--active' : 'article__text'}>
                {articles.content}
            </div>
        </div>
    )
}

export default Article;