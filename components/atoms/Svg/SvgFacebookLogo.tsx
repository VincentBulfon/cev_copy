import React from 'react';
import { SvgTypes } from 'alltypes';

const SvgFacebookLogo = ({ width, height }: SvgTypes) => {
  return (
    <svg
      className="facebook__logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40.7 40.7">
      <path
        width={width}
        height={height}
        d="M0 0v40.7h40.7V0zm27.1 11.9h-3.3c-1 0-1.8.4-1.8 1.5v1.8h5.1l-.4 5.1H22V34h-5V20.3h-3.4v-5h3.3V12c0-3.4 1.8-5.2 5.9-5.2h4.3z"
      />
    </svg>
  );
};

export default SvgFacebookLogo;
