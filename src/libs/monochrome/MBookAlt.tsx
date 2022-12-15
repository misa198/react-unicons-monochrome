import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBookAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M14,8h-4C9.44771,8,9,7.55228,9,7s0.44771-1,1-1h4c0.55229,0,1,0.44772,1,1S14.55229,8,14,8z"
      ></path>
      <path
        className="uim-primary"
        d="M18,2H8C5.79191,2.00252,4.00252,3.79191,4,6v12c0.00252-2.20809,1.79191-3.99748,4-4h11c0.55228,0,1,0.44771,1,1V4C19.9989,2.89589,19.10411,2.0011,18,2z M14,8h-4C9.44771,8,9,7.55228,9,7s0.44771-1,1-1h4c0.55229,0,1,0.44772,1,1S14.55229,8,14,8z"
      ></path>
      <path
        className="uim-tertiary"
        d="M18,22H8c-2.20914,0-4-1.79086-4-4s1.79086-4,4-4h11c0.55228,0,1,0.44771,1,1v5C19.9989,21.10411,19.10411,21.9989,18,22z"
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

export default MBookAlt;
