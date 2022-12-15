import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCapsule: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M15.88185,3.00127c2.82507-0.00182,5.11671,2.28688,5.11853,5.11195c0.00087,1.35859-0.53875,2.66171-1.49985,3.62194l-7.76467,7.76467c-1.99853,1.99853-5.2388,1.99853-7.23733,0s-1.99853-5.2388,0-7.23733l7.76467-7.76467C13.22233,3.5375,14.52459,2.99893,15.88185,3.00127z"
      ></path>
      <path
        className="uim-primary"
        d="M11.73584,19.49983l3.88235-3.88235L8.38088,8.38016l-3.88235,3.88235c-1.99853,1.99854-1.99853,5.23878,0,7.23731S9.7373,21.49837,11.73584,19.49983z"
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

export default MCapsule;
