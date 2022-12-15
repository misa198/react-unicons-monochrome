import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MKeyboard: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M20,19H4a3.00328,3.00328,0,0,1-3-3V8A3.00328,3.00328,0,0,1,4,5H20a3.00328,3.00328,0,0,1,3,3v8A3.00328,3.00328,0,0,1,20,19Z"
      ></path>
      <path
        className="uim-primary"
        d="M15 15H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM5.5 15a.99075.99075 0 0 1-.92041-1.37988.90421.90421 0 0 1 .54-.54.99537.99537 0 0 1 .76025 0 .93705.93705 0 0 1 .33008.21 1.03724 1.03724 0 0 1 .21.33008A.99013.99013 0 0 1 5.5 15zM18.5 15a.99075.99075 0 0 1-.92041-1.37988A1.03011 1.03011 0 0 1 17.79 13.29a.93067.93067 0 0 1 .32959-.21.99537.99537 0 0 1 .76025 0 .90087.90087 0 0 1 .54.54A.83792.83792 0 0 1 19.5 14a.99042.99042 0 0 1-1 1zM6.5 11h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM10.5 11h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM14.5 11h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM18.5 11h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"
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

export default MKeyboard;
