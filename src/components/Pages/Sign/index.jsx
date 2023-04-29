import React, { useContext, useState } from "react";
import './index.css'
import './tabs.css'
import closeIco from '../../images/close-grey.svg'
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { ThemeContext } from '../../../App';

const Sign = (props) => {

    const {theme, setTheme} = useContext(ThemeContext);

    let signContentClasses = "sign-content"

    if (theme  === true) {
        signContentClasses += ' sign-content-dark'
    }

    const [signType, setSignType] = useState(<SignIn />);
    const [buttonState, setButtonState] = useState(false)

    const changeTypeSign = (battonBool) => {
        if (battonBool === true) {
            setSignType(<SignIn />);
        } else {
            setSignType(<SignUp />);
        }
    }

    const changeButtonState = () => {
        changeTypeSign(buttonState)
        setButtonState(!buttonState)
        console.log(buttonState);
    }


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
                                    checked={!buttonState}
                                    onClick={() => changeButtonState()}></input>
                                <label for="fid-1">Вход</label>
                            </div>
                            <div className="form_toggle-item item-2">
                                <input
                                    id="fid-2"
                                    type="radio"
                                    name="radio"
                                    value="on"
                                    checked={buttonState}
                                    onClick={() => changeButtonState()}></input>
                                <label for="fid-2">Регистрация</label>
                            </div>
                        </div>
                    </div>

                </div>
                {signType}
            </div>

        </div>


    )
}



export default Sign