import React, { forwardRef } from "react";
import { createPortal } from 'react-dom';
import './index.css';

const modalRoot = document.getElementById('modal-root');

const Modal = forwardRef((props, ref) => {
    return createPortal(
        (
            <div className="modal">
                <div ref={ref} className="modal-content">
                    {props.value}
                </div>
            </div>
        ),
        modalRoot
    );
});

export default Modal