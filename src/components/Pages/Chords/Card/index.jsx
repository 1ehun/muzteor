import React from "react"

import './index.css'

import am from '../chordImg/am.png'

const Card = (props) => {
    return (
        <div>
            <div className="card">
                <div className="card-img-container">
                    <img src={am} className="card-img"></img>
                </div>
                <div className="card-description">
                    <div className="card-header">
                        <p>Ля минор</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
