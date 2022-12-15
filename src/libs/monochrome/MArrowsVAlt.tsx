import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MArrowsVAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M14.5,6.5a.99676.99676,0,0,1-.707-.293L12,4.41406,10.207,6.207A.99989.99989,0,0,1,8.793,4.793l2.5-2.5a.99962.99962,0,0,1,1.41406,0l2.5,2.5A1,1,0,0,1,14.5,6.5Z"
      ></path>
      <path
        className="uim-primary"
        d="M12 11a.99943.99943 0 0 1-1-1V3a1 1 0 0 1 2 0v7A.99943.99943 0 0 1 12 11zM12 22a.99676.99676 0 0 1-.707-.293l-2.5-2.5A.99989.99989 0 0 1 10.207 17.793L12 19.58594l1.793-1.793A.99989.99989 0 0 1 15.207 19.207l-2.5 2.5A.99676.99676 0 0 1 12 22z"
      ></path>
      <path
        className="uim-primary"
        d="M12,22a.99943.99943,0,0,1-1-1V14a1,1,0,0,1,2,0v7A.99943.99943,0,0,1,12,22Z"
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

export default MArrowsVAlt;
