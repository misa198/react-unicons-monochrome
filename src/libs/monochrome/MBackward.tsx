import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBackward: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M11.334,18.52051c-0.46872-0.00091-0.9289-0.12555-1.334-0.36133l-6.667-3.84961c-1.27554-0.73689-1.7122-2.3683-0.9753-3.64384c0.23397-0.40499,0.57031-0.74134,0.9753-0.9753l0,0L10,5.84082c1.2753-0.73647,2.90615-0.29966,3.64262,0.97564C13.87665,7.22172,13.99991,7.68143,14,8.14941v7.70118C13.99673,17.32226,12.80567,18.51508,11.334,18.52051z"
      ></path>
      <path
        className="uim-primary"
        d="M21.64337,6.82153c-0.73584-1.27582-2.36658-1.71356-3.6424-0.97778L14,8.14972v7.70056l4.00098,2.30597c0.4046,0.23511,0.86407,0.35944,1.33203,0.36035c1.47101-0.00464,2.66235-1.19598,2.66699-2.66699V8.15039C21.99939,7.68384,21.8764,7.22565,21.64337,6.82153z"
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

export default MBackward;
