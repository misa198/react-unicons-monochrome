import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTrafficBarrier: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21,13H3c-0.55228,0-1-0.44771-1-1V6c0-0.55228,0.44772-1,1-1h18c0.55228,0,1,0.44772,1,1v6C22,12.55229,21.55228,13,21,13z"
      ></path>
      <path
        className="uim-primary"
        d="M6 5V4c0-.55231-.44769-1-1-1S4 3.44769 4 4v1H6zM20 5V4c0-.55231-.44769-1-1-1s-1 .44769-1 1v1H20zM18 13v7c0 .55231.44769 1 1 1s1-.44769 1-1v-7H18zM4 13v7c0 .55231.44769 1 1 1s1-.44769 1-1v-7H4zM13.08 5l-8 8H3c-.5516-.00165-.99835-.4484-1-1V9.92L6.92 5H13.08zM22 6v2.08L17.08 13h-6.16l8-8H21C21.5516 5.00165 21.99835 5.4484 22 6z"
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

export default MTrafficBarrier;
