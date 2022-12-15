import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFileRedoAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19,8.99969l-7-7H6a3,3,0,0,0-3,3v14a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3Z"
      ></path>
      <path
        className="uim-primary"
        d="M19 8.99969H14a2 2 0 0 1-2-2v-5zM20 18.25391H17.75a1 1 0 0 1 0-2H19v-1.25a1 1 0 1 1 2 0v2.25A.99943.99943 0 0 1 20 18.25391z"
      ></path>
      <path
        className="uim-primary"
        d="M17 22.00391a4 4 0 1 1 3.87109-4.9961.99952.99952 0 1 1-1.9375.49219 2.00238 2.00238 0 1 0-.61035 2 1.00016 1.00016 0 1 1 1.31446 1.50781A4.01779 4.01779 0 0 1 17 22.00391zM10 17.99609H8a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2zM13 13.99609H8a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2zM9 9.99609H8a1 1 0 0 1 0-2H9a1 1 0 0 1 0 2z"
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

export default MFileRedoAlt;
