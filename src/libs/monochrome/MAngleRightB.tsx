import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MAngleRightB: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M9.17188,18.65674a1,1,0,0,1-.707-1.707L13.41406,12,8.46484,7.05029A.99989.99989,0,0,1,9.87891,5.63623L15.53516,11.293a.99964.99964,0,0,1,0,1.41406L9.87891,18.36377A.9968.9968,0,0,1,9.17188,18.65674Z"
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

export default MAngleRightB;
