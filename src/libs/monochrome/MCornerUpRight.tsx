import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCornerUpRight: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M19.60834,8.01056a1.00351,1.00351,0,0,0-.21607-1.08948L14.76416,2.293A.99989.99989,0,0,0,13.3501,3.707l2.92138,2.92139h-7.957a4.00458,4.00458,0,0,0-4,4V21a1,1,0,0,0,2,0V10.62842a2.002,2.002,0,0,1,2-2h7.95716L13.3501,11.55029a.99989.99989,0,1,0,1.41406,1.41407l4.62811-4.62861A.99927.99927,0,0,0,19.60834,8.01056Z"
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

export default MCornerUpRight;
