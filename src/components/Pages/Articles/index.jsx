import React, { useState } from "react";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './index.css'

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
    ]
}

const Articles = () => {


    const [value, setValue] = useState('');

    return (
        <div className="main">
            <div className="main-content">
                <div className="main-content-block">


                    <div className="container">

                        <div className="row">

                            <div className="editor">
                                <ReactQuill 
                                theme="snow" 
                                value={value} 
                                onChange={setValue} 
                                className="editor-input"
                                modules={modules}
                                />
                            </div>
                          {/* голый текст */}
                            <div className="preview">{value}</div> 
                            <div dangerouslySetInnerHTML={{__html: value}}></div>
                            
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Articles