import React from "react";

import './index.css'
import Card from "./Card";

const Chords = (props) => {
    return (
        <div className="main">
            <div className="main-content">
                <div className="main-content-block">
                    <h1 className="main-content-header">Аккорды</h1>
                        <Card/>
                    </div>
                </div>
            
        </div>
    )
}

export default Chords