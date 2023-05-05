import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Songs = (props) => {

        const dispatch = useDispatch() //dispatch нужен для изм состояния
        const addtabs = useSelector(state => state.addtabs.tabs)
    
        const addTabs = (tabs) => {
            dispatch({type: 'ADD_TABS', payload: tabs })
        }
    
    
        return(
            <div className="main">
                <div className="main-content">
                    <div className="main-content-block">
                    <h1 className="main-content-header">Добавленные Песни</h1>
                    <div>{addtabs}</div>
                    <button onClick={() => addTabs(prompt())}>Добавить подбор</button>
                    <div className="preview">{addtabs}</div>
                    {/* <div className="preview">{article13}</div> */}
                    </div>
                </div>
    
            </div>
        )
}

export default Songs