import React from "react";

import googlesign from '../../../images/googleSign.png'
import yandexsign from '../../../images/new-yandex-sign.svg'
import mailrusign from '../../../images/mailru-sign.png'

import captcha from '../../../images/captcha.png'

import './index.css'

const singUp = (props) => {
    return (
        <div className="sign-in-block">
        <h1 className="sign-in-text">Зарегистрируйтесь через сервисы:</h1>
        <div className="sign-in-social-buttons">
            <div className="sign-in-social-buttons-item">
                <img className="sign-in-social-buttons-item-img" src={googlesign}></img>
            </div>
            <div  className="sign-in-social-buttons-item">
                <img className="sign-in-social-buttons-item-img" src={yandexsign}></img>
            </div>
            <div  className="sign-in-social-buttons-item">
                <img className="sign-in-social-buttons-item-img" src={mailrusign}></img>
            </div>
        </div>
        <div className="sign-in-form">
        <div className="sign-in-input-container">
            <input className='sign-in-input' placeholder='Email'></input>
            </div>
        <div className="sign-in-input-container">
            <input className='sign-in-input' placeholder='Пароль'></input>
        </div>
        <div className="sign-in-form-list">
           <ul className="sign-in-form-ul">
            <li className="sign-in-form-li"><span className="sign-in-form-span">минимум 8 символов</span></li>
            <li className="sign-in-form-li"><span className="sign-in-form-span">большая буква</span></li>
            <li className="sign-in-form-li"><span className="sign-in-form-span">маленькая буква</span></li>
            <li className="sign-in-form-li"><span className="sign-in-form-span">цифра</span></li>
           </ul>
        </div>
        <div className="sign-in-form-captcha">
        <img src={captcha} style={{height: '84px', width: '304px'}}></img>
        </div>
        <button
          className='sign-in-form-button'>Зарегистрироваться</button>
        </div>
       
    </div>
    )
}

export default singUp