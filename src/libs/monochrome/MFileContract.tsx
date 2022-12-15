import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFileContract: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M13,2H7C5.3,2,4,3.3,4,5v14c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3V9L13,2z M9,8h1c0.6,0,1,0.4,1,1s-0.4,1-1,1H9c-0.6,0-1-0.4-1-1S8.4,8,9,8z M15,18h-0.9c-0.5,0-0.9-0.3-1-0.8c-0.2,0.1-0.3,0.2-0.5,0.3C12.4,17.8,12,18,11.6,18c-0.2,0-0.4,0-0.5-0.1c-0.5-0.4-0.7-1.1-0.5-1.7l0,0c-0.1,0-0.2,0.1-0.3,0.1C10.1,16.4,10,16.7,10,17c0,0.5-0.4,1-1,1c-0.5,0-1-0.4-1-0.9c0,0,0,0,0,0c0-1,0.5-2,1.4-2.5c0.9-0.6,2.1-0.5,3,0.2c0.1,0.2,0.2,0.3,0.3,0.5c0.2-0.1,0.4-0.2,0.6-0.2c0.6-0.2,1.2,0,1.6,0.5c0.1,0.1,0.2,0.3,0.3,0.5c0.5,0.1,0.9,0.6,0.9,1.1C15.9,17.6,15.5,18,15,18L15,18z"
      ></path>
      <path
        className="uim-primary"
        d="M9 8h1c.6 0 1 .4 1 1s-.4 1-1 1H9c-.6 0-1-.4-1-1S8.4 8 9 8zM15 18h-.9c-.5 0-.9-.3-1-.8-.2.1-.3.2-.5.3C12.4 17.8 12 18 11.6 18c-.2 0-.4 0-.5-.1-.5-.4-.7-1.1-.5-1.7l0 0c-.1 0-.2.1-.3.1C10.1 16.4 10 16.7 10 17c0 .5-.4 1-1 1-.5 0-1-.4-1-.9 0 0 0 0 0 0 0-1 .5-2 1.4-2.5.9-.6 2.1-.5 3 .2.1.2.2.3.3.5.2-.1.4-.2.6-.2.6-.2 1.2 0 1.6.5.1.1.2.3.3.5.5.1.9.6.9 1.1C15.9 17.6 15.5 18 15 18L15 18zM20 9h-5c-1.1 0-2-.9-2-2V2L20 9z"
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

export default MFileContract;
