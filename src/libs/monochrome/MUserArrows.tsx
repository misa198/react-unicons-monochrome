import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MUserArrows: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M6,16.5A3.5,3.5,0,1,1,9.5,13,3.50424,3.50424,0,0,1,6,16.5Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M8.64026 15.27179a3.452 3.452 0 0 1-5.28052 0A4.98821 4.98821 0 0 0 1 19.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1A4.98821 4.98821 0 0 0 8.64026 15.27179zM18 16.5A3.5 3.5 0 1 1 21.5 13 3.50424 3.50424 0 0 1 18 16.5z"
      ></path>
      <path
        className="uim-secondary"
        d="M20.64026,15.27179a3.452,3.452,0,0,1-5.28052,0A4.98821,4.98821,0,0,0,13,19.5a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1A4.98821,4.98821,0,0,0,20.64026,15.27179Z"
      ></path>
      <path
        className="uim-primary"
        d="M17.207,5.793l-2-2A.99989.99989,0,0,0,13.793,5.207l.293.293H9.91406l.293-.293A.99989.99989,0,0,0,8.793,3.793l-2,2a.99962.99962,0,0,0,0,1.41406l2,2A.99989.99989,0,0,0,10.207,7.793l-.293-.293h4.17188l-.293.293A.99989.99989,0,1,0,15.207,9.207l2-2A.99962.99962,0,0,0,17.207,5.793Z"
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

export default MUserArrows;
