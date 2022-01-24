import React from 'react';

import { ConfirmType } from 'alltypes';

const ConfirmButton = ({
  cancel,
  validate,
  className = '',
  validateAction,
  cancelAction,
}: ConfirmType) => {
  return (
    <div className={`form__button__wrapper ${className}`}>
      <button
        type="button"
        className="form__button form__button--secondary form__button--half"
        onClick={() => {
          if (cancelAction) {
            cancelAction();
          }
        }}>
        <svg
          className="svg svg--left"
          xmlns="http://www.w3.org/2000/svg"
          fill="#004546"
          viewBox="0 0 26 26">
          <path
            stroke="null"
            d="M13 0a13 13 0 100 26 13 13 0 000-26zm0 2a11 11 0 110 22 11 11 0 010-22zM9.2 7.9L7.8 9.2l3.8 3.8-3.8 3.8 1.4 1.4 3.8-3.8 3.8 3.8 1.4-1.4-3.8-3.8 3.8-3.8-1.4-1.4-3.8 3.8-3.8-3.8z"
          />
        </svg>
        <span className="input__value">{cancel}</span>
      </button>

      <button
        type="button"
        className="form__button form__button--main form__button--half"
        onClick={() => {
          if (validateAction) {
            validateAction();
          }
        }}>
        <svg
          className="svg svg--left"
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFFFFF"
          viewBox="0 0 26 26">
          <path d="M13 0a13 13 0 100 26A13 13 0 0025.3 9l-1.6 1.5A11 11 0 0113 24 11 11 0 012 13a11 11 0 0118.6-8L22 3.8A12.7 12.7 0 0013 0zm11.3 4.3L13 15.6l-4.3-4.3-1.4 1.4 5 5 .7.7.7-.7 12-12-1.4-1.4z"></path>
        </svg>
        <span className="input__value">{validate}</span>
      </button>
    </div>
  );
};

export default ConfirmButton;
