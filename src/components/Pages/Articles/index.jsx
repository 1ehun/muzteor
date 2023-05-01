import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Articles = (props) => {
    const dispatch = useDispatch() //dispatch нужен для изм состояния
    const article = useSelector(state => state.article.article2.article5)
    const article13 = useSelector(state => state.article.article2)
    const articlehead = useSelector(state => state.article.article2.headArticle)
    console.log(article+'ss')
    console.log(articlehead+'hh')

    const addArticle = (article) => {
        dispatch({type: 'ADD_ARTICLE', payload: article })
        dispatch({type: 'ADD_HEAD', payload: 'work' })
    }

    const addHead = (head) => {
        dispatch({type: 'ADD_HEAD', payload: head })
    }

    return(
        <div className="main">
            <div className="main-content">
                <div className="main-content-block">
                <h1 className="main-content-header">Добавленные статьи</h1>
                <div>{article}</div>
                <button onClick={() => addArticle(prompt())}>Добавить статью</button>
                <button onClick={() => addHead(prompt())}>снят</button>
                <div className="preview" dangerouslySetInnerHTML={{__html: article}}></div>
                <div className="preview">{article}</div>
                {/* <div className="preview">{article13}</div> */}
                <div className="preview">{articlehead}</div>
                </div>
            </div>

        </div>
    )
}

export default Articles