import React from "react";
import Card from "../Chords/Card";
import artists from "../../constants/artists";

const Artists = (props) => {
    return (
        <div className="main">
        <div className="main-content">
            <div className="main-content-block">
                <h1 className="main-content-header">Исполнители</h1>
                    {Object.values(artists).map((item) => (
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

export default Artists