import React from 'react';
import { StatusEnum } from 'operations/__generated__/globalTypes';

const DisplayPaymentStatus = (props: { value: boolean | StatusEnum }) => {
  const value = props.value;

  if (typeof value == 'boolean') {
    if (value == true) {
      return (
        <>
          {' '}
          <span className="sro">Oui</span>
          <svg
            className="svg svg--good"
            xmlns="http://www.w3.org/2000/svg"
            fill="#004546"
            viewBox="0 0 26 26">
            <path d="M13 0a13 13 0 100 26A13 13 0 0025.3 9l-1.6 1.5A11 11 0 0113 24 11 11 0 012 13a11 11 0 0118.6-8L22 3.8A12.7 12.7 0 0013 0zm11.3 4.3L13 15.6l-4.3-4.3-1.4 1.4 5 5 .7.7.7-.7 12-12-1.4-1.4z" />
          </svg>{' '}
        </>
      );
    } else {
      return (
        <>
          <span className="sro">Non payée</span>
          <svg
            className="svg svg--danger"
            xmlns="http://www.w3.org/2000/svg"
            fill="#004546"
            viewBox="0 0 26 26">
            <path
              stroke="null"
              d="M13 0a13 13 0 100 26 13 13 0 000-26zm0 2a11 11 0 110 22 11 11 0 010-22zM9.2 7.9L7.8 9.2l3.8 3.8-3.8 3.8 1.4 1.4 3.8-3.8 3.8 3.8 1.4-1.4-3.8-3.8 3.8-3.8-1.4-1.4-3.8 3.8-3.8-3.8z"
            />
          </svg>
        </>
      );
    }
  } else {
    switch (value) {
      case StatusEnum.NOTAPPLICABLE:
        return (
          <>
            <span className="sro">Non applicable</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="svg svg--not">
              <path d="M16 .1A15.9 15.9 0 1016 32 15.9 15.9 0 0016 0zm0 2.5a13.4 13.4 0 0110.2 22L7.5 5.7c2.3-1.9 5.3-3 8.5-3zM5.8 7.3l18.7 19.1A13.4 13.4 0 015.8 7.3zm0 0" />
            </svg>
          </>
        );

      case StatusEnum.PAID:
        return (
          <>
            <span className="sro">Payée</span>
            <svg
              className="svg svg--good"
              xmlns="http://www.w3.org/2000/svg"
              fill="#004546"
              viewBox="0 0 26 26">
              <path d="M13 0a13 13 0 100 26A13 13 0 0025.3 9l-1.6 1.5A11 11 0 0113 24 11 11 0 012 13a11 11 0 0118.6-8L22 3.8A12.7 12.7 0 0013 0zm11.3 4.3L13 15.6l-4.3-4.3-1.4 1.4 5 5 .7.7.7-.7 12-12-1.4-1.4z" />
            </svg>
          </>
        );

      case StatusEnum.UNPAID:
        return (
          <>
            <span className="sro">Non payée</span>
            <svg
              className="svg svg--danger"
              xmlns="http://www.w3.org/2000/svg"
              fill="#004546"
              viewBox="0 0 26 26">
              <path
                stroke="null"
                d="M13 0a13 13 0 100 26 13 13 0 000-26zm0 2a11 11 0 110 22 11 11 0 010-22zM9.2 7.9L7.8 9.2l3.8 3.8-3.8 3.8 1.4 1.4 3.8-3.8 3.8 3.8 1.4-1.4-3.8-3.8 3.8-3.8-1.4-1.4-3.8 3.8-3.8-3.8z"
              />
            </svg>
          </>
        );
      default:
        return (
          <>
            <span className="sro">Non applicable</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="svg svg--not">
              <path d="M16 .1A15.9 15.9 0 1016 32 15.9 15.9 0 0016 0zm0 2.5a13.4 13.4 0 0110.2 22L7.5 5.7c2.3-1.9 5.3-3 8.5-3zM5.8 7.3l18.7 19.1A13.4 13.4 0 015.8 7.3zm0 0" />
            </svg>
          </>
        );
    }
  }
  return <p>Quelque chose s'est mal passé.</p>;
};

export default DisplayPaymentStatus;
