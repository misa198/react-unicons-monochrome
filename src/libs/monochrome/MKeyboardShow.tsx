import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MKeyboardShow: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M4,3h16c1.1,0,2,0.9,2,2v8c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V5C2,3.9,2.9,3,4,3z"
      ></path>
      <path
        className="uim-primary"
        d="M14,12h-4c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1S14.6,12,14,12z"
      ></path>
      <circle cx="6" cy="7" r="1" className="uim-primary"></circle>
      <circle cx="10" cy="7" r="1" className="uim-primary"></circle>
      <circle cx="14" cy="7" r="1" className="uim-primary"></circle>
      <circle cx="18" cy="7" r="1" className="uim-primary"></circle>
      <circle cx="18" cy="11" r="1" className="uim-primary"></circle>
      <circle cx="6" cy="11" r="1" className="uim-primary"></circle>
      <path
        className="uim-primary"
        d="M14,22c-0.3,0-0.5-0.1-0.7-0.3L12,20.4l-1.3,1.3c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l2-2c0.4-0.4,1-0.4,1.4,0c0,0,0,0,0,0l2,2c0.4,0.4,0.4,1,0,1.4C14.5,21.9,14.3,22,14,22z"
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

export default MKeyboardShow;
