import React, { useEffect, useState } from "react";
import { getDatabase,ref,get } from "firebase/database"

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import './index.css'



const Articles = (props) => {
    const [postList,setPostList] = useState(null)

    const dispatch = useDispatch() //dispatch нужен для изм состояния
    const articlesList = useSelector(state => state.article.articles)

    useEffect(() => {
        const database = getDatabase();
        const blogRef = ref(database, "articles");
        get(blogRef).then((snapshot) => {
            if (snapshot.exists()) {
                const blog = snapshot.val();
                setPostList(Object.values(blog))
            }
        })
    },[])

    console.log(articlesList)
    return(
        <div className="main">
            <div className="main-content">
                <div className="main-content-block">
                <h1 className="main-content-header">Добавленные статьи</h1>
             
                <div className="articles-cards">
                {postList?.map((post) => (
                    <div>
                        <p>{post.id}</p>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                    </div>
                ))}
                    {/* {articlesList.map((item) => (
                    <div className="articles-cards-item" >
                        <Link className="article-cards-link" to={`articles/${item.id}`}>
                        <h1 className="article-cards-head">{item.title}</h1>
                        <p className="article-cards-title">{item.brief}</p>
                        </Link>
                       
                    </div>
                ))} */}
                </div>
                {/* <div className="preview">{article13}</div> */}
                    

                </div>
            </div>

        </div>
    )
}

export default Articles