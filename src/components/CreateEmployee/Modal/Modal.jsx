import React from 'react'

import { Link } from "react-router-dom";

import "./modal.css"

const Modal = ({ onClose }) => {
    return (
        <div className='modal' onClick={onClose}>
            <div className="modal__container">
                <div className="modal__content">
                    <div className='modal__title'>
                        <i class="fa-solid fa-user-plus modal__content-icon"></i>
                        <p className="modal__text">New Employee Created !</p>
                    </div>
                    <div className="modal__description">
                        <p>Click on the button to check employees list.</p>
                    </div>
                </div>
                
                <Link to="employees-list" className='button modal__button'>
                    Go to list
                </Link>
                
                <div className='modal__close'>
                    <i onClick={onClose} class="fa-solid fa-xmark modal__close-icon"></i>
                </div>
            </div>
        </div>
    )
}

export default Modal