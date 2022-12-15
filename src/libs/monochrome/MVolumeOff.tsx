import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MVolumeOff: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M16.5,20a.99926.99926,0,0,1-.62451-.21875L11.14941,16H7.5a.99974.99974,0,0,1-1-1V9a.99974.99974,0,0,1,1-1h3.64941l4.72608-3.78125A1.00014,1.00014,0,0,1,17.5,5V19a.99992.99992,0,0,1-1,1Z"
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

export default MVolumeOff;
