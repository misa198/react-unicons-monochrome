import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MHeadphones: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M6,21H3c-0.55214,0.00014-0.99986-0.44734-1-0.99948C2,20.00035,2,20.00017,2,20v-6c-0.00014-0.55214,0.44734-0.99986,0.99948-1C2.99965,13,2.99983,13,3,13h3c1.65611,0.00181,2.99819,1.34389,3,3v2C8.99819,19.65611,7.65611,20.99819,6,21z M21,21h-3c-1.65611-0.00181-2.99819-1.34389-3-3v-2c0.00181-1.65611,1.34389-2.99819,3-3h3c0.55214-0.00014,0.99986,0.44734,1,0.99948c0,0.00017,0,0.00035,0,0.00052v6c0.00014,0.55214-0.44734,0.99986-0.99948,1C21.00035,21,21.00017,21,21,21z"
      ></path>
      <path
        className="uim-primary"
        d="M12,3C6.47717,3,2,7.47717,2,13v1c-0.00012-0.55212,0.44733-0.99988,0.99945-1C2.99963,13,2.99982,13,3,13h1c0-4.41827,3.58173-8,8-8s8,3.58173,8,8h1c0.55212-0.00012,0.99988,0.44733,1,0.99945V13C22,7.47717,17.52283,3,12,3z"
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

export default MHeadphones;
