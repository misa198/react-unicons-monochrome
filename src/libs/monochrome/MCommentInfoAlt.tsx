import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCommentInfoAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21,22a.99893.99893,0,0,1-.707-.293L16.58594,18H5a3.00328,3.00328,0,0,1-3-3V5A3.00328,3.00328,0,0,1,5,2H19a3.00328,3.00328,0,0,1,3,3V21a1,1,0,0,1-1,1Z"
      ></path>
      <path
        className="uim-primary"
        d="M12,14a.99974.99974,0,0,1-1-1V10a1,1,0,0,1,2,0v3A.99974.99974,0,0,1,12,14Z"
      ></path>
      <circle cx="12" cy="7" r="1" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MCommentInfoAlt;
