import React from "react";

import './index.css'

const Modal = (props) => {
    return (
        <div className="modal">
            <div className="modal-content">
                {props.value}
            </div>
        </div>
    )
}

export default Modal