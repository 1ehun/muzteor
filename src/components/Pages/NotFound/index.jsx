import React from "react";
import './index.css'

import notFoundImg from '../../images/not-found-img.jpg'

const NotFound = () => (

        <div className="not-found-main">
        <div className="not-found-block">
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <img style={{display: 'flex', justifyContent: 'center', borderRadius: '8px'}} src={notFoundImg}></img>
            </div>
           
        <h1 style={{fontSize: '100px',display: 'flex', justifyContent: 'center'}}>404</h1>
        <h1>Страница не найдена</h1>

        </div>
    </div>

    
    
)

export default NotFound