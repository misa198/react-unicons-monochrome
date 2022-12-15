import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCommentRedo: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M11,22H3a.99991.99991,0,0,1-.707-1.707l1.6748-1.67481A9.00077,9.00077,0,1,1,11,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M21,2a.99974.99974,0,0,0-1,1v.00464a4.99994,4.99994,0,1,0,.29785,7.74829.99975.99975,0,1,0-1.31543-1.50586A2.99912,2.99912,0,1,1,19.23279,5H18a1,1,0,0,0,0,2h3a.99974.99974,0,0,0,1-1V3A.99974.99974,0,0,0,21,2Z"
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

export default MCommentRedo;
