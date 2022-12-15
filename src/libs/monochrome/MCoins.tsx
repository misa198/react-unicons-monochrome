import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCoins: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M5,4h6c1.10457,0,2,0.89543,2,2l0,0c0,1.10457-0.89543,2-2,2H5C3.89543,8,3,7.10457,3,6l0,0C3,4.89543,3.89543,4,5,4z"
      ></path>
      <path
        className="uim-tertiary"
        d="M5,8h6c1.10457,0,2,0.89543,2,2l0,0c0,1.10457-0.89543,2-2,2H5c-1.10457,0-2-0.89543-2-2l0,0C3,8.89543,3.89543,8,5,8z"
      ></path>
      <path
        className="uim-primary"
        d="M5,12h6c1.10457,0,2,0.89543,2,2l0,0c0,1.10457-0.89543,2-2,2H5c-1.10457,0-2-0.89543-2-2l0,0C3,12.89543,3.89543,12,5,12z"
      ></path>
      <path
        className="uim-tertiary"
        d="M5,16h6c1.10457,0,2,0.89543,2,2l0,0c0,1.10457-0.89543,2-2,2H5c-1.10457,0-2-0.89543-2-2l0,0C3,16.89543,3.89543,16,5,16z"
      ></path>
      <path
        className="uim-primary"
        d="M19,16h-6c-0.35207,0.00189-0.69727,0.09765-1,0.2774c0.95137,0.54327,1.28219,1.75492,0.73892,2.70629C12.56308,19.2916,12.30792,19.54676,12,19.7226c0.30273,0.17975,0.64793,0.27551,1,0.2774h6c1.10457,0,2-0.89543,2-2S20.10457,16,19,16z"
      ></path>
      <path
        className="uim-tertiary"
        d="M19,12h-6c-0.35207,0.00189-0.69727,0.09765-1,0.2774c0.95137,0.54327,1.28219,1.75492,0.73892,2.70628C12.56308,15.2916,12.30792,15.54676,12,15.7226c0.30273,0.17975,0.64793,0.27551,1,0.2774h6c1.10457,0,2-0.89543,2-2S20.10457,12,19,12z"
      ></path>
      <path
        className="uim-primary"
        d="M19,8h-6c-0.35207,0.00189-0.69727,0.09765-1,0.2774c0.95137,0.54327,1.28219,1.75492,0.73892,2.70628C12.56308,11.2916,12.30792,11.54676,12,11.7226c0.30273,0.17975,0.64793,0.27551,1,0.2774h6c1.10457,0,2-0.89543,2-2S20.10457,8,19,8z"
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

export default MCoins;
