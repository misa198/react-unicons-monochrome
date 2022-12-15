import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MAdjust: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="9" className="uim-quaternary"></circle>
      <path
        className="uim-primary"
        d="M12,22C6.47715,22,2,17.52285,2,12S6.47715,2,12,2s10,4.47715,10,10C21.99352,17.52016,17.52016,21.99352,12,22z M12,4c-4.41828,0-8,3.58172-8,8s3.58172,8,8,8s8-3.58172,8-8C19.99495,7.58382,16.41618,4.00505,12,4z M12,3c4.97056,0,9,4.02944,9,9s-4.02944,9-9,9l0,0"
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

export default MAdjust;
