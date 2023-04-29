import React from "react";

import './index.css'

import googlesign from '../../../images/googleSign.png'
import yandexsign from '../../../images/new-yandex-sign.svg'
import mailrusign from '../../../images/mailru-sign.png'

import captcha from '../../../images/captcha.png'

const SignIn = (props) => {
    return (
        <div className="sign-in-block">
            {/* <h1 className="sign-in-text">Войдите через сервисы:</h1>
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
            </div> */}
            <div className="sign-in-form">
            <div className="sign-in-input-container">
                <input className='sign-in-input' placeholder='Email'></input>
                </div>
            <div className="sign-in-input-container">
                <input className='sign-in-input' placeholder='Пароль'></input>
            </div>
            <div className="sign-in-form-forgot">
                <a href="#" className="sign-in-form-forgot-link">Забыли пароль?</a>
            </div>
            {/* <div className="sign-in-form-captcha">
            <img src={captcha} style={{height: '84px', width: '304px'}}></img>
            </div> */}
            <button
              className='sign-in-form-button'>Войти</button>
            </div>
           
        </div>
    )
}

export default SignIn