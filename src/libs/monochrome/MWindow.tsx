import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MWindow: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M20,23.0001H4c-1.65611-0.00181-2.99819-1.34389-3-3v-16c0.00181-1.65611,1.34389-2.99819,3-3h16c1.65611,0.00181,2.99819,1.34389,3,3v16C22.99819,21.6562,21.65611,22.99829,20,23.0001z"
      ></path>
      <circle cx="8" cy="4" r="1" className="uim-tertiary"></circle>
      <circle cx="4" cy="4" r="1" className="uim-tertiary"></circle>
      <circle cx="12" cy="4" r="1" className="uim-tertiary"></circle>
      <path
        className="uim-primary"
        d="M20,1.00012H4c-1.65686,0-3,1.34314-3,3v3h22v-3C23,2.34326,21.65686,1.00012,20,1.00012z M4,5C3.44769,5,3,4.55231,3,4s0.44769-1,1-1s1,0.44769,1,1S4.55231,5,4,5z M8,5C7.44769,5,7,4.55231,7,4s0.44769-1,1-1s1,0.44769,1,1S8.55231,5,8,5z M12,5c-0.55231,0-1-0.44769-1-1s0.44769-1,1-1s1,0.44769,1,1S12.55231,5,12,5z"
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

export default MWindow;
