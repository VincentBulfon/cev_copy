import React from 'react';
import { Title as TitleType } from 'alltypes';

const Title = ({ className = '', content, children, id }: TitleType) => {
  return (
    <div className={`content__wrapper__title ${className}`}>
      {children}
      {id ? (
        <h3 id={id} className="title__h3">
          {content}
        </h3>
      ) : (
        <h3 className="title__h3">{content}</h3>
      )}
    </div>
  );
};

export default Title;
