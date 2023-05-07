import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import './index.css'

const Articles = (props) => {
    const dispatch = useDispatch() //dispatch нужен для изм состояния
    const articles = useSelector(state => state.article.articles)

    console.log(articles)
    return(
        <div className="main">
            <div className="main-content">
                <div className="main-content-block">
                <h1 className="main-content-header">Добавленные статьи</h1>
             
                <div className="articles-cards">{articles.map((item) => (
                    <div className="articles-cards-item" >
                        <Link className="article-cards-link" to={`articles/${item.id}`}>
                        <h1 className="article-cards-head">{item.title}</h1>
                        <p className="article-cards-title">{item.brief}</p>
                        </Link>
                       
                    </div>
                ))}</div>
                {/* <div className="preview">{article13}</div> */}
                    

                </div>
            </div>

        </div>
    )
}

export default Articles