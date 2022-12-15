import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MLamp: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M19,13H5c-0.55215,0.00008-0.99983-0.44745-0.99991-0.99961c-0.00001-0.07305,0.00798-0.14588,0.02384-0.21719l2-9C6.1255,2.32563,6.53129,2.00002,7,2h10c0.46871,0.00002,0.8745,0.32563,0.97607,0.7832l2,9c0.11987,0.53898-0.21989,1.07309-0.75888,1.19296C19.14588,12.99202,19.07305,13.00001,19,13z"
      ></path>
      <path
        className="uim-primary"
        d="M16,13v2c0,0.55231,0.44769,1,1,1s1-0.44769,1-1v-2H16z"
      ></path>
      <path
        className="uim-tertiary"
        d="M15,14c-0.00018-0.33447,0.02246-0.66797,0.05927-1H8.94073C8.97754,13.33203,9.00018,13.66553,9,14c0.00745,2.35687-0.91742,4.62109-2.57275,6.29883c-0.18414,0.18707-0.28729,0.43909-0.28723,0.7016C6.1402,21.55261,6.58795,22.00012,7.14014,22h9.71973c0.26251,0.00006,0.51453-0.10309,0.7016-0.28723c0.39355-0.38733,0.39862-1.02039,0.01129-1.41394C15.91742,18.62109,14.99255,16.35687,15,14z"
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

export default MLamp;
