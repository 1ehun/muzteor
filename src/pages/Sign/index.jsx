import React, { useContext, useState } from "react";
import './index.css'
import './tabs.css'
import closeIco from '../../components/images/close-grey.svg'
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { ThemeContext } from '../../App';

const AUTH_MODE = {
    signIn: 'signIn',
    signUp: 'signUp'
}

const Sign = (props) => {

    const {theme, setTheme} = useContext(ThemeContext);

    let signContentClasses = "sign-content"

    if (theme  === true) {
        signContentClasses += ' sign-content-dark'
    }

    const [buttonState, setButtonState] = useState(AUTH_MODE.signIn)



    return (
        <div className="sign-main">
            <div className={signContentClasses}>
                <div className="sign-content-box">
                    <div className="sign-content-close">
                        <img height='20px' src={closeIco} style={{ padding: '15px 15px 5px 0px' }} onClick={props.close}></img>
                    </div>
                    <div className="sign-tabs">

                        <div class="form_toggle">
                            <div className="form_toggle-item item-1">
                                <input
                                    id="fid-1"
                                    type="radio"
                                    name="radio"
                                    value="off"
                                    checked={buttonState === AUTH_MODE.signIn}
                                    onClick={() => setButtonState(AUTH_MODE.signIn)}></input>
                                <label for="fid-1">Вход</label>
                            </div>
                            <div className="form_toggle-item item-2">
                                <input
                                    id="fid-2"
                                    type="radio"
                                    name="radio"
                                    value="on"
                                    checked={buttonState === AUTH_MODE.signUp}
                                    onClick={() => setButtonState(AUTH_MODE.signUp)}></input>
                                <label for="fid-2">Регистрация</label>
                            </div>
                        </div>
                    </div>

                </div>
                {buttonState === AUTH_MODE.signIn ? (
                    <SignIn/> 
                    
                ) : ( 
                    <SignUp/>
                )}
            </div>

        </div>


    )
}



export default Sign