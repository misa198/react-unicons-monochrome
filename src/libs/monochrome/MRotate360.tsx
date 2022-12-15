import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MRotate360: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M12,6C6.29883,6,2,8.14941,2,11c0,2.45361,3.18854,4.38379,7.71106,4.875l-.41809.418A.99989.99989,0,1,0,10.707,17.707l2-2a.99962.99962,0,0,0,0-1.41406l-2-2A.99989.99989,0,0,0,9.293,13.707l.11426.11426C6.04138,13.34131,4,11.99,4,11c0-1.22363,3.11621-3,8-3s8,1.77637,8,3c0,.834-1.44727,1.99512-4.21484,2.60352a.99991.99991,0,0,0,.42968,1.95312C19.83691,14.76074,22,13.05762,22,11,22,8.14941,17.70117,6,12,6Z"
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

export default MRotate360;
