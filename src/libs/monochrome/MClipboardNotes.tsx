import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MClipboardNotes: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M17,22.0001H7a3.00328,3.00328,0,0,1-3-3v-12a3.00328,3.00328,0,0,1,3-3H17a3.00328,3.00328,0,0,1,3,3v12A3.00328,3.00328,0,0,1,17,22.0001Z"
      ></path>
      <path
        className="uim-primary"
        d="M15 8.0001H9a.99973.99973 0 0 1-1-1v-2a3.00328 3.00328 0 0 1 3-3h2a3.00328 3.00328 0 0 1 3 3v2A.99973.99973 0 0 1 15 8.0001zM15 12.0001H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM13 16.0001H9a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"
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

export default MClipboardNotes;
