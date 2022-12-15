import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTopArrowFromTop: React.FC<Props> = ({
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
        d="M16,8a.99676.99676,0,0,1-.707-.293L12,4.41406,8.707,7.707A.99989.99989,0,0,1,7.293,6.293l4-4a.99962.99962,0,0,1,1.41406,0l4,4A1,1,0,0,1,16,8Z"
      ></path>
      <path
        className="uim-primary"
        d="M12,18a.99943.99943,0,0,1-1-1V3a1,1,0,0,1,2,0V17A.99943.99943,0,0,1,12,18Z"
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

export default MTopArrowFromTop;
