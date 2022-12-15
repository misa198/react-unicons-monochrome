import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MShield: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12,22a.9986.9986,0,0,1-.581-.18652l-3.6504-2.60743A9.01643,9.01643,0,0,1,4,11.88281v-7.457a1.00039,1.00039,0,0,1,1.20605-.97851,8.00088,8.00088,0,0,0,6.22168-1.26758.99888.99888,0,0,1,1.14454,0A7.9976,7.9976,0,0,0,18.794,3.44727,1.00039,1.00039,0,0,1,20,4.42578v7.457a9.01643,9.01643,0,0,1-3.76855,7.32324l-3.6504,2.60743A.9986.9986,0,0,1,12,22Z"
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

export default MShield;
