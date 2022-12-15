import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFileSearchAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M14,17.5c0-1.9,1.6-3.5,3.5-3.5c0.2,0,0.3,0,0.5,0.1V9l-7-7H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h10c0.9,0,1.7-0.4,2.3-1.1C15.4,20.8,14,19.3,14,17.5z"
      ></path>
      <path
        className="uim-primary"
        d="M18,9h-5c-1.1,0-2-0.9-2-2V2L18,9z"
      ></path>
      <path
        className="uim-quaternary"
        d="M17.5,21c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5c0.9,0,1.8,0.4,2.5,1h0c1.4,1.4,1.4,3.6,0,4.9C19.3,20.6,18.4,21,17.5,21z"
      ></path>
      <path
        className="uim-primary"
        d="M11 2v5c0 1.1.9 2 2 2h5L11 2zM21.7 20.3l-1.2-1.2c-.2.3-.3.6-.6.8-.2.2-.5.4-.8.6l1.2 1.2c.2.2.4.3.7.3.3 0 .5-.1.7-.3C22.1 21.3 22.1 20.7 21.7 20.3zM11 18H7c-.6 0-1-.4-1-1s.4-1 1-1h4c.6 0 1 .4 1 1S11.6 18 11 18zM13 14H7c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1S13.6 14 13 14zM8 10H7c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1 .4 1 1S8.6 10 8 10z"
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

export default MFileSearchAlt;
