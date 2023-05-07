import React from "react";
import './index.css'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const VIEW_MODE = {
    articles: 'articles',
    songs: 'songs'
}

const View = (props) => {
    const { id } = useParams()

    const articles = useSelector(state => state.article.articles)
    const songs = useSelector(state => state.addtabs.tabs)
    let typeView = props.typeView
    console.log(props.typeView)




    return (
        <div className="main">
            <div className="main-content">
                <div className="main-content-block">
                    {typeView === VIEW_MODE.articles ?
                        (
                            articles.map((item) => {
                                if (item.id == id) {
                                    return (
                                        <div>
                                            <h1 className="main-content-header">{item.title}</h1>
                                            <div className="preview" dangerouslySetInnerHTML={{ __html: item.body }} />
                                        </div>
                                    )
                                }
                                else {
                                    console.log('zalupa')
                                }

                            }
                            )
                        ) :
                        (
                            songs.map((item) => {
                                if (item.id == id) {
                                    return (
                                        <div>
                                            <h1 className="main-content-header">{item.artistName} - {item.songName}</h1>
                                            <pre>{item.body}</pre>
                                        </div>
                                    )
                                }
                                else {
                                    console.log('zalupa')
                                }

                            }
                            )
                        )
                    }




                </div>
            </div>

        </div>
    )
}

export default View