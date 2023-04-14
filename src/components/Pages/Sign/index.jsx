import React, { useState } from "react";
import './index.css'
import './tabs.css'
import closeIco from '../../images/close-grey.svg'
import SignIn from "./SingIn";
import SignUp from "./SignUp";







const Sign = (props) => {

    const [signType,setSignType] = useState(<SignIn/>);
    const [buttonState, setButtonState] = useState(false)

    const changeTypeSign = (battonBool) => {
            if (battonBool === true) {
                setSignType(<SignIn/>);
            } else {
                setSignType(<SignUp/>);
            }   
    }

    const changeButtonState = () => {
        changeTypeSign(buttonState)
        setButtonState(!buttonState)
        console.log(buttonState);
    } 


    return (
        <div className="sign-main">
            <div className="sing-content">
                <div className="sign-content-box">
                <div className="sing-content-close">
                    <img height='20px' src={closeIco} style={{padding: '15px 15px 5px 0px'}}></img>
                </div>
                <div className="sing-tabs">

                    {/* <button 
                    className="tablink tablink-active" 
                    onClick={addSignForm}
                    disabled={buttonState}
                    >Вход
                    </button>

                    <button 
                    className="tablink" 
                    onClick={() => changeTypeSign()}
                    >Регистрация
                    </button> */}
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