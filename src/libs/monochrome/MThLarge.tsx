import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MThLarge: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M20,3H4A.99974.99974,0,0,0,3,4V20a.99974.99974,0,0,0,1,1H20a.99974.99974,0,0,0,1-1V4A.99974.99974,0,0,0,20,3ZM11,19H5V13h6Zm0-8H5V5h6Zm8,8H13V13h6Zm0-8H13V5h6Z"
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

export default MThLarge;
