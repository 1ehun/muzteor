import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Articles = (props) => {
    const dispatch = useDispatch() //dispatch нужен для изм состояния
    const articles = useSelector(state => state.article.articles)

    const addArticle = (article) => {
        dispatch({type: 'ADD_ARTICLE', payload: article })
        dispatch({type: 'ADD_HEAD', payload: 'work' })
    }
    console.log(articles)
    return(
        <div className="main">
            <div className="main-content">
                <div className="main-content-block">
                <h1 className="main-content-header">Добавленные статьи</h1>
                <button onClick={() => addArticle(prompt())}>Добавить статью</button>
                <button onClick={() => {}}>снят</button>
             
                <div className="preview">{articles.map((item) => (
                    <div>
                        <h4>{item.title}</h4>
                        <div dangerouslySetInnerHTML={{__html: item.body}}/>
                    </div>
                ))}</div>
                {/* <div className="preview">{article13}</div> */}
                    

                </div>
            </div>

        </div>
    )
}

export default Articles