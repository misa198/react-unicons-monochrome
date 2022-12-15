import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MEditAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M9.24268,18.0003H5a.99974.99974,0,0,1-1-1V12.75713a.99928.99928,0,0,1,.293-.707l9.75976-9.75684a.99965.99965,0,0,1,1.41407,0L19.707,6.53252a.99962.99962,0,0,1,0,1.41406L9.94971,17.70733A1.00014,1.00014,0,0,1,9.24268,18.0003Z"
      ></path>
      <path
        className="uim-primary"
        d="M15.4668 2.29326a.99965.99965 0 0 0-1.41407 0L10.51318 5.83172l5.65387 5.6538.00629-.004L19.707 7.94658a.99962.99962 0 0 0 0-1.41406zM21 22.0003H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z"
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

export default MEditAlt;
