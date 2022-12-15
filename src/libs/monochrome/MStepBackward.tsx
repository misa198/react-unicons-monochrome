import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MStepBackward: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18.6665,21.001a3.26257,3.26257,0,0,1-1.67968-.46973l-9.3335-5.581a3.45884,3.45884,0,0,1,0-5.9004l9.3335-5.581a3.23873,3.23873,0,0,1,3.29394-.03809A3.38613,3.38613,0,0,1,22,6.419v11.1621a3.38613,3.38613,0,0,1-1.71924,2.98829A3.26142,3.26142,0,0,1,18.6665,21.001ZM8.1665,9.9082h0Z"
      ></path>
      <path
        className="uim-primary"
        d="M5,21a3.00328,3.00328,0,0,1-3-3V6A3,3,0,0,1,8,6V18A3.00328,3.00328,0,0,1,5,21Z"
      ></path>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MStepBackward;
