import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMedicalSquare: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M20,22H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20a2,2,0,0,1,2,2V20A2,2,0,0,1,20,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M14,17.78613H10a.99942.99942,0,0,1-1-1v-2H7a.99942.99942,0,0,1-1-1v-4a.99943.99943,0,0,1,1-1H9v-2a.99943.99943,0,0,1,1-1h4a.99943.99943,0,0,1,1,1v2h2a.99943.99943,0,0,1,1,1v4a.99942.99942,0,0,1-1,1H15v2A.99942.99942,0,0,1,14,17.78613Z"
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

export default MMedicalSquare;
