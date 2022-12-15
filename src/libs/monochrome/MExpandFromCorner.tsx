import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MExpandFromCorner: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M21,10a.99974.99974,0,0,1-1-1V4H15a1,1,0,0,1,0-2h6a.99974.99974,0,0,1,1,1V9A.99974.99974,0,0,1,21,10Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M11,22H3a.99974.99974,0,0,1-1-1V13a.99974.99974,0,0,1,1-1h8a.99974.99974,0,0,1,1,1v8A.99974.99974,0,0,1,11,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M14,11a1,1,0,0,1-.707-1.707l7-7A.99989.99989,0,1,1,21.707,3.707l-7,7A.99676.99676,0,0,1,14,11Z"
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

export default MExpandFromCorner;
