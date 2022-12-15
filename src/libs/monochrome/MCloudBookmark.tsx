import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCloudBookmark: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18.42926,7.23242A6.99612,6.99612,0,0,0,5.06079,9.12256,3.994,3.994,0,0,0,6,17H17a4.98638,4.98638,0,0,0,1.42926-9.76758Z"
      ></path>
      <polygon
        className="uim-primary"
        points="9.5 20 9.504 19.997 12 18.323 14.496 19.997 14.5 20 14.5 12 9.5 12 9.5 20"
      ></polygon>
      <path
        className="uim-primary"
        d="M14.5,21a.99842.99842,0,0,1-.61377-.21045l-1.88574-1.26269-1.939,1.30029A1.00228,1.00228,0,0,1,8.5,20V12a1,1,0,0,1,1-1h5a1,1,0,0,1,1,1v8a.99954.99954,0,0,1-1,1Zm-4-8v5.126l.94287-.6333a1.00188,1.00188,0,0,1,1.11426,0L13.5,18.125V13Z"
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

export default MCloudBookmark;
