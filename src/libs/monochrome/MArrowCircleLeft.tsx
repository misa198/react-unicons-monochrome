import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MArrowCircleLeft: React.FC<Props> = ({
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
        d="M11.293,7.293l-3.9997,3.99969a1.00354,1.00354,0,0,0,0,1.41468L11.293,16.707A.99989.99989,0,0,0,12.707,15.293L10.41406,13H16a1,1,0,0,0,0-2H10.41406l2.293-2.293A.99989.99989,0,0,0,11.293,7.293Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M2,12A10,10,0,1,0,12,2,10.01114,10.01114,0,0,0,2,12ZM12.707,7.293a.99963.99963,0,0,1,0,1.41406L10.41406,11H16a1,1,0,0,1,0,2H10.41406l2.293,2.293A.99989.99989,0,0,1,11.293,16.707l-3.9997-3.99969a1.00354,1.00354,0,0,1,0-1.41468L11.293,7.293A.99962.99962,0,0,1,12.707,7.293Z"
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

export default MArrowCircleLeft;
