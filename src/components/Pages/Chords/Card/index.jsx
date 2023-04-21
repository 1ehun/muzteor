import React from "react"

import './index.css'


const Card = (props) => {
    return (
        <div>
            <div className="card">
                <div className="card-img-container">
                    <img className="card-img" src={props.img} alt={props.name}/>
                </div>
                <div className="card-description">
                    <div className="card-header">
                        <p>{props.name}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
