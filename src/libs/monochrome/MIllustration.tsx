import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MIllustration: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M4.7,22c-0.3,0-0.5-0.1-0.7-0.3L2.3,20C2.1,19.8,2,19.4,2,19.1L4.4,7.5c0.1-0.4,0.4-0.7,0.8-0.8l6.9-1.1c0.3-0.1,0.6,0.1,0.9,0.3l5.2,5.2c0.2,0.2,0.3,0.6,0.3,0.9l-1.1,6.9c-0.1,0.4-0.4,0.7-0.8,0.8L4.9,22C4.9,22,4.8,22,4.7,22z"
      ></path>
      <path
        className="uim-primary"
        d="M21.7 9.3l-7-7c-.4-.4-1-.4-1.4 0-.1.1-.1.2-.2.3l-1.5 3.1.5-.1c.3-.1.6.1.9.3l5.2 5.2c.2.2.3.6.3.9l-.1.5 3.1-1.5c.5-.2.7-.8.5-1.3C21.9 9.5 21.8 9.4 21.7 9.3zM12.8 11.2c-1.2-1.2-3.1-1.2-4.2 0v0c-.9.9-1.1 2.3-.6 3.4l-5.5 5.5 1.4 1.4 5.5-5.5c1.5.7 3.3.1 4-1.4C13.9 13.5 13.7 12.1 12.8 11.2z"
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

export default MIllustration;
