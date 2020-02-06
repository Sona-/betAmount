import React from 'react';
import PropTypes from 'prop-types';


import './index.scss';

const Modal = ({ title, text, open, closeModal}) => {
    if (!open) {
        return null;
    }

    return (<div className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <p>{title}</p>
                <p onClick={closeModal}>X</p>
            </div>
            <div className="content">
                {text}
            </div>
        </div>
    </div>)

}


Modal.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    closeModal: PropTypes.func,
    open: PropTypes.bool,

};

Modal.defaultProps = {
    title: null,
    text: null,
    closeModal: null,
    open: null,
};

export default Modal;