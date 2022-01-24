import React from 'react';
import { BtnInterface } from 'alltypes';

export const BtnSecondaryWarning = ({
  children,
  className = '',
}: BtnInterface) => {
  return (
    <button
      type="button"
      className={`cta cta--fw cta--nb cta--secondary cta--danger ${className}`}>
      {children}
    </button>
  );
};

export const BtnSecondary = ({ children, className = '' }: BtnInterface) => {
  return (
    <button type="button" className={`cta cta--secondary ${className}`}>
      {children}
    </button>
  );
};

export const BtnMain = ({
  children,
  className = '',
  onClick,
  type,
}: BtnInterface) => {
  return (
    <button
      type={type ? type : 'button'}
      className={`cta cta--main ${className}`}
      onClick={e => {
        onClick(e);
      }}>
      {children}
    </button>
  );
};
