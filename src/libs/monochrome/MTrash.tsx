import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTrash: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M20,6h-4V5c-0.00183-1.65613-1.34387-2.99817-3-3h-2C9.34387,2.00183,8.00183,3.34387,8,5v1H4C3.44769,6,3,6.44769,3,7s0.44769,1,1,1h5h6c0.00018,0,0.00037,0,0.00055,0H20c0.55231,0,1-0.44769,1-1S20.55231,6,20,6z M10,6V5c0.00055-0.55206,0.44794-0.99945,1-1h2c0.55206,0.00055,0.99945,0.44794,1,1v1H10z"
      ></path>
      <path
        className="uim-primary"
        d="M5,8v11c0.00183,1.65613,1.34387,2.99817,3,3h8c1.65613-0.00183,2.99817-1.34387,3-3V8H5z"
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

export default MTrash;
