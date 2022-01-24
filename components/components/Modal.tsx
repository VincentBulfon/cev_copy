import React from 'react';

import { ModalTypes } from 'alltypes/ModalTypes';

const Modal = ({ children, handleClose }: ModalTypes) => {
  return (
    <div className="modal">
      <div className="buttonContainer">
        <label htmlFor="close" className="modal__label" tabIndex={1}>
          Fermer
        </label>
        {handleClose && (
          <button tabIndex={-1} className="modal__btn" id="fermer"></button>
        )}
      </div>
      <div className="childContainer">{children}</div>
    </div>
  );
};

export default Modal;
