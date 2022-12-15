import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MShutter: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M15,13.24L15,13.24l-7.62,7.62l0,0c2.34609,1.2419,5.09532,1.48002,7.62,0.66V13.24z M9,10.76L9,10.76l7.62-7.62l0,0C14.27391,1.8981,11.52468,1.65998,9,2.48V10.76z"
      ></path>
      <path
        className="uim-primary"
        d="M10.76,9h10.77c-0.47527-1.53723-1.31989-2.93462-2.46-4.07c-0.72391-0.71864-1.5535-1.32229-2.46-1.79L10.76,9z M13.24,15H2.46c0.78802,2.53459,2.56559,4.64389,4.93,5.85L13.24,15z"
      ></path>
      <path
        className="uim-secondary"
        d="M13.24,9L13.24,9l7.62,7.62l0,0c1.2419-2.34609,1.48002-5.09532,0.66-7.62H13.24z M10.76,15L10.76,15L3.14,7.38l0,0C1.8981,9.72609,1.65998,12.47532,2.48,15H10.76z"
      ></path>
      <path
        className="uim-tertiary"
        d="M15,10.76L15,10.76v10.77l0,0c1.53723-0.47527,2.93462-1.31989,4.07-2.46c0.71509-0.72461,1.31535-1.55417,1.78-2.46L15,10.76z M9,13.24L9,13.24V2.47l0,0C6.46733,3.26037,4.3568,5.03235,3.14,7.39L9,13.24z"
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

export default MShutter;
