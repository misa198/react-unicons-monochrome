import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MArrowCircleRight: React.FC<Props> = ({
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
        d="M12.707,16.707l3.9997-3.99969a1.00354,1.00354,0,0,0,0-1.41468L12.707,7.293A.99989.99989,0,0,0,11.293,8.707L13.58594,11H8a1,1,0,0,0,0,2h5.58594l-2.293,2.293A.99989.99989,0,0,0,12.707,16.707Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M22,12A10,10,0,1,0,12,22,10.01114,10.01114,0,0,0,22,12ZM11.293,16.707a.99963.99963,0,0,1,0-1.41406L13.58594,13H8a1,1,0,0,1,0-2h5.58594L11.293,8.707A.99989.99989,0,0,1,12.707,7.293l3.9997,3.99969a1.00354,1.00354,0,0,1,0,1.41468L12.707,16.707A.99962.99962,0,0,1,11.293,16.707Z"
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

export default MArrowCircleRight;
