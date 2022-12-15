import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCommentAltHeart: React.FC<Props> = ({
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
        className="uim-tertiary"
        d="M21,22a.99893.99893,0,0,1-.707-.293L16.58594,18H5a3.00328,3.00328,0,0,1-3-3V5A3.00328,3.00328,0,0,1,5,2H19a3.00328,3.00328,0,0,1,3,3V21a1,1,0,0,1-1,1Z"
      ></path>
      <path
        className="uim-primary"
        d="M12,14.24219a.99676.99676,0,0,1-.707-.293L8.46484,11.12109a3.00244,3.00244,0,0,1,0-4.24218A3.06481,3.06481,0,0,1,12,6.35254a3.06675,3.06675,0,0,1,3.53613.52637,3.00332,3.00332,0,0,1-.001,4.24218L12.707,13.94922A.99676.99676,0,0,1,12,14.24219Z"
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

export default MCommentAltHeart;
