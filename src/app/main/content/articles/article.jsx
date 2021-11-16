import React from "react";

const Article = ({article}) => (
    // <div className="article__wrapper article__wrapper--active">
    <div className="article__wrapper">
        <div className="article__header">
            <span className="article__title">
                {/*{article.title}*/}
                Почтовый сервер на VPS: топ лучших программ
            </span>
            <div className="article__decor"></div>
        </div>
        <div className="article__text">
            {/*{article.content}*/}
            очтовый сервер на VPS: топ лучших про…cebook, vkontakte, odnoklassniki, twitter Почтовый сервер на VPS: топ лучших программ
        </div>
    </div>
)

export default Article;