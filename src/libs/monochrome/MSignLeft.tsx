import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSignLeft: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M7.21891,11.62543l-2-2.5c-0.29199-0.36551-0.29199-0.88449,0-1.25l2-2.5c0.19003-0.23706,0.47743-0.37501,0.78125-0.375h10c0.55196-0.00032,0.99968,0.44688,1,0.99884c0,0.00039,0,0.00077,0,0.00116v5c0.00031,0.55197-0.44689,0.99969-0.99886,1c-0.00038,0-0.00076,0-0.00114,0h-10C7.69634,12.00043,7.40895,11.86248,7.21891,11.62543z"
      ></path>
      <path
        className="uim-primary"
        d="M14.99994 5.00043V3c0-.55231-.44775-1-1-1-.55231 0-1 .44769-1 1v2.00043H14.99994zM16.99994 20h-2v-7.99957h-2V20h-2c-.55231 0-1 .44769-1 1s.44769 1 1 1h3 .0011 2.9989c.55225 0 1-.44769 1-1S17.55219 20 16.99994 20z"
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

export default MSignLeft;
