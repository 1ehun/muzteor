import React from "react";
import chords from "../../constants/сhords";
import './index.css'
import Card from "./Card";

const Chords = (props) => {
    console.log({am:chords['am']}) //получение доступа к полям обЪекта

    return (
        <div className="main">
            <div className="main-content">
                <div className="main-content-block">
                    <h1 className="main-content-header">Аккорды</h1>
                        {Object.values(chords).map((item) => (
                            <Card 
                            key={item.name}
                            img={item.img}
                            name={item.name}
                            />
                        ))}
                    </div>
                </div>
            
        </div>
    )
}

export default Chords