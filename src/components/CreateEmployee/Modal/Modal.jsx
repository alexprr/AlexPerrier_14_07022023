import React from 'react'

const Modal = ({ onClose }) => {
    return (
        <div className='modal'>
            <div className="modal__container">
                <div className="modal__content">
                    <p className="modal__text">New Employee created !</p>
                </div>
                <div>
                    <i onClick={onClose} className="uil uil-multiply modal__icon"></i>
                </div>
            </div>
        </div>
    )
}

export default Modal