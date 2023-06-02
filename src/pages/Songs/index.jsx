import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Songs = (props) => {

        const dispatch = useDispatch() //dispatch нужен для изм состояния
        const addtabs = useSelector(state => state.addtabs.tabs)
        console.log(addtabs)
    

    
        return(
            <div className="main">
                <div className="main-content">
                    <div className="main-content-block">
                    <h1 className="main-content-header">Добавленные Песни</h1>
                    <div className="preview">{addtabs.map((item) => (
                    <div className="articles-cards-item">
                         <Link className="article-cards-link" to={`songs/${item.id}`}>
                        <h1 className="article-cards-head">{item.artistName}</h1>
                        <p className="article-cards-title">{item.songName}</p>
                         </Link>
                    </div>
                ))}</div>
                    {/* <div className="preview">{article13}</div> */}
                    </div>
                </div>
    
            </div>
        )
}

export default Songs