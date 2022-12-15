import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCreateDashboard: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <rect
        width="8"
        height="8"
        x="3"
        y="13"
        className="uim-tertiary"
        rx="1"
      ></rect>
      <rect
        width="8"
        height="8"
        x="3"
        y="3"
        className="uim-tertiary"
        rx="1"
      ></rect>
      <rect
        width="8"
        height="8"
        x="13"
        y="3"
        className="uim-tertiary"
        rx="1"
      ></rect>
      <path
        className="uim-primary"
        d="M20,16H18V14a1,1,0,0,0-2,0v2H14a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V18h2a1,1,0,0,0,0-2Z"
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

export default MCreateDashboard;
