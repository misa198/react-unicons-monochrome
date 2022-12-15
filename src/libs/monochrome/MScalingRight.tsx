import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MScalingRight: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M21,8c-0.55214,0.00014-0.99986-0.44734-1-0.99948C20,7.00035,20,7.00017,20,7V4h-3c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h4c0.55214-0.00014,0.99986,0.44734,1,0.99948C22,2.99965,22,2.99983,22,3v4c0.00014,0.55214-0.44734,0.99986-0.99948,1C21.00035,8,21.00017,8,21,8z M7,22H3c-0.55214,0.00014-0.99986-0.44734-1-0.99948C2,21.00035,2,21.00017,2,21v-4c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v3h3c0.55228,0,1,0.44772,1,1S7.55228,22,7,22z"
      ></path>
      <path
        className="uim-tertiary"
        d="M14.82861,15.82812c-0.26527,0.0003-0.51971-0.10515-0.707-0.293L8.46436,9.87891c-0.39048-0.39048-0.39049-1.02358,0-1.41406c0.39048-0.39048,1.02358-0.39049,1.41406-0.00001l5.65722,5.65625c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421c-0.18748,0.18742-0.4417,0.29273-0.70679,0.29279L14.82861,15.82812z"
      ></path>
      <path
        className="uim-primary"
        d="M10.58594 12.00006l-8.29291 8.29291c-.18744.1875-.29279.44171-.29285.70679C2.00012 21.55206 2.44769 21.99988 3 22c.26526.00031.51971-.10516.70703-.29303l8.29303-8.29303L10.58594 12.00006zM21.70703 2.28033c-.39398-.38696-1.0271-.38129-1.414.01263L12 10.586l1.41406 1.41394 8.29297-8.29297c.00421-.00415.00848-.00836.01263-.01263C22.10663 3.30035 22.10095 2.6673 21.70703 2.28033z"
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

export default MScalingRight;
