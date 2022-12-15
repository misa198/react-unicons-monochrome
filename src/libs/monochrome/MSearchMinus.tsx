import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSearchMinus: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M11,4c-3.9,0-7,3.1-7,7s3.1,7,7,7s7-3.1,7-7C18,7.1,14.9,4,11,4z"
      ></path>
      <path
        className="uim-primary"
        d="M21.7 20.3L18 16.6c-.4.5-.9 1-1.4 1.4l3.7 3.7c.4.4 1 .4 1.4 0C22.1 21.3 22.1 20.7 21.7 20.3zM15 12H7c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1S15.6 12 15 12z"
      ></path>
      <path
        className="uim-tertiary"
        d="M11,2c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,6,16,2,11,2z M11,18c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7C18,14.9,14.9,18,11,18z"
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

export default MSearchMinus;
