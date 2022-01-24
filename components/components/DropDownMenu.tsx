import React, { useEffect, useState } from 'react';
import { ModalTypes } from 'alltypes';

const ModalContainer = ({ children, isVisible, className }: ModalTypes) => {
  const [render, setRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setRender(true);
    }
  }, [isVisible]);

  const onAnimEnd = () => {
    if (!isVisible) {
      setRender(false);
    }
  };

  return render ? (
    <div
      className={`${className} ${
        isVisible
          ? 'course__options__drop--fadeIn'
          : 'course__options__drop--fadeOut'
      }`}
      onAnimationEnd={onAnimEnd}>
      {children}
    </div>
  ) : null;
};

export default ModalContainer;
