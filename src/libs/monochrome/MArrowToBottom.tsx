import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MArrowToBottom: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M12,18a.99676.99676,0,0,1-.707-.293l-4-4A.99989.99989,0,0,1,8.707,12.293L12,15.58594l3.293-3.293A.99989.99989,0,0,1,16.707,13.707l-4,4A.99676.99676,0,0,1,12,18Z"
      ></path>
      <path
        className="uim-primary"
        d="M12,18a.99974.99974,0,0,1-1-1V3a1,1,0,0,1,2,0V17A.99974.99974,0,0,1,12,18Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M19,22H5a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Z"
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

export default MArrowToBottom;
