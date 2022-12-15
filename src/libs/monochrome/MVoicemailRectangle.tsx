import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MVoicemailRectangle: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M20,20H4a3.00328,3.00328,0,0,1-3-3V7A3.00328,3.00328,0,0,1,4,4H20a3.00328,3.00328,0,0,1,3,3V17A3.00328,3.00328,0,0,1,20,20Z"
      ></path>
      <path
        className="uim-primary"
        d="M16,9a3.00328,3.00328,0,0,0-3,3,2.96517,2.96517,0,0,0,.18433,1h-2.3686A2.96489,2.96489,0,0,0,11,12a3,3,0,1,0-3,3h8a3,3,0,0,0,0-6ZM8,13a1,1,0,1,1,1-1A1.001,1.001,0,0,1,8,13Zm8,0a1,1,0,1,1,1-1A1.001,1.001,0,0,1,16,13Z"
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

export default MVoicemailRectangle;
