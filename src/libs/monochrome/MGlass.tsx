import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MGlass: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M15.21,22H8.79a2.9975,2.9975,0,0,1-2.98145-2.66895L4.00635,3.11035A.99956.99956,0,0,1,5,2H19a.99956.99956,0,0,1,.99365,1.11035l-1.80224,16.2207A2.9975,2.9975,0,0,1,15.21,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M18.19141,19.33105,19.45038,8H4.54962l1.259,11.33105A2.9975,2.9975,0,0,0,8.79,22H15.21A2.9975,2.9975,0,0,0,18.19141,19.33105Z"
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

export default MGlass;
