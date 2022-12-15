import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MRssAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M5,22a2.99975,2.99975,0,0,1-2.12109-5.12109,3.0731,3.0731,0,0,1,4.24267,0,3.00376,3.00376,0,0,1,0,4.24218H7.12109A2.98066,2.98066,0,0,1,5,22Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M11,20a.99974.99974,0,0,1-1-1,5.00588,5.00588,0,0,0-5-5,1,1,0,0,1,0-2,7.00818,7.00818,0,0,1,7,7A.99974.99974,0,0,1,11,20Z"
      ></path>
      <path
        className="uim-quaternary"
        d="M15,20a.99974.99974,0,0,1-1-1,9.01016,9.01016,0,0,0-9-9A1,1,0,0,1,5,8,11.01245,11.01245,0,0,1,16,19,.99974.99974,0,0,1,15,20Z"
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

export default MRssAlt;
