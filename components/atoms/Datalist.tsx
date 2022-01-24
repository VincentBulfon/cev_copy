import React from 'react';
import { DdType } from 'alltypes';

export const Dd = ({ className = '', children }: DdType) => {
  return <dd className={`dd ${className}`}>{children}</dd>;
};

export const Dt = ({ className = '', children, dash = false }: DdType) => {
  return dash ? (
    <dt className={`dt dt--dash ${className}`}>{children}</dt>
  ) : (
    <dt className={`dt ${className}`}>{children}</dt>
  );
};
