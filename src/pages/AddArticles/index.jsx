import React, { useContext, useState } from "react";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './index.css'
import './qlStyles.css'
import { ThemeContext } from "../../App";
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
    
    const [body, setBody] = useState('');
    const [title, setTitle] = useState('')

    const dispatch = useDispatch()


    const addArticle = () => {
        dispatch({
            type: 'ADD_ARTICLE',
             payload: {
                title,
                body
             } 
            })
    }



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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    ></input>
                </div>

                    <div className="container">
                        <div className="row">
                            <div className="editor">
                                <ReactQuill 
                                theme="snow" 
                                value={body} 
                                onChange={setBody} 
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
                                onClick={addArticle}
                                >
                                Опубликовать
                            </button>
                            <button
                                className='content-button-add'
                                style={{display: 'inline-block'}}
                                onClick={() => {}}
                                >
                                Предпросмотр
                            </button>
                          </div>
                            {/* <div className="preview">{value}</div>  */}
                            {/* <div className="preview" dangerouslySetInnerHTML={{__html: articles}}></div> */}
                            
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AddArticles