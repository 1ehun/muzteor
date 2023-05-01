import React, { useContext, useState } from "react";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './index.css'
import './qlStyles.css'
import { ThemeContext } from "../../../App";
import { useDispatch, useSelector } from "react-redux";

const modules = {
    toolbar: [
        [{ header: [1,2,3,4,5,6, false] }],
        [{ font: []}],
        [{ size: []}],
        ["bold",'italic', 'underline', 'strike', 'blockquote'],
        [
            {list: 'ordered'},
            {list: 'bullet'},
            {indent: '-1'},
            {indent: '+1'}
        ],
        ['link','image','video'],
        [{ align: ["right", "center", "justify"] }],

    ]
}


const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font"
  ];




const AddArticles = () => {
    const dispatch = useDispatch()
    const addArticles = useSelector(state => state.article.article)
    const addHead = useDispatch(state => state.article.headArticle)
    console.log(addHead + '2211')

    const addArticle2 = (articles) => {
        dispatch({type: 'ADD_ARTICLE', payload: articles })
    }


    const [value, setValue] = useState('');
    const [article, setArticle] = useState('');
    const [articleHead, setArticleHead] = useState('')

    return (
        <div className="main">
            <div className="main-content">
                <div className="main-content-block">
                <h1 className="main-content-header">Добавить Статью</h1>
                <div className='article-input-container'>
                    <input 
                    type="text"
                    className='article-input' 
                    placeholder='Название статьи'
                    value={articleHead}
                    onChange={(e) => setArticleHead(e.target.value)}
                    ></input>
                </div>

                    <div className="container">
                        <div className="row">
                            <div className="editor">
                                <ReactQuill 
                                theme="snow" 
                                value={value} 
                                onChange={setValue} 
                                className="editor-input"
                                modules={modules}
                                formats={formats}
                                />
                            </div>
                          {/* голый текст */}
                          <div className="editor-add">
                          <button
                                className='content-button-add'
                                style={{display: 'inline-block'}}
                                onClick={() => addArticle2(value)}
                                >
                                Опубликовать
                            </button>
                            <button
                                className='content-button-add'
                                style={{display: 'inline-block'}}
                                onClick={() => setArticle(value)}
                                >
                                Предпросмотр
                            </button>
                          </div>
                            {/* <div className="preview">{value}</div>  */}
                            <div className="preview" dangerouslySetInnerHTML={{__html: article}}></div>
                            
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AddArticles