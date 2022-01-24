import React from 'react';

const SvgHeadertriangle = () => {
  return (
    <svg
      className="hero__triangle"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="8 3 320 320">
      <defs>
        <filter
          id="a"
          width="339.283"
          height="334.723"
          x="0"
          y="0"
          filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="3" />
          <feGaussianBlur result="blur" stdDeviation="3" />
          <feFlood flood-opacity=".161" />
          <feComposite in2="blur" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g filter="url(#a)">
        <path
          fill="#004546"
          d="M7.004 6.001L328.29 228.16 7.004 322.724z"
          data-name="Path 20"
        />
      </g>
    </svg>
  );
};

export default SvgHeadertriangle;
