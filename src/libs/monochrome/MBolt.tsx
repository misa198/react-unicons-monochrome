import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBolt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M8.04492,22a.99922.99922,0,0,1-.96533-1.25879L8.88574,14H5.04541a1.00007,1.00007,0,0,1-.96582-1.25879l2.67969-10A.99954.99954,0,0,1,7.7251,2h7a1.00008,1.00008,0,0,1,.96582,1.25879L14.42041,8h4.53418a1,1,0,0,1,.73975,1.67285l-10.90918,12A.99947.99947,0,0,1,8.04492,22Z"
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

export default MBolt;
