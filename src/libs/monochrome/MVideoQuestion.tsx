import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MVideoQuestion: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M14,17H5c-1.7,0-3-1.3-3-3V8c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v6C17,15.7,15.7,17,14,17z"
      ></path>
      <path
        className="uim-tertiary"
        d="M21.9,6.6c-0.2-0.5-0.8-0.7-1.3-0.4c0,0,0,0,0,0L17,7.9c0,0,0,0.1,0,0.1v6c0,0,0,0.1,0,0.1l3.6,1.8c0.5,0.2,1.1,0,1.3-0.4C22,15.3,22,15.2,22,15V7C22,6.8,22,6.7,21.9,6.6z"
      ></path>
      <path
        className="uim-primary"
        d="M11 9.4c-1.4-.8-3.3-.3-4.1 1.1-.3.5-.1 1.1.4 1.4s1.1.1 1.4-.4C8.8 11.2 9.1 11 9.5 11c.6 0 1 .4 1 1 0 .6-.4 1-1 1-.6 0-1 .4-1 1v1c0 0 0 0 0 0 0 .6.4 1 1 1 0 0 0 0 0 0 .6 0 1-.4 1-1v-.2c.7-.2 1.2-.7 1.6-1.3C12.9 12.1 12.4 10.2 11 9.4zM10 17.2c-.1 0-.1-.1-.2-.1C9.8 17 9.8 17 9.7 17c-.3-.1-.7 0-.9.3-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3.4-.4.4-1 0-1.4C10.2 17.2 10.1 17.2 10 17.2z"
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

export default MVideoQuestion;
