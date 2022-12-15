import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MPostcard: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M22,20H2c-0.6,0-1-0.4-1-1c0,0,0,0,0,0V5c0-0.6,0.4-1,1-1c0,0,0,0,0,0h20c0.6,0,1,0.4,1,1c0,0,0,0,0,0v14C23,19.6,22.6,20,22,20C22,20,22,20,22,20z"
      ></path>
      <path
        className="uim-primary"
        d="M11 12H6c-.6 0-1-.4-1-1s.4-1 1-1h5c.6 0 1 .4 1 1S11.6 12 11 12zM11 16H6c-.6 0-1-.4-1-1s.4-1 1-1h5c.6 0 1 .4 1 1S11.6 16 11 16zM18 11h-1c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v1C19 10.6 18.6 11 18 11z"
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

export default MPostcard;
