import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MYinYang: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12,22c2.76142,0,5-2.23858,5-5s-2.23858-5-5-5S7,9.76142,7,7s2.23858-5,5-5c5.52285,0,10,4.47715,10,10S17.52285,22,12,22z"
      ></path>
      <circle cx="12" cy="16.5" r="1" className="uim-tertiary"></circle>
      <path
        className="uim-primary"
        d="M12,12c-2.76141,0-5-2.23859-5-5s2.23859-5,5-5C6.47717,2,2,6.47717,2,12s4.47717,10,10,10c2.76141,0,5-2.23859,5-5S14.76141,12,12,12z M12,17.5c-0.55231,0-1-0.44769-1-1s0.44769-1,1-1s1,0.44769,1,1S12.55231,17.5,12,17.5z"
      ></path>
      <circle cx="12" cy="7.5" r="1" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MYinYang;
