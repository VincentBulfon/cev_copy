import React from 'react';
import { Wrapper } from 'alltypes';

const ContentWrapper = ({ className = '', id = '', children }: Wrapper) => {
  if (id === '') {
    return (
      <section className={`content__wrapper ${className}`}>{children}</section>
    );
  } else {
    return (
      <section id={`${id}`} className={`content__wrapper ${className}`}>
        {children}
      </section>
    );
  }
};
export const ContentWrapperDiv = ({ className, children }: Wrapper) => {
  return <div className={`content__wrapper ${className}`}>{children}</div>;
};

export default ContentWrapper;
